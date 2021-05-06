## cli 外放配置说明。

- 在项目目录下建立 config/config.js

```
// utils为内部的一些配置
module.exports = function(utils) {
  return {
    less: {
      // 重写less变量
      theme: {},

      // 额外需要开启 cssModule
      moduleInclude: [],
    },
    babel: {
      // babel-loader 额外的 options
      options: [],

      // babel-loader 额外的 include
      include: [],
    },

    // 重写的 webpack 配置。内部调用 webpack-merge 合并
    otherConfig: {},
  };
};
```

## 环境变量

1. 在项目配置相关文件。参考 dotenv。下面为常用

```
.env.development
.env.production
.env.development.local
.env.production.local
```

2. 通过 cross-env。./node_modules/.bin/cross-env 你的 key=你的 value npm 脚本

3. 具体说明

- PUBLIC_URL
  - 静态资源前缀
  - 建议通过 cross-env 配合 shell 脚本打包
- IMAGE_INLINE_SIZE_LIMIT
  - 图片 inline 大小
- PORT
  - 启动端口
- SPLIT_CHUNK_MIN_SIZE
  - 分包的最小尺寸
- MOCK
  - 是否启用 mock 数据功能
  - YES 开启
- SERVICE_WORKER
  - 是否打包生成 serviceWorker 文件。注册请自写
  - YES 开启
- SOURCEMAP
  - sourcemap 方式
- ALLOW_ESLINT
  - 是否开启 eslint
  - NO 不开启
- IS_ANALYZE
  - 是否开启打包大小分析
  - YES 开启
- USE_ESBUILD
  - 是否使用 esbuild-webpack-plugin
  - YES 开启
- REM_UNIT
  - 移动端 rem 单位。一般为 75。
  - 配合 amfe-flexible 更佳
  - 有单位则开启 postcss-px2rem。否则不开启
- IS_COMPRESS
  - 是否开启 gzip 和 br 压缩
  - YES 开启

## 具体使用

```
// start
zhouhaifei-react-scripts start

// 打包
zhouhaifei-react-scripts build
```
