<template>
  <div id="app">
    <!-- <xiangqing></xiangqing> -->
    <!-- <div>
      <router-link to="/delv1"></router-link>
      <router-link to="/register"></router-link>
    </div> -->
    <router-view/>
    </div>
</template>

<script>
  // import xiangqing from './components/xiangqinig'
  // import register from './components/register'
export default {
  name: 'App',
  components:{
    // xiangqing
    //  register
    }
}
</script>

<style>
  /* #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  } */
  *{
    margin:0;
    padding:0;
  }
  #app{
    width:100%;
    height: 100%;
  }
  .router-link-active{
    color:#ffba00;
  }
</style>
