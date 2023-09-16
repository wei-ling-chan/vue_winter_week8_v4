<template>
  <Loading
    v-model:active="isLoading"
    :can-cancel="true" :color="color"
    :on-cancel="onCancel"
    :loader="loader"
    :is-full-page="fullPage" />
  <div class="cart-space" />
  <div class="cart-font d-flex flex-column align-items-center mb-5 mb-md-7 mt-4">
    <div class="container px-md-0">
      <div class="d-none d-lg-block px-0" style="width: 100%;">
      <!-- 購物流程開始 -->
      <div class="position-relative mx-auto m-4 mb-9" style="width: 50%;">
        <div class="progress" style="height: 1px;">
          <div class="progress-bar" role="progressbar" style="width: 100%;background-color:black;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"/>
        </div>
        <button type="button" class="position-absolute bg-success text-light border border-dark top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill fs-7"
          style="width: 6rem; height:6rem;">
          購物車
        </button>
        <button type="button"
          class="position-absolute bg-success text-light boeder border-dark bg-0 top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill fs-7"
          style="width: 6rem; height:6rem;">
          填寫訂單
        </button>
        <button type="button"
          class="position-absolute bg-primary text-dark top-0 start-100 translate-middle btn btn-sm btn-secondary rounded-pill fs-7"
          style="width: 6rem; height:6rem;">
          完成訂單
        </button>
      </div>
      <!-- 購物流程結束 -->
      <div class="d-flex justify-content-start align-items-start">
        <table class="table order-content-table align-middle border border-dark order-contents" style="width: 50%;">
          <thead>
            <tr class="table-dark text-center fs-md">
              <th colspan="4" class="order-content-title">訂單內容</th>
            </tr>
            <tr class="text-center fs-md">
              <th class="table-image">商品</th>
              <th>品名</th>
              <th>數量</th>
              <th class="text-center">金額</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="cart.carts">
              <tr v-for="item in cart.carts" :key="item.id" class="fs-md">
                <td>
                  <div style="
                            height: 100px;
                            background-size: cover;
                            background-position: center;
                            width: 100%
                          " :style="{ backgroundImage: `url(${item.product.imageUrl})` }">
                  </div>
                </td>
                <td class="text-center">
                  {{ item.product.title }}
                </td>
                <td>
                  <div class="ms-2 text-center">
                    {{ item.qty }}
                  </div>
                </td>
                <td class="text-center" v-if="cart.total === cart.final_total">
                  {{ item.total }}
                </td>
                <td class="text-center" v-if="cart.total !== cart.final_total">
                  {{ Math.round(item.final_total) }}
                </td>
              </tr>
            </template>
          </tbody>
          <tfoot>
            <tr class="fs-md">
              <td class="text-center text-info" v-if="cart.total !== cart.final_total">已折扣</td>
              <td class="text-center text-info" v-if="cart.total !== cart.final_total">{{ Math.round(cart.total-cart.final_total) }}</td>
              <td class="text-center" v-if="cart.total !== cart.final_total">金額</td>
              <td class="text-center text-danger" v-if="cart.total !== cart.final_total">{{ Math.round(cart.final_total) }}</td>
              <td v-if="cart.total === cart.final_total" class="border-bottom-0"/>
              <td v-if="cart.total === cart.final_total" class="border-bottom-0"/>
              <td class="text-center border-bottom-0" v-if="cart.total === cart.final_total">總計</td>
              <td class="text-center border-bottom-0" v-if="cart.total === cart.final_total"
                :class="{ 'text-decoration-line-through': cart.total !== cart.final_total }">
                {{ cart.total }}
              </td>
            </tr>
          </tfoot>
        </table>
        <!-- 表單驗證開始 -->
        <div class=" d-flex flex-column align-items-center ms-4 mb-9 border border-1 border-dark information rounded-3" style="width: 49%;">
          <div class="text-center p-2 bg-dark text-white w-100 information-title fs-md rounded-top">填寫資訊</div>
          <VForm ref="form" class="p-4" style="width: 95%;" v-slot="{ errors }">
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <VField id="email"
                name="email"
                type="email"
                class="form-control" :class="{ 'is-invalid': errors['email'] }"
                placeholder="請輸入 Email"
                rules="email|required"
                v-model="data.user.email">
              </VField>
              <ErrorMessage name="email" class="invalid-feedback" />
            </div>
            <div class="mb-3">
              <label for="name" class="form-label">收件人姓名</label>
              <VField
                id="name"
                name="姓名"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['姓名'] }"
                placeholder="請輸入姓名"
                rules="required"
                v-model="data.user.name">
              </VField>
              <ErrorMessage name="姓名" class="invalid-feedback" />
            </div>
            <div class="mb-3">
              <label for="tel" class="form-label">收件人電話</label>
              <VField
                id="tel"
                name="電話"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['電話'] }"
                placeholder="請輸入電話"
                rules="required|max:10|integer"
                v-model="data.user.tel">
              </VField>
              <ErrorMessage name="電話" class="invalid-feedback" />
            </div>
            <div class="mb-3">
              <label for="form-select" class="form-label">選擇
                <span class="fw-bold">內用</span>或
                <span class="fw-bold">外帶</span>
              </label>
              <select class="form-select" aria-label="Default select example" ref="inOut" @change="updateIsOut">
                <option value="內用">內用</option>
                <option value="外帶">外帶</option>
              </select>
            </div>
            <div class="mb-3" v-if="isOut">
              <label for="datepicker" class="form-label">預計 <span class="fw-bold">外帶</span> 取餐時間</label>
              <div class="d-flex w-100">
                <VDatePicker v-model="date" mode="dateTime" is24hr>
                  <template v-slot="{ inputValue, inputEvents }">
                    <input ref="myInput"
                      class="px-2 py-1 border border-dark rounded-0 rounded-start px-11 py-10 w-100 rounded focus:outline-none focus:border-blue-300"
                      :value="inputValue"
                      v-on="inputEvents" />
                  </template>
                </VDatePicker>
                <div class="px-2 py-1 border border-1 border-start-0 border-dark rounded-end" style="background-color: #e9ecef;">
                  <i class="bi bi-calendar-date text-dark fs-6"></i>
                </div>
              </div>
              <div class="text-danger">*當天預約，取餐時間需準備20分鐘</div>
            </div>
            <div class="mb-3">
              <label for="form-select" class="form-label">付款方式</label>
              <select class="form-select" aria-label="Default select example" ref="payInput">
                <option selected>LINE Pay</option>
                <option>信用卡</option>
                <option>現金</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">留言</label>
              <!-- errors -->
              <VField v-slot="{ field }" v-model="data.message" name="comment" rules="required">
                <textarea v-bind="field" name="comment" class="form-control"></textarea>
              </VField>
            </div>
            <div class="text-end mt-4">
              <button type="button" class="btn btn-info text-white" @click.prevent="order">送出訂單</button>
            </div>
          </VForm>
        </div>
        <!-- 表單驗證結束 -->
      </div>
    </div>
    </div>
    <!-- 手機板開始 -->
    <div class="d-block d-lg-none d-flex flex-column px-0 table-responsive" style="width: 100%;">
      <!-- 購物流程開始 -->
      <div class="position-relative mx-auto m-5 mb-7" style="width: 70%;">
        <div class="progress" style="height: 1px;">
          <div class="progress-bar" role="progressbar"
            style="width: 100%;background-color:black;"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100" />
        </div>
        <button type="button" class="position-absolute  bg-success text-white top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill fs-7"
          style="width: 4rem; height:4rem;">
          購物車
        </button>
        <button type="button" class="position-absolute boeder border-dark bg-success text-light top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill fs-7"
          style="width: 4rem; height:4rem;">
          填寫訂單
        </button>
        <button type="button" class="position-absolute  bg-primary text-dark top-0 start-100 translate-middle btn btn-sm btn-secondary rounded-pill fs-7"
          style="width: 4rem; height:4rem;">
          完成訂單
        </button>
      </div>
      <!-- 購物流程結束 -->
      <div class="d-flex justify-content-start align-items-start px-11">
        <div class="container px-0">
          <table class="table order-content-table align-middle border border-1 border-dark">
            <thead>
              <tr class="table-dark text-center">
                <th colspan="4" class="order-content-title">訂單內容</th>
              </tr>
              <tr>
                <th class="text-center">商品</th>
                <th class="text-center">品名/數量</th>
                <th class="text-center">金額</th>
              </tr>
            </thead>
            <tbody>
              <template v-if="cart.carts">
                <tr v-for="item in cart.carts" :key="item.id">
                  <td>
                    <div style="
                            height: 100px;
                            background-size: contain;
                            background-position: center;
                            background-repeat: no-repeat;
                          " :style="{ backgroundImage: `url(${ item.product.imageUrl })` }">
                    </div>
                  </td>
                  <td class="text-center">
                    <div class="d-flex flex-column">
                      <div class="name-number">
                        {{ item.product.title }}
                      </div>
                      <div class="text-center mt-1">
                        {{ item.qty }}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="priced-flex flex-column">
                      <div class="text-center" v-if="cart.total === cart.final_total">
                        {{ item.total }}
                      </div>
                      <div class="text-center" v-if="cart.total !== cart.final_total">
                        {{ Math.round(item.final_total) }}
                      </div>
                    </div>
                  </td>
                </tr>
              </template>
            </tbody>
            <tfoot>
              <tr>
                <td class="text-center text-info" v-if="cart.total !== cart.final_total">
                  已折扣:&nbsp;{{ Math.round(cart.total-cart.final_total) }}
                </td>
                <td class="text-center" v-if="cart.total !== cart.final_total">
                  金額
                </td>
                <td class="text-center text-danger" v-if="cart.total !== cart.final_total">
                  {{ Math.round(cart.final_total) }}
                </td>
                <td class="border-bottom-0" v-if="cart.total === cart.final_total" />
                <td class="text-center border-bottom-0" v-if="cart.total === cart.final_total">
                  總計
                </td>
                <td class="text-center border-bottom-0" v-if="cart.total === cart.final_total" :class="{ 'text-decoration-line-through': cart.total !== cart.final_total }">
                  {{ cart.total }}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <!-- 表單驗證開始 -->
      <div class="container px-md-0">
        <div class=" d-flex flex-column align-items-center mb-2 border border-1 border-dark information mx-auto rounded-3" style="width: 100%;">
          <div class="information-title text-center p-2 bg-dark text-white w-100 fs-md rounded-top">填寫資訊</div>
          <VForm ref="form" class="p-4" style="width: 100%;" v-slot="{ errors }">
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <VField
                id="email"
                name="email"
                type="email"
                class="form-control"
                :class="{ 'is-invalid': errors['email'] }"
                placeholder="請輸入 Email"
                rules="email|required"
                v-model="data.user.email" />
              <ErrorMessage name="email" class="invalid-feedback" />
            </div>
            <div class="mb-3">
              <label for="name" class="form-label">收件人姓名</label>
              <VField
              id="name"
              name="姓名"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['姓名'] }"
              placeholder="請輸入姓名"
              rules="required"
              v-model="data.user.name" />
              <ErrorMessage name="姓名" class="invalid-feedback" />
            </div>
            <div class="mb-3">
              <label for="tel" class="form-label">收件人電話</label>
              <VField
              id="tel"
              name="電話"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['電話'] }"
              placeholder="請輸入電話"
              rules="required|max:10|integer"
              v-model="data.user.tel" />
              <ErrorMessage name="電話" class="invalid-feedback" />
            </div>
            <div class="mb-3">
              <label for="form-select" class="form-label">選擇
                <span class="fw-bold">內用</span>或
                <span class="fw-bold">外帶</span>
              </label>
              <select class="form-select" aria-label="Default select example" ref="inOut" @change="updateIsOut">
                <option value="內用">內用</option>
                <option value="外帶">外帶</option>
              </select>
            </div>
            <div class="mb-3" v-if="isOut">
              <label for="datepicker" class="form-label">預計<span class="fw-bold">外帶</span> 取餐時間</label>
              <div class="d-flex w-100">
                <VDatePicker v-model="date" mode="dateTime" is24hr>
                  <template v-slot="{ inputValue, inputEvents }">
                    <input ref="myInput"
                      class="px-2 py-1 border border-dark rounded-0 rounded-start px-11 py-10 w-100 rounded focus:outline-none focus:border-blue-300"
                      :value="inputValue"
                      v-on="inputEvents" />
                  </template>
                </VDatePicker>
                <div class="px-2 py-1 border border-1 border-start-0 border-dark rounded-end"
                  style="background-color: #e9ecef;">
                  <i class="bi bi-calendar-date text-dark fs-6"></i>
                </div>
              </div>
              <div class="text-danger">*當天預約，取餐時間需準備20分鐘</div>
            </div>
            <div class="mb-3">
              <label for="form-select" class="form-label">付款方式</label>
              <select class="form-select" aria-label="Default select example" ref="payInput">
                <option selected>LINE Pay</option>
                <option>信用卡</option>
                <option>現金</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">留言</label>
              <VField v-slot="{ field }" v-model="data.message" name="comment" rules="required">
                <textarea v-bind="field" name="comment" class="form-control" />
              </VField>
            </div>
            <div class="text-end mt-4">
              <button type="button" class="btn btn-info text-white" @click.prevent="order">送出訂單</button>
            </div>
          </VForm>
        </div>
      </div>

      <!-- 表單驗證結束-->
      <!-- 手機板結束 -->
    </div>
  </div>
