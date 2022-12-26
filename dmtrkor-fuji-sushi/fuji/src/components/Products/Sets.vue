<template>

  <v-row >

    <v-col  sm="6" md="3"  cols="12" v-for="product in products" :key="product.id" >
      <v-card
          class="mx-auto"
          max-width="344"
      >
        <v-img
            :src=product.imgUrl
            height="200px"
            cover
        ></v-img>

        <v-card-title>
          {{ product.title }}
        </v-card-title>
        <v-card-subtitle>
          {{ product.price }} грн
        </v-card-subtitle>
        <v-btn>Замовити</v-btn>



      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";

export default {
  name: "Sets",
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    axios
        .get('https://639b47bf31877e43d6883cb2.mockapi.io/sets')
        .then(response => (this.products = response.data))
  },


};

</script>

<style scoped>

</style>