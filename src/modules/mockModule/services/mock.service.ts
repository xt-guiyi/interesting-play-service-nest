/*
 * @Author: xt-guiyi 1661219752@qq.com
 * @Date: 2024-07-02 22:11:05
 * @LastEditors: xt-guiyi 1661219752@qq.com
 * @LastEditTime: 2024-09-22 18:40:15
 * @Description:
 */
// src/services/mock.service.ts
import { Injectable } from "@nestjs/common";
import { bannerMockData } from "@/mocks/common";
import { userMockData } from '@/mocks/user'
import { getPaginatedVideos, videoDetail } from '@/mocks/video'
import { getPaginatedComments } from '@/mocks/comment'
import { getPaginatedDiscover } from '@/mocks/discover'

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

	getDiscoverList(page, pageSize) {
		return getPaginatedDiscover(page, pageSize)
	}
}
