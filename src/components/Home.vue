<template>
<div class="row">
    <div id="home"  class="col-sm-12 text-center">
        <div class="background">
            <h1>Welcome To Pizza Planet</h1>
            <h2>Feeling Hungry?</h2>
            <button
                @click="goToMenu"
                class="btn btn-success">Let's Order!</button>
        </div>
    </div>
</div>
</template>
<script>
export default {
  name: 'Home',
  data() {
    return {
    }
  },
  methods: {
    goToMenu() {
        this.$router.push({ name: 'menu'});
    }
  }
};
</script>
<style lang="css" scoped>
h1, h2 {
    margin: 3%;
}
#home {
    background: #F8F9FA;
    padding: 15%;
    min-height: 800px;
    max-height: 800px;
}
.background {
    background: #eee;
    opacity: 0.8;
    max-width: 70%;
    border:1px solid #eee;
    border-radius: 8px;
    margin: 0 auto;
    padding: 20px 0px;
}
</style>
