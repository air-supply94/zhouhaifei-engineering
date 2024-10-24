{
  "type": "module",
  "scripts": {
    "build": "zhouhaifei-bundler-cli build",
    "commit": "cz",
    "husky-commitlint": "commitlint -e",
    "lint": "npm run prettier && npm run lint:js && npm run lint:style",
    "dev": "zhouhaifei-bundler-cli dev --open",
    "lint:js": "biome check --write --unsafe .",
    "lint:style": "stylelint --allow-empty-input --cache --quiet --fix \"{**/*,*}.{less,css,scss,sass}\"",
    "prepare": "npx husky@9.0.11",
    "prettier": "prettier --cache --cache-strategy metadata -c --write \"{**/*,*}.{less,css,scss,sass,yaml,md,html,json}\""
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
    "antd": "5.19.3",
    "axios": "1.7.2",
    "dayjs": "1.11.11",
    "mobx": "6.13.1",
    "mobx-react": "9.1.1",
    "nprogress": "0.2.0",
    "qs": "6.12.3",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-router-dom": "6.25.1",
    "underscore": "1.13.6"
  },
  "devDependencies": {
    "@faker-js/faker": "9.0.3",
    "@types/nprogress": "0.2.2",
    "@types/qs": "6.9.15",
    "@types/react": "^18.2.21",
    "@types/react-dom": "^18.2.7",
    "@types/underscore": "1.11.15",
    "@zhouhaifei/bundler-cli": "3.4.5",
    "@zhouhaifei/code-style": "3.4.5",
    "cross-env": "7.0.3",
    "typescript": "5.4.5"
  },
  "engines": {
    "node": ">=20.0.0"
  }
}