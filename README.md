<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

# NestJS 项目结构

本文档描述了 NestJS 应用程序的推荐项目结构。良好的组织结构确保代码的可维护性和可扩展性。

## 项目结构

```plaintext
src/
├── app.module.ts
├── main.ts
├── mocks/
├── common/
│   ├── decorators/
│   ├── filters/
│   ├── guards/
│   ├── interceptors/
│   └── pipes/
├── config/
│   └── configuration.ts
├── modules/
│   ├── module1/
│   │   ├── dto/
│   │   ├── entities/
│   │   ├── interfaces/
│   │   ├── module1.controller.ts
│   │   ├── module1.service.ts
│   │   └── module1.module.ts
│   ├── module2/
│   │   ├── dto/
│   │   ├── entities/
│   │   ├── interfaces/
│   │   ├── module2.controller.ts
│   │   ├── module2.service.ts
│   │   └── module2.module.ts
│   └── ...
├── shared/
│   ├── services/
│   ├── repositories/
│   └── ...
└── utils/
    └── helpers.ts
```

详细说明

	•	src/: 项目的主要源代码目录。
	•	app.module.ts: 根模块文件，配置应用程序的主要模块和依赖关系。
	•	main.ts: 应用程序的入口文件，通常用于启动 Nest 应用程序。
	•	common/: 包含全局使用的代码，如装饰器、过滤器、守卫、拦截器和管道等。
	•	decorators/: 自定义装饰器。
	•	filters/: 自定义异常过滤器。
	•	guards/: 自定义守卫。
	•	interceptors/: 自定义拦截器。
	•	pipes/: 自定义管道。
	•	config/: 配置文件和环境配置。
	•	configuration.ts: 配置文件。
	•	modules/: 各个功能模块，每个模块包含自己的控制器、服务、DTO（数据传输对象）、实体和接口。
	•	module1/: 第一个模块的目录。
	•	dto/: 数据传输对象。
	•	entities/: 实体类。
	•	interfaces/: 接口定义。
	•	module1.controller.ts: 模块的控制器。
	•	module1.service.ts: 模块的服务。
	•	module1.module.ts: 模块的定义文件。
	•	module2/: 第二个模块的目录，结构与 module1 类似。
	•	shared/: 共享代码，如共享服务、仓库等。
	•	services/: 共享服务。
	•	repositories/: 共享的数据库仓库。
	•	…: 其他共享组件。
	•	utils/: 工具函数和辅助类。
	•	helpers.ts: 工具函数。
