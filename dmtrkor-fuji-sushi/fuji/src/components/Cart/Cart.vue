<template>
  <v-row justify="center">
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
          <v-toolbar-title>Settings</v-toolbar-title>
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
                v-for="item in desserts"
                :key="item.name"
            >
              <td>{{ item.name }}</td>
              <td>{{ item.calories }}</td>
              <td><v-btn> Видалити </v-btn></td>
            </tr>
            </tbody>
          </v-table>

      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,

    }
  },
}
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