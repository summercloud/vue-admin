<style scoped>
/* 
    author: summer_mushroom@163.com
    date: 2017.11.09
    des: login模块
*/
.m-login{
    width: 100%;
    height: 100%;
    background-image: url('../../../image/login-bg.jpg');
    background-position: 50% 50%;
}
.m-login .logo{
    height: 70px;
    text-align: center;
}
</style>
<template>
    <div class="m-login">
        <div class="f-pa f-bxycenter">
            <Card style="width:360px">
                <div class="logo"></div>
                <Form ref="formData" :model="formData" :rules="rules">
                    <FormItem prop="username" class="f-mb10">
                        <Input v-model="formData.username" placeholder="请输入用户名" size="large">
                            <Icon type="ios-person-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem prop="password" class="f-mb10">
                        <Input v-model="formData.password" type="password"  placeholder="请输入密码" size="large">
                            <Icon type="ios-locked-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem>
                        <Button size="large" type="primary" long @click="userLogin()">登录</Button>
                    </FormItem>
                </Form>
            </Card>
        </div>
    </div>
</template>
<script>
import store from 'js/store';

export default {
    store,
    data: function() {
        return {
            formData: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                    { required: true, message: '请填写用户名', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请填写密码', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        userLogin: function(){
            let self = this;
            
        }
    }
};
</script>