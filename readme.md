## 项目模版生成器

### node

- 建议 >= 16.13.0

### 生成

```bash
mkdir 目录名称
cd 目录名称
npx -p yo@3.1.0 -p generator-zhouhaifei-react -c "yo zhouhaifei-react"
```

## windows 换行符设置

### git 换行符相关配置说明

```bash
# 提交时验证
# 拒绝提交包含混合换行符的文件
git config --global core.safecrlf true

# 允许提交包含混合换行符的文件
git config --global core.safecrlf false

# 提交包含混合换行符的文件时给出警告
git config --global core.safecrlf warn

# 下拉提交时操作
# 提交时转换为LF，检出时转换为CRLF
git config --global core.autocrlf true

# 提交时转换为LF，检出时不转换
git config --global core.autocrlf input

# 提交检出均不转换
git config --global core.autocrlf false
```

### windows 参考配置

```bash
git config --global core.safecrlf false
git config --global core.autocrlf input
```

---

title: 项目打包工具 order: 4

---

## zhouhaifei-react-scripts 外放配置说明

- 在项目目录下建立 config/config.js

```
// utils为内部的一些配置。返回一个对象，支持下面参数
module.exports = function(utils) {
  return {};
};
```

### less

- 类型: `object`
- 默认值：`null`
- 详细：

> 示例：

```js
const lessOptions = {
  // 重写less变量
  theme: {},
  // 额外需要开启 cssModule
  moduleInclude: [],
};
```

### babel

- 类型: `object`
- 默认值：`null`
- 详细：

> 示例：

```js
const babelOptions = {
  // babel-loader 额外的 options
  options: {},
  // babel-loader 额外的 include
  include: [],
};
```

### otherConfig

- 类型: `object`
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

### 环境变量

- 在项目配置相关文件。参考 dotenv。下面为常用

```
.env.development
.env.production
.env.development.local
.env.production.local
```

- `PUBLIC_URL`
  - 静态资源前缀
  - 建议通过 cross-env 配合 shell 脚本打包。不要写死
- `IMAGE_INLINE_SIZE_LIMIT`
  - 图片 inline 大小(字节)
- `PORT`
  - 启动端口
- `SPLIT_CHUNK_MIN_SIZE`
  - 分包的最小尺寸
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
- `IS_VITE`
  - dev 是否开启 vite
  - YES 开启

### 具体使用

```
// 启动
zhouhaifei-react-scripts start

// 打包
zhouhaifei-react-scripts build
```
