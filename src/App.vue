<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
        <v-card
          class="mx-auto"
          max-width="300"
          elevation="0"
        >
          <v-list>
            <v-list-subheader>
              WANOTO OTASHIRO
            </v-list-subheader>

            <v-list-item
              v-for="(item, i) in navigationData.items"
              :key="i"
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
  }

</script>
