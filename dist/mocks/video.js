"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPaginatedVideos = getPaginatedVideos;
const Mock = require("mockjs");
const videoList = Mock.mock({
    "videos|100": [
        {
            "id|+1": 1,
            title: "@title",
            duration: "@integer(30, 3600)",
            author: "@name",
            url: Mock.Random.image("200x100", Mock.Random.color(), "视频"),
            views: "@integer(1000, 1000000)",
        },
    ],
}).videos;
function getPaginatedVideos(page, pageSize) {
    const total = videoList.length;
    const start = (page - 1) * pageSize;
    const end = page * pageSize;
    const data = videoList.slice(start, end);
    return {
        page,
        pageSize,
        total,
        data,
    };
}
//# sourceMappingURL=video.js.map