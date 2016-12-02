<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div class="login-box" id="login-box">
        <header-block title="Login"></header-block>
        <div class="login-content">
            <div class="text-area">
                <div class="text-item"><input type="text" v-model="name" class="login-input" placeholder="ID"/></div>
                <div class="text-item"><input type="password" v-model="psd" class="login-input" placeholder="PSD"/>
                </div>
            </div>
            <div>
                <input type="button" class="signin-btn" value="signin" v-on:click="postLogin"/>
            </div>
        </div>

    </div>
</template>

<script>

    /*引入返回组件*/
    import HeaderBlock from './../public/Bar-GoBack'
    /*获取vuex的mutation方法*/
    import {mapMutations} from 'vuex'
 /*   import VueRouter from "vue-router"
    import Vue from "vue"
    Vue.use(VueRouter)*/
    console.log(mapMutations);
    export default {
        data () {
            return {
                name : '',
                psd : '',


            }
        },
        methods : {
            ...mapMutations(['UPDATEUSER']),
            postLogin(){
                if(!this.name && !this.name.trim()){
                    alert('输入用户名');
                    return;
                }
                if(!this.psd && !this.psd.trim()){
                    alert('输入密码');
                    return;
                }
                console.log(this.id,this.name,this.psd);


                /*把用户信息更新到vuex的store*/
                this.UPDATEUSER({id : '2542', name : this.name});
                /*成功后跳转到用户中心*/

                this.$router.push("user");


            }
        },
        components : {
            HeaderBlock
        }
    }
</script>

<style scoped>
    .login-box{
        position:relative;
    }
    .login-content{
        width:300px;
        min-width:200px;
        margin:100px auto auto auto;
    }
    .text-area{
    }
    .text-item{
        height:40px;
        border:1px solid #42b983;
        border-radius:6px;
        margin-bottom:5px;
    }
    .login-input{
        width:100%;
        border-radius:6px;
        outline:none;
        -webkit-box-sizing:border-box;
        -moz-box-sizing:border-box;
        box-sizing:border-box;
        vertical-align:middle;
        line-height:inherit;
        height:inherit;
        -webkit-font-smoothing:antialiased;
        color:#333333;
        font-size:14px;
        font-weight:200;
        padding-left:5px;
        background:white;
        border:none;
    }
    .signin-btn{
        height:40px;
        width:100%;
        background:#11cd6e;
        border:1px solid #42b983;
        -webkit-tap-highlight-color:rgba(0, 0, 0, 0);
        -webkit-user-modify:read-write-plaintext-only;
        outline:none;
        box-shadow:none;
        border-radius:6px;
        margin-top:20px;
    }
</style>
