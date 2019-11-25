<template>
<header>
    <nav class="navbar navbar-expand-lg navbar-light">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="menu">
        <a class="navbar-brand" href="#">Pizza Planet</a>
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <router-link :to="{ name: 'home'}" tag="li">
                <a  class="nav-link">Home</a>
            </router-link>
            <router-link :to="{ name: 'menu'}" tag="li">
                <a  class="nav-link">Menu</a>
            </router-link>
        </ul>
        <form class="form-inline my-2 my-lg-0">
            <router-link :to="{ name: 'login'}"
                v-if="!user"
                class="btn btn-outline-success my-2 my-sm-0">
                Log In
            </router-link>
            <button
                v-if="user"
                @click="logOut"
                class="btn btn-outline-danger my-2 my-sm-0">
                Welcome {{ user }}, Logout
            </button>
        </form>
      </div>
    </nav>
</header>
</template>
<script>
import Firebase from  'firebase';
import { store } from '../store/index.js';
import {  mapGetters } from 'vuex';

Firebase.auth().onAuthStateChanged(function(user) {
    store.dispatch('setUser', (user ? user : null));
});

export default {
    data() {
        return {
        }
    },
    methods: {
        logOut() {
            Firebase.auth().signOut()
                .then(response => this.$router.push({name: 'home'}))
                .catch(e => alert('Unknown error occured'));
        },
    },
    computed: {
        ...mapGetters({
            user: 'getUser'
        })
    }
}
</script>
<style>
.navbar-brand {
    font-size: 1.5em;
}
</style>