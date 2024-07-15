"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPaginatedVideos = getPaginatedVideos;
const tools_1 = require("../utils/tools");
const Mock = require("mockjs");
const bannerList = [
    'https://images.cubox.pro/1721051657684/731218/image.png',
    'https://images.cubox.pro/1721051617220/404446/image.png',
    'https://images.cubox.pro/1721051614822/384150/image.png',
    'https://images.cubox.pro/1721051610979/441761/image.png',
    'https://images.cubox.pro/1721051599894/246147/image.png',
    'https://images.cubox.pro/1721051594349/953432/image.png',
    'https://images.cubox.pro/1721051568788/23183/image.png',
    'https://images.cubox.pro/1721051563636/647237/image.png',
    'https://images.cubox.pro/1721051551648/51588/image.png',
    'https://images.cubox.pro/1721051547150/50658/image.png',
    'https://images.cubox.pro/1721051512292/916597/image.png',
    'https://images.cubox.pro/1721051506038/749301/image.png',
    'https://images.cubox.pro/1721051503186/793528/image.png',
    'https://images.cubox.pro/1721051479770/463132/image.png',
    'https://images.cubox.pro/1721051466053/240807/image.png',
    'https://images.cubox.pro/1721051461518/729705/image.png',
    'https://images.cubox.pro/1721051457313/282527/image.png',
    'https://images.cubox.pro/1721051447136/616907/image.png',
    'https://images.cubox.pro/1721051444469/907494/image.png',
    'https://images.cubox.pro/1721051442382/250534/image.png',
    'https://images.cubox.pro/1721051431566/131660/image.png',
    'https://images.cubox.pro/1721051417198/18994/image.png',
    'https://images.cubox.pro/1721051405200/475148/image.png',
    'https://images.cubox.pro/1721051377366/52743/image.png',
    'https://images.cubox.pro/1721051375030/942200/image.png',
    'https://images.cubox.pro/1721051371000/699861/image.png',
    'https://images.cubox.pro/1721051368985/240546/image.png',
    'https://images.cubox.pro/1721051290596/424930/image.png',
    'https://images.cubox.pro/1721051253242/695227/image.png',
    'https://images.cubox.pro/1721051190078/666445/image.png',
    'https://images.cubox.pro/1721051185420/490909/image.png',
    'https://images.cubox.pro/1721051181108/872749/image.png',
    'https://images.cubox.pro/1721051175964/661645/image.png',
    'https://images.cubox.pro/1721051172937/21216/image.png',
    'https://images.cubox.pro/1721051166902/659625/image.png',
    'https://images.cubox.pro/1721051148099/362181/image.png',
    'https://images.cubox.pro/1721051139066/494342/image.png',
    'https://images.cubox.pro/1721051136212/715761/image.png',
    'https://images.cubox.pro/1721051132984/787211/image.png',
    'https://images.cubox.pro/1721051094953/785258/image.png',
    'https://images.cubox.pro/1721051055267/180396/image.png',
    'https://images.cubox.pro/1721051047372/704562/image.png',
    'https://images.cubox.pro/1721051041189/224599/image.png',
    'https://images.cubox.pro/1721050974489/700659/image.png',
    'https://images.cubox.pro/1721050960233/956962/image.png',
    'https://images.cubox.pro/1721050935386/584209/image.png',
    'https://images.cubox.pro/1721050930746/190963/image.png',
];
const videoList = Mock.mock({
    'videos|100': [
        {
            'id|+1': 1,
            title: '@ctitle(5,50)',
            duration: '@integer(24, 5000)',
            author: '@cname',
            url: null,
            views: '@integer(1000, 1000000)',
        },
    ],
}).videos.map(item => {
    item.url = bannerList[(0, tools_1.getRandomInt)(0, bannerList.length - 1)];
    return item;
});
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