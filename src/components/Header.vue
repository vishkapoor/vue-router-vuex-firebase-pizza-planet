<template>
<header class="row">
    <nav class="navbar navbar-expand-lg navbar-light col-md-12">
        <a class="navbar-brand" href="/">Pizza Planet</a>
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav">
                <router-link :to="{ name: 'home'}" tag="li">
                    <a  class="nav-link">Home</a>
                </router-link>
                <router-link :to="{ name: 'menu'}" tag="li">
                    <a  class="nav-link">Menu</a>
                </router-link>
            </ul>
        </div>
    </nav>
</header>
</template>
<script>
export default {
    data() {
        return {
        }
    }
}
</script>
<style>
.navbar-brand {
    font-size: 1.5em;
}
</style>