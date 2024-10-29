/*
 * @Author: xt-guiyi 1661219752@qq.com
 * @Date: 2024-07-02 22:10:57
 * @LastEditors: xt-guiyi 1661219752@qq.com
 * @LastEditTime: 2024-10-29 23:11:22
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
import ResponseResult from '@/model/responseResult'
@Controller('mock')
@ApiTags('mock')
export class CommonController {
	constructor(private readonly mockService: MockService) {}

	@Get('getBanners')
	@ApiOperation({ summary: '获取轮播图数据' })
	@ApiResponse({ status: 200, description: '请求成功' })
	@UseGuards(JwtAuthGuard)
	@ApiBearerAuth()
	getBanners(): ResponseResult<any> {
		return new ResponseResult(200, null, this.mockService.getBanners())
	}

	@Get('users')
	@ApiOperation({ summary: '获取用户列表' })
	@ApiResponse({ status: 200, description: '请求成功' })
	@UseGuards(JwtAuthGuard)
	@ApiBearerAuth()
	getUsers(): ResponseResult<any> {
		return new ResponseResult(200, null, this.mockService.getUsers())
	}

	@Get('getVideoList')
	@ApiOperation({ summary: '获取视频列表' })
	@ApiResponse({ status: 200, description: '请求成功' })
	@UseGuards(JwtAuthGuard)
	@ApiBearerAuth()
	getVideoList(@Query('page') page: number, @Query('pageSize') pageSize: number): ResponseResult<any> {
		return new ResponseResult(200, null, this.mockService.getVideoList(page, pageSize))
		// 返回500错误
		// throw new HttpException('', 500)
	}

	@Get('getVideoDetail')
	@ApiOperation({ summary: '获取视频详情' })
	@ApiResponse({ status: 200, description: '请求成功' })
	@UseGuards(JwtAuthGuard)
	@ApiBearerAuth()
	getVideoDetail(@Query('id') id: number): ResponseResult<any> {
		return new ResponseResult(200, null, this.mockService.getVideoDetail(id))
	}

	@Get('getCommentList')
	@ApiOperation({ summary: '获取评论列表' })
	@ApiResponse({ status: 200, description: '请求成功' })
	@UseGuards(JwtAuthGuard)
	@ApiBearerAuth()
	getCommentList(@Query('page') page: number, @Query('pageSize') pageSize: number): ResponseResult<any> {
		return new ResponseResult(200, null, this.mockService.getCommentList(page, pageSize))
	}

	@Get('getDiscoverList')
	@ApiOperation({ summary: '获取发现列表' })
	@ApiResponse({ status: 200, description: '请求成功' })
	@UseGuards(JwtAuthGuard)
	@ApiBearerAuth()
	getDiscoverList(@Query('page') page: number, @Query('pageSize') pageSize: number): ResponseResult<any> {
		return new ResponseResult(200, null, this.mockService.getDiscoverList(page, pageSize))
	}

	@Get('getUserInfo')
	@ApiOperation({ summary: '获取用户信息' })
	@ApiResponse({ status: 200, description: '请求成功' })
	@UseGuards(JwtAuthGuard)
	@ApiBearerAuth()
	getUserInfo(): ResponseResult<any> {
		return new ResponseResult(200, null, {
			username: 'xt-guiyi',
			age: 23,
			avatar: 'https://images.cubox.pro/iw3rni/file/2024102923062812324/IMG_0794.JPG',
			introduction: '简介：我的灵魂深处有一缕阳光，里面飘着些尘埃',
		})
	}

	@Post('register')
	@ApiOperation({ summary: '注册' })
	@ApiBody({ type: CreateUserDto })
	@ApiResponse({ status: 200, description: '请求成功' })
	async register(@Body() body: CreateUserDto): Promise<ResponseResult<String>> {
		const { username, password } = body
		await this.mockService.register(username, password)
		return new ResponseResult(200, '注册成功', null)
	}

	@Post('login')
	@ApiOperation({ summary: '登录' })
	@ApiBody({ type: CreateUserDto })
	@ApiResponse({ status: 200, description: '请求成功' })
	async login(@Body() body: CreateUserDto): Promise<ResponseResult<String>> {
		const { username, password } = body
		const token = await this.mockService.login(username, password)
		if (token) {
			return new ResponseResult(200, null, `Bearer ${token}`) // 返回 token
		}
		return new ResponseResult(100001, '密码错误', null)
	}
}
