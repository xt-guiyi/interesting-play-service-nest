/*
 * @Author: xt-guiyi 1661219752@qq.com
 * @Date: 2024-07-02 21:04:24
 * @LastEditors: xt-guiyi 1661219752@qq.com
 * @LastEditTime: 2024-07-02 22:21:13
 * @Description:
 */
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MockModule } from "@/modules/mockModule/mock.module";
@Module({
  imports: [MockModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
