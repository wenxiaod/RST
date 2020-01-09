import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);
// 定义路由
const routes = [{
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/product",
        name: "product",
        // 链接 硬件产品 视图
        component: () =>
            import ("../views/Product.vue")
    },
    {
        path: "/productbyid",
        name: "productbyid",
        // 链接 硬件产品 视图
        component: () =>
            import ("../views/ProductById.vue")
    },
    {
        path: "/rst1100",
        name: "rst1100",
        // 链接 硬件产品详情页 视图
        component: () =>
            import ("../views/RST1100.vue")
    },
    {
        path: "/kt100",
        name: "kt100",
        // 链接 硬件产品详情页 视图
        component: () =>
            import ("../views/KT100.vue")
    },
    {
        path: "/cpe",
        name: "cpe",
        // 链接 硬件产品详情页 视图
        component: () =>
            import ("../views/CPE.vue")
    },
    {
        path: "/led",
        name: "led",
        // 链接 硬件产品详情页 视图
        component: () =>
            import ("../views/LED.vue")
    },

    {
        path: "/solution",
        name: "solution",
        // 链接 解决方案 视图
        component: () =>
            import ("../views/Solution.vue")
    },
    {
        path: "/news",
        name: "news",
        // 链接 新闻动态 视图
        component: () =>
            import ("../views/News.vue")
    },
    {
        path: "/newsbyid",
        name: "newsbyid",
        // 链接 硬件产品 视图
        component: () =>
            import ("../views/NewsById.vue")
    },
    {
        path: "/about",
        name: "about",
        // 链接 关于我们 视图
        component: () =>
            import ("../views/About.vue")
    },
    {
        path: "/relation",
        name: "relation",
        // 链接 联系我们 视图
        component: () =>
            import ("../views/Relation.vue")
    },
];

const router = new VueRouter({
    mode: "hash",
    base: process.env.BASE_URL,
    routes
});

export default router;