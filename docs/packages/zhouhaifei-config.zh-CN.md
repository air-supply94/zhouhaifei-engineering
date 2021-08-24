---
title: 常用配置
order: 3
---

## babel 配置(建立 babel.config.js 文件)

- 对 antd 按需引入

```js
module.exports = require('zhouhaifei-babel-config')(true);
```

- 对 antd-mobile 按需引入

```js
module.exports = require('zhouhaifei-babel-config')(false);
```

## postcss 配置(建立 postcss.config.js 文件)

- rem 单位。配合 amfe-flexible 更佳
- 不需要 rem 布局填 0

```js
module.exports = require('zhouhaifei-config').postcss(0);
```
