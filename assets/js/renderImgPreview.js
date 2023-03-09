import "viewerjs/dist/viewer.css";
import Viewer from "viewerjs";

function renderImgPreview(vm, selector = ".c-article") {
    // 之后可能会有排除的情况
    new Viewer(document.querySelector(selector), {
        toolbar: false,
        navbar: false,
    });
}

export default renderImgPreview;
