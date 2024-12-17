import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state: () => {
    return {
    };
  },
  persist: {
    enabled: true,
    key: 'fsse-web-editor',
    storage: localStorage,
    paths: [],
  },
  actions: {
  },
});
