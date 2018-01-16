<style>
/* 
    author: summer_mushroom@163.com
    date: 2017.1.16
    des: 顶部导航栏组件
*/
.m-topbar .ivu-menu-dark.ivu-menu-horizontal .ivu-menu-item-active, .ivu-menu-dark.ivu-menu-horizontal .ivu-menu-item:hover, .ivu-menu-dark.ivu-menu-horizontal .ivu-menu-submenu-active, .ivu-menu-dark.ivu-menu-horizontal .ivu-menu-submenu:hover {
    background-color: #2d8cf0!important;
}
.m-topbar{
    width: 100%;
    height: 60px;
    background-color: #49505f;
    color: #fff;
    font-size: 14px;
    position: fixed;
}
.m-topbar .topLogo{
    width: 180px;
    height: 100%;
    float: left;
    background-color: #a0a7b5;
}
.m-topbar .topMenu{
    width: auto;
    overflow: hidden;
    float: left;
}
.m-topbar .topUser{
    float: right;
    right: 10px;
    height: 100%;
    margin-right: 10px;
}
.m-topbar .topUser .topUserBlock{
    float: left;
    height: 100%;
    line-height: 60px;
    padding: 0px 20px;
    border-right: 2px solid #343a44;
}
.m-topbar .topUser .topUserBlock:hover{
    background-color: #343a44;
}
</style>

<template>
    <div class="m-topbar">
        <div class="topLogo">this is logo</div>
        <div class="topMenu">
            <Menu mode="horizontal" theme="dark" :active-name="active_name">
                <MenuItem v-if="if_system" name="system_control">
                    系统管理
                </MenuItem>
                <MenuItem name="work_station">
                    工作台
                </MenuItem>
                <MenuItem name="project_list">
                    项目列表
                </MenuItem>
            </Menu>
        </div>
        <div class="topUser">
            <div class="topUserBlock f-csp">
                <Icon size="20" type="happy-outline"></Icon>
                {{user_name}}
            </div>
            <div class="topUserBlock f-csp">
                <Icon size="18" type="log-out"></Icon>
                登出
            </div>
        </div>
    </div>
</template>

<script>

const TopBar = {
    data: function() {
        return {
            active_name: this.$store.getters.role==='admin' ? "system_control" : "work_station",
            user_name: this.$store.getters.name,
            if_system: !!(this.$store.getters.role==='admin')
        }
    },
    methods: {

    }
};
export default TopBar;
</script>