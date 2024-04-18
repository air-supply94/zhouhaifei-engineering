{
  "engines": {
    "node": ">=16.20",
    "yarn": ">=1.22.21"
  },
  "volta": {
    "node": "20.10.0",
    "yarn": "1.22.21"
  },
  "dependencies": {
    "dayjs": "1.11.10",
    "underscore": "1.13.6",
    "nprogress": "0.2.0",
    "antd": "5.16.2",
    "axios": "0.28.0",
    "mobx": "6.12.3",
    "mobx-react": "9.1.1",
    "qs": "6.11.2",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-router-dom": "6.22.1"
  },
  "devDependencies": {
    "@types/underscore": "1.11.15",
    "typescript": "4.2.4",
    "@types/nprogress": "0.2.2",
    "@types/mockjs": "1.0.10",
    "@types/qs": "6.9.5",
    "@types/react": "^18.2.21",
    "@types/react-dom": "^18.2.7",
    "cross-env": "7.0.3",
    "mockjs": "1.1.0",
    "@zhouhaifei/bundler-cli": "3.1.10",
    "@zhouhaifei/code-style": "3.1.10"
  },
  "husky": {
    "hooks": {
      "pre-commit": "git add . && lint-staged",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS && validate-commit-msg"
    }
  },
  "lint-staged": {
    "**/*.less": [
      "npm run lint:style-less",
      "git add ."
    ],
    "**/*.{js,jsx,ts,tsx}": [
      "npm run lint:js",
      "git add ."
    ],
    "**/*.{css,md,html,json}": [
      "prettier --write",
      "git add ."
    ]
  },
  "resolutions": {
    "@types/react": "^18.2.21",
    "@types/react-dom": "^18.2.7"
  },
  "scripts": {
    "dev": "zhouhaifei-bundler-cli dev --open",
    "build": "zhouhaifei-bundler-cli build",
    "lint-staged": "lint-staged --allow-empty",
    "lint:style-less": "stylelint --cache --quiet --fix \"src/**/*.less\" --syntax less",
    "lint:js": "eslint --fix --cache --quiet --ext .js,.jsx,.ts,.tsx .",
    "prettier": "prettier --cache --cache-strategy metadata -c --write \"**/*.{css,md,html,json}\""
  }
}