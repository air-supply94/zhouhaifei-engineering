import assert from 'assert';
import getGitRepoInfo from 'git-repo-info';
import 'zx/globals';
import fs from 'fs';
import path from 'path';

const cwd = fs.realpathSync(process.cwd());
const publishRegistry = 'https://registry.npmjs.org/';
const buildCmd = 'build';
const testCmd = 'test';

interface PackageJsonInfo {
  name?: string;
  private?: boolean;
  version?: string;
}

interface PublishPackagesInfo {
  filename: string;
  packagePath: string;
  packageJson: PackageJsonInfo;
}

async function updateGeneratorPackages(version: string) {
  const data = [
    {
      generatorTplPath: path.resolve(cwd, 'packages/generator-zhouhaifei-react/generators/app/templates/package.json.tpl'),
      updateDependencies: [],
      updateDevDependencies: [
        '@zhouhaifei/bundler-cli',
        '@zhouhaifei/code-style',
      ],
    },
  ];

  await Promise.all(data.map(async(item) => {
    const oldDataStr = await fs.promises.readFile(item.generatorTplPath, 'utf8');
    const oldDataJson = JSON.parse(oldDataStr);

    item.updateDependencies.forEach((value) => {
      oldDataJson.dependencies[value] = version;
    });

    item.updateDevDependencies.forEach((value) => {
      oldDataJson.devDependencies[value] = version;
    });

    await fs.promises.writeFile(item.generatorTplPath, JSON.stringify(oldDataJson, null, 2));
  }));
}

async function getPublishPackagesInfo(): Promise<PublishPackagesInfo[]> {
  const packagesPath = path.resolve(cwd, 'packages');
  const files = await fs.promises.readdir(packagesPath);
  const result: PublishPackagesInfo[] = [];
  for (let i = 0; i < files.length; i++) {
    const packagePath = path.resolve(packagesPath, files[i]);
    const packageJsonPath = path.resolve(packagePath, 'package.json');
    if (fs.existsSync(packageJsonPath)) {
      const content: PackageJsonInfo = require(packageJsonPath);
      if (content.private !== true) {
        result.push({
          filename: files[i],
          packagePath,
          packageJson: content,
        });
      }
    }
  }

  return result;
}

function getNpmTag(version: string) {
  const checkVersionReg = /^\d+\.\d+\.\d+(-(alpha|beta|rc)\.\d+)?$/;
  if (!checkVersionReg.test(version)) {
    const error = '版本不符合规范';
    throw new Error(error);
  }

  if (/alpha|beta|rc/.test(version)) {
    return 'next';
  }

  return 'latest';
}

(async() => {
  const publishPackagesInfo = await getPublishPackagesInfo();
  const checkedPackage = publishPackagesInfo[0].packageJson;

  console.log(`publish packages: \r\n\r\n${publishPackagesInfo.map((item) => item.packageJson.name)
    .join('\r\n')}\r\n\r\n`);

  const { branch } = getGitRepoInfo();
  console.log(`branch: ${branch}`);

  // check git status
  console.log('check git status');
  const isGitClean = (await $`git status --porcelain`).stdout.trim().length;
  assert(!isGitClean, 'git status is not clean');

  // check git remote update
  console.log('check git remote update');
  await $`git fetch`;
  const gitStatus = (await $`git status --short --branch`).stdout.trim();
  assert(!gitStatus.includes('behind'), 'git status is behind remote');

  // check npm registry
  console.log('check npm registry');
  const registry = (await $`npm config get registry`).stdout.trim();
  assert(registry === publishRegistry, `npm registry is not ${publishRegistry}`);

  // check npm ownership
  console.log('check npm ownership');
  const whoami = (await $`npm whoami`).stdout.trim();
  const owners = (await $`npm owner ls ${checkedPackage.name}`).stdout
    .trim()
    .split('\n')
    .map((line) => {
      return line.split(' ')[0];
    });
  assert(owners.includes(whoami), `${checkedPackage.name} is not owned by ${whoami}`);

  // build packages
  console.log('build packages');
  await $`cd ${cwd}; npm run ${buildCmd}`;

  // test packages
  console.log('test packages');
  await $`cd ${cwd}; npm run ${testCmd}`;

  // bump version
  console.log('bump version');

  const version = (await question(
    `Input release version (current: ${checkedPackage.version}): `
  )).trim();
  const tag = getNpmTag(version);

  console.log('update generator packages');
  await updateGeneratorPackages(version);

  await Promise.all(publishPackagesInfo.map(async(item) => {
    (await $`cd ${item.packagePath} ; npm version ${version} --no-git-tag-version`);
  }));

  (await $`cd ${cwd} ; pnpm publish --no-git-checks -r --tag ${tag} --publish-branch ${branch}`);

  // commit
  console.log('commit');
  await $`git commit --all --message "chore(*): release ${version}" --no-verify`;

  // git tag
  console.log(`git tag is ${version}`);
  await $`git tag v${version}`;

  // git push
  console.log('git push');
  await $`git push origin ${branch} --tags`;
})();
