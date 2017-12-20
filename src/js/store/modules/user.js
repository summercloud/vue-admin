/* 
    author: summer_mushroom@163.com
    date: 2017.11.10
    des: 用于保存用户相关信息，及用户相关操作
*/
import request from 'js/util/request';

const user = {
    state: {
        user: '',
        name: '',
        token: '',
        isSuperAdmin: '',
    },

    mutations: {
        SET_NAME: (state, name) => {
            state.name = name
        },
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_SUPPERADMIN: (state, supperadmin) => {
            state.isSuperAdmin = supperadmin
        }
    },

    actions: {
        userLogin ({commit}, userInfo) {
            const username = userInfo.username.trim();
            return new Promise((resolve, reject) => {
                request('/rest/login', {
                    method: 'POST',
                    data: {
                        username,
                        password: userInfo.password
                    },
                    formlize: true
                }).then(res => {
                    commit('SET_NAME', res.data.username);
                    commit('SET_TOKEN', res.data.token);
                    commit('SET_SUPPERADMIN', res.data.isSuperAdmin);
                    resolve(res.data);
                });
            })
        },
        currentUser({commit}) {
            return new Promise((resolve, reject) => {
                request('/rest/currentuser', {
                    method: 'EGT',
                }).then(res => {
                    commit('SET_NAME', res.data.username);
                    resolve(res.data);
                });
            })
        }
    }
}

export default user
