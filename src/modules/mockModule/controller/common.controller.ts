/*
 * @Author: xt-guiyi 1661219752@qq.com
 * @Date: 2024-07-02 22:10:57
 * @LastEditors: xt-guiyi 1661219752@qq.com
 * @LastEditTime: 2024-07-14 21:17:34
 * @Description:
 */
import { BadRequestException, Controller, Get, Response } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CommonService } from "modules/mockModule/services/common.service";

@Controller("mock")
@ApiTags("common")
export class CommonController {
  constructor(private readonly commonService: CommonService) {}

  @Get("common/getBanners")
  @ApiOperation({ summary: "获取轮播图数据" })
  @ApiResponse({ status: 200, description: "请求成功" })
  getBanners() {
    return this.commonService.getBanners();
    // throw new BadRequestException('Invalid params')
  }
}
