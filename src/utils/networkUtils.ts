/*
 * @Author: xt-guiyi 1661219752@qq.com
 * @Date: 2024-07-14 02:36:16
 * @LastEditors: xt-guiyi 1661219752@qq.com
 * @LastEditTime: 2024-07-14 02:36:23
 * @Description: 
 */
import * as os from 'os'

export function getLocalIpAddress(): string | undefined {
	const interfaces = os.networkInterfaces()
	for (const ifaceName of Object.keys(interfaces)) {
		const iface = interfaces[ifaceName]
		for (const alias of iface) {
			if (alias.family === 'IPv4' && !alias.internal) {
				return alias.address
			}
		}
	}
	return undefined
}
