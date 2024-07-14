/*
 * @Author: xt-guiyi 1661219752@qq.com
 * @Date: 2024-07-02 22:10:57
 * @LastEditors: xt-guiyi 1661219752@qq.com
 * @LastEditTime: 2024-07-14 01:42:20
 * @Description:
 */
import { Controller, Get } from "@nestjs/common";
import { UserService } from "modules/mockModule/services/user.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
@Controller("mock")
@ApiTags("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("users")
  @ApiOperation({ summary: "获取用户列表" })
  @ApiResponse({ status: 200, description: "请求成功" })
  getUsers() {
    return this.userService.getUsers();
  }
}
