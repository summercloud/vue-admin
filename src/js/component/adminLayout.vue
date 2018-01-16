<style>
/* 
    author: summer_mushroom@163.com
    date: 2017.1.16
    des: 管理员界面的框架，包含顶部导航栏以及侧面菜单栏
*/
.m-adminLayout .leftMenu{
    position: absolute;
    top: 60px;
    left: 0px;
    bottom: 0px;
    width: 180px;
    background-color: #49505f;
    overflow-x: hidden;
    overflow-y: auto;
    transition: width .5s;
}
.m-adminLayout .shrinkBlock{
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    background-color: #606a80;
}
.m-adminLayout .shrinkBlock p{
    transition: transform .5s;
}
.m-adminLayout .shrinkBlock:hover{
    background-color: #363e4f;
}
.m-adminLayout .menuShrink{
    width: 70px;
}
.iconReverse{
    transform: rotate(180deg);
}
.m-adminLayout .rightContant{
    width: 100%;
    padding: 60px 0px 0px 180px;
    background-color: #eee;
    height: 100px;
    transition: padding .5s;
}
.m-adminLayout .contentExpend{
    padding-left: 70px;
}
</style>

<template>
  <div class="m-adminLayout">
        <hc-topbar />
        <div class="leftMenu" :class="{menuShrink: shrink}">
            <Menu mode="vertical" width="180px" theme="dark" active-name="dashboard">
                <MenuItem name="dashboard">
                    <Icon size="24" type="stats-bars"></Icon>
                    <span class="f-ml20">总览</span>
                </MenuItem>
                <MenuItem name="member_ctrl">
                    <Icon size="24" type="ios-body"></Icon>
                    <span class="f-ml20">成员管理</span>
                </MenuItem>
                <MenuItem name="role_ctrl">
                    <Icon size="24" type="ios-people"></Icon>
                    <span class="f-ml20">角色管理</span>
                </MenuItem>
                <MenuItem name="auth_ctrl">
                    <Icon size="24" type="ios-unlocked"></Icon>
                    <span class="f-ml20">权限管理</span>
                </MenuItem>
            </Menu>
            <div class="shrinkBlock f-fwb f-csp" @click="shrinkMenu()">
                <p :class="{iconReverse: shrink}">
                    >>
                </p>
            </div>
        </div>
        <div class="rightContant" :class="{contentExpend: shrink}">
            ssss
        </div> 
  </div>
</template>

<script>
import TopBar from './topBar.vue';

const AdminLayout = {
    data: function() {
        return {
            shrink: false
        }
    },
    methods: {
        shrinkMenu () {
            this.shrink = !this.shrink;
        }
    },
    components: {
        'hc-topbar': TopBar
    }
};

export default AdminLayout;
</script>
