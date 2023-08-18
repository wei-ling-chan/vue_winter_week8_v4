<template>
  <div class="modal fade" id="couponModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="Modal">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            <span v-if="isNew">新增優惠卷</span>
            <span v-else>編輯優惠卷</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="title">標題</label>
            <input type="text" class="form-control" id="title" v-model="tempCoupon.title" placeholder="請輸入標題">
          </div>
          <div class="mb-3">
            <label for="coupon_code">優惠碼</label>
            <input type="text" class="form-control" id="coupon_code" v-model="tempCoupon.code" placeholder="請輸入優惠碼">
          </div>
          <div class="mb-3">
            <label for="due_date">到期日</label>
            <input type="date" class="form-control" id="due_date" v-model="tempCoupon.due_date">
          </div>
          <div class="mb-3">
            <label for="price">折扣百分比</label>
            <input type="number" class="form-control" id="price" min="0" v-model.number="tempCoupon.percent" placeholder="請輸入折扣百分比">
          </div>
          <div class="mb-3">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" :true-value="1" :false-value="0" v-model="tempCoupon.is_enabled" id="is_enabled">
              <label class="form-check-label" for="is_enabled">
                是否啟用
              </label>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-info" @click="creatCoupon"> {{ isNew ? '新增優惠卷' : '更新優惠券' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
import { mapActions } from 'pinia'
import SweetAlert from '@/store/SweetAlert.js'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  props: ['isNew', 'coupon', 'getCoupons'],
  data () {
    return {
      tempCoupon: {
        title: '',
        is_enabled: 1,
        percent: '',
        code: ''
      },
      due_date: '',
      modal: '',
      couponeEdited: {}
    }
  },
  methods: {
    openModal () {
      this.modal.show()
    },
    hideModal () {
      this.modal.hide()
    },
    // 建立新的優惠卷
    creatCoupon () {
      this.tempCoupon.due_date = new Date(this.tempCoupon.due_date).getTime() // 將日期轉換為Date對象，再換為時間戳(以毫秒為單位)
      if (this.isNew === true) {
        this.hideModal()
        const data = this.tempCoupon
        this.$http.post(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/coupon`, {
          data
        })
          .then(res => {
            this.getCoupons()
          }).catch(error => {
            this.showErrorAlert(error)
          })
      } else if (this.isNew === false) { // 編輯優惠卷
        this.hideModal()
        const data = this.tempCoupon
        this.$http.put(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`, {
          data
        })
          .then(res => {
            this.getCoupons()
          }).catch(error => {
            this.showErrorAlert(error)
          })
      }
    },
    ...mapActions(SweetAlert, ['showErrorAlert'])
  },
  watch: {
    coupon () {
      this.couponeEdited = this.coupon
      this.couponeEdited.due_date = new Date(this.couponeEdited.due_date).toISOString().slice(0, 10)
      this.tempCoupon = this.couponeEdited
    }
  },
  mounted () {
    // 取出token
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    // 預設token帶入header
    this.$http.defaults.headers.common.Authorization = token
    this.modal = new Modal(this.$refs.Modal)
    this.isNews = this.isNew
  }
}
</script>
