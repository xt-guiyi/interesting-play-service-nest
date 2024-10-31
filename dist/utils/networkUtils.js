"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocalIpAddress = getLocalIpAddress;
const os = require("os");
function getLocalIpAddress() {
    const interfaces = os.networkInterfaces();
    for (const ifaceName of Object.keys(interfaces)) {
        const iface = interfaces[ifaceName];
        for (const alias of iface) {
            if (alias.family === 'IPv4' && !alias.internal) {
                return alias.address;
            }
        }
    }
    return undefined;
}
//# sourceMappingURL=networkUtils.js.map