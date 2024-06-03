{
  "scripts": {
    "build": "zhouhaifei-bundler-cli build",
    "commit": "cz",
    "husky-commitlint": "commitlint -e",
    "lint": "npm run prettier && npm run lint:js && npm run lint:style",
    "dev": "zhouhaifei-bundler-cli dev --open",
    "lint:js": "cross-env TIMING=1 eslint --fix --cache --quiet --ext .js,.jsx,.ts,.tsx .",
    "lint:style": "stylelint --cache --quiet --fix \"{**/*,*}.{less,css,scss,sass}\"",
    "prepare": "pnpx husky@9.0.11",
    "prettier": "prettier --cache --cache-strategy metadata -c --write \"{**/*,*}.{js,jsx,ts,tsx,less,css,scss,sass,yaml,md,html,json}\""
  },
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  },
  "resolutions": {
    "@types/react": "^18.2.21",
    "@types/react-dom": "^18.2.7"
  },
  "dependencies": {
    "antd": "5.16.2",
    "axios": "0.28.0",
    "dayjs": "1.11.10",
    "mobx": "6.12.3",
    "mobx-react": "9.1.1",
    "nprogress": "0.2.0",
    "qs": "6.11.2",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-router-dom": "6.22.1",
    "underscore": "1.13.6"
  },
  "devDependencies": {
    "@types/mockjs": "1.0.10",
    "@types/nprogress": "0.2.2",
    "@types/qs": "6.9.5",
    "@types/react": "^18.2.21",
    "@types/react-dom": "^18.2.7",
    "@types/underscore": "1.11.15",
    "@zhouhaifei/bundler-cli": "3.1.16",
    "@zhouhaifei/code-style": "3.1.16",
    "cross-env": "7.0.3",
    "mockjs": "1.1.0",
    "typescript": "5.4.5"
  },
  "engines": {
    "node": "20.11.1"
  }
}