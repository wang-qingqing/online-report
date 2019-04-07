# online-report

a online report project based on egg,react and echarts.

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org

## 目录结构
### app/router.js
    用于配置URL路由规则。
### app/controller/**
    用于解析用户的输入，处理后返回相应的结果。
### app/service/**
    用于编写业务逻辑层。
### app/middleware/**
    用于编写中间价。
### app/public/**
    用于放置静态资源。
### app/extend/**
    用于框架的扩展。
### config/config.{env}.js
    用于编写配置文件。
### config/plugin.js
    用于配置需要加载的插件。
### test/**
    用于单元测试。
### app.js 和 agent.js
    用于自定义启动时的初始化工作。
### app/public/**
    用于放置静态资源。
### app/schedule/**
    用于定时任务。
### app/view/**
    用于放置模板文件。
### app/model/**
    用于放置领域模型。

