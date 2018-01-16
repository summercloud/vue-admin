/* 
    author: summer_mushroom@163.com
    date: 2017.11.02
    des: 所有页面的入口页
*/
import Vue from 'vue';
import iView from 'iview';
import router from './js/router/index';
import App from './app.vue';
import store from './js/store';
import mixin from './js/util/mixin';
import 'iview/dist/styles/iview.css';

Vue.use(iView);
Vue.mixin(mixin);

const app = new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
});
