/* 
    author: summer_mushroom@163.com
    date: 2017.11.10
    des: store中的getter
*/
const getters = {
    name: state => state.user.name,
    token: state => state.user.token,
    role: state => state.user.role,
}

export default getters
