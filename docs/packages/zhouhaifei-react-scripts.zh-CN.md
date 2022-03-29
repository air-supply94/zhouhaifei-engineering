---
title: 项目打包工具
order: 4
---

## cli 外放配置说明

- 在项目目录下建立 config/config.js

```
// utils为内部的一些配置。返回一个对象，支持下面参数
module.exports = function(utils) {
  return {};
};
```

### less

- 类型: `Object`
- 默认值：`null`
- 详细：

> 示例：

```js
{
  // 重写less变量
  theme: {},
  // 额外需要开启 cssModule
  moduleInclude: []
}
```

### babel

- 类型: `Object`
- 默认值：`null`
- 详细：

> 示例：

```js
{
  // babel-loader 额外的 options
  options: {},
  // babel-loader 额外的 include
  include: []
}
```

### otherConfig

- 类型: `Object`
- 默认值：`null`
- 重写的 webpack 配置。内部调用 webpack-merge 合并
- 详细：
  > 示例：

```js
{
  externals: {
  }
}
```

## 环境变量

- 在项目配置相关文件。参考 dotenv。下面为常用

```
.env.development
.env.production
.env.development.local
.env.production.local
```

- 具体说明
  - `PUBLIC_URL`
    - 静态资源前缀
    - 建议通过 cross-env 配合 shell 脚本打包。不要写死
  - `IMAGE_INLINE_SIZE_LIMIT`
    - 图片 inline 大小(字节)
  - `PORT`
    - 启动端口
  - `SPLIT_CHUNK_MIN_SIZE`
    - 分包的最小尺寸
  - `MOCK`
    - 是否启用 mock 数据功能
    - YES 开启
  - SERVICE_WORKER
    - 是否打包生成 serviceWorker 文件。注册请自写
    - YES 开启
  - `SOURCEMAP`
    - sourcemap 方式
  - `ALLOW_ESLINT`
    - 是否开启 eslint
    - NO 不开启
  - `IS_ANALYZE`
    - 是否开启打包大小分析
    - YES 开启
  - `IS_COMPRESS`
    - 是否开启 gzip 和 br 压缩
    - YES 开启

## `mock 数据`

- 配置环境变量(.env.development 文件): MOCK=YES
- 约定式 \_mock 文件(src 目录下\_mock 目录下面的所有 js 文件)
- 编写。目录如下 src/pages/aaa/\_mock/api.js

```
module.exports = {
  // 支持值为 Object 和 Array
  'GET /api/users': { users: [1, 2] },

  // GET 可忽略
  '/api/users/1': { id: 1 },

  // 支持自定义函数，API 参考 express@4
  'POST /api/users/create': (req, res) => {
    // 添加跨域请求头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end('ok');
  },
}
```

- 引入[mock.js](http://mockjs.com/examples.html)

```
const mockjs = require('mockjs');

module.exports = {
  // 使用 mockjs 等三方库。mock的接口可以直接调用
  'GET /api/tags': mockjs.mock({
    'list|100': [{ name: '@city', 'value|1-100': 50, 'type|0-2': 1 }],
  }),
};
```

## 具体使用

```
// 启动
zhouhaifei-react-scripts start

// 打包
zhouhaifei-react-scripts build
```
