<template>
    <div class="row">
        <div class="col-md-12" v-if="user">
            <p>Logged in as:  {{ user }}</p>
        </div>
        <div class="col-md-12">
            <form>
                <div class="form-group">
                    <label>Email: </label>
                    <input
                        id="email"
                        placehoder="Enter email"
                        type="text" class="form-control input-sm" />
                </div>
                    <div class="form-group">
                    <label>Password: </label>
                    <input
                        type="password"
                        id="password"
                        placehoder="Enter password"
                        class="form-control input-sm" />
                </div>
                <button
                    @click.prevent="signIn"
                    type="button" class="btn btn-primary">Sign In</button>
                <button
                    @click.prevent="signOut"
                    type="button" class="btn btn-danger">Sign Out</button>
            </form>
        </div>
    </div>
</template>
<script>
import Firebase from  'firebase';
import { store } from '../store/index.js';
import { mapGetters } from 'vuex';

Firebase.auth().onAuthStateChanged(function(user) {
    store.dispatch('setUser', (user ? user : null));
});

export default {
  name: 'Login',
  data() {
    return {

    };
  },
  methods: {
    signIn() {
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        Firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(e => {
                let errorCode = e.code;
                let errorMessage = e.message;
               alert('Invalid login credentials\n\nError: ' + errorMessage);
            });
    },
    signOut() {
        Firebase.auth().signOut()
            .then(response => alert('Logged out successfully.'))
            .catch(e => alert('Unknown error occured'));
    }
  },
  computed: {
    ...mapGetters({
        user: 'getUser'
    }),
  }
};
</script>

<style lang="css" scoped>
</style>
