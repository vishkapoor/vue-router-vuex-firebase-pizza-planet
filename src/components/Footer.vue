<template>
<footer class="row">
    <nav class="navbar navbar-expand-lg navbar-light col-md-12">
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav">
                <router-link :to="{ name: 'home'}" tag="li">
                    <a  class="nav-link">Home</a>
                </router-link>
                <router-link :to="{ name: 'about'}" tag="li">
                    <a  class="nav-link">About</a>
                </router-link>
                <router-link :to="{ name: 'admin'}" tag="li">
                    <a  class="nav-link">Admin</a>
                </router-link>
            </ul>
        </div>
    </nav>
</footer>
</template>
