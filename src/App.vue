<template>
<div id="app">
  <div class="container">
    <Header></Header>
  </div>
  <div class="container">
    <!-- <Home></Home> -->
    <Menu></Menu>
  </div>
  <div class="container">
    <Footer></Footer>
  </div>
</div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Home from './components/Home.vue';
import Menu from './components/Menu.vue';

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Home,
    Menu
  },
}
</script>
<style>
</style>
