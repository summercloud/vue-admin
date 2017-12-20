/* 
    author: summer_mushroom@163.com
    date: 2017.11.09
    des: 集合util.js和request.js等工具函数
*/
import request from './request.js';

const mixin = {
    methods: {
        $_request: function (url, opt) {
            return request(url, opt);
        }
    }
}

export default mixin;
