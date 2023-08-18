<template>
  <h1>後台產品列表</h1>
  <div class="container">
    <div class="text-end mt-4">
      <button class="btn btn-info" @click="openModal('create')">
        建立新的產品
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">
            分類
          </th>
          <th>產品名稱</th>
          <th width="120">
            原價
          </th>
          <th width="120">
            售價
          </th>
          <th width="100">
            是否啟用
          </th>
          <th width="120">
            編輯
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in product" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td class="text-start">{{ item.origin_price }}</td>
          <td class="text-start">{{ item.price }}</td>
          <td>
            <span class="text-success">{{ item.is_enabled ? '啟用':'未啟用' }}</span>
          </td>
          <td>
            <div class="btn-group">
              <button type="button" class="btn btn-outline-info btn-sm" @click="openModal('edit',item)" data-id="item.id">
                編輯
              </button>
              <button type="button" class="btn btn-outline-danger btn-sm" @click="openModal('del',item)">
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <PaginationComponents :pages="page" :get-product="getProduct" @change-page="getProduct" />
    <ProductModal ref="productModal" @update-product="updateProduct" :product="template" />
    <DelProductmodal ref="delproductModal" @del-product="delProduct" :product="template" />
  </div>
</template>

<script>
import PaginationComponents from '@/components/PaginationComponents.vue'
import ProductModal from '@/components/ProductModal.vue'
import DelProductmodal from '@/components/DelProductmodal.vue'
import { mapActions } from 'pinia'
import SweetAlert from '@/store/SweetAlert.js'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      product: [],
      template: {
        imagesUrl: []
      },
      isNew: false, // 確認是編輯或新增所使用
      page: {} /// /用變數決定現在要帶第幾頁
    }
  },
  components: {
    PaginationComponents,
    ProductModal,
    DelProductmodal
  },
  methods: {
    getProduct (page) {
      this.$http.get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/products/?page=${page}`)
        .then(res => {
          this.product = res.data.products
          this.page = res.data.pagination
        })
        .catch(error => {
          this.showErrorAlert(error)
        })
    },
    // 新增 post
    updateProduct (item) {
      this.template = item
      let httpMethod = 'post'
      let api = `${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/product`
      // 編輯 put
      if (!this.isNew) {
        httpMethod = 'put'
        api = `${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/product/${this.template.id}`
      }
      this.$http[httpMethod](api, {
        data: this.template
      })
        .then(response => {
          this.$refs.productModal.hideModal()
          this.showSuccessAlert(response)
          this.getProduct()
        })
        .catch(error => {
          this.showErrorAlert(error)
        })
    },
    // 刪除
    delProduct () {
      this.$http.delete(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/product/${this.template.id}`)
        .then(response => {
          this.$refs.delproductModal.hideModal()
          this.showSuccessAlert(response)
          this.getProduct()
        })
        .catch(error => {
          this.showErrorAlert(error)
        })
    },
    // 打開Modal 新增or編輯or刪除
    openModal (status, item) {
      if (status === 'create') {
        this.template = {
          imagesUrl: []
        }
        this.isNew = true
        this.$refs.productModal.openModal()
      } else if (status === 'edit') {
        this.template = {
          ...item
        }
        this.$refs.productModal.openModal()
      } else if (status === 'del') {
        this.$refs.delproductModal.openModal()
        this.template = {
          ...item
        }
      }
    },
    ...mapActions(SweetAlert, ['showSuccessAlert', 'showErrorAlert'])
  },
  mounted () {
    // 取出token
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    // 預設token帶入header
    this.$http.defaults.headers.common.Authorization = token
    this.getProduct()
  }
}
</script>
