// 第三方UI组件
import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import T from "./T.vue";

const app = createApp(T);

app.use(ElementPlus);

app.mount("#app");
