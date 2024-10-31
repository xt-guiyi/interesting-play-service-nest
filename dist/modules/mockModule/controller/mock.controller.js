"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const mock_service_1 = require("../services/mock.service");
const jwt_guard_1 = require("../jwt.guard");
const createUserDto_1 = require("../../../dto/createUserDto");
const responseResult_1 = require("../../../model/responseResult");
let CommonController = class CommonController {
    constructor(mockService) {
        this.mockService = mockService;
    }
    getBanners() {
        return new responseResult_1.default(200, null, this.mockService.getBanners());
    }
    getUsers() {
        return new responseResult_1.default(200, null, this.mockService.getUsers());
    }
    getVideoList(page, pageSize) {
        return new responseResult_1.default(200, null, this.mockService.getVideoList(page, pageSize));
    }
    getVideoDetail(id) {
        return new responseResult_1.default(200, null, this.mockService.getVideoDetail(id));
    }
    getCommentList(page, pageSize) {
        return new responseResult_1.default(200, null, this.mockService.getCommentList(page, pageSize));
    }
    getDiscoverList(page, pageSize) {
        return new responseResult_1.default(200, null, this.mockService.getDiscoverList(page, pageSize));
    }
    getUserInfo() {
        return new responseResult_1.default(200, null, {
            username: 'xt-guiyi',
            age: 23,
            avatar: 'https://images.cubox.pro/iw3rni/file/2024102923062812324/IMG_0794.JPG',
            introduction: '简介：我的灵魂深处有一缕阳光，里面飘着些尘埃',
        });
    }
    async register(body) {
        const { username, password } = body;
        await this.mockService.register(username, password);
        return new responseResult_1.default(200, '注册成功', null);
    }
    async login(body) {
        const { username, password } = body;
        const token = await this.mockService.login(username, password);
        if (token) {
            return new responseResult_1.default(200, null, `Bearer ${token}`);
        }
        return new responseResult_1.default(100001, '密码错误', null);
    }
};
exports.CommonController = CommonController;
__decorate([
    (0, common_1.Get)('getBanners'),
    (0, swagger_1.ApiOperation)({ summary: '获取轮播图数据' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: '请求成功' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", responseResult_1.default)
], CommonController.prototype, "getBanners", null);
__decorate([
    (0, common_1.Get)('users'),
    (0, swagger_1.ApiOperation)({ summary: '获取用户列表' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: '请求成功' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", responseResult_1.default)
], CommonController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Get)('getVideoList'),
    (0, swagger_1.ApiOperation)({ summary: '获取视频列表' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: '请求成功' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('pageSize')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", responseResult_1.default)
], CommonController.prototype, "getVideoList", null);
__decorate([
    (0, common_1.Get)('getVideoDetail'),
    (0, swagger_1.ApiOperation)({ summary: '获取视频详情' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: '请求成功' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", responseResult_1.default)
], CommonController.prototype, "getVideoDetail", null);
__decorate([
    (0, common_1.Get)('getCommentList'),
    (0, swagger_1.ApiOperation)({ summary: '获取评论列表' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: '请求成功' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('pageSize')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", responseResult_1.default)
], CommonController.prototype, "getCommentList", null);
__decorate([
    (0, common_1.Get)('getDiscoverList'),
    (0, swagger_1.ApiOperation)({ summary: '获取发现列表' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: '请求成功' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('pageSize')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", responseResult_1.default)
], CommonController.prototype, "getDiscoverList", null);
__decorate([
    (0, common_1.Get)('getUserInfo'),
    (0, swagger_1.ApiOperation)({ summary: '获取用户信息' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: '请求成功' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", responseResult_1.default)
], CommonController.prototype, "getUserInfo", null);
__decorate([
    (0, common_1.Post)('register'),
    (0, swagger_1.ApiOperation)({ summary: '注册' }),
    (0, swagger_1.ApiBody)({ type: createUserDto_1.CreateUserDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: '请求成功' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createUserDto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], CommonController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('login'),
    (0, swagger_1.ApiOperation)({ summary: '登录' }),
    (0, swagger_1.ApiBody)({ type: createUserDto_1.CreateUserDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: '请求成功' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createUserDto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], CommonController.prototype, "login", null);
exports.CommonController = CommonController = __decorate([
    (0, common_1.Controller)('mock'),
    (0, swagger_1.ApiTags)('mock'),
    __metadata("design:paramtypes", [mock_service_1.MockService])
], CommonController);
//# sourceMappingURL=mock.controller.js.map