import { ref } from 'vue'
import { useEditorStore } from "@/store/useEditorStore.js";
import { fetchViewComponent, fetchConfigComponent } from "@/packages/index.js";
import { useComponents } from "@/hooks/useComponents.js";
import { toRaw } from "vue";

export const useComInstall = () => {
  const show = ref(false)
  const editorStore = useEditorStore();
  const componentList = editorStore.getComponentList();
  const { componentInstall } = useComponents();

  // !!注册组件(一开始无法获取window['$vue'])
  const intervalTiming = setInterval(() => {
    if (window['$vue'].component) {
      clearInterval(intervalTiming)

      const intComponent = (config) => {
        componentInstall(config.viewKey, fetchViewComponent(config));
        componentInstall(config.conKey, fetchConfigComponent(config));
      }

      componentList.forEach(async (item) => {
        const config = toRaw(item.config);
        intComponent(config)
      })
      show.value = true
    }
  }, 200)
  return {
    show
  }
}
