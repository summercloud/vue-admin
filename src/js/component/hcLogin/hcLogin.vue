<template>
    <div class="m-login" :class="{show: islogin}">
        <div class="f-pa f-bxycenter">
            <Card style="width:360px">
                <div class="logo"></div>
                <Form ref="formData" :model="formData" :rules="rules">
                    <FormItem prop="username" class="f-mb10">
                        <Input v-model="formData.username" class="s-inputLine" placeholder="请输入用户名" size="large" />
                    </FormItem>
                    <FormItem prop="password" class="f-mb10">
                        <Input v-model="formData.password" class="s-inputLine" type="password"  placeholder="请输入密码" size="large" />
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
/* 
    author: summer_mushroom@163.com
    date: 2017.11.09
    des: login模块
*/
import Vue from 'vue';
import store from 'js/store';

export default {
    store,
    data: function() {
        return {
            islogin: true,
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
            this.$refs.formData.validate((valid) => {
                if (valid) {
                    self.$store.dispatch('userLogin', self.formData).then(()=>{
                        location.reload();
                        /* self.destroy(); */
                    });
                } else {
                    self.$Notice.error({
                        title: '信息错误',
                        desc: '请填写正确的登录信息'
                    });
                }
            })
        },
        destroy: function(){
            this.islogin = false;
            setTimeout(function() {
                document.body.removeChild(document.getElementsByClassName('m-login')[0]);
            }, 500);
        }
    }
};
</script>
<style scoped>
.m-login{
    position: absolute;
    width: 100%;
    height: 100%;
    top: -100%;
    left: 0px;
    z-index: 1000;
    background-image: url('../../../image/login-bg.jpg');
    background-position: 50% 50%;
    transition: top .5s;
}
.show{
    top: 0px;
}
.m-login .logo{
    height: 70px;
    text-align: center;
    /* background: url('../../../image/logo-gray.png') center no-repeat; */
}
</style>