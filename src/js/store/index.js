/* 
    author: summer_mushroom@163.com
    date: 2017.11.09
    des: vuex状态管理入口
*/
import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        user
    },
    getters
});

export default store
