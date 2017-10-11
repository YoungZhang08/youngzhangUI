import Vue from 'vue'
// 引入vue框架
import Router from 'vue-router'
// 引入路由依赖
import index from '@/components/index.vue'
// 引入页面组件，命名为index

Vue.use(Router)

const routes = [{
    path: '/',
    name: 'index',
    component: index
}, ]

export default new Router({
    routes
});