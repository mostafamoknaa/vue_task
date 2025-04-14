<template>
    <div class="product-card">
      <h3>{{ product.name }}</h3>
      <p>\${{ product.price }}</p>
    </div>
  </template>
  
  <script setup>
  defineProps(['product']);
  </script>
  
  <style scoped>
  .product-card {
    border: 1px solid #ccc;
    padding: 1rem;
  }
  </style>
  