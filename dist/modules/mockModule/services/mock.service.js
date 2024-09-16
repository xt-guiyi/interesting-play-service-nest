"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockService = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("../../../mocks/common");
const user_1 = require("../../../mocks/user");
const video_1 = require("../../../mocks/video");
const comment_1 = require("../../../mocks/comment");
let MockService = class MockService {
    getBanners() {
        return (0, common_2.bannerMockData)();
    }
    getUsers() {
        return user_1.userMockData;
    }
    getVideoList(page, pageSize) {
        return (0, video_1.getPaginatedVideos)(page, pageSize);
    }
    getVideoDetail(id) {
        return (0, video_1.videoDetail)(id);
    }
    getCommentList(page, pageSize) {
        return (0, comment_1.getPaginatedComments)(page, pageSize);
    }
};
exports.MockService = MockService;
exports.MockService = MockService = __decorate([
    (0, common_1.Injectable)()
], MockService);
//# sourceMappingURL=mock.service.js.map