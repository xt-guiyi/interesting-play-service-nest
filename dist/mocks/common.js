"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bannerMockData = void 0;
const Mock = require("mockjs");
Mock.Random.extend({
    bannerUrlByIndex: function (index) {
        return bannerList[index % bannerList.length];
    },
});
const bannerList = [
    "https://images.cubox.pro/1720890122032/747205/image.png",
    "https://images.cubox.pro/iw3rni/file/2024071400460487466/4cb58c73505686ff3cb5c6d9a2bbe950.png",
    "https://images.cubox.pro/1720890739965/652361/image.png",
    "https://images.cubox.pro/1720890535148/654467/image.png",
    "https://images.cubox.pro/1720890579956/289425/image.png",
];
const bannerMockData = () => {
    let i = 0;
    return bannerList.map((url) => {
        i++;
        return {
            id: i,
            url,
            jumpUrl: "http://mockjs.com/",
        };
    });
};
exports.bannerMockData = bannerMockData;
//# sourceMappingURL=common.js.map