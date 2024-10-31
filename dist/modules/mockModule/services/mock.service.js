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
exports.MockService = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("../../../mocks/common");
const user_1 = require("../../../mocks/user");
const video_1 = require("../../../mocks/video");
const comment_1 = require("../../../mocks/comment");
const discover_1 = require("../../../mocks/discover");
const fs = require("fs");
const path = require("path");
const jwt_1 = require("@nestjs/jwt");
let MockService = class MockService {
    constructor(jwtService) {
        this.jwtService = jwtService;
        this.filename = path.join('./', 'users.txt');
    }
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
    getDiscoverList(page, pageSize) {
        return (0, discover_1.getPaginatedDiscover)(page, pageSize);
    }
    async register(username, password) {
        const user = `${username}:${password}\n`;
        fs.appendFileSync(this.filename, user);
        console.log(this.filename);
        return true;
    }
    async login(username, password) {
        if (!fs.existsSync(this.filename))
            return null;
        const users = fs.readFileSync(this.filename, 'utf-8').split('\n');
        for (const user of users) {
            const [storedUsername, storedPassword] = user.split(':');
            if (storedUsername == username && Number(storedPassword) == password) {
                const payload = { username };
                return this.jwtService.sign(payload);
            }
        }
        return null;
    }
};
exports.MockService = MockService;
exports.MockService = MockService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], MockService);
//# sourceMappingURL=mock.service.js.map