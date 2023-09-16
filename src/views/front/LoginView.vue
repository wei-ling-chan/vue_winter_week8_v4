<template>
  <div class="login d-flex flex-column align-items-center mb-4">
    <div style="height: 20vh;" />
    <h1 style="margin-top: 3rem;margin-bottom: 3rem;">後台登入</h1>
    <form id="form" class="form-signin w-25">
      <div class="form-floating mb-3">
        <input type="email" class="form-control email" id="username" placeholder="name@example.com" required autofocus v-model="user.username">
        <label for="username">Email address</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control password" id="password" placeholder="Password" required v-model="user.password">
        <label for="password">Password</label>
      </div>
      <button class="btn btn-lg btn-info w-100 mt-3 login" style="margin-bottom: 6rem;" @click.prevent="login" type="submit">
        登入
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'pinia'
import SweetAlert from '@/store/SweetAlert.js'
const { VITE_APP_URL } = import.meta.env

export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      // 1.發送 API 至遠端並登入（並儲存 Token）
      this.$http.post(`${VITE_APP_URL}/v2/admin/signin`, this.user)
        .then(res => {
          const {
            token,
            expired
          } = res.data
          // 儲存cookie
          document.cookie = `hexToken=${token}; expires=${new Date(expired)};`
          // 轉址
          this.$router.push('/admin/products')
        }).catch(error => {
          this.user.username = ''
          this.user.password = ''
          this.showErrorAlert(error)
        })
    },
    ...mapActions(SweetAlert, ['showErrorAlert'])
  }
}
</script>
