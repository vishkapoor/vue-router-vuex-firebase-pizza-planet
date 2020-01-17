<template>
<div id="app">
  <div class="container">
    <div class="row">
      <div class="col-md-12 col-sm-12">
        <Header key="header"></Header>
      </div>
    </div>
  </div>
  <div class="container" style="min-height: 100vh">
      <router-view></router-view>
  </div>
  <hr/>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-4">
        <router-view name="ordering-guide"></router-view>
      </div>
      <div class="col-sm-12 col-md-4">
        <router-view name="delivery"></router-view>
      </div>
      <div class="col-sm-12 col-md-4">
        <router-view name="history"></router-view>
      </div>
    </div>
  </div>
  <div class="container">
    <Footer></Footer>
  </div>
</div>
</template>

<script>
import Vue from 'vue';
import { dbMenu } from './firebaseConfig.js';
import { dbOrders } from './firebaseConfig.js';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
export default {
  name: "App",
  created() {
    this.$store.dispatch('setMenuRef', dbMenu);
    this.$store.dispatch('setOrdersRef', dbOrders);
  },
  components: {
    Header,
    Footer,
  },
}
</script>
<style>
</style>
