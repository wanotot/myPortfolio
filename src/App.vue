<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-card class="mx-auto" max-width="300" elevation="0">
        <v-list>
          <v-list-subheadder color="green-lighten-3">
            <h2 class="font-weight-medium">
              WANOTO OTASHIRO
            </h2>
          </v-list-subheadder>

          <v-list-item v-for="(item, i) in navigationData.items" :key='i' :to="item.text">
            <v-list-item-title v-text="item.text" :to="item.link"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-navigation-drawer>

    <v-main>
      <v-parallax src="src/assets/IMG_2382.jpg">
        <router-view />
      </v-parallax>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    currentState: 0,
    drawer: null,
    navigationData: {
      selectedIndex: 1,
      items: [
        { text: "Profile", link: "/Profile" },
        { text: "Photography", link: "/Photography" },
        { text: "Artworks", link: "/Artworks" },
      ]
    },
  }),
}

</script>
