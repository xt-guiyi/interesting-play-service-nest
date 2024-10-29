/*
 * @Author: xt-guiyi 1661219752@qq.com
 * @Date: 2024-10-28 20:53:22
 * @LastEditors: xt-guiyi 1661219752@qq.com
 * @LastEditTime: 2024-10-29 21:02:13
 */
import { ApiProperty } from '@nestjs/swagger'
import { IsNumber, IsString } from 'class-validator'

export default class ResponseResult<T> {
	@ApiProperty()
	@IsNumber()
	code: number

	@ApiProperty()
	@IsString()
	message: string

	@ApiProperty()
	data: T

	constructor(code: number, message: string, data: T) {
		this.data = data
		this.code = code
		this.message = message
	}
}