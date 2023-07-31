<template>
  <div>
    <a href="#" @click="currentPanel = 'P1'">panel 1</a>
    <a href="#" @click="currentPanel = 'P2'">panel 2</a>
    <a href="#" @click="currentPanel = 'P3'">panel 3</a>
    <Transition>
      <component :is="currentPanel"></component>
    </Transition>
  </div>
</template>
<script>
  import P1 from '@/components/P1.vue'
  import P2 from '@/components/P2.vue'
  import P3 from '@/components/P3.vue'
  export default {
    data(){
      return {
        currentPanel: 'P1'
      }
    },
    components:{P1,P2,P3}
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