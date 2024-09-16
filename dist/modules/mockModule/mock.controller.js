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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const mock_service_1 = require("modules/mockModule/services/mock.service");
let CommonController = class CommonController {
    constructor(mockService) {
        this.mockService = mockService;
    }
    getBanners() {
        return this.mockService.getBanners();
    }
    getUsers() {
        return this.mockService.getUsers();
    }
    getVideoList(page, pageSize) {
        return this.mockService.getVideoList(page, pageSize);
    }
    getVideoDetail(id) {
        return this.mockService.getVideoDetail(id);
    }
};
exports.CommonController = CommonController;
__decorate([
    (0, common_1.Get)('common/getBanners'),
    (0, swagger_1.ApiOperation)({ summary: '获取轮播图数据' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: '请求成功' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CommonController.prototype, "getBanners", null);
__decorate([
    (0, common_1.Get)('users'),
    (0, swagger_1.ApiOperation)({ summary: '获取用户列表' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: '请求成功' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CommonController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Get)('getVideoList'),
    (0, swagger_1.ApiOperation)({ summary: '获取视频列表' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: '请求成功' }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('pageSize')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], CommonController.prototype, "getVideoList", null);
__decorate([
    (0, common_1.Get)('getVideoDetail'),
    (0, swagger_1.ApiOperation)({ summary: '获取视频详情' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: '请求成功' }),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CommonController.prototype, "getVideoDetail", null);
exports.CommonController = CommonController = __decorate([
    (0, common_1.Controller)('mock'),
    (0, swagger_1.ApiTags)('mock'),
    __metadata("design:paramtypes", [typeof (_a = typeof mock_service_1.MockService !== "undefined" && mock_service_1.MockService) === "function" ? _a : Object])
], CommonController);
//# sourceMappingURL=mock.controller.js.map