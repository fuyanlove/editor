// 图片地址&懒加载
import { __cdn } from "../../src/settings";
function lazyLoad(str) {
    if (!str) return;

    if (str.startsWith("/")) {
        return __cdn + str;
    }
    return str;
}
export default lazyLoad;
