<template>
    <div class="m-layout">
        <div class="m-topMenu">
            <Menu mode="horizontal" theme="dark" >
                <div class="u-mainLogo"></div>
                <div class="f-fr">
                    <div class="funcBlock">
                        {{$store.getters.name}}
                    </div>
                    <div class="funcBlock s-fs-24" @click="logout">
                        <Icon type="log-out" class="center"></Icon>
                    </div>
                </div> 
            </Menu>
        </div>
        <div class="m-content">
            <div class="m-sidebar">
                <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                            Item 1
                        </template>
                        <MenuItem name="1-1">Option 1</MenuItem>
                        <MenuItem name="1-2">Option 2</MenuItem>
                        <MenuItem name="1-3">Option 3</MenuItem>
                    </Submenu>
                    <MenuItem name="2">
                            <Icon type="ios-keypad"></Icon>
                            Item 2
                    </MenuItem>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="ios-analytics"></Icon>
                            Item 3
                        </template>
                        <MenuItem name="3-1">Option 1</MenuItem>
                        <MenuItem name="3-2">Option 2</MenuItem>
                    </Submenu>
                </Menu>
            </div>
            <div class="m-layoutMain"> 
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
/* 
    author: summer_mushroom@163.com
    date: 2017.11.02
    des：主入口页面，包含页面架构，及登出操作等
*/
import HcLogin from 'component/hcLogin/index.js';

export default {
    data: function(){
        return {
            
        }
    },
    created: function() {
        let self = this;
        this.$_request('/menu', {
            method: 'GET'
        }).then(res => {
            console.log('成功');
        });
        this.$store.dispatch('currentUser').then(data => {
            return;
        });
    },
    methods: {
        logout: function(){
            let self = this;
            self.$Modal.confirm({
                title: '确认操作',
                content: '确认登出吗？',
                onOk: function(){
                    self.$_request('/rest/logout', {
                        method: 'POST'
                    }).then(res => {
                        HcLogin.newInstance();
                    });
                }
            });
        }
    }
}
</script>
<style scoped>
    @import 'css/common.css';
    @import 'css/util.css';

    .m-topMenu .funcBlock{
        float: left;
        height: 70px;
        line-height: 70px;
        padding: 0px 10px;
        min-width: 80px;
        text-align: center;
        cursor: pointer;
    }
    .m-topMenu .funcBlock .center{
        transform: translate(0, 90%);
    }
    .m-topMenu .funcBlock:hover{
        background-color: #f3f3f3;
        color: #2d8cf0;
    }
</style>