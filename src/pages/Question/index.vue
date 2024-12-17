<template>
  <div class="Question">
    <Header />
    <article>
      <div class="aside-layout">
        <Aside />
      </div>
      <div class="editor-layout" v-if="show">
        <Editor />
      </div>
      <div class="setting-layout" v-if="show">
        <Setting />
      </div>
    </article>
  </div>
</template>

<script setup>
import Header from "./Header/index.vue";
import Aside from "./Aside/index.vue";
import Editor from "./Editor/index.vue";
import Setting from "./Setting/index.vue";
import { useComInstall } from "@/hooks/useComInstall";

// TODO: 编辑器引擎相关

// *********************
// Hooks Function
// *********************

// *********************
// Default Function
// *********************

// !! 刚开始缓存可能有数据，需要先注册对应的组件
const { show } = useComInstall();

// *********************
// Life Event Function
// *********************

// *********************
// Service Function
// *********************
</script>

<style lang="less" scoped>
.Question {
  width: 100vw;
  height: 100vh;
}
article {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  height: 100%;
  .editor-layout {
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
  }
}
</style>
