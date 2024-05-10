{
  "scripts": {
    "build": "zhouhaifei-bundler-cli build",
    "commit": "cz",
    "dev": "zhouhaifei-bundler-cli dev --open",
    "lint:js": "eslint --fix --cache --quiet --ext .js,.jsx,.ts,.tsx .",
    "lint:style": "stylelint --cache --quiet --fix \"src/**/*.{less,css,scss,sass}\"",
    "prepare": "npx husky@9.0.11",
    "prettier": "prettier --cache --cache-strategy metadata -c --write \"**/*.{less,css,scss,sass,yaml,md,html,json}\""
  },
  "lint-staged": {
    "**/*.{less,css,scss,sass}": [
      "prettier --cache --cache-strategy metadata -c --write",
      "stylelint --cache --quiet --fix",
      "git add ."
    ],
    "**/*.{js,jsx,ts,tsx}": [
      "eslint --cache --quiet --fix",
      "git add ."
    ],
    "**/*.{yaml,md,html,json}": [
      "prettier --cache --cache-strategy metadata -c --write",
      "git add ."
    ]
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
    "@zhouhaifei/bundler-cli": "3.1.11",
    "@zhouhaifei/code-style": "3.1.11",
    "cross-env": "7.0.3",
    "mockjs": "1.1.0",
    "typescript": "4.2.4"
  },
  "volta": {
    "node": "20.10.0",
    "yarn": "1.22.21"
  }
}