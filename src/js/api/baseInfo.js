import request from 'js/util/request'

export function getMenuList(query) {
    return request({
        url: '/menu',
        method: 'GET',
        params: query
    })
}