<template>
  <div class="ItemsBox">
    <ul class="item-box-wrap">
      <li
        class="item-box"
        v-for="item in menuOptions"
        :key="item.key"
        :draggable="true"
        @dragstart="dragStartHandle($event, item)"
        @dragend="dragendHandle()"
        @dblclick="dblclickHandle(item)"
        @click="clickHandle(item)"
      >
        <img :src="item.image" alt="" />
        <p class="title">{{ item.title }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useComponents } from "@/hooks/useComponents.js";
import { useEditorStore } from "@/store/useEditorStore.js";
import {
  fetchViewComponent,
  fetchConfigComponent,
  createComponent,
} from "@/packages/index.js";
import { dragKey } from "@/packages/constants.js";
import omit from "lodash/omit";

const { componentInstall } = useComponents();
const editorStore = useEditorStore();
// *********************
// Hooks Function
// *********************

const props = defineProps({
  menuOptions: {
    type: Array,
    default: () => [],
  },
});

// *********************
// Default Function
// *********************

// *********************
// Life Event Function
// *********************

// *********************
// Service Function
// *********************

const dragStartHandle = (event, item) => {
  // 动态注册组件
  componentInstall(item.viewKey, fetchViewComponent(item));
  componentInstall(item.conKey, fetchConfigComponent(item));

  // 设置拖拽的数据
  event.dataTransfer.setData(dragKey, JSON.stringify(omit(item, ["image"])));

  // TODO: 是否需要添加状态记录创建中
};

const dragendHandle = () => {
  // TODO: 是否需要添加状态记录创建中
};

const dblclickHandle = async (item) => {
  // 动态注册组件
  componentInstall(item.viewKey, fetchViewComponent(item));
  componentInstall(item.conKey, fetchConfigComponent(item));
  // 创建新组建
  const newComponent = await createComponent(item);
  editorStore.addComponentList(newComponent, null);
  editorStore.setSelectId(newComponent.id);
};

const clickHandle = (item) => {};
</script>

<style lang="less" scoped>
.ItemsBox {
  padding: 10px;
  .item-box-wrap {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }
  .item-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ccc;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    img {
      width: 25px;
      height: 25px;
    }
    .title {
      text-align: center;
    }
  }
}
</style>
