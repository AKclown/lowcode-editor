// 组件相关的一些方法
export const useComponents = () => {

    // 动态注册组件
    const componentInstall = (key, comp) => {
        if (!window['$vue'].component(key) && comp) {
            window['$vue'].component(key, comp)
        }
    }

    return {
        componentInstall
    }
}





