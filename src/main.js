import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from './store'
import moment from 'moment'
import 'jquery'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Axios from 'axios'
// 将axios挂载到Vue上
Axios.defaults.baseURL = "http://121.36.35.253:8080";
Vue.prototype.$axios = Axios;

Vue.prototype.moment = moment

Vue.config.productionTip = false;
Vue.use(ElementUI);

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");