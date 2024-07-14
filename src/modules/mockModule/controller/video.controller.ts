/*
 * @Author: xt-guiyi 1661219752@qq.com
 * @Date: 2024-07-02 22:10:57
 * @LastEditors: xt-guiyi 1661219752@qq.com
 * @LastEditTime: 2024-07-14 13:14:16
 * @Description:
 */
import { Controller, Get, Query } from "@nestjs/common";
import { VideoService } from "modules/mockModule/services/video.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
@Controller('mock/video')
@ApiTags('video')
export class VideoController {
	constructor(private readonly videoService: VideoService) {}

	@Get('getVideoList')
	@ApiOperation({ summary: '获取视频列表' })
	@ApiResponse({ status: 200, description: '请求成功' })
	getVideoList(@Query('page') page: number, @Query('pageSize') pageSize: number) {
		return this.videoService.getVideoList(page, pageSize)
	}
}
