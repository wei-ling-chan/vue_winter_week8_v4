<template>
  <div class="modal fade" id="delOrderModal" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" aria-hidden="true" ref="delOrderModal">
   <div class="modal-dialog" role="document">
     <div class="modal-content border-0">
       <div class="modal-header bg-danger text-white">
         <h5 class="modal-title">
           <span>刪除 {{ tempOrder.id }}</span>
         </h5>
         <button type="button" class="btn-close"
                 data-bs-dismiss="modal" aria-label="Close"></button>
       </div>
       <div class="modal-body">
         是否刪除 <strong class="text-danger">{{ tempOrder.id }}</strong> (刪除後將無法恢復)。
       </div>
       <div class="modal-footer">
         <button type="button" class="btn btn-outline-secondary"
                 data-bs-dismiss="modal">取消
         </button>
         <button type="button" class="btn btn-danger"
                 @click="$emit('del-item')">確認刪除
         </button>
       </div>
     </div>
   </div>
 </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'

export default {
  props: ['order'],
  data () {
    return {
      tempOrder: {}
    }
  },
  methods: {
    delorder () {
      this.tempOrder = this.order
    },
    openModal () {
      this.modal.show()
    },
    hideModal () {
      this.modal.hide()
    }
  },
  watch: {
    order () {
      this.tempOrder = this.order
    }
  },
  mounted () {
    // 取出token
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    // 預設token帶入header
    this.$http.defaults.headers.common.Authorization = token
    this.modal = new Modal(this.$refs.delOrderModal)
  }
}
</script>
