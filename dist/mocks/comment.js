"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPaginatedComments = getPaginatedComments;
const Mock = require("mockjs");
const commentList = Mock.mock({
    'data|100': [
        {
            'id|+1': 1,
            username: '@cname(5,8)',
            pubDate: 1721498978810,
            ipAddress: '广东',
            content: '@cword(8,300)',
            avatar: 'https://images.cubox.pro/1721051614822/384150/image.png',
            like: '@integer(1000, 10000)',
        },
    ],
});
function getPaginatedComments(page, pageSize) {
    const total = commentList.data.length;
    const start = (page - 1) * pageSize;
    const end = page * pageSize;
    const data = commentList.data.slice(start, end);
    return {
        page,
        pageSize,
        total,
        data,
    };
}
//# sourceMappingURL=comment.js.map