"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPaginatedVideos = getPaginatedVideos;
exports.videoDetail = videoDetail;
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
const videoList = () => {
    return Mock.mock({
        'videos|200': [
            {
                'id|+1': 1,
                title: '@ctitle(5,50)',
                pubDate: '@integer(24, 5000)',
                duration: '@integer(24, 5000)',
                desc: '@cword(10,30)',
                pic: null,
                url: 'https://www.bilibili.com/video/BV1xK4y1p7yN',
                views: '@integer(1000, 1000000)',
                reply: '@integer(1000, 100000)',
                favorite: '@integer(1000, 10000)',
                coin: '@integer(1000, 10000)',
                share: '@integer(1000, 10000)',
                like: '@integer(1000, 10000)',
                dislike: '@integer(1000, 10000)',
                danmaku: '@integer(1000, 10000)',
                owner: {
                    mid: 66606350,
                    name: '@cname',
                    fans: '@integer(1000, 100000)',
                    videos: '@integer(5, 500)',
                    face: 'https://i2.hdslb.com/bfs/face/c9af3b32cf74baec5a4b65af8ca18ae5ff571f77.jpg',
                },
            },
        ],
    }).videos.map(item => {
        item.pic = bannerList[(0, tools_1.getRandomInt)(0, bannerList.length - 1)];
        return item;
    });
};
function getPaginatedVideos(page, pageSize) {
    const total = 200;
    const start = (page - 1) * pageSize;
    const end = page * pageSize;
    const data = videoList().slice(start, end);
    return {
        page: Number(page),
        pageSize: Number(pageSize),
        total: Number(total),
        data,
    };
}
function videoDetail(id) {
    const data = Mock.mock({
        'video|1': [
            {
                id: id,
                pic: 'http://i1.hdslb.com/bfs/archive/ea0dd34bf41e23a68175680a00e3358cd249105f.jpg',
                url: 'https://videos.cubox.pro/iw3rni/file/2024062923083169063/mda-qdq8qnmw9x5wm9jx.mp4',
                title: '@ctitle(5,50)',
                pubDate: 1721498978810,
                duration: '@integer(24, 5000)',
                desc: '【CB想说的】看完拜年祭之后最爱的一个节目！给有快板的部分简单加了一些不同风格的配乐hhh，感谢沃玛画的我！太可爱了哈哈哈哈哈哈哈！！！\n【Warma想说的】我画了打碟的CB，画风为了还原原版视频所以参考了四迹老师的画风，四迹老师的画真的太可爱啦！不过其实在画的过程中我遇到了一个问题，CB的耳机……到底是戴在哪个耳朵上呢？\n\n原版：av78977080\n编曲（配乐）：Crazy Bucket\n人声（配音）：Warma/谢拉\n曲绘：四迹/Warma\n动画：四迹/Crazy Bucket\n剧本：Mokurei-木灵君\n音频后期：DMYoung/纳兰寻风/Crazy Bucket\n包装：破晓天',
                views: '@integer(1000, 1000000)',
                reply: '@integer(1000, 100000)',
                favorite: '@integer(1000, 10000)',
                coin: '@integer(1000, 10000)',
                share: '@integer(1000, 10000)',
                like: '@integer(1000, 10000)',
                dislike: '@integer(1000, 10000)',
                danmaku: '@integer(1000, 10000)',
                owner: {
                    mid: 66606350,
                    fans: '@integer(1000, 100000)',
                    name: 'Crazy_Bucket_陈楒潼',
                    videos: '@integer(5, 500)',
                    face: 'https://i2.hdslb.com/bfs/face/c9af3b32cf74baec5a4b65af8ca18ae5ff571f77.jpg',
                },
            },
        ],
    }).video;
    return data;
}
//# sourceMappingURL=video.js.map