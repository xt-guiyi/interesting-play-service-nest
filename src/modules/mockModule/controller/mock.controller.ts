/*
 * @Author: xt-guiyi 1661219752@qq.com
 * @Date: 2024-07-02 22:10:57
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-09-16 14:57:07
 * @Description:
 */
import { BadRequestException, Controller, Get, Query, Response } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { MockService } from 'modules/mockModule/services/mock.service'

@Controller('mock')
@ApiTags('mock')
export class CommonController {
	constructor(private readonly mockService: MockService) {}

	@Get('getBanners')
	@ApiOperation({ summary: '获取轮播图数据' })
	@ApiResponse({ status: 200, description: '请求成功' })
	getBanners() {
		return this.mockService.getBanners()
	}

	@Get('users')
	@ApiOperation({ summary: '获取用户列表' })
	@ApiResponse({ status: 200, description: '请求成功' })
	getUsers() {
		return this.mockService.getUsers()
	}

	@Get('getVideoList')
	@ApiOperation({ summary: '获取视频列表' })
	@ApiResponse({ status: 200, description: '请求成功' })
	getVideoList(@Query('page') page: number, @Query('pageSize') pageSize: number) {
		return this.mockService.getVideoList(page, pageSize)
	}

	@Get('getVideoDetail')
	@ApiOperation({ summary: '获取视频详情' })
	@ApiResponse({ status: 200, description: '请求成功' })
	getVideoDetail(@Query('id') id: number) {
		return this.mockService.getVideoDetail(id)
	}

	@Get('getCommentList')
	@ApiOperation({ summary: '获取评论列表' })
	@ApiResponse({ status: 200, description: '请求成功' })
	getCommentList(@Query('page') page: number, @Query('pageSize') pageSize: number) {
		return this.mockService.getCommentList(page, pageSize)
	}
}
