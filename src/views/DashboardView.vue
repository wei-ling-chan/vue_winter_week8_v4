<template>
  <div class="admin" v-if="checkSuccess">
    <div class="container">
      這是後台頁面
    <RouterLink to="/admin/products">後臺產品列表</RouterLink> |
    <RouterLink to="/admin/orders">後台訂單列表</RouterLink> |
    <RouterLink to="/admin/coupon">後台優惠卷</RouterLink> |
    <RouterLink to="/">回前台首頁</RouterLink> |
    <a href="#" @click.prevent="logout">登出</a>
    <hr/>
    <RouterView />
    </div>
  </div>
</template>

<script>
import { RouterView } from 'vue-router'
import { mapActions } from 'pinia'
import SweetAlert from '@/store/SweetAlert.js'
const { VITE_APP_URL } = import.meta.env
export default {
  data () {
    return {
      checkSuccess: false
    }
  },
  components: {
    RouterView
  },
  methods: {
    logout () {
      document.cookie = `hexToken=; expires=${new Date()};`
      this.$router.push('/login')
    },
    check () {
      // 取出token
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
      // 預設token帶入header
      this.$http.defaults.headers.common.Authorization = token
      this.$http.post(`${VITE_APP_URL}/v2/api/user/check`)
        .then(res => {
          this.checkSuccess = true
        }
        ).catch(error => {
          this.showErrorAlert(error)
          this.$router.push('/login')
        })
    },
    ...mapActions(SweetAlert, ['showErrorAlert'])
  },
  mounted () {
    this.check()
  }
}
</script>
