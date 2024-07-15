/*
 * @Author: xt-guiyi 1661219752@qq.com
 * @Date: 2024-07-15 20:42:21
 * @LastEditors: xt-guiyi 1661219752@qq.com
 * @LastEditTime: 2024-07-15 20:45:36
 * @Description: 
 */
export function getRandomInt(min, max) {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min + 1)) + min
}
