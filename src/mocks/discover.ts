/*
 * @Author: xt-guiyi 1661219752@qq.com
 * @Date: 2024-07-02 21:38:57
 * @LastEditors: xt 1661219752@qq.com
 * @LastEditTime: 2024-09-30 10:56:11
 * @Description:
 */
import { getRandomInt } from '@/utils/tools'
import * as Mock from 'mockjs'

const bannerList = [
	{
		url: 'https://images.cubox.pro/iw3rni/file/2024092617483084406/37.png',
		width: 475,
		height: 475,
	},
	{
		url: 'https://images.cubox.pro/iw3rni/file/2024092617482488438/31.png',
		width: 475,
		height: 475,
	},
	{
		url: 'https://images.cubox.pro/iw3rni/file/2024092617481854677/33.png',
		width: 475,
		height: 475,
	},
	{
		url: 'https://images.cubox.pro/iw3rni/file/2024092617481297506/32.png',
		width: 475,
		height: 475,
	},
	{
		url: 'https://images.cubox.pro/iw3rni/file/2024092617470978840/20.png',
		width: 475,
		height: 475,
	},
	{
		url: 'https://images.cubox.pro/iw3rni/file/2024092617470325988/18.png',
		width: 475,
		height: 475,
	},
	{
		url: 'https://images.cubox.pro/iw3rni/file/2024092617464027713/1.png',
		width: 475,
		height: 475,
	},
	{
		url: 'https://images.cubox.pro/iw3rni/file/2024092617465292411/5.png',
		width: 475,
		height: 475,
	},
	{
		url: 'https://images.cubox.pro/iw3rni/file/2024092617465761163/6.png',
		width: 475,
		height: 475,
	},
	{
		url: 'https://images.cubox.pro/iw3rni/file/2024092617464694858/2.png',
		width: 475,
		height: 475,
	},
	{
		url: 'https://images.cubox.pro/iw3rni/file/2024092617311840202/u=763695846,2647610609&fm=253&fmt=auto&app=138&f=JPEG.webp',
		width: 200,
		height: 300,
	},
	{
		url: 'https://images.cubox.pro/iw3rni/file/2024092617310730454/u=2928717140,3311939408&fm=253&fmt=auto&app=138&f=JPEG.webp',
		width: 200,
		height: 300,
	},
	{
		url: 'https://images.cubox.pro/iw3rni/file/2024092617310274709/u=3504597845,2593078796&fm=253&fmt=auto&app=138&f=JPEG.webp',
		width: 200,
		height: 300,
	},
	{
		url: 'https://images.cubox.pro/iw3rni/file/2024092617305667410/u=3550663044,2197159379&fm=253&fmt=auto&app=138&f=JPEG.webp',
		width: 200,
		height: 300,
	},
	{
		url: 'https://images.cubox.pro/iw3rni/file/2024092617305034606/u=641383849,2408972927&fm=253&fmt=auto&app=138&f=JPEG.webp',
		width: 200,
		height: 300,
	},
	{
		url: 'https://images.cubox.pro/iw3rni/file/2024092617273377243/Cute-squirrel-brown-tree-bokeh_iphone_640x960.jpg',
		width: 640,
		height: 960,
	},
	{
		url: 'https://images.cubox.pro/iw3rni/file/2024092617072764811/u=2019423475,2066895883&fm=253&fmt=auto&app=138&f=JPEG.webp',
		width: 600,
		height: 400,
	},
	{
		url: 'https://images.cubox.pro/iw3rni/file/2024092617072131424/u=1588117485,725348008&fm=253&fmt=auto&app=138&f=JPEG.webp',
		width: 680,
		height: 455,
	},
	{
		url: 'https://images.cubox.pro/iw3rni/file/2024092617070940417/u=1533921286,5055439&fm=253&fmt=auto&app=138&f=JPEG.webp',
		width: 570,
		height: 500,
	},
	{
		url: 'https://images.cubox.pro/1721051657684/731218/image.png',
		width: 672,
		height: 378,
	},
	{
		url: 'https://images.cubox.pro/1721051614822/384150/image.png',
		width: 672,
		height: 378,
	},
	{
		url: 'https://images.cubox.pro/1721051371000/699861/image.png',
		width: 672,
		height: 378,
	},
	{
		url: 'https://images.cubox.pro/1721051253242/695227/image.png',
		width: 672,
		height: 378,
	},
	{
		url: 'https://images.cubox.pro/1721051190078/666445/image.png',
		width: 672,
		height: 378,
	},
	{
		url: 'https://images.cubox.pro/1721051185420/490909/image.png',
		width: 672,
		height: 378,
	},
	{
		url: 'https://images.cubox.pro/1721051181108/872749/image.png',
		width: 672,
		height: 378,
	},
	{
		url: 'https://images.cubox.pro/1721051172937/21216/image.png',
		width: 672,
		height: 378,
	},
	{
		url: 'https://images.cubox.pro/1721051166902/659625/image.png',
		width: 672,
		height: 378,
	},
	{
		url: 'https://images.cubox.pro/1721051148099/362181/image.png',
		width: 672,
		height: 378,
	},
	{
		url: 'https://images.cubox.pro/1720890739965/652361/image.png',
		width: 672,
		height: 378,
	},
	{
		url: 'https://images.cubox.pro/1721051094953/785258/image.png',
		width: 672,
		height: 378,
	},
	{
		url: 'https://images.cubox.pro/1721051041189/224599/image.png',
		width: 672,
		height: 378,
	},
	{
		url: 'https://images.cubox.pro/1721050974489/700659/image.png',
		width: 672,
		height: 378,
	},
	{
		url: 'https://images.cubox.pro/1721050960233/956962/image.png',
		width: 336,
		height: 190,
	},
	{
		url: 'https://images.cubox.pro/1721050935386/584209/image.png',
		width: 672,
		height: 378,
	},
	{
		url: 'https://images.cubox.pro/1721051290596/424930/image.png',
		width: 672,
		height: 378,
	},
	{
		url: 'https://images.cubox.pro/1721051417198/18994/image.png',
		width: 672,
		height: 378,
	},
	{
		url: 'https://images.cubox.pro/iw3rni/file/2024092617071657283/u=1572209309,2681494294&fm=253&fmt=auto&app=138&f=JPEG.webp',
		width: 500,
		height: 750,
	},
	{
		url: 'https://images.cubox.pro/iw3rni/file/2024092617073267265/u=4053959140,1382478001&fm=253&fmt=auto.webp',
		width: 800,
		height: 1730,
	},
	{
		url: 'https://images.cubox.pro/iw3rni/file/2024092915544360676/u=2681454149,1503899478&fm=253&fmt=auto&app=138&f=JPEG.webp',
		width: 500,
		height: 731,
	},
	{
		url: 'https://images.cubox.pro/iw3rni/file/2024092617073267265/u=4053959140,1382478001&fm=253&fmt=auto.webp',
		width: 800,
		height: 1730,
	},
	{
		url: 'https://images.cubox.pro/iw3rni/file/2024092915553510089/1509mibamqyypxw.jpg',
		width: 506,
		height: 745,
	},
]

