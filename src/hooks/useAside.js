import { PackagesCategoryEnum, PackagesCategoryEnumName } from '@/packages/constants.js'
import { packagesList } from '@/packages/index.js'

import { ref } from 'vue'

// 分类名称
const packagesListInfo = {
    [PackagesCategoryEnum.QType]: {
        // 占位符
        icon: '',
        label: PackagesCategoryEnumName.QType
    },
}


export const useAside = () => {
    const menuOptions = [];
    const selectValue = ref('')
    const selectOptions = ref('')

    // *********************
    // Hooks Function
    // *********************

    // *********************
    // Default Function
    // *********************

    const init = () => {
        for (const key in packagesList) {
            menuOptions.push({
                key: key,
                icon: packagesListInfo[key].icon,
                label: packagesListInfo[key].label,
                list: packagesList[key]
            })
        }
        // 默认选中第一个
        selectValue.value = menuOptions[0].key
        selectOptions.value = menuOptions[0]
    }

    // *********************
    // Life Event Function
    // *********************

    init()

    // *********************
    // Service Function
    // *********************

    const clickItemHandle = (key, item) => {
        selectOptions.value = item
    }

    // *********************
    // Export Function
    // *********************

    return {
        selectValue,
        selectOptions,
        menuOptions,
        clickItemHandle
    }
}       
