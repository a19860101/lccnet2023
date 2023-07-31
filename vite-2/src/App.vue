<template>
  <h1>Vue</h1>
  <Nav></Nav>
  <router-view></router-view>
</template>
<script>
  import Nav from './components/Nav.vue';
  export default {
    data(){
      return {}
    },
    components:{
      Nav
    }
  }
</script>
<style></style>