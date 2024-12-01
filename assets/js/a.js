// 链接标签
import url from "url";

function formatLink(str) {
    if (!str) return;

    const REG = /<a(.*?)href=[\\'"]([^\\'"]+)[\\'"](.*?)>(.*?)<\/a>/gi;
    let item;
    while ((item = REG.exec(str))) {
        let origin = item[0];
        let prefix = item[1];

        let href = item[2];
        let to = url.parse(href);
        const whiteHost = /https?:\/\/.*\.jx3box\.com/;

        let skip = "";
        if (!whiteHost.test(to.hostname)) {
            skip = 'target="_blank"';
        }

        // markdown中的锚点跳转
        let isHashAnchor = href.startsWith("#");
        if (isHashAnchor) {
            skip = 'target="_self"';
        }

        let suffix = item[3];
        let text = item[4];

        let output = `<a ${skip} ${prefix} href="${href}" ${suffix}>${text}</a>`;
        str = str.replace(origin, output);
        // console.log(origin,output)
    }
    // console.log(str)
    return str;
}
export default formatLink;
