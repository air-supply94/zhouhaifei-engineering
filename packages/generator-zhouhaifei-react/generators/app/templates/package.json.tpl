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
    "prepare": "husky",
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
    "antd": "5.24.1",
    "axios": "1.7.9",
    "dayjs": "1.11.13",
    "mobx": "6.13.6",
    "mobx-react": "9.2.0",
    "nprogress": "0.2.0",
    "qs": "6.14.0",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-router-dom": "6.29.0",
    "underscore": "1.13.7"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "4.0.8",
    "tailwindcss": "4.0.8",
    "@faker-js/faker": "9.5.0",
    "@types/nprogress": "0.2.3",
    "@types/qs": "6.9.18",
    "@types/react": "^18.2.21",
    "@types/react-dom": "^18.2.7",
    "@types/underscore": "1.13.0",
    "@zhouhaifei/bundler-cli": "3.7.1",
    "@zhouhaifei/code-style": "3.7.1",
    "axios-mock-adapter": "2.1.0",
    "cross-env": "7.0.3",
    "typescript": "5.7.3"
  },
  "packageManager": "yarn@1.22.22+sha512.a6b2f7906b721bba3d67d4aff083df04dad64c399707841b7acf00f6b133b7ac24255f2652fa22ae3534329dc6180534e98d17432037ff6fd140556e2bb3137e",
  "engines": {
    "node": ">=20.0.0"
  }
}
