/*
 * @Author: xt-guiyi 1661219752@qq.com
 * @Date: 2024-07-02 22:10:57
 * @LastEditors: xt-guiyi 1661219752@qq.com
 * @LastEditTime: 2024-07-02 22:17:06
 * @Description:
 */
import { Controller, Get } from '@nestjs/common';
import { UserService } from 'modules/mockModule/services/user.service';

@Controller('mock')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('users')
  getUsers() {
    return this.userService.getUsers();
  }
}
