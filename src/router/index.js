import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);
// 定义路由
const routes = [{
        path: "/",
        name: "home",
        component: Home,
        meta: {
            title: '蓉视通-化工管廊-公共管廊-智慧化工管廊数字管理系统'
        }

    },
    {
        path: "/product",
        name: "product",
        // 链接 硬件产品 视图
        component: () =>
            import ("../views/Product.vue"),
        meta: {
            title: '硬件产品-成都蓉视通科技有限公司'
        }

    },
    {
        path: "/productbyid",
        name: "productbyid",
        // 链接 硬件产品 视图
        component: () =>
            import ("../views/ProductById.vue"),
        meta: {
            title: '硬件产品-成都蓉视通科技有限公司'
        }

    },


    {
        path: "/solution",
        name: "solution",
        // 链接 解决方案 视图
        component: () =>
            import ("../views/Solution.vue"),
        meta: {
            title: '解决方案-成都蓉视通科技有限公司'
        }

    },
    {
        path: "/news",
        name: "news",
        // 链接 新闻动态 视图
        component: () =>
            import ("../views/News.vue"),
        meta: {
            title: '新闻动态-成都蓉视通科技有限公司'
        }

    },
    {
        path: "/newsbyid",
        name: "newsbyid",
        // 链接 硬件产品 视图
        component: () =>
            import ("../views/NewsById.vue"),
        meta: {
            title: '新闻动态-成都蓉视通科技有限公司'
        }

    },
    {
        path: "/about",
        name: "about",
        // 链接 关于我们 视图
        component: () =>
            import ("../views/About.vue"),
        meta: {
            title: '关于我们-成都蓉视通科技有限公司'
        }

    },
    {
        path: "/relation",
        name: "relation",
        // 链接 联系我们 视图
        component: () =>
            import ("../views/Relation.vue"),
        meta: {
            title: '联系我们-成都蓉视通科技有限公司'
        }

    },
    // {
    //     path: '/about/chatting',
    //     name: 'Chatting',
    //     component: () =>
    //         import ("../components/Chatting.vue")
    // },
    // {
    //     path: '/about/chat',
    //     name: 'Chat',
    //     component: () =>
    //         import ("../components/Chat.vue")
    // },
    // {
    //     path: '/about/ai',
    //     name: 'AI',
    //     component: () =>
    //         import ("../components/AI.vue")
    // }

];

const router = new VueRouter({
    mode: "hash",
    base: process.env.BASE_URL,
    routes
});

export default router;