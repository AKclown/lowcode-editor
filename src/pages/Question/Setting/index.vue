<template>
  <div class="Setting">
    <div v-if="!selectTarget"></div>
    <div v-else>
      <component :is="selectTarget.config.conKey" :config="selectTarget" />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useEditorStore } from "@/store/useEditorStore.js";
const editorStore = useEditorStore();

// *********************
// Hooks Function
// *********************

const componentList = computed(() => {
  return editorStore.getComponentList();
});

const selectTarget = computed(() => {
  const selectId = editorStore.selectId;
  const target = componentList.value.find((item) => item.id === selectId);
  console.log("target: ", target);
  return target;
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
.Setting {
  width: 100%;
  height: 100%;
}
</style>
