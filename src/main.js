// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 引入vue框架
import App from './App'
// 引入根组件
import router from './router'
// 引入路由设置
import './assets/css/reset.css'

// 关闭生产模式下给出的提示
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
    // 引入根组件App.vue
})