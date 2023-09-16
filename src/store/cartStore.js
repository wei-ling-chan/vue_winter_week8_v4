import axios from 'axios'
import { defineStore } from 'pinia'
import Toast from '@/methods/toasts.js'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default defineStore('cart', {
  state: () => ({
    storeCarts: [],
    cart: {},
    total: 0,
    final_total: 0,
    cartsLength: null,
    cartCoupon: {},
    couponPercent: '',
    coupon_code: ''
  }),
  actions: {
    // 取得購物車
    getCart () {
      axios.get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart`)
        .then(res => {
          this.storeCarts = res.data.data.carts
          this.cart = res.data.data
          this.total = res.data.data.total
          this.final_total = res.data.data.final_total
          this.cartsLength = this.storeCarts.length
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    // 加入購物車
    addToCart (id, qty = 1) {
      this.lodingItem = id
      const data = {
        product_id: id,
        qty
      }
      axios.post(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart`, { data })
        .then(res => {
          Toast.fire({
            width: 250,
            title: res.data.message,
            icon: 'success'
          })
          this.getCart()
        })
        .catch((error) => {
          Toast.fire({
            title: error.response.data.message,
            icon: 'error'
          })
        })
    }
  }
})
