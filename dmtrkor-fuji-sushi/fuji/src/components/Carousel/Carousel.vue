<template>
  <v-carousel>
    <v-carousel-item
        src="./public/Carousel_img/grill.jpeg"
        cover
    ></v-carousel-item>

    <v-carousel-item
        src="./public/Carousel_img/cake.webp"
        cover
    ></v-carousel-item>

    <v-carousel-item
        src="./public/Carousel_img/sushi.webp"
        cover
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
import {aliases} from "vuetify/lib/iconsets/fa";
import {mdi} from "vuetify/lib/iconsets/mdi";

export default {
  name: "Carousel",
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    }
  },
}
</script>

<style scoped>

</style>