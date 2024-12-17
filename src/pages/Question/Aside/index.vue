<template>
  <div class="Aside">
    <a-select
      v-model:value="selectValue"
      :options="menuOptions"
      :fieldNames="{ label: 'label', value: 'key' }"
    ></a-select>

    <OptionContent :selectOptions="selectOptions" />
  </div>
</template>

<script setup>
import { useAside } from "@/hooks/useAside";
import OptionContent from "./OptionContent.vue";
const { selectValue, selectOptions, menuOptions, clickItemHandle } = useAside();

// *********************
// Hooks Function
// *********************

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

<style lang="less" scoped></style>
