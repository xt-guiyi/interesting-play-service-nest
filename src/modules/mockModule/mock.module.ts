/*
 * @Author: xt-guiyi 1661219752@qq.com
 * @Date: 2024-07-02 22:17:46
 * @LastEditors: xt-guiyi 1661219752@qq.com
 * @LastEditTime: 2024-07-14 01:55:36
 * @Description:
 */
import { Module } from "@nestjs/common";
import { MockService } from "./services/mock.service";
import { CommonController } from "./controller/mock.controller";
import { JwtStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
@Module({
	imports: [
        JwtModule.register({
            secret: 'your_secret_key', // 使用你的密钥
            signOptions: { expiresIn: '60s' }, // 设置过期时间
        }),
    ],
	providers: [MockService,JwtStrategy],
	controllers: [CommonController],
})
export class MockModule {}
