<template>
  <div class="OptionContent">
    <ul>
      <li v-for="item in menuOptions" :key="item.value" class="item-menu">
        <p class="title">{{ item.label }}</p>
        <ItemsBox :menuOptions="category[item.value]" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed, reactive } from "vue";
import ItemsBox from "./ItemsBox.vue";

// *********************
// Hooks Function
// *********************

const props = defineProps({
  selectOptions: {
    type: Object,
    default: () => {},
  },
});

// 类型分类
const category = computed(() => {
  const { list = [] } = props.selectOptions;
  const data = {};
  for (let item of list) {
    if (!data[item.category]) {
      data[item.category] = [item];
    } else {
      data[item.category].push(item);
    }
  }
  return data;
});

// 菜单列表
const menuOptions = computed(() => {
  const menu = [];
  for (let key in category.value) {
    const label = category.value[key][0].categoryName;
    menu.push({
      label,
      value: key,
    });
  }
  return menu;
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
.OptionContent {
  .item-menu {
    margin-top: 20px;
    .title {
      background-color: rgba(0, 0, 0, 0.06);
      height: 40px;
      line-height: 40px;
      border-radius: 5px;
      padding-left: 10px;
    }
  }
}
</style>
