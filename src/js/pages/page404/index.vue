<style>
/* 
    author: summer_mushroom@163.com
    date: 2018.1.06
    des: 404页面处理
*/
.m-page404 .error404-container{
    width: 40%;
    margin-top: 100px;
}
</style>

<template>
    <div class="m-page404 f-pr">
        <div class="error404-container f-bxcenter f-pa">
            <Card>
                <div class="f-tac s-fs-40 f-fwb f-mb20">4<span><Icon type="ios-navigate-outline"></Icon></span>4</div>
                <p class="">页 面 不 存 在 <Icon type="sad-outline" size="20"></Icon></p>
                <p class="">YOU&nbsp;&nbsp;LOOK&nbsp;&nbsp;LOST <Icon type="android-sad" size="20"></Icon></p>
                <div class="f-tac f-mt40">
                    <Button @click="goHome" size="large" style="width: 200px;" type="ghost">返回首页</Button>
                    <Button @click="backPage" size="large" style="width: 200px;margin-left: 40px;" type="primary">返回上一页</Button>
                </div>   
            </Card>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Error404',
    methods: {
        backPage () {
            this.$router.go(-1);
        },
        goHome () {
            // unfinish 判断角色，若为管理员返回首页，若为用户返回用户首页
            /* this.$router.push({
                name: 'home_index'
            }); */
        }
    }
};
</script>