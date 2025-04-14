<template>
  <div class="">
    <nav style="padding: 1rem;">
      <router-link to="/" style="float: left;">Home</router-link>
      <router-link to="/cart" style="float: right;">Cart</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script setup></script>

<style scoped>
nav {
  padding: 1rem;
}
nav a {
  margin: 0 1rem;
  text-decoration: none;
  color: #333;
}
</style>
