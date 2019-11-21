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
                type="button" class="btn btn-primary">Sign In</button>
            <button
                type="button" class="btn btn-danger">Sign Out</button>
        </form>
    </div>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {

    };
  },
};
</script>

<style lang="css" scoped>
</style>
