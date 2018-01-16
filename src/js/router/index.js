/* 
    author: summer_mushroom@163.com
    date: 2018.1.15
    des: 路由文件入口，配置路由规则
*/

import Vue from 'vue';
import VueRouter from 'vue-router';
import routers from './router';
import Cookies from 'js-cookie';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: routers
});

router.beforeEach((to, from, next) => {
    // 如果访问的页面不是登陆页面，且未登录，则跳转至登陆页面
    /* if (to.name !== 'login' && !Cookies.get('user')) {
        next({
            name: 'login'
        });
    } */
    next();
});

export default router;