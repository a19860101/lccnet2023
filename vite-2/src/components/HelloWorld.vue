<template>
  <div>
    <a href="#" @click="currentPanel = 'P1'">panel 1</a>
    <a href="#" @click="currentPanel = 'P2'">panel 2</a>
    <a href="#" @click="currentPanel = 'P3'">panel 3</a>
    <component :is="currentPanel"></component>
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