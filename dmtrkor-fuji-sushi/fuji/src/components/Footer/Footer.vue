<template>

    <v-row>
      <v-col>
        <v-card
            color="#2E3333"
            max-width="300"

        >
          <v-card-title>
            Наше меню
          </v-card-title>
          <ul>
            <li v-for="menuItem in menuItems" :key="menuItems.id">
              <router-link :to="menuItem.route">
                <strong>{{ menuItem.name }}</strong>
              </router-link>

            </li>
          </ul>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="space-around" no-gutters>
            <button
          v-for="link in links"
          :key="link"
          color="white"
          variant="text"
          class="mx-2"
          rounded="xl"
      >
        {{ link }}
      </button>
      <v-col class="text-center mt-4" cols="12">
       <strong>FUJI</strong>
      </v-col>
    </v-row>

</template>

<script>
export default {
  data: () => ({
    links: [
      'Доставка та оплата',
      'Контакти',
      'Про нас',
      'Оферта',
      'Соціальні мережі',
    ],
   menuItems: [
      {
        id: 1,
        name: 'Піца',
        route: "/pizza"
      },
      {
        id: 2,
        name: 'Роли',
        imgUrl: "./menu_img/menu_rolls.webp",
        route: "/pizza"
      },
      {
        id: 3,
        name: 'Суші',
        imgUrl: "./menu_img/menu_sushi.webp",
        route: "/sushi"
      },
      {
        id: 4,
        name: 'Гриль',
        imgUrl: "./menu_img/menu_grill.webp",
        route: "/grille"
      },
      {
        id: 5,
        name: 'Сети',
        imgUrl: "./menu_img/menu_sets.webp",
        route: "/pizza"
      },
      {
        id: 6,
        name: 'Рис і локшина',
        imgUrl: "./menu_img/menu_rice.webp",
        route: "/pizza"
      },{
        id: 7,
        name: 'Десерти',
        imgUrl: "./menu_img/menu_deserts.webp",
        route: "/pizza"
      },
      {
        id: 1,
        name: 'Напої',
        imgUrl: "./menu_img/menu_drinks.webp",
        route: "/drinks"
      }


    ],
  }),
}
</script>

<style scoped>
span {
  text-decoration: none;
}
</style>