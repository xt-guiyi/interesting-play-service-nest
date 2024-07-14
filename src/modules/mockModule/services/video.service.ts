/*
 * @Author: xt-guiyi 1661219752@qq.com
 * @Date: 2024-07-02 22:11:05
 * @LastEditors: xt-guiyi 1661219752@qq.com
 * @LastEditTime: 2024-07-14 13:14:48
 * @Description:
 */
// src/services/mock.service.ts
import { Injectable } from "@nestjs/common";
import { getPaginatedVideos } from "@/mocks/video";

@Injectable()
export class VideoService {
	getVideoList(page, pageSize) {
		return getPaginatedVideos(page, pageSize)
	}
}
