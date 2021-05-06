## 对 babel 配置的封装.UI 主要是 antd、antd-mobile

```
// 建立babel.config.js文件

// 对antd按需引入
module.exports = require('zhouhaifei-babel-config')(true);

// 对antd-mobile按需引入
module.exports = require('zhouhaifei-babel-config')(false);

```
