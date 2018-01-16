import request from 'js/util/request'

export function getMenuList(query) {
    return request({
        url: '/menu',
        method: 'GET',
        params: query
    })
}

export function getTestMock(query) {
    return request({
        url: '/mock',
        method: 'GET',
        params: query
    })
}
