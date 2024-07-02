/*
 * @Author: xt-guiyi 1661219752@qq.com
 * @Date: 2024-07-02 21:38:57
 * @LastEditors: xt-guiyi 1661219752@qq.com
 * @LastEditTime: 2024-07-02 21:49:45
 * @Description:
 */
import * as Mock from 'mockjs';

export const userMockData = Mock.mock({
  'users|10': [
    {
      'id|+1': 1,
      name: '@cname',
      'age|18-60': 1,
      email: '@cparagraph()',
    },
  ],
});
