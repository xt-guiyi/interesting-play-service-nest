/*
 * @Author: xt-guiyi 1661219752@qq.com
 * @Date: 2024-07-02 22:11:05
 * @LastEditors: xt-guiyi 1661219752@qq.com
 * @LastEditTime: 2024-07-14 01:46:53
 * @Description:
 */
// src/services/mock.service.ts
import { Injectable } from "@nestjs/common";
import { userMockData } from "@/mocks/user";

@Injectable()
export class UserService {
  getUsers() {
    return userMockData;
  }
}
