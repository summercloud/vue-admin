/* 
    author: summer_mushroom@163.com
    date: 2017.11.02
    des: 路由入口文件
*/
import AdminLayout from 'component/adminLayout.vue';

// 登录页面
const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login - 登录'
    },
    component: resolve => { require(['pages/login/index.vue'], resolve); }
};
const page404 = {
    path: '/*',
    name: 'page404',
    meta: {
        title: '404-页面不存在'
    },
    component: resolve => { require(['pages/page404/index.vue'], resolve); }
};

// 管理员系统的相关路由，顶部导航以及左部菜单公用
const adminRouter = {
    path: '/',
    name: 'index',
    redirect: '/home',
    component: AdminLayout,
    children: [
        { path: '/home', title: 'admin-home', name: 'admin_home', component: resolve => { require(['pages/admin/home/index.vue'], resolve); } }
    ]
}

const routers = [
    loginRouter,
    adminRouter,
    // 404页面必须处于数组最后，若前面路由都匹配不成立，则显示404
    page404
];
export default routers;
