import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const cart = ref([])

  function addToCart(product) {
    const existing = cart.value.find(item => item.id === product.id)
    if (existing) {
      existing.qty++
    } else {
      cart.value.push({ ...product, qty: 1 })
    }
  }

  function decreaseQty(productId) {
    const index = cart.value.findIndex(item => item.id === productId)
    if (index !== -1) {
      if (cart.value[index].qty > 1) {
        cart.value[index].qty--
      } else {
        cart.value.splice(index, 1)
      }
    }
  }

  function removeFromCart(productId) {
    cart.value = cart.value.filter(item => item.id !== productId)
  }

  function clearCart() {
    cart.value = []
  }

  const totalItems = computed(() =>
    cart.value.reduce((sum, item) => sum + item.qty, 0)
  )

  const totalPrice = computed(() =>
    cart.value.reduce((sum, item) => sum + item.qty * item.price, 0)
  )

  return {
    cart,
    addToCart,
    removeFromCart,
    decreaseQty,
    clearCart,
    totalItems,
    totalPrice,
  }
})
