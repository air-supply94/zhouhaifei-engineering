## 配置文件

- 默认是项目根目录下的.bundlerConfig.ts
- 也可以通过 cli 的-c --config 指定配置文件(相对项目根目录的路径)

## 环境变量配置

- .env
- .env.local
- .env.development 或者.env.production
- .env.development.local 或者.env.production.local
- 优先级由上倒下,且通过上面文件配置的环境变量都可以通过 process.env 获取
- 内置了 process.env.NODE_ENV 和 process.env.PUBLIC_URL

## 项目启动

```shell
zhouhaifei-bundler-webpack dev
```

### 指定 port

- **_通过环境变量 PORT_**
- 加上 cli 参数--port=你的端口

```shell
zhouhaifei-bundler-webpack dev --port=你的端口
```

### 指定 host

- 通过环境变量 HOST
- cli 参数--host=你的 host

```shell
zhouhaifei-bundler-webpack dev --host=你的host
```

### 打开浏览器

- 配置文件设置 open 为 true
- cli 参数--open

```shell
zhouhaifei-bundler-webpack dev --open
```

## 项目打包

```shell
zhouhaifei-bundler-webpack build
```

### 开启 watch 模式

- cli 参数--watch

```shell
zhouhaifei-bundler-webpack build --watch
```
