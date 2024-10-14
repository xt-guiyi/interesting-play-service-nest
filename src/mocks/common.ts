/*
 * @Author: xt-guiyi 1661219752@qq.com
 * @Date: 2024-07-02 21:38:57
 * @LastEditors: xt-guiyi 1661219752@qq.com
 * @LastEditTime: 2024-07-15 22:07:52
 * @Description:
 */
import * as Mock from "mockjs";

Mock.Random.extend({
  bannerUrlByIndex: function (index) {
    return bannerList[index % bannerList.length];
  },
});

const bannerList = [
	'https://images.cubox.pro/1720890122032/747205/image.png',
	'https://images.cubox.pro/iw3rni/file/2024071400460487466/4cb58c73505686ff3cb5c6d9a2bbe950.png',
	'https://images.cubox.pro/1720890739965/652361/image.png',
	'https://images.cubox.pro/1720890535148/654467/image.png',
	'https://images.cubox.pro/1721052210810/706263/image.png',
	'https://images.cubox.pro/1721052327839/293615/image.png',
]
export const bannerMockData = () => {
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
