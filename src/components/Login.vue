<template>
<div class="row">
    <div class="col-md-4 offset-md-4">
        <div class="jumbotron">
            <div class="col-md-12">
                <form>
                    <div class="form-group">
                        <label>Email: </label>
                        <input
                            id="email"
                            v-model="email"
                            placehoder="Enter email"
                            type="text" class="form-control input-sm" />
                    </div>
                        <div class="form-group">
                        <label>Password: </label>
                        <input
                            type="password"
                            id="password"
                            v-model="password"
                            placehoder="Enter password"
                            class="form-control input-sm" />
                    </div>
                    <div style="text-align: center;margin-top:30px">
                        <button
                            :disabled="isSubmitting"
                            @click.prevent="signIn"
                            type="button" class="btn btn-primary">
                            <fa v-if="isSubmitting" icon="cog" spin></fa>
                        Sign In</button>
                    </div>
                </form>
            </div>
        </div>
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
        isSubmitting: false,
        email: '',
        password: '',
    };
  },
  methods: {
    signIn() {
        this.isSubmitting = true;
        Firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then(response => {
                this.$user = this.user;
                this.$router.push({ name: 'admin'});
            })
            .catch(e => {
                let errorCode = e.code;
                let errorMessage = e.message;
               alert('Invalid login credentials\n\nError: ' + errorMessage);
            })
            .finally(() => {
                this.isSubmitting = false;
            });
    },
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
