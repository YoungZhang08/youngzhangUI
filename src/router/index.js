// 引入vue框架
import Vue from 'vue';
// 引入路由依赖
import Router from 'vue-router';
// 引入页面组件，命名为index
import index from '@/components/index.vue';

//常用布局组件
import layout from '@/components/layout/layout.vue';
//返回顶部组件
import goTop from '@/components/goTop/goTop.vue';
//导航栏组件
import navGuard from '@/components/navGuard/navGuard.vue';
//select选择框组件
import selFrame from '@/components/selFrame/selFrame.vue';
//弹窗组件
import popUp from '@/components/popUp/popUp.vue';
//滑块组件
import slide from '@/components/slide/slide.vue';



Vue.use(Router);

const router = new Router({
    routes: [{
        path: '/',
        name: 'index',
        component: index,
        children: [{
            path: '/layout',
            name: 'layout',
            component: layout
        }, {
            path: '/navGuard',
            name: 'navGuard',
            component: navGuard
        }, {
            path: '/goTop',
            name: 'goTop',
            component: goTop
        }, {
            path: '/selFrame',
            name: 'selFrame',
            component: selFrame
        }, {
            path: '/popUp',
            name: 'popUp',
            component: popUp
        }, {
            path: '/slide',
            name: 'slide',
            component: slide
        }]
    }, ]
});

export default router;