## 换行符只支持 lf

## cli 配置说明。参考 config/config.js

- otherConfig。为需要重写的 webpack 配置。内部调用 webpack-merge 合并
- less
  - theme: 为 less 重写变量。参考 antd 主题配置
  - moduleInclude: 为哪些模块需要开启 cssModule。数组形式的 loader 的 test 用法。默认除了 src 下的 global.less、node_modules 不开启，其它全部开启
- babel
  - options: babel-loader 额外的 options
  - include: babel-loader 额外的 include
