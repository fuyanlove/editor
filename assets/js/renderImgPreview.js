import $ from "jquery";

function renderImgPreview(vm, selector = ".c-article img") {
    // 获取src不为空的图片
    let imgs = $(selector).filter(function () {
        return $(this).attr("src") != "";
    });
    imgs.each((i, ele) => {
        // 加载全部src（lazyload）
        vm.images.push($(ele).attr("src"));
        // 绑定事件挂钩索引位置
        $(ele).on("click", (e) => {
            if (e.target.classList.contains("e-jx3-emotion-img")) return;
            vm.imageIndex = i;
            vm.showImageViewer = true;
            document.body.style.overflow = "hidden";
        });
    });
}

export default renderImgPreview;
