## 对 babel 配置的封装.UI 主要是 antd、antd-mobile

```
// 建立babel.config.js文件

// 对antd按需引入
module.exports = require('zhouhaifei-config').babel(true);

// 对antd-mobile按需引入
module.exports = require('zhouhaifei-config').babel(false);

```

## 对 postcss 配置的封装

```
// 建立postcss.config.js文件
// 移动端---rem 单位。配合 amfe-flexible 更佳
// web端不需要填0
module.exports = require('zhouhaifei-config').postcss(0);

```
