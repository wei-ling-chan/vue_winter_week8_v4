<template>
  <div style="height: 20vh;" />
  <div class="my-storage filter-product my-md-5 my-4 tasty-list" ref="filter-product">
    <div class="container px-md-0">
      <h1 class="text-center mb-md-4 m-0 fw-bold">我的收藏</h1>
      <div class="row mx-n2" v-if="temProducts.length>0">
        <div class="col-12 col-md-6 col-xl-4 tasty-item-block position-relative" v-for="product in temProducts" :key="product.id">
          <RouterLink :to="`/product/${ product.id }`" class="card mx-2 my-5">
            <div class="slide-hover overflow-hidden">
              <img :src="product.imageUrl" alt="收藏" class="slide-img" />
            </div>
            <div class="card-body w-100">
              <div class="mb-4 tasty-item">
                <div class="d-flex justify-content-between align-items-center position-relative mb-2">
                  <h5 class="card-title fw-bold tasty-item-title d-block text-dark" style="font-size: 30px;">{{ product.title }}</h5>
                  <a class="heart">
                    <i :class="heartClass(product.id)" @click.prevent="toggleFavorite(product.id)"></i>
                  </a>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="card-text text-md end tasty-item-price text-info fs-6" style="font-weight: 700;">特價NT$&nbsp;{{ product.price }}</div>
                  <div class="card-text text-md end fs-7" style="color: #c3c3c3;">
                    <span class="text-decoration-line-through">NT$&nbsp;{{ product.origin_price }}</span>
                  </div>
                </div>
              </div>
              <div class="product-btn d-flex justify-content-between tasty-button">
                <a type="button" class="d-md-block btn btn-dark text-light w-100" @click.prevent="addToCart(product.id,qty)">
                  <i class="fa-solid fa-cart-shopping"></i>&nbsp;加入購物車
                </a>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
      <div v-else style="height: 50vh;">
        <div class="h5 py-7 text-center fw-normal">目前還沒有收藏喔!趕快去收藏吧~</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'pinia'
import cartStore from '../../store/cartStore.js'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      products: [],
      temProducts: [],
      favorites: []
    }
  },
  methods: {
    testItems () {
      this.favorites = JSON.parse(localStorage.getItem('favorites')) || []
      this.$http.get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/products/all`)
        .then((res) => {
          this.products = res.data.products
          this.filteredItems()
        })
    },
    filteredItems () {
      this.temProducts = this.products.filter(item => this.favorites.includes(item.id))
    },
    toggleFavorite (productId) {
      if (this.favorites.includes(productId)) {
        this.favorites = this.favorites.filter(id => id !== productId)
      } else {
        this.favorites.push(productId)
      }
      localStorage.setItem('favorites', JSON.stringify(this.favorites))
    },
    heartClass (productId) {
      return this.favorites.includes(productId) ? 'fa-solid fa-heart fs-5 text-danger' : 'fa-regular fs-5 fa-heart'
    },
    ...mapActions(cartStore, ['addToCart'])
  },
  watch: {
    favorites: function () {
      this.filteredItems()
    }
  },
  mounted () {
    this.favorites = JSON.parse(localStorage.getItem('favorites')) || []
    this.testItems()
  }
}
</script>
