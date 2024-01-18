/*
 * @Author: iRuxu
 * @Date: 2022-07-04 10:42:02
 * @LastEditTime: 2022-07-08 19:27:07
 * @Description:config
 */
const path = require("path");
const pkg = require("./package.json");
module.exports = {
    //❤️ Multiple pages ~
    pages: {
        article: {
            title: "Home",
            entry: "demo/A.js",
            template: "public/article.html",
            filename: "index.html",
        },
        tinymce: {
            title: "Tinymce编辑器",
            entry: "demo/T.js",
            template: "public/tinymce.html",
            filename: "tinymce/index.html",
        },
    },

    //⚛️ Proxy ~
    devServer: {
        proxy: {
            "/api/cms": {
                target:
                    process.env["DEV_SERVER"] == "true"
                        ? "http://localhost:4100"
                        : "https://api.gatesstsuperlaser.com/",
            },
        },
    },

    //❤️ define path for static files ~
    publicPath: process.env.NODE_ENV === "development" ? "/" : `${process.env.STATIC_PATH}${pkg.name}/`,

    //❤️ Webpack configuration
    chainWebpack: (config) => {
        //💘 html-webpack-plugin ~
        // Multiple pages disable the block below
        // config.plugin("html").tap((args) => {
        //     args[0].meta = {
        //         //------设置SEO信息
        //         Keywords: project.keys,
        //         Description: project.desc,
        //     };
        //     args[0].title = project.title; //------自动添加标题后缀
        //     return args;
        // });

        //💝 in-line small imgs ~
        config.module.rule("images").set("parser", {
            dataUrlCondition: {
                maxSize: 4 * 1024, // 4KiB
            },
        });

        //💝 in-line svg imgs ~
        config.module.rule("vue").use("vue-svg-inline-loader").loader("vue-svg-inline-loader");

        //💖 import common less var * mixin ~
        const types = ["vue-modules", "vue", "normal-modules", "normal"];
        types.forEach((type) => addStyleResource(config.module.rule("less").oneOf(type)));
    },
};

function addStyleResource(rule) {
    var preload_styles = [];
    preload_styles.push(
        path.resolve(__dirname, "./node_modules/csslab/base.less"),
        path.resolve(__dirname, "./assets/css/var.less")
    );
    rule.use("style-resource").loader("style-resources-loader").options({
        patterns: preload_styles,
    });
}
