<template>
  <v-container>
    <v-row align="center" justify="center">
      <!--cols Sets the default number of columns the component extends. Available options are 1 -> 12 and auto and it's have three
      types boolean | string | number-->
      <!--sm Changes the number of columns on small and greater breakpoints.-->
      <v-col cols="12" sm="10">
        <!--elevation : Designates an elevation applied to the component between 0 and 24. You can find more information on the elevation page.
        and it's have also twoo types  number|String 
        mt : means margin top 10 -->
        <v-card class="elevation-6 mt-10">
          <!--Vue v-model is a directive that creates a two-way data binding between a value in our template
           and a value in our data properties.-->
          <v-window v-model="step">
            <!--v-window-item  it's the window item-->
            <v-window-item :value="1">
              <!--v-row is a wrapper component for v-col. 
              It utilizes flex properties to control the 
              layout and flow of its inner columns. 
              It uses a standard gutter of 24px. 
              This can be reduced with the dense prop or removed completely with no-gutters. 
              This is the 2.x replacement for v-layout in 1.x.-->
              <v-row>
                <!--v-col is v-col is a content holder that must be a direct child of v-row. 
                This is the 2.x replacement for v-flex in 1.x.
                -- cols the default number of columns the component extends.
                -- md is Changes the number of columns on medium and greater 
                   breakpoints.
                -->
                <v-col cols="12" md="6">
                  <!--Primarily used for text content in a card. Applies padding for text, reduces its font-size to 
                      .875rem.-->
                  <v-card-text class="mt-12">
                    <h4 class="text-center">Login in to Your Account</h4>
                    <h6 class="text-center grey--text">
                      Log in to your account so you can continue builiding
                      <br />and editing your onboarding flows
                    </h6>
                    <!--Applies the justify-content css property. Available options are start, center, 
                        end, space-between and space-around.-->
                    <v-row align="center" justify="center">
                      <v-col cols="12" sm="8">
                        <!-- Label : Sets input label
                             outlined :Applies the outlined style to the input
                             dense : Reduces the input height
                             color : change color
                             autocomplete : complete the email thanks to the history
                             
                              
                              
                              -->
                        <v-text-field
                          label="Email"
                          outlined
                          dense
                          color="blue"
                          autocomplete="false"
                          class="mt-16"
                        />
                        <v-text-field
                          label="Password"
                          outlined
                          dense
                          color="blue"
                          autocomplete="false"
                          type="password"
                        />
                        <v-row>
                          <v-col cols="12" sm="7">
                            <!--<v-checkbox
                              label="Remember Me"
                              class="mt-n1"
                              color="blue"
                            >
                            </v-checkbox>-->
                            <span class="caption blue--text"
                              >Forgot password</span
                            >
                          </v-col>
                          <v-col cols="12" sm="5">
                            <!--is an inline container used to mark up a part of a text, 
                                or a part of a document-->
                            
                          </v-col>
                        </v-row>
                        <!-- 
                            -dark :Applies the dark theme variant to the component. You can find more information on the Material 
                             Design documentation for dark themes.
                            -block : Expands the button to 100% of available space
                            -tile  : Removes the component’s border-radius.
                            
                            -->
                        <v-btn color="blue" dark block tile router to="/backgr">Log in</v-btn>
                        <!--
                        <h5 class="text-center grey--text mt-4 mb-3">
                          Or Log in using
                        </h5>-->
                        <!--<div
                          class="
                            d-flex
                            justify-space-between
                            align-center
                            mx-10
                            mb-16
                          "
                        >
                          <v-btn depressed outlined color="grey">
                            <v-icon color="red">fab fa-google</v-icon>
                          </v-btn>
                          <v-btn depressed outlined color="grey">
                            <v-icon color="blue">fab fa-facebook-f</v-icon>
                          </v-btn>
                          <v-btn depressed outlined color="grey">
                            <v-icon color="light-blue lighten-3"
                              >fab fa-twitter</v-icon
                            >
                          </v-btn>
                        </div>-->
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-col>
                <v-col cols="12" md="6" class="blue rounded-bl-xl">
                  <div style="text-align: center; padding: 180px 0">
                    <v-card-text class="white--text">
                      <h3 class="text-center">Don't Have an Account Yet?</h3>
                      <h6 class="text-center">
                        Let's get you all set up so you can start creating your
                        your first<br />
                        onboarding experience
                      </h6>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn tile outlined dark @click="step++">SIGN UP</v-btn>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
            <v-window-item :value="2">
              <v-row>
                <v-col cols="12" md="6" class="blue rounded-br-xl">
                  <div style="text-align: center; padding: 180px 0">
                    <v-card-text class="white--text">
                      <h3 class="text-center">Alredy Signed up?</h3>
                      <h6 class="text-center">
                        Log in to your account so you can continue building
                        and<br />
                        editing your onboarding flows
                      </h6>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn tile outlined dark @click="step--">Log in</v-btn>
                    </div>
                  </div>
                </v-col>

                <v-col cols="12" md="6">
                  <v-card-text class="mt-12">
                    <h4 class="text-center">Sign Up for an Account</h4>
                    <h6 class="text-center grey--text">
                      Let's get you all set up so you can start creating your
                      <br />
                      first onboarding experiance
                    </h6>
                    <v-row align="center" justify="center">
                      <v-col cols="12" sm="8">
                        <v-row>
                          <v-col cols="12" sm="6">
                            <v-text-field
                              label="First Name"
                              outlined
                              dense
                              color="blue"
                              autocomplete="false"
                              class="mt-4"
                            />
                          </v-col>
                          <v-col cols="12" sm="6">
                            <v-text-field
                              label="Last Name"
                              outlined
                              dense
                              color="blue"
                              autocomplete="false"
                              class="mt-4"
                            />
                          </v-col>
                        </v-row>
                        <v-text-field
                          label="Email"
                          outlined
                          dense
                          color="blue"
                          autocomplete="false"
                        />
                        <v-text-field
                          label="Password"
                          outlined
                          dense
                          color="blue"
                          autocomplete="false"
                          type="password"
                        />
                        <v-row>
                          <v-col cols="12" sm="7">
                            <v-checkbox
                              label="I Accept AAE"
                              class="mt-n1"
                              color="blue"
                            >
                            </v-checkbox>
                          </v-col>
                          <v-col cols="12" sm="5">
                            <span class="caption blue--text ml-n4"
                              >Terms &Conditions</span
                            >
                          </v-col>
                        </v-row>
                        <v-btn color="blue" dark block tile @click="step--">Sign up</v-btn>
                         <!--<h5 class="text-center grey--text mt-4 mb-3">
                          Or Sign up using
                        </h5>-->
                        <!--<div
                          class="
                            d-flex
                            justify-space-between
                            align-center
                            mx-10
                            mb-11
                          "
                        >
                          <v-btn depressed outlined color="grey">
                            <v-icon color="red">fab fa-google</v-icon>
                          </v-btn>
                          <v-btn depressed outlined color="grey">
                            <v-icon color="blue">fab fa-facebook-f</v-icon>
                          </v-btn>
                          <v-btn depressed outlined color="grey">
                            <v-icon color="light-blue lighten-3"
                              >fab fa-twitter</v-icon
                            >
                          </v-btn>
                        </div>-->
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    step: 1,
  }),
  props: {
    source: String,
  },
};
</script>
<style scoped>
.v-application .rounded-bl-xl {
  border-bottom-left-radius: 300px !important;
}
.v-application .rounded-br-xl {
  border-bottom-right-radius: 300px !important;
}
</style>