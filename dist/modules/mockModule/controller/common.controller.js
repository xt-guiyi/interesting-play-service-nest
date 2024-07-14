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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const common_service_1 = require("../services/common.service");
let CommonController = class CommonController {
    constructor(commonService) {
        this.commonService = commonService;
    }
    getBanners() {
        return this.commonService.getBanners();
    }
};
exports.CommonController = CommonController;
__decorate([
    (0, common_1.Get)("common/getBanners"),
    (0, swagger_1.ApiOperation)({ summary: "获取轮播图数据" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "请求成功" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CommonController.prototype, "getBanners", null);
exports.CommonController = CommonController = __decorate([
    (0, common_1.Controller)("mock"),
    (0, swagger_1.ApiTags)("common"),
    __metadata("design:paramtypes", [common_service_1.CommonService])
], CommonController);
//# sourceMappingURL=common.controller.js.map