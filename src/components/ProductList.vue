<template>
  <div class="product-grid">
    <div class="product-card" v-for="product in productStore.products" :key="product.id">
      <img :src="product.image" alt="product image" class="product-image" />
      <div class="product-details">
        <h2 class="product-title">{{ product.name }}</h2>
        <p class="product-description">{{ product.description }}</p>
        <div class="product-footer">
          <span class="instock">In Stock: {{ product.instock }}</span>
          <button @click="addToCart(product)" class="add-to-cart">Add to Cart</button>
          <button @click="toggleWishlist(product)" class="wishlist-btn">
            {{ wishlistStore.isInWishlist(product.id) ? '♥' : '♡' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProductStore } from '../store/productStore'
import { useCartStore } from '../store/cartStore'
import { useWishlistStore } from '../store/wishlistStore'
import { onMounted } from 'vue'

const productStore = useProductStore()
const cartStore = useCartStore()
const wishlistStore = useWishlistStore()

onMounted(() => {
  productStore.fetchProducts()
})

const addToCart = (product) => {
  if (product.instock > 0) {
    cartStore.addToCart(product)
    product.instock-- 
  } else {
    alert('This product is out of stock!')
  }
}
const toggleWishlist = (product) => {
  if (wishlistStore.isInWishlist(product.id)) {
    wishlistStore.removeFromWishlist(product.id)
  } else {
    wishlistStore.addToWishlist(product)
  }
}

</script>

<style scoped>
.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 2rem;
  padding: 2rem;
}


.product-card {
  background-color: #f9f9f9;
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.1);
}

.product-image {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.product-details {
  padding: 1rem;
}

.product-title {
  font-size: 1.4rem;
  font-weight: 600;
  color: #333;
  margin: 0.5rem 0;
}

.product-description {
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
  text-align: justify;
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.instock {
  font-size: 0.9rem;
  color: #28a745;
  font-weight: bold;
}

.add-to-cart {
  background-color: #4f46e5;
  color: #fff;
  border: none;
  padding: 0.5rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.95rem;
  transition: background-color 0.3s ease;
}

.add-to-cart:hover {
  background-color: #3730a3;
}

@media (max-width: 992px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .product-grid {
    grid-template-columns: 1fr;
  }
}

</style>
