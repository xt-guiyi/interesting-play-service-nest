"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMockData = void 0;
const Mock = require("mockjs");
exports.userMockData = Mock.mock({
    'users|10': [
        {
            'id|+1': 1,
            name: '@cname',
            'age|18-60': 1,
            email: '@cparagraph()',
        },
    ],
});
//# sourceMappingURL=user.js.map