</template>

<script>
// loading
import Loading from 'vue-loading-overlay'
import Toast from '@/methods/toasts.js'
import 'vue-loading-overlay/dist/css/index.css'
// 表單驗證
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
import AllRules from '@vee-validate/rules'
import { localize } from '@vee-validate/i18n'
// 環境API
const { VITE_APP_URL, VITE_APP_PATH } =
  import.meta.env
  // 驗證規則加入 VeeValidate
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})
configure({ // 用來做一些設定
  generateMessage: localize('zh_TW'), // 啟用 locale
  VeeValidateNoInput: true // 輸入字元立即驗證
})
localize('zh_TW', {
  messages: {
    required: '這裡不能為空',
    email: '請輸入正確的電子郵件地址',
    min: '至少1碼',
    max: '超過8碼',
    integer: '須為整數'
  }
})

export default {
  data () {
    const date = new Date()
    date.setMinutes(date.getMinutes() + 20) // 將時間設置為當前時間加上 20 分鐘
    return {
      data: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '目前無此服務'
        },
        message: ''
      },
      cart: [],
      date,
      payMethos: {
        inOrOut: '',
        payTime: '',
        payBy: '',
        orderCount: 0
      },
      // loding css
      color: '#9cd020',
      isLoading: false,
      fullPage: true,
      loader: 'bars',
      isOut: false
    }
  },
  components: {
    VForm: Form,
    VField: Field,
    ErrorMessage,
    Loading
  },
  methods: {
    doAjax () {
      this.isLoading = true
    },
    // 取得購物車
    getCart () {
      this.$http.get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart`)
        .then(res => {
          this.cart = res.data.data
          this.isLoading = false
        })
        .catch((error) => {
          if (error) {
            Toast.fire({
              width: 250,
              title: '未取得購物車',
              icon: 'error'
            })
          }
        })
    },
    // 結帳
    order () {
      const orderData = {
        data: this.data
      }
      this.$http.post(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/order`, orderData)
        .then(res => {
          this.$router.push(`/checkOrder/${res.data.orderId}`)
          this.$refs.form.resetForm()
          console.log(888)
          this.orderinfo()
          console.log(999)
        })
        .catch((err) => {
          if (err) {
            Toast.fire({
              width: 250,
              title: '請確實輸入',
              icon: 'error'
            })
          }
        })
      this.cart = ''
      this.$refs.form.resetForm()
    },
    // reset表單
    resetForm () {
      this.$refs.form.resetForm()
    },
    updateIsOut () {
      if (this.$refs.inOut.value === '內用') {
        this.isOut = false
      } else if (this.$refs.inOut.value === '外帶') {
        this.isOut = true
      }
    },
    orderinfo () {
      // 選擇內用或外帶
      this.payMethos.inOrOut = this.$refs.inOut.value
      console.log(111)
      // 預計外帶取餐時間
      if (this.payMethos.inOrOut === '外帶') {
        const value = this.$refs.myInput.value
        this.payMethos.payTime = value
        console.log(222)
      }
      // 付款方式
      this.payMethos.payBy = this.$refs.payInput.value
      console.log(333)
      // 取單號
      this.payMethos.orderCount = this.payMethos.orderCount + 1
      const payMethosStr = JSON.stringify(this.payMethos)
      localStorage.setItem('order', payMethosStr)
      console.log(444)
    }
  },
  mounted () {
    this.doAjax()
    this.getCart()
  }
}
</script>
