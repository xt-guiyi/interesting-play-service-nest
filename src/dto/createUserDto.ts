/*
 * @Author: xt-guiyi 1661219752@qq.com
 * @Date: 2024-10-28 20:53:22
 * @LastEditors: xt-guiyi 1661219752@qq.com
 * @LastEditTime: 2024-10-28 21:15:11
 */
import { ApiProperty } from '@nestjs/swagger'
import { IsNumber, IsString } from 'class-validator'
export class CreateUserDto {
	@ApiProperty()
	@IsNumber()
	username: string
	@IsString()
	@ApiProperty()
	password: number
}
