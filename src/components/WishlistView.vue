<!-- views/WishlistView.vue -->
<template>
    <div class="wishlist-container">
      <h2>Your Wishlist</h2>
  
      <div v-if="wishlist.length > 0" class="wishlist-grid">
        <div class="product-card" v-for="item in wishlist" :key="item.id">
          <img :src="item.image" class="product-image" />
          <h3>{{ item.name }}</h3>
          <p>{{ item.description }}</p>
          <button @click="removeFromWishlist(item.id)" class="remove-btn">Remove</button>
        </div>
      </div>
  
      <div v-else class="empty">
        <p>Your wishlist is empty.</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useWishlistStore } from '../store/wishlistStore'
  const wishlistStore = useWishlistStore()
  const wishlist = wishlistStore.wishlist
  const removeFromWishlist = wishlistStore.removeFromWishlist
  </script>
  
  <style scoped>
  .wishlist-container {
    max-width: 1000px;
    margin: auto;
    padding: 2rem;
  }
  
  .wishlist-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 1.5rem;
  }
  
  .remove-btn {
    background-color: #ef4444;
    border: none;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 0.5rem;
  }
  
  .empty {
    text-align: center;
    margin-top: 2rem;
    color: #6b7280;
  }
  </style>
  