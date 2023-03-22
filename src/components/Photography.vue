<template>
    <h1 class="text-right">
        Photography   
    </h1>

    <v-row v-for="card in cards" no-gutters>
      <v-col order="6">
                <v-card
            class="mx-auto"
            max-width="344"
            >
            <v-img
            src={{ card.src }}
            height="200px"
            cover
            ></v-img>

            <v-card-actions class="justify-center">

            <v-card-text class="text-h6">
                deep house
            </v-card-text>

            <v-btn
                :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                @click="show = !show"
            ></v-btn>

            </v-card-actions>

            <v-expand-transition>
            <div v-show="show">

                <v-card-text>
                I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                </v-card-text>
            </div>
            </v-expand-transition>
        </v-card>
      </v-col>
      <v-col order="12">
       
      </v-col>
      <v-col order="1">
        <v-sheet class="pa-2 ma-2">
          Third in markup, but first in row
        </v-sheet>
      </v-col>
    </v-row>
    
    
</template>

<script>
export default {
     data: () => ({
      show: false,
      cards : [
        {
            src:"src/assets/IMG_2373.JPG",
            title:"deep house",
            text:"my favorite musik in the atmosphere playlist"
        },
        {
            src:"src/assets/IMG_2398.JPG",
            title:"ōkawa-san",
            text:"drunk man and musician"
        },
        {
            src:"src/assets/IMG_2376.JPG",
            title:"lunch",
            text:"my moms bento"
        },
        {
            src:"src/assets/IMG_2402.JPG",
            title:"sanae",
            text:"remembering the master"
        },
        {
            src:"src/assets/IMG_2367.JPG",
            title:"going home",
            text:"highschool memories"
        }
      ]
    }),
}
</script>