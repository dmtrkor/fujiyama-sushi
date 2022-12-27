<template>
  <v-row justify="center" cols="1">
    <v-dialog
        v-model="dialog"
        fullscreen
        :scrim="false"
        transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ props }">
        <v-btn
            v-bind="props"
        >
          <v-text><span>кошик</span></v-text>
          <img src="/icon/Tilda_Icons_3st_cart.svg">
          <span>({{ cartStore.countCartItems }})</span>
        </v-btn>
      </template>
      <v-card>
        <v-toolbar
            dark
            color="primary"
        >
          <v-btn
              icon
              dark
              @click="dialog = false"
          >
            <v-icon >mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Cart</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
                variant="text"
                @click="dialog = false"
            >
              Save
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>

          <v-table >
            <thead>
            <tr>
              <th class="text-left">
                Назва
              </th>
              <th class="text-left">
                Ціна
              </th>
            </tr>
            </thead>
            <tbody>
            <tr
                v-for="cartItem in cartStore.cartItems"
                :key="cartItem.id"
            >
              <td>{{ cartItem.title }}</td>
              <td><v-img
                  :src=cartItem.imgUrl
                  height="50px"
                  cover
              ></v-img></td>
              <td>{{ cartItem.price }} грн</td>
              <td><v-btn
                  @click="cartStore.removeFromCart(cartItem)"
              > Видалити </v-btn></td>
            </tr>
            </tbody>
          </v-table>

      </v-card>
    </v-dialog>
  </v-row>
</template>

<script setup>
import {useCartStore} from "../../stores";
import {ref} from "vue";
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});
const cartStore = useCartStore();
 const dialog = ref(false)

</script>

<style>
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform .2s ease-in-out;
}
img {
  width: 30px;
}
</style>