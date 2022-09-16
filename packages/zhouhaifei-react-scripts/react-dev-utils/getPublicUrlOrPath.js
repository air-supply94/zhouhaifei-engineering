'use strict';

const { URL } = require('url');

module.exports = function getPublicUrlOrPath(isEnvDevelopment, homepage, envPublicUrl) {
  const stubDomain = 'https://create-react-app.dev';

  if (envPublicUrl) {
    // ensure last slash exists
    envPublicUrl = envPublicUrl.endsWith('/')
      ? envPublicUrl
      : `${envPublicUrl}/`;

    const validPublicUrl = new URL(envPublicUrl, stubDomain);

    return isEnvDevelopment
      ? envPublicUrl.startsWith('.')
        ? '/'
        : validPublicUrl.pathname
      : envPublicUrl;
  } else if (homepage) {
    // strip last slash if exists
    homepage = homepage.endsWith('/') ? homepage : `${homepage}/`;

    // validate if `homepage` is a URL or path like and use just pathname
    const validHomepagePathname = new URL(homepage).pathname;
    return isEnvDevelopment
      ? homepage.startsWith('.')
        ? '/'
        : validHomepagePathname
      : homepage.startsWith('.')
        ? homepage
        : validHomepagePathname;
  } else {
    return '/';
  }
};

