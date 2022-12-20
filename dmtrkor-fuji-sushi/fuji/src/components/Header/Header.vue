<template>
<header>
  <h1>FUJI</h1>
  <nav>
    <li >
      Доставка та оплата</li>
    <li >Контакти</li>
    <li >Про нас</li>
    <div><img src="../public/icon/Tilda_Icons_3st_man.svg"></div>
    <div><FormVuetify></FormVuetify></div></nav>
</header>
</template>

<script setup>

import FormVuetify from "../Forms/FormVuetify.vue";
</script>

<style scoped>
header {
  height: 60px;
  display: flex;
  justify-content: space-between;
  background-color: #ccc;
  vertical-align: center;
  border-radius: 10px;
}
header nav {
  display: flex;
  align-items: center;
  text-align: center;


}
header nav li {
  display: block;
  margin: 0 20px;
  text-decoration: none;
  color: black;
}
header nav div {
  margin: 0 20px;
  text-decoration: none;
  color: black;
}
header nav a img{
  width: 35px;
}
h1 {
  margin-left: 50px;
  margin-top: auto;
  margin-bottom: auto;
}

</style>
