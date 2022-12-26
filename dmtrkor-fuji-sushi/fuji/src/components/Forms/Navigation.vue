<template>
  <v-container>
      <v-row >
      <v-col  sm="12" md="3"  cols="12" v-for="menuItem in menuItems" :key="menuItem.id" >
        <router-link :to=menuItem.route>
        <v-card
            class="mx-auto"
            max-width="344"
        >
          <v-img
            :src="menuItem.imgUrl"
          >

          </v-img>
          <v-card-title
           class="title"
          >
            {{ menuItem.text }}
          </v-card-title>

        </v-card>
        </router-link>
      </v-col>
    </v-row>


  </v-container>
</template>

<script setup>
 let menuItems = [
   {
     id: 1,
     text: 'Піца',
     imgUrl: "./menu_img/menu_piza.webp",
     route: "/pizza"
   },
   {
     id: 2,
     text: 'Роли',
     imgUrl: "./menu_img/menu_rolls.webp",
     route: "/pizza"
   },
   {
     id: 3,
     text: 'Суші',
     imgUrl: "./menu_img/menu_sushi.webp",
     route: "/sushi"
   },
   {
     id: 4,
     text: 'Гриль',
     imgUrl: "./menu_img/menu_grill.webp",
     route: "/grille"
   },
   {
     id: 5,
     text: 'Сети',
     imgUrl: "./menu_img/menu_sets.webp",
     route: "/sets"
   },
   {
     id: 6,
     text: 'Рис і локшина',
     imgUrl: "./menu_img/menu_rice.webp",
     route: "/pizza"
   },{
     id: 7,
     text: 'Десерти',
     imgUrl: "./menu_img/menu_deserts.webp",
     route: "/pizza"
   },
   {
     id: 1,
     text: 'Напої',
     imgUrl: "./menu_img/menu_drinks.webp",
     route: "/drinks"
   }

 ]

</script>

<style scoped>
ul {
  list-style-type: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr ;
  grid-template-rows: 80px ;

  grid-row-gap: 120px;
}
li {
  text-align: center;

}
a {
  text-decoration: none;
  color: black;
}
img {
  width: 150px;
}
v-card-title {
  text-align: center;
}
</style>