/**
 * The following is modified based on source found in
 * https://github.com/facebook/create-react-app
 *
 * MIT Licensed
 * Copyright (c) 2015-present, Facebook, Inc.
 * https://github.com/facebook/create-react-app/blob/master/LICENSE
 */

import { exec } from 'child_process';
import type { ExecOptions } from 'child_process';
import open from 'open';
import spawn from 'cross-spawn';
import chalk from 'chalk';
import url from 'url';

export function openBrowser(url: string, opt: string | true): void {
  const browser = typeof opt === 'string' ? opt : process.env.BROWSER || '';
  if (browser.toLowerCase().endsWith('.js')) {
    executeNodeScript(browser, url);
  } else if (browser.toLowerCase() !== 'none') {
    const browserArgs = process.env.BROWSER_ARGS ? process.env.BROWSER_ARGS.split(' ') : [];
    startBrowserProcess(browser, browserArgs, url);
  }
}

function executeNodeScript(scriptPath: string, url: string) {
  const extraArgs = process.argv.slice(2);
  const child = spawn(process.execPath, [scriptPath, ...extraArgs, url], { stdio: 'inherit' });
  child.on('close', (code) => {
    if (code !== 0) {
      console.error(chalk.red(`\nThe script specified as BROWSER environment variable failed.\n\n${chalk.cyan(scriptPath)} exited with code ${code}.`), { error: null });
    }
  });
}

const supportedChromiumBrowsers = ['Google Chrome Canary', 'Google Chrome Dev', 'Google Chrome Beta', 'Google Chrome', 'Microsoft Edge', 'Brave Browser', 'Vivaldi', 'Chromium'];

async function startBrowserProcess(browser: string | undefined, browserArgs: string[], openUrl: string) {
  const preferredOSXBrowser = browser === 'google chrome' ? 'Google Chrome' : browser;
  const shouldTryOpenChromeWithAppleScript = process.platform === 'darwin' && (!preferredOSXBrowser || supportedChromiumBrowsers.includes(preferredOSXBrowser));

  if (shouldTryOpenChromeWithAppleScript) {
    try {
      const ps = await execAsync('ps cax');
      const openedBrowser = preferredOSXBrowser && ps.includes(preferredOSXBrowser) ? preferredOSXBrowser : supportedChromiumBrowsers.find((b) => ps.includes(b));
      if (openedBrowser) {
        await execAsync(`osascript openChrome.applescript "${encodeURI(openUrl)}" "${openedBrowser}"`, { cwd: url.fileURLToPath(new URL('../', import.meta.url)) });
        return true;
      }
    } catch (err) {
      // Ignore errors
    }
  }

  if (process.platform === 'darwin' && browser === 'open') {
    browser = undefined;
  }

  try {
    const options: open.Options = browser
      ? {
          app: {
            name: browser,
            arguments: browserArgs,
          },
        }
      : {};
    open(openUrl, options).catch(() => {});
    return true;
  } catch (err) {
    return false;
  }
}

function execAsync(command: string, options?: ExecOptions): Promise<string> {
  return new Promise((resolve, reject) => {
    exec(command, options, (error, stdout) => {
      if (error) {
        reject(error);
      } else {
        resolve(stdout.toString());
      }
    });
  });
}
