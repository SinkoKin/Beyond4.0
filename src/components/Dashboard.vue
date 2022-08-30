<template>
    <div class="dashboard" >
        <v-container class="my-4">
            <v-row>
            <v-col lg="7" cols="12">
                <v-alert dense text type="success">
                    Login Successfully! Welcome to <strong>Beyond 4.0</strong>
                </v-alert>
                <v-row>
                    <v-col lg="6" cols="12" v-for="(item,index) in activityLog" :key="index">
                        <v-card elevation="2" class="rounded-lg">
                            <v-card-text class="d-flex justify-space-between align-center">
                                <div>
                                    <strong>{{ item.title }}</strong> <br>
                                    <span>Last 3 weeks</span>
                                </div>
                                <v-avatar size="60" :color="item.color" style="border: 3px solid #444">
                                    <span style="color: white">{{item.amount}} +</span>
                                </v-avatar>
                            </v-card-text>
                            <v-card-actions class="d-flex justify-space-between">
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="12" md="4">
              <h1 class="headline  grey--text">Trade Visitors </h1>
                <!--<v-progress-circular
                  :value="76"
                  color="blue lighten-2"
                  size="110"
                  width="15">76%</v-progress-circular>
                  <h6 class="pl-10 grey--text"><br/>grey:<strong>male</strong></h6>
              <h6 class="pl-10 blue--text">lighten blue:<strong>female</strong></h6>-->
                 <div class="mt-5">
                     <PieChart />
                 </div>
              
          </v-col>
           </v-row>
           <v-row>
            <v-card>
        <v-tabs
            v-model="tab"
            white
            background-color="blue-lighten"
            show-arrows>
          <v-tabs-slider color="teal lighten-3"></v-tabs-slider>
          <v-icon>mdi-chart-line-variant</v-icon>
          <v-tab href="#normal">
              Normal State 
          </v-tab>
          <v-icon>mdi-google-maps</v-icon>
          <v-tab href="#Headmap">
              Headmap
          </v-tab>
          <v-icon>mdi-details</v-icon>
          <v-tab href="#Position">position-x</v-tab>
       </v-tabs>
       <v-tabs-items v-model="tab">
          <v-tab-item :key="1" value="normal">
          </v-tab-item>
       </v-tabs-items>
    </v-card>
  </v-row>
 </v-container>       
</div>
</template>

<script>
import PieChart from "@/components/PieChart.vue";

    export default {
        name: "Dashboard",
        data() {
            return {
                activityLog: [
                    {title: 'Total clients(male/female)', amount: 250, icon: 'mdi-account', color: 'cyan lighten-3'},
                    {title: 'male Clients', amount: 140, icon: 'mdi-account-group-outline', color: 'green darken-2'},
                    {title: 'Female Clients', amount: 110, icon: 'mdi-account-group-outline', color: 'pink lighten-3 darken-1'},

                    
                ],
                
            }
        },
        components :{
            PieChart,
        },
        methods: {
            onButtonClick(item) {
                console.log('click on ' + item.no)
            }
        }
    }
</script>

<style scoped>
.overlap-icon {
  position: absolute;
  top: -33px;
  text-align: center;
  padding-top: 12px;
}
</style>