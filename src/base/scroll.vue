<template>
    <div class="scroll" ref="wrapper">
        <slot></slot>
    </div>
</template>
<script>
    import Bscroll from 'better-scroll'
    export default {
        name:'scroll',
        props:{
            scrollY:{
                type:Boolean,
                default:true
            },
            scrollX:{
                type:Boolean,
                default:true
            },
            click:{
                type:Boolean,
                default:true
            },
            //探针
            probeType:{
                type:Number,
                default:0
            }
        },
        mounted(){
            let wrapper = this.$refs.wrapper
            this.scroll = new Bscroll(wrapper,{
                click:this.click,
                probeType:this.probeType
            })

            this.scroll.on('scroll',position => {
				//scroll组件不关心你要干嘛,只需要把你想要的信息给你,也就是派发scroll事件,如果你想获取实时的滚动位置你来监听这个事件即可,position就是实时滚动的位置,是个对象,{x: 0 ,y: 0}   y是个负值
				this.$emit('scroll',position)
			})
            //监听一个滚动事件;
            // this.scroll.on('scroll',position=>{
                // console.log(position);
                //派发scroll事件(scroll不关心你干啥,我只需要把你想要的信息传给你,
                // 如果你想获取实时的滚动位置监听这个事件即可,position就是实时滚动的位置,
                // 是个对象,{x:0,y:0}y是负值)
                // this.$emit('scroll',position)
            // })
        },
        methods:{
			//滚动到指定元素
			scrollToElement(...args) {
				this.scroll && this.scroll.scrollToElement(...args)
			}
		}
    }
</script>

