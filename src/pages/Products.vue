<template>
    <div class="products-page">
      <h2>All Products</h2>
      <ProductList />
    </div>
  </template>
  
  <script setup>
  import ProductList from '../components/ProductList.vue';
  </script>
  
  <style scoped>
  .products-page {
    padding: 1rem;
  }
  </style>
  