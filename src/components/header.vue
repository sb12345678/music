<template>
    <div class="head">
        <div class="head-title">
            <i class="iconfont" id="i1">&#xe613;</i>
            <em>music player</em>
            <i class="iconfont" id="i2">&#xe641;</i>
        </div>
       <div class="title">
            <div class="list"><router-link to="tuijian" class="link">商品</router-link></div>
            <div class="list"><router-link to="/singer" class="link">评价</router-link></div>
            <div class="list"><router-link to="/a" class="link">商家</router-link></div>
            <div class="list"><router-link to="/b" class="link">商家</router-link></div>
      </div>
      <router-view/>
    </div>
</template>
<script>
export default {
    
}
</script>


<style>
    .iconfont{
        font-size:30px;
        font-weight:none;
    }
    .head{
        width:100%;
        height:130px;
        background: #282828;
    }
    .head .head-title{
        position: relative;
        height:70px;
        line-height:70px;
        color:#ffba00;
    }
    .head-title em{
        position:absolute;
        left:25%;
        font-size:22px;
        font-weight:400;
    }
    .head-title #i1{
        position:absolute;
        left:10%;
    }
    .head-title #i2{
        position:absolute;
        left:88%;
    }
    .title{
        width:100%;
        height:60px;
        display: flex;
        flex-direction: row;
        background: #282828;
    }
    .list{
        width:25%;
        height:60px; 
        font-size:22px;
        color:#939393;
        text-align:center;
        line-height:60px;
        
    }
    .list a{
        text-decoration: none;
    }
    .link{
        color:gray;
    }
    .router-link-active{
        border-bottom:2px solid #ffba00;
    }
   
</style>


