<template>
    
        <div class="singer-box" @click="getSinger">
            <scroll class="scroll-singer" ref="scroll" @scroll="scroll" :probe-type="3">
                <div class="singer-box-title">

                    <div class="singer-box-1" v-for="item in singer" ref="left-height">
                        <div class="singer-box-title">{{item.title}}</div>
                        <div class="singer-box-content" v-for ="itt in item.items">
                            <img :src="itt.avatar" alt="">
                            <p>{{itt.name}}</p>
                        </div>
                    </div>
                    
                </div>
                <div class="zhu-title" >
                    <p id="div" :class='{active:index===currentIndex}'  v-for="item,index in singer" @click="rightClick(index)">{{item.title}}</p>
                </div>
            </scroll>
        </div>
    
    
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            singer:'',
            foodsListHeight:[],
            scrollY:0,
            // leader:0
        }
    },
    mounted(){
     setTimeout(()=>{
            // console.log(2)
            this._calcFoodsListHeight()
    },20)
      this.getSinger();
     
      
// https://y.gtimg.cn/music/photo_new/T001R300x300M000${item.Fsinger_mid}.jpg

    },
    methods:{
        rightClick(index){
            let leftHeight = this.$refs['left-height'];
            this.$refs.scroll.scrollToElement(leftHeight[index],1000);
        },
        scroll(newVAL){
            // console.log(newVAL)
            this.scrollY =Math.round(Math.abs(newVAL.y))
        },
        _calcFoodsListHeight(){
            let leftHeight = this.$refs['left-height'];
            console.log(leftHeight);
            let height = 0;
            this.foodsListHeight.push(height);
            for(let i = 0; i < leftHeight.length; i++) {
                //依次累加  下个盒子上限是上个盒子的下限
                height += leftHeight[i].clientHeight
                this.foodsListHeight.push(height)
            }
            // console.log(this.foodsListHeight)

        },
        getSinger () {
            axios.get('../../static/singer.json').then(res => {
            // console.log('res111', res.data.data.list)
            this.singer = this._normalLizeSinger(res.data.data.list)
                // console.log('222', this.singer)
                // console.log(res.data.cdlist[0].songlist);
            })
        },
        _normalLizeSinger (list) {
            let map = {
                hot: {
                    title: '热门',
                    items: []
                }
            }
            // console.log('hot1', map)
            list.forEach((item, index) => {
                if (index <= 10) {
                    // console.log(index)
                    map.hot.items.push({
                        'name': item.Fsinger_name,
                        'id': item.Fsinger_id,
                        'avatar':  `https://y.gtimg.cn/music/photo_new/T001R300x300M000${item.Fsinger_mid}.jpg`
                    })
                    // console.log(map)
                }


                const key = item.Findex
                // console.log('key', key)
                if (!map[key]) {
                    map[key] = {
                        'title': key,
                        items: []
                    }
                }
                map[key].items.push({
                    'name': item.Fsinger_name,
                    'id': item.Fsinger_id,
                    'avatar': `https://y.gtimg.cn/music/photo_new/T001R300x300M000${item.Fsinger_mid}.jpg`
                })
            })
            
            let ret = []
            let hot = []
            for (let key in map) {
                let val = map[key]
                // console.log('val999', val)
                if (val.title.match(/[a-zA-Z]/)) {
                // console.log('ret', ret)
                ret.push(val)

            
                } else if (val.title === '热门') {
                hot.push(val)
                }
            }
            ret.sort((a, b) => {
                return a.title.charCodeAt() - b.title.charCodeAt()
            })

            return hot.concat(ret)
        }
    },
    computed:{
         currentIndex() {
            //scrollY  foodsListHeight 
            // console.log(this.foodsListHeight,this.scrollY)

            // console.log(this.foodsListHeight.length)
            for(let i = 1; i < this.foodsListHeight.length; i++) {
                let currentHeight = this.foodsListHeight[i]
                let nextHeight = this.foodsListHeight[i+1]
                // if((this.scrollY >= currentHeight && this.scrollY < nextHeight) || !nextHeight){
                //     console.log(i)
                //     return i
                // }
                // console.log(currentHeight,nextHeight)
                if(currentHeight<=this.scrollY && this.scrollY<nextHeight){
                    // console.log(i,currentHeight,nextHeight);
                    return i;
                    
                }
            }
            return 0
        }
    }
}
</script>

<style>
    .active{
        color:red;
    }
    .scroll-singer{
        height:437px;
        overflow:hidden;
    }
    .singer-box{
        position:relative;
        width:100%;
        height:437px;
        color:gray;
        background: #282828;
        overflow: auto;

    }
    .singer-box-title{
        font-size:15px;
        padding-left:5%;
        /* width:100%; */
        /* height:30px; */
        line-height:30px;
        background: #363636;
        
    }
    .singer-box-content{
        display:flex;
        flex-direction: row;
        height:80px;
        line-height:80px;
        padding:0 40px;
        margin-top:20px;

    }
    .singer-box-content img{
        margin-top:14px;
        display:block;
        width:50px;
        height:50px;
        border-radius: 50px;
    }
    .singer-box-content p{
        height:50px;
        margin-left:10px;
        overflow: hidden;
    }
    .zhu-title{
        position:fixed;
        top:21%;
        right:0;
        background: #1c1c1c;
        width:26px;
        /* height:200px; */
        border-radius: 13px;
        padding:20px 0;
        text-align: center;
    }
    .zhu-title #div{
        overflow:hidden;
        width:20px;
        height:17px;
        margin:0 auto;
        font-size:10px;
    }
</style>
