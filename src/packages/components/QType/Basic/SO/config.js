import cloneDeep from 'lodash/cloneDeep'
import { PublicConfigClass } from '@/packages/public/publicConfig.js'
import { SOConfig } from './index.js'

export default class Config extends PublicConfigClass {
    quesTypeCode = SOConfig.key
    // 当前的config信息
    config = cloneDeep(SOConfig)
    // 当前schema的版本号，之后映射视图组件和配置组件
    version = '1.1.0'
}