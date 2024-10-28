/*
 * @Author: xt-guiyi 1661219752@qq.com
 * @Date: 2024-10-28 20:42:32
 * @LastEditors: xt-guiyi 1661219752@qq.com
 * @LastEditTime: 2024-10-28 21:17:37
 */
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
					jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
					ignoreExpiration: false,
					secretOrKey: 'xt_guiyi_secret', // 使用与生成时相同的密钥
				})
    }

    async validate(payload: any) {
        return { username: payload.username }; // 返回用户信息
    }
}
