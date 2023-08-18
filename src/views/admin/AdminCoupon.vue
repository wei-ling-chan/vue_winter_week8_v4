<template>
  <div class="admin-coupon container">
    <h1>優惠卷</h1>
    <div>
      <div class="text-end mt-4">
        <button class="btn btn-info" type="button" @click="openCouponModal(true,item)">
          建立新的優惠券
        </button>
      </div>
      <table class="table mt-4">
        <thead>
          <tr>
            <th>名稱</th>
            <th>折扣百分比</th>
            <th>到期日</th>
            <th>是否啟用</th>
            <th>編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, key) in coupons" :key="key+'456'">
            <td>{{ item.title }}</td>
            <td>{{ item.percent }}%</td>
            <td>{{ new Date(item.due_date).toLocaleDateString('zh-TW') }}</td>
            <td>
              <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
              <span v-else class="text-muted">未啟用</span>
            </td>
            <td>
              <div class="btn-group">
                <button class="btn btn-outline-info btn-sm" @click="openCouponModal(false,item)">編輯</button>
                <button class="btn btn-outline-danger btn-sm" @click="delCouponModal(item)">刪除</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <CouponModal ref="couponModal" :is-new="isNew" :coupon="tempCoupon" :get-coupons="getCoupons"></CouponModal>
      <DelCouponmodal ref="delcouponModal" :coupon="tempCoupon" :get-coupons="getCoupons"></DelCouponmodal>
    </div>
  </div>

</template>

<script>
import CouponModal from '@/components/CouponModal.vue'
import DelCouponmodal from '@/components/DelCouponmodal.vue'
import { mapActions } from 'pinia'
import SweetAlert from '@/store/SweetAlert.js'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      isNew: '',
      coupons: [],
      tempCoupon: {
        title: '',
        is_enabled: 0,
        percent: 100,
        code: ''
      }
    }
  },
  components: {
    CouponModal,
    DelCouponmodal
  },
  methods: {
    openCouponModal (isNew, item) {
      this.isNew = isNew
      this.tempCoupon.title = ''
      this.tempCoupon.is_enabled = ''
      this.tempCoupon.percent = ''
      this.tempCoupon.code = ''
      this.tempCoupon.due_date = new Date().getTime() / 1000
      if (this.isNew) {
        this.$refs.couponModal.openModal()
      } else {
        this.tempCoupon = {
          ...item
        }
        this.$refs.couponModal.openModal()
      }
    },
    delCouponModal (item) {
      this.tempCoupon = {
        ...item
      }
      this.$refs.delcouponModal.openModal()
    },
    getCoupons () {
      this.$http.get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/coupons`)
        .then(res => {
          this.coupons = res.data.coupons
        }).catch(error => {
          this.showErrorAlert(error)
        })
    },
    ...mapActions(SweetAlert, ['showErrorAlert'])
  },
  mounted () {
    // 取出token
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    // 預設token帶入header
    this.$http.defaults.headers.common.Authorization = token
    this.getCoupons()
  }
}
</script>
