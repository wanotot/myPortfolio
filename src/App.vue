<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
        <v-card
          class="mx-auto"
          max-width="300"
          elevation="0"
        >
          <v-list>
            <v-list-subheader  color="green-darken-3">
              <h2 class="font-weight-medium">
                WANOTO OTASHIRO
              </h2>
            </v-list-subheader>

            <v-list-item 
              v-for="(item, i) in navigationData.items"
              :key="i"
              v-on:click="alerting(i)"
            >

              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
    </v-navigation-drawer>

    <v-main>
       <v-parallax src="src/assets/IMG_2382.jpg"></v-parallax>
    </v-main>
  </v-app>  
</template>

<script>
  export default {
    data: () => ({ 
      currentState: 0,
      drawer: null,
      navigationData : {
        selectedIndex :1,
        items :[
          {text: "Profile"},
          {text: "Photography"},
          {text: "Artworks"},
        ]
      },
     }),
     methods:{
      alerting(i){
        alert("aaa" + i);
        this.currentState = i;
      }
     }
  }

</script>
