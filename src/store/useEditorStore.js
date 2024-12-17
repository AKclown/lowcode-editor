import { defineStore } from 'pinia';

export const useEditorStore = defineStore('editor', {
  state: () => {
    return {
      componentList: [],
      selectId: null,
    };
  },
  persist: {
    enabled: true,
    key: 'fsse-web-editor-editor',
    storage: localStorage,
    paths: [],
  },
  actions: {
    getComponentList() {
      // $ 后续可能有特定的逻辑， 因此不直接获取componentList
      return this.componentList
    },
    addComponentList(component, index = null) {
      if (index !== null) {
        // 在指定位置插入
        this.componentList.splice(index, 0, component)
      } else {
        this.componentList.push(component)
      }
    },
    setSelectId(selectId) {
      this.selectId = selectId
    }
  },
});
