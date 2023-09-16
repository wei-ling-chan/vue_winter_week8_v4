<template>
  <div class="news">
    <section class="banner banner-news text-center">
      <div class="banner-title h-100">
        <div class="row h-100 position-relative g-0">
          <div class="col-md-6 col-12 offset-md-3 banner-title position-absolute">
            <h2 class="text-light">
              <span class="banner-delicious-title">最新</span>消息
            </h2>
            <p class="text-light banner-subtitle">LATESE NEWS</p>
          </div>
          <div class="col-md-6 col-12 offset-md-3 banner-info position-absolute">
            <!--pc-->
            <p class="text-light d-none d-md-block">最新公告將不定期更新</p>
            <!--mobile-->
            <p class="text-light d-block d-md-none banner-info-mobile fs-6">最新公告將不定期更新</p>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div class="news pt-36 pb-100">
    <section class="news-content">
      <div class="container px-md-0">
        <div class="row justify-content-between">
          <div class="d-none d-lg-block col-lg-3 left-menu">
            <div class="left-menu-block shadow me-4">
              <ul class="category-filter">
                <li>
                  <button class="list-group-item select-all fw-bold" type="button" @click="filterNews('select-all')">全部</button>
                </li>
                <li>
                  <button class="list-group-item select-importent fw-bold" type="button" @click="filterNews('select-importent')">重要公告</button>
                </li>
                <li>
                  <button class="list-group-item select-newproduct fw-bold" type="button" @click="filterNews('select-newproduct')">新品上市</button>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-lg-9 news-block">
            <div class="news-importent news-block-items d-flex shadow" ref="newsImportent" :class="{'d-none': !showImportent }">
              <div class="p-md-4 p-4 fs-5">
                <h3 class="info-title fs-1" style="font-weight:700">慶開幕-全館打九折</h3>
                <ul class="info-content mb-0 ps-0 fs-6">
                  <li class="info-line mb-2">即日起輸入優惠碼999，全館享9折優惠</li>
                  <li class="info-line">快！優惠將於5/31截止！優惠不等人，快來享受這美味且經濟實惠的拌麵吧！</li>
                </ul>
              </div>
            </div>
            <div class="news-newproduct-all" ref="newsProductAll" :class="{ 'd-none': !showAll }">
              <div class="news-newproduct shadow news-block-items d-flex flex-column flex-lg-row mb-md-6" v-for="item in newsProducts" :key="item.id">
                <div class="pro-img m-lg-4 mx-auto my-4" :style="{ backgroundImage: `url(${item.imageUrl})` }"></div>
                <div class="pro-content w-100 d-flex flex-column py-lg-4 px-4 pe-lg-4">
                  <div class="content-head d-flex flex-column flex-lg-row justify-content-between pb-lg-0 align-items-center">
                    <div class="content-title pb-4 pb-lg-0">
                      <span class="fs-1" style="font-weight:700">{{ item.title }}</span>
                    </div>
                    <div class="d-flex flex-column-reverse head-tags pb-3 pb-lg-0">
                      <span class="btn btn-sm text-light bg-danger fs-6">新品上市</span>
                    </div>
                  </div>
                  <div class="content-date text-end mb-3 mt-n2">2023.5.1</div>
                  <div class="content-body">
                    <p class="fs-6">{{ item.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="tasty-menu-fixed" data-aos="fade-right" :class="{ 'show': isMenuFixed }" @click="scrollMeTo">
      <div class="column text-light">
        <div class="d-block bg-info d-flex justify-content-center align-items-center rounded-2" style="width: 40px;height: 40px;">
          <i class="bi bi-arrow-up" style="color: white;"></i>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      products: [],
      newsProducts: [],
      isLoading: false,
      showAll: true,
      showImportent: true,
      isMenuFixed: false
    }
  },
  methods: {
    filterNewsProducts () {
      this.$http.get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/products/all`)
        .then((res) => {
          this.products = res.data.products
          this.isLoading = false
          this.newsProducts = this.products.filter((item) => { return item.title === '日式擔仔麵' || item.title === '椒香湯拌麵' })
        })
    },
    filterNews (state) {
      if (state === 'select-all') {
        this.showAll = true
        this.showImportent = true
      } else if (state === 'select-importent') {
        this.showAll = false
        this.showImportent = true
      } else if (state === 'select-newproduct') {
        this.showAll = true
        this.showImportent = false
      }
    },
    setMenuFixed () {
      if (window.scrollY > 500) {
        this.isMenuFixed = true
      } else {
        this.isMenuFixed = false
      }
    },
    scrollMeTo () {
      const top = window.offsetTop - 120
      window.scrollTo(0, top)
    }
  },
  mounted () {
    this.filterNewsProducts()
    window.addEventListener('scroll', this.setMenuFixed)
  }
}
</script>
<style scoped>

</style>
