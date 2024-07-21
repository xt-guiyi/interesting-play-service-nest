/*
 * @Author: xt-guiyi 1661219752@qq.com
 * @Date: 2024-07-02 22:11:05
 * @LastEditors: xt-guiyi 1661219752@qq.com
 * @LastEditTime: 2024-07-20 22:24:04
 * @Description:
 */
// src/services/mock.service.ts
import { Injectable } from "@nestjs/common";
import { getPaginatedVideos, videoDetail } from '@/mocks/video'

@Injectable()
export class VideoService {
	getVideoList(page, pageSize) {
		return getPaginatedVideos(page, pageSize)
	}

	getVideoDetail(id) {
		return videoDetail(id)
	}
}
