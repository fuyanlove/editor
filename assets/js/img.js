// 图片地址&懒加载
import __common from "@deepberry/common/data/common.json";
function lazyLoad(str) {
    if (!str) return;

    if (str.startsWith("/")) {
        return __common.__cdn + str;
    }
    return str;
}
export default lazyLoad;
