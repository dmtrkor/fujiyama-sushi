<template>
  <v-row >
    <v-col  sm="6" md="3"  cols="12" v-for="product in cartStore.products" :key="product.id" >
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
        <v-btn @click="cartStore.addToCart(product)"
        >Замовити</v-btn>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import {useCartStore} from "../../stores";
import {onMounted} from "vue";
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});
const cartStore = useCartStore();
onMounted(()=>{
  cartStore.getProducts()
})
/*export default {
  data(){
    return {
      useCartStore
    }
  },
  mounted(){
    getProducts()
}*/


</script>

<style scoped>

</style>