<template>
    <div class="box">
        <h1>用户登录</h1>
        <div class="red">{{title}}</div>
        <input type="text" id="input" placeholder="用户名"  v-model="username">
        <div class="kong"></div>
        <input type="password" placeholder="密码" v-model="passwd"><br>
        <div class="yanzheng" @click="aa" v-show="codetype">获取验证码</div>
        <div class="yanzheng" v-show="!codetype">{{miao}}后重新获取验证码</div>
        <button class="btn" @click="del">登录</button>
        <p class="bottom">
            <router-link to="register" class="bottom-li">还没有账号,现在就去注册</router-link>
        </p>
        
    </div>
</template>
<script>
    import axios from 'axios'
export default {
        data(){
            return {
                username:'',
                passwd:'',
                title:'',
                yanzheng:'',
                miao:6,
                codetype:true
            }
        },
        methods: {
            aa(){
                if(this.username==123){
                    this.codetype=false;
                    let timer = setInterval(() =>{
                        this.miao--;
                        if(!this.miao){
                            clearInterval(timer)
                            this.codetype = true;
                            this.miao = 6;
                        }
                    },1000)
                }else{
                    this.title="手机号错误"
                }
            },
            del () {
                axios.post('/apis/delv',{
                    'username':this.username,
                    'passwd':this.passwd
                }).then(res=>{
                    console.log('aa',res.data);
                    this.title=res.data.msg;
                    // if(res.data.code==1){
                    //     this.title=res.data.msg
                    // }else if(res.data.code==2){
                    //     this.title=res.data.msg
                    // }else{
                    //     this.title=res.data.msg
                    // }
                    if(res.data.code==0){
                        this.$router.push('/header')
                    }
                    
                }).catch(err=>{
                    console.log(err);
                })
            }
        }
}
</script>

<style>
    *{
        margin:0;
        padding:0;
    }
    .yanzheng{
        width:110px;
        height:40px;
        text-align:center;
        background: gray;
        color:aliceblue;
        font-size:14px;
        line-height:40px;
        margin:10px auto;
    }
    .box{
        width:100%;
        height:100%;
    }
    .box h1{
        width:50%;
        height:40px;
        margin:0 auto;
    }
    .box .red{
        /* margin:none; */
        width:100%;
        height:40px;
        /* text-indent: 1; */
        color:red;
        line-height:40px;
    }
    .box input{
        display:block;
        outline: none;
        width:78%;
        height:30px;
        /* margin-top:35px; */
        margin:0 auto;
    }
    .box .btn{
        display: block;
        margin:24px auto;
        outline: none;
        border:none;
        width:78%;
        height:40px;
        background:rgb(78, 106, 233);
        color:beige;
        font-size:24px;
    }
    .box .bottom{
        margin:20px auto;
        
    }
    .box .kong{
        width:100%;
        height:30px;
    }
    .bottom-li{
       display: block;
       width:190px;
       /* margin-left:20%; */
       margin:0 auto;
    }
</style>


