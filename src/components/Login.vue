<template>
    <div class="row">
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
</template>
<script>
import Firebase from  'firebase';
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
  }
};
</script>

<style lang="css" scoped>
</style>
