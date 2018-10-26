<template>
    <div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" id="swiper" v-for="item in lunbo">
                    <img :src="item.picUrl" alt="">
                </div>
                <!-- <div class="swiper-slide" id="swiper">
                    <img src="../../static/images/2.jpg" alt="">
                </div>
                <div class="swiper-slide" id="swiper">
                    <img src="../../static/images/3.jpg" alt="">
                </div> -->
            </div>
            <!-- 分页器 -->
            <div class="swiper-pagination"></div>
        </div>
        <div class="gedan">
            <div id="title">
                热门歌单推荐
            </div>
            <scroll class="scroll-list">
                <div class="gedan-list">
                    <div class="gedan-li" v-for="item in data" @click="tzxq(item)">
                        <img v-lazy="item.imgurl" alt="">
                        <div class="gedan-xx">
                            <div class="p1">{{item.creator.name}}</div>
                            <div class="p2"> {{item.dissname}} </div>
                        </div>
                    </div>
                </div>
            </scroll>
            
        </div>
        <!-- <xiangqing></xiangqing> -->
        <!-- <transition name="slide"> -->
            <router-view></router-view>
        <!-- </transition> -->
        
    </div>
    
    
</template>
<script>
import Swiper from 'swiper'; 
import axios from 'axios'

// import gedan from './gedan';
export default {
    data(){
        return{
            data:'',
            lunbo:''
        }
    },
    methods:{
       tzxq(item){
           this.$router.push({
               path:'/header/tuijian/xiangqing',
               query:{
                   dissid: item.dissid
               }
            //      
            //    
           })
       }
    },
    mounted(){
        axios.get('../../static/hotDatas.json').then(res=>{
            console.log(res.data.data.list);
            this.data = res.data.data.list;
        })
        axios.get('/api/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1540275035465').then( res=>{
            console.log(res.data.data.slider);
            this.lunbo = res.data.data.slider;
        })
        var mySwiper = new Swiper('.swiper-container', {
            autoplay: {
                // disableOnInteraction: false,
                autoplay:2000
            },
            loop:true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            // observer:true

        })
    },
      
}
</script>
<style>
@import 'swiper/dist/css/swiper.min.css';
    #swiper img{
        display:block;
        width:100%;
        height:200px;
    }
    .gedan{
        width:100%;
        background: #282828;
    }
    .gedan #title{
        text-align: center;
        width:100%;
        height:60px;
        font-size:22px;
        color:#ffba00;
        line-height:60px;
    }
    .gedan-list{
        width:90%;
        /* height:800px; */
        margin:0 auto;
        /* height:100px; */
        
    }
    .gedan-li{
        margin-top:20px;
        height:70px;
        line-height:70px;
        display: flex;
        flex-direction: row;
    }
    .gedan-li img{
        width:50px;
        height:65px;
        display:block;
    }
    .gedan-xx{
        margin-left:10px;        
        width:98%;
        height:65px;
        padding:5px 0;
        font-size:15px;
        position:relative;
    }
    .gedan-xx .p1{
        width:100%;
        height:30px;
        text-align: none;
        color:aliceblue;
        margin-top:-19px;
        height:20px;
    }
      .gedan-xx .p2{
        width:100%;
        height:30px;
        margin-top:5px;
        height:20px;
        color:#636363;
    }
    .scroll-list{
        width:100%;
        height:360px;
        overflow:hidden;
    }
    /* 动画进入时 */ /* 动画离开结束时 */
        .slide-enter,.slide-leave-to{
            /* left:50%;
            top:0; */
            /* opacity: 0; */

        }
        /* 动画进入过程中 */ /* 动画离开过程中 */
        .slide-enter-active,.slide-leave-active{
            transition:all 2s;
        }
        /* 动画进入结束时 */ /* 动画离开时 */
        .slide-enter-to,.slide-leave{
            left:0;
            /* opacity: 1; */
        }
</style>


