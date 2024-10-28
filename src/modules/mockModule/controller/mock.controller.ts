/*
 * @Author: xt-guiyi 1661219752@qq.com
 * @Date: 2024-07-02 22:10:57
 * @LastEditors: xt-guiyi 1661219752@qq.com
 * @LastEditTime: 2024-10-28 21:27:19
 * @Description:
 */
import {
	BadRequestException,
	Controller,
	Get,
	Post,
	HttpException,
	Body,
	Query,
	Response,
	UseGuards,
} from '@nestjs/common'
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { MockService } from 'modules/mockModule/services/mock.service'
import { JwtAuthGuard } from '../jwt.guard';
import { CreateUserDto } from '@/dto/createUserDto';
@Controller('mock')
@ApiTags('mock')
export class CommonController {
	constructor(private readonly mockService: MockService) {}

	@Get('getBanners')
	@ApiOperation({ summary: '获取轮播图数据' })
	@ApiResponse({ status: 200, description: '请求成功' })
	@UseGuards(JwtAuthGuard)
	@ApiBearerAuth()
	getBanners() {
		return this.mockService.getBanners()
	}

	@Get('users')
	@ApiOperation({ summary: '获取用户列表' })
	@ApiResponse({ status: 200, description: '请求成功' })
	@UseGuards(JwtAuthGuard)
	@ApiBearerAuth()
	getUsers() {
		return this.mockService.getUsers()
	}

	@Get('getVideoList')
	@ApiOperation({ summary: '获取视频列表' })
	@ApiResponse({ status: 200, description: '请求成功' })
	@UseGuards(JwtAuthGuard)
	@ApiBearerAuth()
	getVideoList(@Query('page') page: number, @Query('pageSize') pageSize: number) {
		return this.mockService.getVideoList(page, pageSize)
		// 返回500错误
		// throw new HttpException('', 500)
	}

	@Get('getVideoDetail')
	@ApiOperation({ summary: '获取视频详情' })
	@ApiResponse({ status: 200, description: '请求成功' })
	@UseGuards(JwtAuthGuard)
	@ApiBearerAuth()
	getVideoDetail(@Query('id') id: number) {
		return this.mockService.getVideoDetail(id)
	}

	@Get('getCommentList')
	@ApiOperation({ summary: '获取评论列表' })
	@ApiResponse({ status: 200, description: '请求成功' })
	@UseGuards(JwtAuthGuard)
	@ApiBearerAuth()
	getCommentList(@Query('page') page: number, @Query('pageSize') pageSize: number) {
		return this.mockService.getCommentList(page, pageSize)
	}

	@Get('getDiscoverList')
	@ApiOperation({ summary: '获取发现列表' })
	@ApiResponse({ status: 200, description: '请求成功' })
	@UseGuards(JwtAuthGuard)
	@ApiBearerAuth()
	getDiscoverList(@Query('page') page: number, @Query('pageSize') pageSize: number) {
		return this.mockService.getDiscoverList(page, pageSize)
	}

	@Post('register')
	@ApiOperation({ summary: '注册' })
	@ApiBody({ type: CreateUserDto })
	@ApiResponse({ status: 200, description: '请求成功' })
	async register(@Body() body: CreateUserDto): Promise<string> {
		const { username, password } = body
		await this.mockService.register(username, password)
		// TODO 注册成功和失败返回处理
		return '注册成功'
	}

	@Post('login')
	@ApiOperation({ summary: '登录' })
	@ApiBody({ type: CreateUserDto })
	@ApiResponse({ status: 200, description: '请求成功' })
	async login(@Body() body: CreateUserDto): Promise<{ token: string } | string> {
		const { username, password } = body
		const token = await this.mockService.login(username, password)
		if (token) {
			return { token } // 返回 token
		}
		return '登录失败'
	}
}
