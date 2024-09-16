/*
 * @Author: xt-guiyi 1661219752@qq.com
 * @Date: 2024-07-02 22:17:46
 * @LastEditors: xt-guiyi 1661219752@qq.com
 * @LastEditTime: 2024-07-14 01:55:36
 * @Description:
 */
import { Module } from "@nestjs/common";
import { MockService } from "./services/mock.service";
import { CommonController } from "./controller/mock.controller";

@Module({
	providers: [MockService],
	controllers: [CommonController],
})
export class MockModule {}
