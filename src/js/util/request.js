/* 
    author: summer_mushroom@163.com
    date: 2017.11.09
    des: 使用axios处理ajax请求
*/
import axios from 'axios';
import HcLogin from 'component/hcLogin/index.js';
import { Notice } from 'iview';

const _onerror = function (error) {
    Notice.error({
        title: '请求错误',
        desc: error.response.data.data || error.message || '请求发生错误！'
    });
}

const _formlize = function(obj) {
    let query = '';
    let name, value, fullSubName, subName, subValue, innerObj, i;

    for (name in obj) {
        value = obj[name];

        if (value instanceof Array) {
            for (i = 0; i < value.length; ++i) {
                subValue = value[i];
                fullSubName = name + '[' + i + ']';
                innerObj = {};
                innerObj[fullSubName] = subValue;
                query += _formlize(innerObj) + '&';
            }
        } else if (value instanceof Object) {
            for (subName in value) {
                subValue = value[subName];
                var str = 'labels+\[+[0-9]+\]$';
                if (name.match('labels') && !name.match(str)) {
                    fullSubName = name + '[' + subName + ']';
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    query += _formlize(innerObj) + '&';
                } else {
                    fullSubName = name + '.' + subName + '';
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    query += _formlize(innerObj) + '&';
                }
            }
        } else if (value == null || value === '') {
            delete obj[name];
        } else {
        // edit hw 2015 5-11
        // else if (value !== undefined && value !== null) {
        // jshint -W116
            query += encodeURIComponent(name) + '=' + encodeURIComponent((value == null ? '' : value)) + '&';
        }
    }

    return query.length ? query.substr(0, query.length - 1) : query;
}
/* 
    opt中可接受的参数，详见https://github.com/axios/axios
    添加额外参数：_onerror
*/
axios.defaults.baseURL = 'http://10.10.101.145:30099';

const request = function (url, opt) {
    opt = opt || {};
    opt.method = opt.method || 'GET';
    opt.data = opt.data || {};
    opt.headers = opt.headers || {};
    opt.withCredentials = true;
    let errorfn = typeof opt.onerror === 'function' ? opt.onerror : _onerror;

    if (opt.formlize) {
        opt.transformRequest = (data, headers) => {
            return _formlize(data);
        }
    }

    return new Promise((resolve, reject) => {
        axios(url, opt).then(function (res) {
            if (res.status >= 400 || res.status < 200) {
                errorfn.apply(this, arguments);
            } else {
                resolve(res.data);
            }
        }).catch(function (error) {
            if (error.response.status === 401) {
                HcLogin.newInstance();
            } else {
                errorfn.apply(this, arguments);
            }
        });
    });
}

export default request;
