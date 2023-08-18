import { defineStore } from 'pinia'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default defineStore('productStore', {

  state: () => ({
    products: []
  }),
  actions: {
    getProducts () {
      this.$http.get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/products/all`)
        .then((res) => {
          this.products = res.data.products
        })
    }
  },
  getters: {
    storeProduct: ({ products }) => {
      return products
    }
  }

})
