import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Axios from 'axios'
// 将axios挂载到Vue上
Axios.defaults.baseURL = "http://192.168.1.115:8080";
Vue.prototype.$axios = Axios;

Vue.config.productionTip = false;
Vue.use(ElementUI);


new Vue({
    router,
    render: h => h(App)
}).$mount("#app");