// 定义视频信息的数据结构
const discoverList = () => {
  return Mock.mock({
		'videos|200': [
			{
				'id|+1': 1,
				title: '@ctitle(5,50)',
				pic: null, // 视频封面地址
				reply: '@integer(1000, 100000)', // 评论数
				owner: {
					// 视频作者信息
					mid: 66606350, // 作者id
					name: '@cname', // 作者名称
					fans: '@integer(1000, 100000)', // 作者粉丝数
					videos: '@integer(5, 500)',
					face: 'https://i2.hdslb.com/bfs/face/c9af3b32cf74baec5a4b65af8ca18ae5ff571f77.jpg', // 作者头像地址
				},
			},
		],
	}).videos.map((item, index) => {
    const picItem = bannerList[getRandomInt(0, bannerList.length - 1)]
		item.pic = picItem.url
		item.picW = picItem.width
		item.picH = picItem.height
		return item
	})
}

/**
 * 根据页码和每页数量获取视频列表
 * @param {number} page 当前页码
 * @param {number} pageSize 每页数量
 * @returns {object} 包含视频列表和分页信息的对象
 */
function getPaginatedDiscover(page, pageSize) {
	const total = 200
	const start = (page - 1) * pageSize
	const end = page * pageSize
	const data = discoverList().slice(start, end)

	return {
		page,
		pageSize,
		total,
		data,
	}
}



export { getPaginatedDiscover }
