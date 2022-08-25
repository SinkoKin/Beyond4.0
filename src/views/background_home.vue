<template>
    <v-app>
        <Header />
        <SideBar />
        <Dashboard />
        <v-container fluid>
        </v-container>
    </v-app>
</template>
<script>
import SideBar from '@/components/SideBar.vue'
import Header from '@/components/Header.vue'
import Dashboard from '@/components/Dashboard.vue'
export default {
     name :'background_home',
     components :{
         SideBar,
         Header,
         Dashboard,
     },

}
</script>