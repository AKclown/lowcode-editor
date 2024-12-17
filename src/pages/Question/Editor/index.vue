<template>
  <div
    class="Editor"
    @drop="dragHandle"
    @dragover="dragoverHandle"
    @dragenter="dragoverHandle"
  >
    <!-- 虚拟机的位置 -->
    <div class="simulators">
      <div v-for="(item, index) in componentList" :key="item.id">
        <ItemWrap>
          <component :is="item.config.viewKey" :config="item" />
        </ItemWrap>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, watch } from "vue";
import ItemWrap from "./ItemWrap.vue";
import { useDrag } from "@/hooks/useDrag";
import { useEditorStore } from "@/store/useEditorStore.js";

const { dragHandle, dragoverHandle } = useDrag();
const editorStore = useEditorStore();

// *********************
// Hooks Function
// *********************

const componentList = computed(() => {
  return editorStore.getComponentList();
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

</script>

<style lang="less" scoped>
.Editor {
  width: 100%;
  height: 100%;
}
</style>
