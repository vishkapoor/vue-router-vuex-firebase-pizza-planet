<template>
    <div>
        <h4> About Us </h4>
        <nav class="navbar navbar-expand-lg navbar-light col-md-12">
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav">
                    <router-link :to="{ name: 'history'}" tag="li">
                        <a  class="nav-link">Our History</a>
                    </router-link>
                    <router-link :to="{ name: 'contact'}" tag="li">
                        <a  class="nav-link">Contact Us</a>
                    </router-link>
                    <router-link :to="{ name: 'delivery'}" tag="li">
                        <a  class="nav-link">Deliver0y</a>
                    </router-link>
                </ul>
            </div>
        </nav>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
  name: 'About',
  data() {
    return {

    };
  },
};
</script>
<style lang="css" scoped>
</style>
