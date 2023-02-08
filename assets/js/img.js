// 图片地址&懒加载
import { getCdnLink } from "@deepberry/common/js/utils";
//import {__cdn}
function lazyLoad(str) {
    if (!str) return;
    // eslint-disable-next-line
    const REG = /<img(.*?)src=[\'"]([^\'"]+)[\'"](.*?)>/gi;
    let item;
    while ((item = REG.exec(str))) {
        let origin = item[0];
        let prefix = item[1];
        // let src = getCdnLink(item[2]);
        let src = item[2]?.replace("/relative_path", "cdn.deepberry.cn") || "";
        let suffix = item[3];

        let output = `<img ${prefix} loading="lazy" src="${src}" ${suffix}>`;
        str = str.replace(origin, output);
    }
    return str;
}
export default lazyLoad;
