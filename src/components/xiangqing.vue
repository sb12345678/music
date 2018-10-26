<template>
    <div class="xq-box">
        <!-- <img src="../../static/images/3.jpg" alt=""> -->
        <div class="pro">
            <div class="player"></div>
            <div class="mask" @click="back">《 </div>
            <h1>aaa</h1>
            <img src="../../static/images/3.jpg" alt="">
            
            <div class="player-btn">
                <i class="iconfont" id="i1">&#xe613;</i>
                <span id="i2">随机播放全部</span>
            </div>
        </div>
        <scroll class="scroll-xq-list">
            <div class="xq-list">
                <div class="xq-li" v-for="item in slidedata">
                    <div class="xq-li-title">{{item.albummid}}</div>
                    <div class="xq-li-content">{{item.albumname}}</div>
                </div>
            </div>
        </scroll>
        
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            slidedata:''
        }
    },
    mounted(){
        // axios.get('../../static/songList.json').then(res=>{
        //     console.log(res.data.data);
        //     // this.slidedata = res.data.data.list;
        // })
        axios.get('../../static/songList.json').then(res=>{
            console.log(res.data.cdlist[0].songlist);
            this.slidedata = res.data.cdlist[0].songlist;
        })
    },
    methods:{
        back(){
            this.$router.back();
            console.log(1)
        }
    }
}
</script>
<style>
    .xq-box{
        position:fixed;
        top:0;
        left:0;
        /* background:red; */
        width:100%;
        height:100%;
        zoom:1;
    }
    .xq-box img{
        display:block;
        width:100%;
        height:240px;
    }
    .pro{
        position:relative;
        width:100%;
    }
    .mask{
        zoom:1;
        position:absolute;
        top:10px;
        left:30px;
    }
    h1{
        position:absolute;
        left:40%;
    }
    .player{
        position:absolute;
        width:100%;
        height:100%;
        top:0;
        left:0;
        background: rgba(0,0,0,.4);
    }
    .player-btn{
        position:absolute;
        top:76%;
        left:30%;
        width:140px;
        line-height:30px;
        height:30px;
        border-radius: 30px;
        border:1px solid rgb(206, 219, 14);
        text-align:center;
        
    }
    #i1{
        color:rgb(206, 219, 14);
        font-size:24px;
    }
    #i2{
        height:30px;
        line-height:30px;
        color:rgb(206, 219, 14);
        font-size:14px;
    }
    .xq-list{
        padding:30px 0;
        overflow:auto;
        width:100%;
        /* height:800px; */
        background: #282828;
    }
    .xq-list .xq-li{
        width:88%;
        height:80px;
        padding:0 20px;
    }
    .xq-li-title{
        width:100%;
        color:aliceblue;

    }
    .xq-li-content{
        margin-top:10px;
        width:100%;
        color:gray;
    }
    .scroll-xq-list{
        width:100%;
        height:360px;
        overflow:hidden;
    }
     
</style>


