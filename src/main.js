import './reset.css'
import Antd from 'ant-design-vue';
import { createApp } from 'vue'
import App from './App.vue'
import pinia from '@/store/pinia';

const app = createApp(App);

app.use(pinia);

app.use(Antd).mount('#app');

// 挂载到 window
window['$vue'] = app
