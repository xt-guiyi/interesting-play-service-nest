/*
 * @Author: xt-guiyi 1661219752@qq.com
 * @Date: 2024-07-02 22:11:05
 * @LastEditors: xt-guiyi 1661219752@qq.com
 * @LastEditTime: 2024-07-14 01:27:05
 * @Description:
 */
// src/services/mock.service.ts
import { Injectable } from "@nestjs/common";
import { bannerMockData } from "@/mocks/common";

@Injectable()
export class CommonService {
  getBanners() {
    return bannerMockData();
  }
}
