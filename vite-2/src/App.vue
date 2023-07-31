<template>
  <div>

    <h1>Vue</h1>
    <Nav></Nav>
    <Transition>
      <router-view></router-view>
    </Transition>
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
<style>
    .v-enter-active,
    .v-leave-active {
  transition: 0.5s;
}

.v-enter-from,
.v-leave-to {
  position: absolute;
  opacity: 0;
  transform: translateY(20px);
}
</style>