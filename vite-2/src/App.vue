<template>
  <div>

    <h1>Vue</h1>
    <Nav></Nav>
    <router-view></router-view>
    <hr>
    <HelloWorld></HelloWorld>
  </div>
</template>
<script>
  import Nav from './components/Nav.vue';
  import HelloWorld from '@/components/HelloWorld.vue'
  export default {
    data(){
      return {}
    },
    components:{
      Nav,HelloWorld
    }
  }
</script>
<style></style>