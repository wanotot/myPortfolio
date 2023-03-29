<template>
    <v-container class="spacing-playground pa-6">
        <v-row>
            <v-col cols="3" v-for="(card, i) in cards">
                <v-card class="mx-auto" max-width="330px">
                    <v-img :src="card.src" height="200px" cover></v-img>

                    <v-card-actions>

                        <v-card-text class="text-h6">{{ card.title }}</v-card-text>

                        <v-btn color="primary" @click="$event => currentIndex = 2">
                            Open Dialog

                            <v-dialog v-model="isDialogOpen" activator="parent">
                                <v-card>
                                    <v-card-text>
                                        {{ cards[currentIndex].text }}
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-btn color="primary" block @click="isDialogOpen = false">Close Dialog</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </v-btn>

                        <v-btn :icon="card.show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                            @click="card.show = !card.show"></v-btn>

                    </v-card-actions>

                    <v-expand-transition>
                        <div v-show="card.show">

                            <v-card-text>{{ card.text }}</v-card-text>

                        </div>
                    </v-expand-transition>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        isDialogOpen: false,
        currentIndex: 0,
        cards: [
            {
                src: "src/assets/IMG_2373.JPG",
                title: "deep house",
                text: "my favorite musik in the atmosphere playlist",
                show: false
            },
            {
                src: "src/assets/IMG_2398.JPG",
                title: "ōkawa-san",
                text: "drunk man and musician",
                show: false
            },
            {
                src: "src/assets/IMG_2376.JPG",
                title: "lunch",
                text: "my moms bento",
                show: false
            },
            {
                src: "src/assets/IMG_2402.JPG",
                title: "sanae",
                text: "remembering the master",
                show: false
            },
            {
                src: "src/assets/IMG_2367.JPG",
                title: "going home",
                text: "highschool memories",
                show: false
            }
        ]
    }),
}
</script>