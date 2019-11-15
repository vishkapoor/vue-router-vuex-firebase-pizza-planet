<template>
<div id="app">
  <div class="container">
    <Header></Header>
  </div>
  <div class="container">
    <!-- <Home></Home> -->
    <!-- <Menu></Menu> -->
      <Admin></Admin>
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
import Admin from './components/Admin.vue';


export default {
  name: "App",
  components: {
    Header,
    Footer,
    Home,
    Menu,
    Admin
  },
}
</script>
<style>
</style>
