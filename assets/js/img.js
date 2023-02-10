// 图片地址&懒加载
import { __cdn } from "@deepberry/common/data/common.json";
//import {__cdn}
function lazyLoad(str) {
    if (!str) return;

    if (str.startsWith("/")) {
        return __cdn + str;
    }
    return str;
}
export default lazyLoad;
