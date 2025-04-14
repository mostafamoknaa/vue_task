// store/wishlistStore.js
import { defineStore } from 'pinia'

export const useWishlistStore = defineStore('wishlist', {
    state: () => ({
        wishlist: JSON.parse(localStorage.getItem('wishlist')) || []
    }),

    actions: {
        addToWishlist(product) {
            const exists = this.wishlist.find(item => item.id === product.id)
            if (!exists) {
                this.wishlist.push(product)
                this.saveToStorage()
            }
        },

        removeFromWishlist(productId) {
            this.wishlist = this.wishlist.filter(item => item.id !== productId)
            this.saveToStorage()
        },

        isInWishlist(productId) {
            return this.wishlist.some(item => item.id === productId)
        },

        saveToStorage() {
            localStorage.setItem('wishlist', JSON.stringify(this.wishlist))
        }
    }
})