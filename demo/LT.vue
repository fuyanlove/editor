<template>
    <div>
        <Tinymce v-model="content" :attachmentEnable="true" :resourceEnable="true" />
    </div>
</template>

<script>
import Tinymce from "../src/LightTinymce.vue";
import demohtml from "./content_1";
export default {
    name: "T",
    data: function () {
        return {
            content: demohtml,
        };
    },
    components: {
        Tinymce,
    },
};
</script>

<style lang="less">
html {
    padding: 20px;
}
</style>
