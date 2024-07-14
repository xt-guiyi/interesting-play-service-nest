/*
 * @Author: xt-guiyi 1661219752@qq.com
 * @Date: 2024-07-02 22:17:46
 * @LastEditors: xt-guiyi 1661219752@qq.com
 * @LastEditTime: 2024-07-14 01:55:36
 * @Description:
 */
import { Module } from "@nestjs/common";
import { UserService } from "./services/user.service";
import { UserController } from "./controller/user.controller";
import { CommonService } from "./services/common.service";
import { CommonController } from "./controller/common.controller";
import { VideoService } from "./services/video.service";
import { VideoController } from "./controller/video.controller";

@Module({
  providers: [UserService, CommonService, VideoService],
  controllers: [UserController, CommonController, VideoController],
})
export class MockModule {}
