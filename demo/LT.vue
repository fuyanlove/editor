<template>
    <div>
        <Tinymce
            v-model="content"
            :attachmentEnable="true"
            :resourceEnable="true"
            :domain="domain"
            :upload-url="uploadUrl"
        />
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
            domain: "https://cdn.iruxu.com",
            uploadUrl: "https://dev.api.iruxu.com/api/cms/admin/upload/tinymce",
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
