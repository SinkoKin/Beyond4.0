<template>
  <nav>
        <v-navigation-drawer  dark app  class="blue " width="85">
        <div class="text-center mt-5">
           <v-btn fab color="white" x-large v-model="selectedItem" >
               <v-icon color="black">fab fa-solid fa-chart-pie</v-icon>
           </v-btn>
              
        </div>
        <v-list flat class="mb-12">
            <v-list-item-group v-model="selectedItem" color="black">
                 <v-list-item active-class="border" class="ml-2 my-3"
                :ripple="false" router to="/">
              <v-list-item-action>
                 <v-list-item-icon>
                     <v-icon>fa-home</v-icon>
                 </v-list-item-icon>
              </v-list-item-action>
           </v-list-item>
           <v-list-item active-class="border" class="ml-2 my-3"
                :ripple="false" router to="/statics">
              <v-list-item-action>
                 <v-badge color="yellow">
                     <template v-slot:badge>1</template>
                     <v-icon>fa-th-large</v-icon>
                 </v-badge>
              </v-list-item-action>
              
           </v-list-item>
            </v-list-item-group>
           
        </v-list>
        <!--<v-list flat  class="mt-5" >
            <v-list-item-group v-model="selectedItem" color="black" >
              
                <v-list-item v-for="(item, i) in items" :key="i" active-class="border" class="ml-2 my-3"
                :ripple="false"
                >
                  <b></b>
                  <b></b>
                    <v-list-item-icon>
                        <v-badge color="yellow">
                            <!--<template v-slot:badge>1</template>
                                                        
                            <v-icon v-text="item.icon"></v-icon>
                        </v-badge>
                     
                    </v-list-item-icon>
                    <v-list-item-content>
                       <v-list-item-title class="til1" >
                            {{item.text}} 
                      </v-list-item-title>
                    </v-list-item-content>
                    </v-list-item> 
            </v-list-item-group>
        </v-list>-->
        <!--<div style="position: absolute; bottom: 20px;
        margin-left: auto; margin-right: auto; left:0; right: 0; text-align: center;">
                <v-btn text>
                    <v-icon>fas fa-sign-out-alt</v-icon>
                </v-btn>
        </div>-->
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
 data: () => ({
        drawer:true,
        selectedItem: 0,
        drawer: null,
        items: [
            {icon: 'fas fa-home', text: 'Home'},
            {icon: 'fas fa-th-large', text: 'Staticts'},
            
        ],

 })
}
</script>

<style>
.border  {
   
    background: #fff ;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    text-decoration: none;
    
}

.border b:nth-child(1)
{
    
    position: absolute;
    top: -20px;
    height: 20px;
    width: 83%;
    background:none;
    display: none; 
}
/**.border b:nth-child(1)::before
{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-bottom-right-radius: 20px;
    background:lightskyblue;
}*/

.border b:nth-child(2)
{
    position: absolute;
    bottom: -20px;
    height: 20px;
    width: 83%;
    background:none;
    display: none;
}
/*.border b:nth-child(2)::before
{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-top-right-radius: 20px;
    background: none;
}*/
.border b:nth-child(1),
.border b:nth-child(2)
{
    display: block;
}
.til1 {
    text-align:center;

}

</style>