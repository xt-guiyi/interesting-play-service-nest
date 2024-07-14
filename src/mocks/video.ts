/*
 * @Author: xt-guiyi 1661219752@qq.com
 * @Date: 2024-07-02 21:38:57
 * @LastEditors: xt-guiyi 1661219752@qq.com
 * @LastEditTime: 2024-07-14 02:09:19
 * @Description:
 */
import * as Mock from "mockjs";

// 定义视频信息的数据结构
const videoList = Mock.mock({
  "videos|100": [
    {
      "id|+1": 1,
      title: "@title",
      duration: "@integer(30, 3600)", // 视频时长，范围从30秒到3600秒
      author: "@name",
      url: Mock.Random.image("200x100", Mock.Random.color(), "视频"), // 视频封面地址
      views: "@integer(1000, 1000000)", // 视频播放量，范围从1000到1000000
    },
  ],
}).videos;

/**
 * 根据页码和每页数量获取视频列表
 * @param {number} page 当前页码
 * @param {number} pageSize 每页数量
 * @returns {object} 包含视频列表和分页信息的对象
 */
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

export { getPaginatedVideos };
