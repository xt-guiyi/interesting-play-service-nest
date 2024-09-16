/*
 * @Author: xt-guiyi 1661219752@qq.com
 * @Date: 2024-07-02 22:11:05
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-09-16 14:08:50
 * @Description:
 */
// src/services/mock.service.ts
import { Injectable } from "@nestjs/common";
import { bannerMockData } from "@/mocks/common";
import { userMockData } from '@/mocks/user'
import { getPaginatedVideos, videoDetail } from '@/mocks/video'
import { getPaginatedComments } from '@/mocks/comment'

@Injectable()
export class MockService {
	getBanners() {
		return bannerMockData()
	}

	getUsers() {
		return userMockData
	}

	getVideoList(page, pageSize) {
		return getPaginatedVideos(page, pageSize)
	}

	getVideoDetail(id) {
		return videoDetail(id)
	}

	getCommentList(page, pageSize) {
		return getPaginatedComments(page, pageSize)
	}
}
