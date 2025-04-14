<template>
  <div class="cart-container">
    <h2 class="cart-title">Your Cart</h2>

    <div v-if="cart.length > 0" class="cart-content">
      <div class="cart-items">
        <div class="cart-row header">
          <span>Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Total</span>
          <span></span>
        </div>

        <div class="cart-row" v-for="item in cart" :key="item.id">
          <div class="product-info">
            <img :src="item.image" alt="product" class="product-img" />
            <div>
              <p class="product-name">{{ item.name }}</p>
              <p class="product-color text-gray-500 text-sm">Color: {{ item.color || 'Default' }}</p>
              <p class="stock-info">Available: {{ item.instock }}</p>
            </div>
          </div>

          <span>${{ item.price }}</span>

          <div class="qty-control">
            <button @click="decreaseQty(item.id)">−</button>
            <span>{{ item.qty }}</span>
            <button @click="increaseQty(item)">+</button>
          </div>

          <span>${{ item.qty * item.price }}</span>

          <button @click="removeFromCart(item.id)" class="remove-btn">×</button>
        </div>
      </div>
    </div>

    <div v-else class="empty-cart">
      <p>Your cart is empty.</p>
    </div>
  </div>
</template>


<script setup>
import { useCartStore } from '../store/cartStore'
import { storeToRefs } from 'pinia'

const cartStore = useCartStore()
const { cart } = storeToRefs(cartStore)
const { addToCart, removeFromCart, decreaseQty } = cartStore

const increaseQty = (item) => {
  if (item.qty < item.instock) {
    addToCart(item)
  } else {
    alert('Reached max available stock!')
  }
}

</script>

<style scoped>
.cart-container {
  max-width: 1100px;
  margin: auto;
  padding: 2rem 1rem;
}

.cart-title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
}

.cart-content {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: flex-start;
}

.cart-items {
  flex: 3;
}

.cart-row {
  display: grid;
  grid-template-columns: 2.5fr 1fr 1.5fr 1fr 0.5fr;
  gap: 1rem;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #e5e7eb;
}

.cart-row.header {
  font-weight: 600;
  border-bottom: 2px solid #000;
  padding-bottom: 0.75rem;
  margin-bottom: 0.5rem;
}

.product-info {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.product-img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 6px;
}

.product-name {
  font-weight: 500;
}

.qty-control {
  justify-content: space-between;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 0.2rem 0.5rem;
}

.qty-control button {
  background: none;
  border: none;
  font-size: 1.1rem;
  cursor: pointer;
}

.remove-btn {
  background: none;
  border: none;
  font-size: 1.3rem;
  cursor: pointer;
}

.cart-summary {
  flex: 1;
  background: #f9fafb;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
}

.summary-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.summary-item, .summary-total {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  font-size: 1rem;
}

.summary-total {
  font-weight: bold;
  border-top: 1px solid #ccc;
  margin-top: 1rem;
  padding-top: 1rem;
}

.add-coupon {
  color: #22c55e;
  cursor: pointer;
}

.checkout-btn {
  width: 100%;
  background: #22c55e;
  color: white;
  border: none;
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 6px;
  margin-top: 1.5rem;
  cursor: pointer;
}

.checkout-btn:hover {
  background: #16a34a;
}

.empty-cart {
  text-align: center;
  font-size: 1.1rem;
  color: #6b7280;
  margin-top: 2rem;
}
</style>
