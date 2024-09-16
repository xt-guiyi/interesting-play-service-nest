/*
 * @Author: xt-guiyi 1661219752@qq.com
 * @Date: 2024-07-02 21:04:24
 * @LastEditors: xt-guiyi 1661219752@qq.com
 * @LastEditTime: 2024-08-10 21:15:38
 * @Description:
 */
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MockModule } from "@/modules/mockModule/mock.module";
import { Logger, MiddlewareConsumer,  NestModule } from '@nestjs/common'

@Module({
	imports: [MockModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule implements NestModule {
	private readonly logger = new Logger(AppModule.name)

	configure(consumer: MiddlewareConsumer) {
		consumer
			.apply((req, res, next) => {
				this.logger.log(`[${req.method}] ${req.originalUrl}`)
				next()
			})
			.forRoutes('*')
	}
}
