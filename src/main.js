import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


// 全局过滤
import './filters';
// 引入进度条样式
import 'nprogress/nprogress.css';
import "./assets/css/main.scss";
// svg
import "./assets/icon";
if (process.env.VUE_APP_LOCAL_MOCK === 'true') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

// 引入全局组件
import './components';

//引入自定义滚动条
import HappyScroll from 'vue-happy-scroll';
import 'vue-happy-scroll/docs/happy-scroll.css';

//自动滚动插件
import scroll from 'vue-seamless-scroll';

import { dateFormat } from '@/utils/BaseUtil';

Vue.prototype.$dateFormat = dateFormat;
Vue.prototype.$host = process.env.VUE_APP_IMAHE_HOST;

Vue.config.productionTip = false;

Vue.use(HappyScroll);

Vue.use(scroll);

Vue.use(ElementUI);

import './router/permission';
import './directive'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
