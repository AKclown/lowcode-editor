
import { dragKey } from "@/packages/constants.js";
import { createComponent } from "@/packages/index.js";
import { useEditorStore } from "@/store/useEditorStore.js";

export const useDrag = () => {
    const editorStore = useEditorStore();

    // *********************
    // 拖拽组件到编辑器里
    // *********************

    const dragHandle = async (e) => {
        e.preventDefault()

        // 获取拖拽数据
        const drayDataString = e.dataTransfer.getData(dragKey)
        if (!drayDataString) {
            return
        }
        const dropData = JSON.parse(drayDataString)
        const newComponent = await createComponent(dropData)
        editorStore.addComponentList(newComponent, null);
        editorStore.setSelectId(newComponent.id);
    }


    // *********************
    // 进入拖拽区域
    // *********************

    const dragoverHandle = (e) => {
        e.preventDefault()
        e.stopPropagation()

        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy'
    }

    return {
        dragHandle,
        dragoverHandle
    }

}
