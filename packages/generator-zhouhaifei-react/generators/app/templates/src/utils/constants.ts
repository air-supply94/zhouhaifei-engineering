const routerPrefix = '/zhouhaifei-react-demo/';
export const SYSTEM_CONFIG = {
  loginPage: `${routerPrefix}login`,
  homePage: `${routerPrefix}home`,
  storageTokenKey: 'storageTokenKey',
  authorization: 'Basic xxxxxxxxx',
  routerPrefix,
} as const;
