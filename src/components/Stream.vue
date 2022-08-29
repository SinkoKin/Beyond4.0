<template>
  <v-card class="rounded-lg" color="white">
    <v-toolbar color="white" flat dark class="py-4">
      <v-toolbar-title class="mt-n5">
        <span class="caption blue--text">Statics</span><br />
        <span class="grey--text">450,210</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div style="text-align: center; margin-left: 40px">
        <v-icon color="blue" class="mt-1"> fas fa-arrow-right </v-icon><br />
        <v-icon color="grey" class="mt-2"> fas fa-arrow-left </v-icon>
      </div>
    </v-toolbar>
    <div class="mt-5">
      <Barchart />
    </div>
  </v-card>
</template>

<script>
import Barchart from '@/components/Barchart.vue';
export default {
  name: "Stream",
  data: () => ({}),
  components: {
    Barchart,
  },
  
};
</script>

