<template>
    <div>
        <Tinymce v-model="content" :attachmentEnable="true" :resourceEnable="true" @update="test" />
    </div>
</template>

<script>
import Tinymce from "../src/Tinymce.vue";
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
    methods: {
        test: function (content) {
            console.log(content);
        },
    },
};
</script>

<style lang="less">
html {
    padding: 20px;
}
</style>
