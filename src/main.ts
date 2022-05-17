import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css'
import '@/style/index.css';

const app = createApp(App);
app.use(router).use(Antd).mount('#app');

