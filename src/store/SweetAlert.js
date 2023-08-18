import { defineStore } from 'pinia'
import Swal from 'sweetalert2'
export default defineStore('ErrorAlert', {
  actions: {
    showSuccessAlert (response) {
      Swal.fire({
        title: `${response.data.message}`,
        confirmButtonColor: '#7b7d42cc',
        icon: 'success',
        confirmButtonText: '確認'
      })
    },
    showErrorAlert (error) {
      Swal.fire({
        title: `${error.response.data.message}`,
        confirmButtonColor: '#7b7d42cc',
        icon: 'error',
        iconColor: '#EBDABC',
        confirmButtonText: '確認'
      })
    }
  }
})
