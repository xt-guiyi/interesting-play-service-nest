/*
 * @Author: xt-guiyi 1661219752@qq.com
 * @Date: 2024-07-02 22:11:05
 * @LastEditors: xt-guiyi 1661219752@qq.com
 * @LastEditTime: 2024-11-02 23:17:05
 * @Description:
 */
// src/services/mock.service.ts
import { Injectable } from "@nestjs/common";
import { bannerMockData } from "@/mocks/common";
import { userMockData } from '@/mocks/user'
import { getPaginatedVideos, videoDetail } from '@/mocks/video'
import { getPaginatedComments } from '@/mocks/comment'
import { getPaginatedDiscover } from '@/mocks/discover'
import * as fs from 'fs';
import * as path from 'path';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class MockService {
	private readonly filename = path.join(__dirname, '../../../../', 'users.txt')
	constructor(private readonly jwtService: JwtService) {}
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

	async register(username: string, password: number): Promise<boolean> {
		const user = `${username}:${password}\n`
		fs.appendFileSync(this.filename, user)
		console.log(this.filename)
		return true
	}

	async login(username: string, password: number): Promise<string> {
		if (!fs.existsSync(this.filename)) return null
		const users = fs.readFileSync(this.filename, 'utf-8').split('\n')
		for (const user of users) {
			const [storedUsername, storedPassword] = user.split(':')
			if (storedUsername == username && Number(storedPassword) == password) {
				const payload = { username }
				return this.jwtService.sign(payload) // 生成 JWT
			}
		}
		return null // 登录失败
	}
}
