<template>
  <nav>
    <v-app-bar color="white" dark app class="line">
        <v-toolbar-title class="font-weight-dark black--text">
            <b><u><span class="font-weight-dark">Beyond</span></u></b>
            <b><u><span class="font-weight-dark">4.0</span></u></b>
            <span class="font-weight-dark"> Dashborad</span>
        </v-toolbar-title>
        <template>
            <v-btn color="blue" dark small absolute bottom right fab router to="/">
                <v-icon> mdi-dark mdi-logout</v-icon>
            </v-btn>
        </template>
    </v-app-bar>
    <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field label="Search Items" prepend-icon="fa-search fa-18px" color="black"></v-text-field>
          </v-col>
          <v-spacer></v-spacer>
          <v-col>
            <v-menu
          ref="menu1"
          v-model="menu1"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="dateFormatted"
              label="Date"
              hint=" first date like this format Mounth/Day/Year"
              persistent-hint
              prepend-icon="mdi-calendar"
              v-bind="attrs"
              @blur="date = parseDate(dateFormatted)"
              v-on="on"
              class="pl-10"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date"
            no-title
            @input="menu1 = false"
          ></v-date-picker>
        </v-menu>
          </v-col>
          <v-col>
            <v-menu
          ref="menu1"
          v-model="menu1"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="dateFormatted"
              label="Date"
              hint=" second date like this format Mounth/Day/Year"
              persistent-hint
              prepend-icon="mdi-calendar"
              v-bind="attrs"
              @blur="date = parseDate(dateFormatted)"
              v-on="on"
              class="pl-5"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date"
            no-title
            @input="menu1 = false"
          ></v-date-picker>
        </v-menu>
          </v-col>
        </v-row>
</v-container>
  </nav>
</template>

<script>
export default {
 name: "Sidebar",
 data() {
            return {
                activityLog: [
                    {title: 'Total clients(male/female)', amount: 50, icon: 'mdi-account', color: 'cyan lighten-3'},
                    {title: 'male Clients', amount: 140, icon: 'mdi-account-group-outline', color: 'green darken-2'},
                    {title: 'Female Clients', amount: 110, icon: 'mdi-account-group-outline', color: 'pink lighten-3 darken-1'},
                    
                ],
               }
            },
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