<template>
  <h1>hello</h1>
 <Nav />
</template>
<script>
  import Nav from './components/Nav.vue';

  export default {
    data(){
      return {

      }
    },
    components:{
      Nav,
    }
  }
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
h1 {
  color: #fa0;
}
</style>