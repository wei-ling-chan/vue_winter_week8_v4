<template>
  <!-- header -->
  <div class="web">
    <header class="header fixed-top w-100" :class="{ 'bg-black':isScrolled,'bg-transcolor':!isScrolled }">
      <div class="container px-md-0">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid justify-content-between">
            <RouterLink to="/">
              <img src="@/assets/img/logo.png" class="logo" alt="麵鋪子" style="filter: brightness(0) saturate(0) invert(1);" />
            </RouterLink>
            <a class="logo navbar-brand d-none d-md-block" href="#" @click.prevent></a>
            <button
              class="navbar-toggler"
              type="button"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style="border:1px solid white" @click="toggleCollapse">
              <i class="bi bi-list" style="color: white;"></i>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent" ref="collapse">
              <ul class="menu navbar-nav fs-6 text-center mb-md-0 mb-3">
                <li class="nav-item me-md-4 me-0 mt-md-2  my-2 mt-4">
                  <RouterLink to="/about" class="nav-link text-white">關於我們</RouterLink>
                </li>
                <li class="nav-item me-md-4 me-0 my-2 ">
                  <RouterLink to="/products" class="nav-link text-white">美味專區</RouterLink>
                </li>
                <li class="nav-item me-md-4 me-0 my-2">
                  <RouterLink to="/news" class="nav-link text-white">最新消息</RouterLink>
                </li>
                <li class="nav-item me-md-4 me-0 my-2">
                  <RouterLink to="/myStorage" class="nav-link text-white">我的收藏</RouterLink>
                </li>

                <li class="nav-item me-md-0 me-0 my-2">
                  <RouterLink to="/cart" class="nav-link pe-0">
                    <i class="bi bi-cart-fill"></i>
                    <span class="badge rounded-circle cart-badge rounded-pil fs-18" v-if="cartsLength>0">{{cartsLength}}</span>
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>

    <RouterView />
    <!-- footer -->
    <footer class="footer bg-dark">
      <div class="container d-flex justify-content-between py-md-5 p-md-0 p-3">
        <nav class="contact">
          <div class="mb-3 text-light"><a href="javascript:void(0)" class="text-decoration-none">聯絡我們</a></div>
          <ul class="contact-info">
            <li class="mb-1"><a href="tel:+0800-123-4567" class="text-decoration-none">電話: 04-1234567</a></li>
            <li class="mb-1"><a href="mailto:wlc606@gmail.com" class="text-decoration-none">E-mail: wlc606@gmail.com</a></li>
            <li class="mb-1"><a href="#" class="text-decoration-none" @click.prevent>營業時間(週二公休): 11:00 am-7:00 pm</a></li>
            <li class="mb-1"><a href="#" class="text-decoration-none" @click.prevent>地址: 台中市XX區XX里一段XX巷</a></li>
          </ul>
        </nav>
        <nav class="menu-social d-md-block d-none">
          <ul class="contact-info d-flex mb-6 justify-content-between">
            <li>
              <RouterLink to="/about" class="me-3 text-decoration-none">關於我們</RouterLink>
            </li>
            <li>
              <RouterLink to="/products" class="me-3 text-decoration-none">美味專區</RouterLink>
            </li>
            <li>
              <RouterLink to="/news" class="text-decoration-none">最新消息</RouterLink>
            </li>
          </ul>
          <ul class="contact-icon d-flex justify-content-end">
            <li class="me-3"><a href="#"><i class="bi bi-facebook"></i></a></li>
            <li class="me-3"><a href="#"><i class="bi bi-instagram"></i></a></li>
            <li><a href="#"><i class="bi bi-github"></i></a></li>
          </ul>

        </nav>
      </div>
      <div class="copyright bg-success text-center">
        <div class="container">
          <p class="text-light mb-0 px-md-0 py-md-2 p-3">ⓒ Copyright 2022 麵鋪子僅作為個人作品，無任何商業用途</p>
        </div>
      </div>
    </footer>
  </div>

</template>

<script>
import { mapState } from 'pinia'
import cartStore from '../store/cartStore'
import Collapse from 'bootstrap/js/dist/collapse'
export default {
  data () {
    return {
      products: [],
      serchProducts: [],
      isScrolled: false,
      isCollapseOpen: false,
      collapse: null
    }
  },
  computed: {
    ...mapState(cartStore, ['cartsLength', 'getCart'])
  },
  watch: {
    $route () {
      this.closeCollapse()
    }
  },
  methods: {
    handleMouseDown () {
      if (this.$refs.serch.value === '') {
        return
      }
      this.$router.replace({
        path: '/search',
        query: {
          name: this.$refs.serch.value
        }
      })
      this.$refs.serch.value = ''
    },
    setMenuFixed () {
      if (window.scrollY > 100) {
        this.isScrolled = true
      } else {
        this.isScrolled = false
      }
    },
    searchProduct () {
      if (this.$refs.serch.value === '') {
        return
      }
      // 轉址
      this.$router.push({
        path: '/search',
        query: {
          name: this.$refs.serch.value
        }
      })
      this.$refs.serch.value = ''
    },
    toggleCollapse () {
      if (!this.isCollapseOpen) {
        this.isCollapseOpen = true
        this.isScrolled = true
      } else {
        this.isCollapseOpen = false
      }
      this.collapse.toggle()
    },
    closeCollapse () {
      this.collapse.hide()
    }
  },
  mounted () {
    this.getCart()
    this.collapse = new Collapse(this.$refs.collapse, {
      toggle: false
    })
    window.addEventListener('scroll', this.setMenuFixed)
  },
  beforeUnmount () {
    window.removeEventListener('scroll', this.setMenuFixed)
  }
}
</script>
