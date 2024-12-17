import { QTypeList } from '@/packages/components/QType/index'
import { PackagesCategoryEnum } from './constants.js'

// 遍历获取所有题库的组件
const configModules = import.meta.glob('./components/**/config.vue', { eager: true });
const indexModules = import.meta.glob('./components/**/index.vue', { eager: true });


// 所有表单数据 (侧边栏数据)
// 后续扩展其他大的分类
export const packagesList = {
    // 题型
    [PackagesCategoryEnum.QType]: QTypeList
}


// $ 配置信息缓存，提升组件加载速度
const componentCache = new Map();
/** 获取config.js文件 */
const loadConfig = (packageName, categoryName, keyName) => {
    const key = packageName + categoryName + keyName
    if (!componentCache.has(key)) {
        componentCache.set(key, import(`./components/${packageName}/${categoryName}/${keyName}/config.js`))
    }
    return componentCache.get(key)
}

/** 获取目标的配置信息 */
export const createComponent = async (targetData) => {
    const { category, key } = targetData

    const config = await loadConfig(targetData.package, category, key)
    return new config.default()
}


/**
 * 获取组件
 * @param {string} name 
 * @param {boolean} isView 
 */
const fetchComponent = (name, isView) => {
    // 判断是加载的是config还是index组件
    const module = isView ? indexModules : configModules
    for (const key in module) {
        const urlSplit = key.split('/')
        const componentName = urlSplit[urlSplit.length - 2]
        // 找到对应组件的文件
        if (componentName === name) {
            return module[key]
        }
    }
}

/** 获取展示组件 */
export const fetchViewComponent = (item) => {
    const { key } = item
    return fetchComponent(key, true).default
}

/** 获取配置组件 */
export const fetchConfigComponent = (item) => {
    const { key } = item
    return fetchComponent(key, false).default
}