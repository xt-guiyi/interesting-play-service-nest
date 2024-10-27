/*
 * @Author: xt-guiyi 1661219752@qq.com
 * @Date: 2024-07-02 22:10:57
 * @LastEditors: xt-guiyi 1661219752@qq.com
 * @LastEditTime: 2024-10-13 19:43:42
 * @Description:
 */
import { BadRequestException, Controller, Get, HttpException, Query, Response } from '@nestjs/common'
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
    // 返回500错误
    // throw new HttpException('', 500)
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

	@Get('getDiscoverList')
	@ApiOperation({ summary: '获取发现列表' })
	@ApiResponse({ status: 200, description: '请求成功' })
	getDiscoverList(@Query('page') page: number, @Query('pageSize') pageSize: number) {
		return this.mockService.getDiscoverList(page, pageSize)
	}
}
