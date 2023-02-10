# Article & Editor

# Dev

```
$ npm install
$ npm run serve
$ open http://localhost:8080  //文章渲染
$ open http://localhost:8080/tinymce  //tinymce编辑器
$ tinymce http://localhost:3000
```

## Step.1 Install

```
npm install @deepberry/editor
```

## Step.2 Import

-   指定模块

```javascript
import Article from "@deepberry/editor/src/Article.vue";
import Tinymce from "@deepberry/editor/src/Tinymce.vue";
```

## Step.3 Usage

文章

```html
<article :content="content" directorybox="#directory" />
```

编辑器

```html
<script src="https://cdn.deepberry.cn/static/tinymce/tinymce.min.js?v=0.1.0"></script>
<Tinymce v-model="content" :attachmentEnable="true" :resourceEnable="true" :height="300" />
```

批量附件上传插入/资源快捷查询插入

```html
<Upload @insert="insertWhere" @update="getList" @htmlUpdate="getHTML" />
```
