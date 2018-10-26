<template>
    <div class="box">
        <h1>用户注册</h1>
        <div class="red">{{title}}</div>
        <input type="text" placeholder="用户名" v-model="username">
        <div class="kong"></div>
        <input type="password" placeholder="密码" v-model="passwd"><br>
        <div class="kong"></div>
        <input type="password" placeholder="确认密码" v-model="passwd2"><br>
        <div style="width:88%;height:60px;position:relative;margin:auto">
            <label id="label" style="position:absolute;top:20px;left:10px;">性别</label>
            <label id="label" style="position:absolute;top:20px;left:60px;"><input type="radio" id="inp"><span>男</span></label>
            <label id="label" style="position:absolute;top:20px;left:120px;"><input type="radio" id="inp"><span>女</span></label>
        </div>
        <div style="width:88%;height:60px;position:relative;margin:auto">
            <label id="label" style="position:absolute;top:20px;left:10px;"><input type="checkbox" id="inp" :checked="lovetype.length==2" @click="all($event)">兴趣</label>
            <label id="label" style="position:absolute;top:20px;left:60px;"><input type="checkbox" id="inp" value="1" v-model="lovetype"><span>游泳</span></label>
            <label id="label" style="position:absolute;top:20px;left:120px;"><input type="checkbox" id="inp" value="2" v-model="lovetype"><span>跳舞</span></label>
        </div>
        <div style="width:88%;height:60px;position:relative;margin:auto">
            <label id="label" style="position:absolute;top:20px;left:10px;">所在城市</label>
            <!-- <label id="label" style="position:absolute;top:20px;left:60px;"><input type="radio" id="inp"><span>男</span></label>
            <label id="label" style="position:absolute;top:20px;left:120px;"><input type="radio" id="inp"><span>女</span></label> -->
            <select name="" id="moreselAge">   
                <option value="1" >1</option>   
                <option value="2">2</option>   
                <option value="3">3</option>   
                <option value="4">4</option>   
                    
            </select>  
        </div>
        <label class="label">
            <input type="checkbox" id="inp" v-model="input">
            <span>条款已阅读</span>
        </label>    
        <button class="btn" :disabled="!input" :class="{disable:!input}" @click="del">注册</button>
        <p class="bottom">
            <router-link to="delv1">已有账号,去登陆</router-link>
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
                passwd2:'',
                title:'',
                input:false,
                lovetype:[],
                seg:0,
                city:'中国'
            }
        },
        methods: {
            all(e){
                e.target.checked?this.lovetype.push(1,2):this.lovetype=[]
            },
            del () {
                axios.post('/apis/register',{
                    'username':this.username,
                    'passwd':this.passwd,
                    'passwd2':this.passwd2,
                    'lovetype':this.lovetype,
                    'seg':this.seg,
                    'city':this.city
                }).then(res=>{
                    console.log('aa',res.data)
                    // if(res.data.code==1){
                    //     this.title=res.data.msg
                    // }else if(res.data.code==2){
                    //     this.title=res.data.msg
                    // }else if(res.data.code==3){
                    //     this.title=res.data.msg
                    // }else{
                    //     this.title=res.data.msg
                    // }
                     
                     if(res.data.code==0){
                        setTimeout(()=>{
                            this.$router.push('/delv1')
                        },2000)
                     }
                     this.title=res.data.msg;
                     
                    
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
        outline: none;
        width:78%;
        height:30px;
        /* margin-top:35px; */
        margin:0 auto;
    }
    .box .btn{
        outline: none;
        border:none;
        width:78%;
        height:40px;
        margin-top:24px;
        background:rgb(78, 106, 233);
        color:beige;
        font-size:24px;
    }
    .box button.disable{
        background:gray;
    }
    .box .bottom{
        margin-top:20px; 
    }
    .box .kong{
        width:100%;
        height:30px;
    }
    label{
        margin-top:30px;
        /* line-height:40px; */
        display: block;
        width:52%;
        height:40px;
        font-size:14px;
    }
     #inp{
        /* margin-top:13px; */
        display:inline-block;
        width:20px;
        height:20px;
    }
    .label span{
        width:80px;
        height:23px;
    }
    /* .sex{
        margin:0;
        width:60%;
        height:30px;
        float:left;
    }*/
    #label{
        margin:0;
        width:70px;
        height:28px;

    } 
    #moreselAge{
        width:50px;
        margin-top:26px;
    }
</style>

