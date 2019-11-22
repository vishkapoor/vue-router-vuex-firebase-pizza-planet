<template>
<div id="app">
  <div class="container">
    <Header></Header>
  </div>
  <div class="container" style="min-height: 100vh">
    <router-view></router-view>
  </div>
  <div class="container">
    <Footer></Footer>
  </div>
</div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
}
</script>
<style>
</style>
