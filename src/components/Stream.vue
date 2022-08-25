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
      <Linehart
        :chart-id="chartId"
        :width="width"
        :height="height"
        :css-classes="cssClasses"
        :styles="styles"
        :plugins="plugins"
      />
    </div>
  </v-card>
</template>

<script>
import LineChart from "@/Chart/Linechart.js";
export default {
  name: "Stream",
  data: () => ({}),
  components: {
    LineChart,
  },
  props: {
    chartId: {
      type: String,
      default: "line-chart",
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 230,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Array,
      default: () => {},
    },
  },
};
</script>

