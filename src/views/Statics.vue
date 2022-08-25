<template>
   <v-container>
      <SideBar/>
      <Header />
      <!--<Audience />-->
      <Stream />      
   </v-container>
  
</template>

<script>
import SideBar from '@/components/SideBar.vue'
import Header from '@/components/Header.vue'
import Stream from '@/components/Stream.vue'
import Audience from '@/components/Audience.vue'
export default {
   name : 'statics',
   data: () => ({}),
   components: {
    SideBar,
    Header,
    Stream,
    Audience,
  },
}
</script>

<style>

</style>