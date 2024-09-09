import chalk from 'chalk';
import Generator from 'yeoman-generator';
import yosay from 'yosay';

export default class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(`Welcome to the slick ${chalk.red('generator-zhouhaifei-react')} generator!`));
  }

  writing() {
    this.copyTemplate(this.templatePath(''), this.destinationPath(''));

    this.copyTemplate(this.templatePath('.**'), this.destinationPath(''));
    this.copyTemplate(this.templatePath('.husky'), this.destinationPath('.husky'));

    const tplList = [
      'biome.json',
      '.editorconfig',
      '.env.development',
      '.env.production',
      '.gitignore',
      '.npmrc',
      '.prettierignore',
      '.stylelintignore',
      'bundlerConfig.ts',
      'commitlint.config.cjs',
      'package.json',
      'prettier.config.cjs',
      'stylelint.config.cjs',
      'tsconfig.json',
      'tailwind.config.ts',
      '.nvmrc',
    ];

    for (let i = 0; i < tplList.length; i++) {
      this.moveDestination(`${tplList[i]}.tpl`, tplList[i]);
    }
  }
}
