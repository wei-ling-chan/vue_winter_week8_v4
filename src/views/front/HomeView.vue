<template>
  <Loading
    v-model:active="isLoading"
    :can-cancel="true"
    :color="color"
    :on-cancel="onCancel"
    :loader="loader"
    :is-full-page="fullPage" />
  <div class="index">
    <div class="swiper-banner">
      <Swiper
        :slidesPerView="1"
        :autoHeight="true"
        :effect="'fade'"
        :autoplay="{ delay: 10000 }"
        :centeredSlides="true"
        :loop="true"
        :navigation="{ nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev' }"
        :modules="modules" class="mySwiper" style="width: 100%;" @slideChange="playAnimation">
        <SwiperSlide>
          <section class="banner banner-1 anima position-relative pt-3 pb-6 mb-36 mb-md-100">
             <!-- 電腦版 -->
            <div class="banner-title position-absolute d-none d-md-block" style="right: 12%; top: 18%;">
              <img src="@/assets/img/banner/banner_home1titleseal.png" alt="用心製麵" style="width: 100px;" />
              <div class="d-flex align-items-center position-absolute banner-more rounded-3">
                <RouterLink to="/products">
                  <div class="banner-more-btn btn btn-outline-light rounded-2">
                    <div>前往訂餐</div>
                    <i class="fa-solid fa-arrow-right-long fs-6"></i>
                  </div>
                </RouterLink>
              </div>
            </div>
            <!-- 手機版 -->
            <div class="banner-title position-absolute d-block d-md-none" style="right: 12%; top: 18%;width: 75%;">
              <img src="@/assets/img/banner/banner-phone-home1test.png" alt="用心製麵" />
            </div>
            <div class="d-flex align-items-center position-absolute banner-more border border-1 border-dark rounded-3">
              <RouterLink to="/products">
                <div class="banner-more-btn btn btn-outline-light rounded-2 border-0">
                  <div class="d-inline-block">前往訂餐&nbsp;</div>
                  <i class="fa-solid fa-arrow-right-long fs-6"></i>
                </div>
              </RouterLink>
            </div>
            <!-- 電腦版 -->
            <div class="banner-info position-absolute d-none d-md-block" style="right: 7%; top: 38%;width: 4%;">
              <img src="@/assets/img/banner/banner-home1-contant.png" alt="美味的一碗" style="width: 4rem;" />
            </div>
            <!-- 手機版 -->
            <div class="banner-info position-absolute d-block d-md-none" style="right: 14%; top: 72%;bottom: 21%;">
              <img src="@/assets/img/banner/banner-phone-home1test2.png" alt="美味的一碗" style="width: 17rem;" />
            </div>
            <div class="arrow arrow-1"></div>
            <div class="arrow arrow-2"></div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section class="banner banner-2 position-relative pt-3 pb-6 mb-36 mb-md-100">
            <div class="banner-title position-absolute" style="left: 16%;top: 15%;">
              <img src="@/assets/img/banner/banner_home2title.png" alt="新品上市" style="width: 100px;" />
              <div class="d-flex align-items-center position-absolute banner-more border border-1 border-dark rounded-3">
                <RouterLink to="/products">
                  <div class="banner-more-btn btn btn-outline-light rounded-2 border-0">
                    <div>前往訂餐</div>
                    <i class="fa-solid fa-arrow-right-long fs-6"></i>
                  </div>
                </RouterLink>
              </div>
            </div>
            <div class="banner-info position-absolute" style="top: 23%;left: 21%;">
              <img src="@/assets/img/banner/banner_home2contant.png" alt="椒香麻辣湯拌麵" style="width: 450px;" />
            </div>
            <div class="arrow arrow-1"></div>
            <div class="arrow arrow-2"></div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section class="banner banner-3 position-relative pt-3 pb-6 mb-36 mb-md-100">
            <div class="banner-title position-absolute" style="top: 25%;left: 10%;">
              <img src="@/assets/img/banner/banner_home3title.png" alt="天然食材" style="width: 83px;" />
            </div>
            <div class="banner-info position-absolute" style="top: 33%;left: 17%;">
              <img src="@/assets/img/banner/banner_home3contant.png" alt="優質食材" style="width: 80px;" />
              <div class="d-flex align-items-center position-absolute banner-more border border-1 border-dark rounded-3">
                <RouterLink to="/products">
                  <div class="banner-more-btn btn btn-outline-dark rounded-2 border-0">
                    <div>前往訂餐</div>
                    <i class="fa-solid fa-arrow-right-long fs-6"></i>
                  </div>
                </RouterLink>
              </div>
            </div>
            <div class="arrow arrow-1" />
            <div class="arrow arrow-2" />
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section class="banner banner-4 position-relative pt-3 pb-6 mb-36 mb-md-100">
            <div class="banner-title position-absolute" style="left:18%;top:23%;">
              <img src="@/assets/img/banner/banner_home4title.png" alt="極致醬料" style="width: 110px;" />
              <div class="d-flex align-items-center position-absolute banner-more border border-1 border-dark rounded-3">
                <RouterLink to="/products">
                  <div class="banner-more-btn btn btn-outline-light rounded-2 border-0">
                    <div>前往訂餐</div>
                    <i class="fa-solid fa-arrow-right-long fs-6"></i>
                  </div>
                </RouterLink>
              </div>
            </div>
            <div class="banner-info position-absolute" style="left:26%;top:34%;">
              <img src="@/assets/img/banner/banner_home4contant.png" alt="用心選料新鮮製作" style="width: 90px;" />
            </div>
            <div class="arrow arrow-1 mx-auto" />
            <div class="arrow arrow-2 mx-auto" />
          </section>
        </SwiperSlide>
      </Swiper>
    </div>
    <!-- 產品系列-->
    <section class="prodduct-catena py-4 position-relative" style="z-index: 0;">
      <div class="container px-md-0">
        <h3 class="mt-7 fw-bold text-center mb-1">產品系列</h3>
        <div class="mb-5 fs-5 text-center text-uppercase">PRODUCTS</div>
        <div class="row g-0">
          <RouterLink to="/products" class=" product-catena-item col-12 col-md-6 d-block text-center" data-aos="fade-up">
            <div class="img-hover">
              <div class="bg-1 product-hover border border-3 border-dark rounded-3" style="width: 99%; padding-bottom: 78%;" data-aos="zoom-in" />
            </div>
            <h4 class="text-center pt-2 pb-4 fw-bold">涼麵系列</h4>
          </RouterLink>
          <RouterLink to="/products" class=" product-catena-item col-12 col-md-6 text-center">
            <div class="img-hover">
              <div class="bg-2 product-hover border border-3 border-dark rounded-3" style="width: 99%; padding-bottom: 78%;" data-aos="zoom-in" />
            </div>
            <h4 class="text-center pt-2 pb-4 fw-bold">湯麵系列</h4>
          </RouterLink>
          <RouterLink to="/products" class="product-catena-item col-12 col-md-6 text-center">
            <div class="img-hover">
              <div class="bg-3 product-hover border border-3 border-dark rounded-3" style="width: 99%; padding-bottom: 78%;" data-aos="zoom-in" />
            </div>
            <h4 class="text-center pt-2 pb-4 fw-bold">炸物系列</h4>
          </RouterLink>
          <RouterLink to="/products" class="product-catena-item col-12 col-md-6 text-center">
            <div class="img-hover">
              <div class="bg-4 product-hover border border-3 border-dark rounded-3" style="width: 99%; padding-bottom: 78%;" data-aos="zoom-in" />
            </div>
            <h4 class="text-center pt-2 pb-4 fw-bold">小菜系列</h4>
          </RouterLink>
        </div>
      </div>
      <img src="@/assets/img/prodduct-catena-pic1.png" alt="背景圖" class="prodduct-catena-pic1 position-absolute" />
      <img src="@/assets/img/prodduct-catena-pic2.png" alt="背景圖" class="prodduct-catena-pic2 position-absolute" />
      <img src="@/assets/img/prodduct-catena-pic2.png" alt="背景圖" class="prodduct-catena-pic3 position-absolute" />
    </section>
    <!-- new product 開始 -->
    <section class="new-product row bg ms-0 p-4">
      <div class="col-12 col-md-6 pb-6 d-flex flex-column justify-content-center align-items-center">
        <div class="d-flex">
          <img src="@/assets/img/newProductPic8.png" class="ms-md-5 text-img" alt="新品" style="width: 20%;" />
          <img src="@/assets/img/newProductPic9.png" alt="麻辣拌麵" class="text-img" style="width: 80%;" />
        </div>
        <div class="d-flex flex-column align-items-center">
          <div class="d-flex flex-wrap justify-content-center text-light ms-md-7 mt-6 mb-4 fs-5">
            <p>純釀醬油、花椒、八角。</p>&nbsp;
            <p>完美搭配、爽口不膩</p>
            <RouterLink to="/products" type="button" class="new-produc-btn btn btn-outline-primary w-25 mt-4">了解更多</RouterLink>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 d-flex justify-content-center align-items-center">
        <img src="@/assets/img/newProductPic11.png" alt="麻辣拌麵" style="width:100%;" />
      </div>
    </section>
    <!-- 熱門商品開始-->
    <section class="hot-product position-relative pb-100 mb-0">
      <div class="container px-md-0">
        <h3 class="mt-7 mb-1 text-center fw-bold">熱門商品</h3>
        <div class="text-center mb-5 fs-5 text-uppercase">hot product</div>
        <div class="swiper-father">
          <Swiper
            :slidesPerView="3"
            :spaceBetween="30"
            :autoHeight="true"
            :centeredSlides="false"
            :loop="true"
            :navigation="{ nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev' }"
            :modules="modules" class="hotSwiper"
            :breakpoints="{0: {
              slidesPerView: 1,spaceBetween: 10,},
              600: {
              slidesPerView: 2,
              spaceBetween: 10,
            },769: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1025: {
              slidesPerView: 3,
              spaceBetween: 20,
            },}"
            @swiper="onSwiper">
            <SwiperSlide v-for="item in filteredItems('熱門')" :key="item.id">
              <RouterLink :to="`/product/${ item.id }`" class="card position-relative h-100 justify-content-between text-dark">
                <div class="slide-hover w-100 overflow-hidden">
                  <span class="badge bg-info position-absolute fs-6">熱門</span>
                  <div class="slide-img mt-auto rounded-0" :style="{ backgroundImage: `url(${ item.imageUrl })` }">
                  </div>
                </div>
                <div class="card-body w-100">
                      <div class="mb-4 tasty-item">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                          <h5 class="card-title fw-bolder hot-item-title d-block text-dark">{{ item.title }}</h5>
                          <a class="heart" @click.prevent>
                            <i :class="heartClass(item.id)" @click.prevent="toggleFavorite(item.id)"></i>
                          </a>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                          <div class="card-text text-md end tasty-item-price text-info fw-bolder fs-6">NT$&nbsp;{{ item.price }}</div>
                          <div class="card-text text-dark text-md end fs-7 text-subPrice">&nbsp;
                            <span class="text-decoration-line-through"> NT$ {{ item.origin_price }}</span>
                          </div>
                        </div>
                      </div>
                      <div class="product-btn d-flex justify-content-between tasty-button">
                        <a type="button" class="d-md-block btn btn-dark text-light w-100" @click.prevent="addToCart(item.id,qty)">
                          <i class="fa-solid fa-cart-shopping"></i>&nbsp;加入購物車
                        </a>
                      </div>
                    </div>
              </RouterLink>
            </SwiperSlide>
          </Swiper>
          <div class="swiper-button-prev" ref="prevButton" @click="onPrev">
            <div class="bg-info px-3 py-2 rounded-2">
              <i class="fa-solid fa-chevron-left text-light fs-5"></i>
            </div>
          </div>
          <div class="swiper-button-next" ref="nextButton" @click="onNext">
            <div class="bg-info px-3 py-2 rounded-2">
              <i class="fa-solid fa-chevron-right text-light fs-5"></i>
            </div>
          </div>
        </div>
      </div>
      <img src="@/assets/img/prodduct-catena-pic1.png" alt="背景圖" class="hot-product-catena-pic1 position-absolute" />
      <img src="@/assets/img/prodduct-catena-pic2.png" alt="背景圖" class="hot-product-catena-pic2 position-absolute" />
    </section>
  </div>
  <section class="tasty-menu-fixed" data-aos="fade-right" :class="{ 'show': isMenuFixed }" @click="scrollMeTo">
    <div class="column text-light">
      <div class="d-block bg-info d-flex justify-content-center align-items-center rounded-2" style="width: 40px;height: 40px;">
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
  <!-- 最新消息開始 -->
  <section class="news position-relative">
    <div class="text-center p-5 py-md-7 px-md-5" style="background-color: #b38282;">
      <h3 class="mb-1 text-center fw-bold">最新消息</h3>
      <div class="text-center mt-1 mb-4 mb-md-5 fs-5 text-uppercase">latest news</div>
      <div class="container">
        <p class="d-none d-md-block mb-xl-8 fs-6 mb-5" style="text-align:center">即日起至2023/5/31，全館商品優惠免運中</p>
        <p class="d-block d-md-none mb-0 fs-6" style="text-align:center">即日起至2023/5/31，全館商品優惠免運中。</p>
      </div>
    </div>
    <div class="news-item" style="background-color: #ece9e9;">
      <div class="position-absolute news-item-in" style="width:100%">
        <div class="d-flex justify-content-around w-100 container">
          <div class="news-swiper position-relative" style="width: 100%;">
            <Swiper
              :slidesPerView="3"
              :spaceBetween="20" :loop="true"
              :navigation="{ nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev' }"
              :pagination="{ clickable: true }"
              :modules="modules"
              :breakpoints="
              {0: {
                slidesPerView: 1,spaceBetween: 10,
              },
              600: {
                slidesPerView: 1,
                spaceBetween: 10,
              },769: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1400: {
                slidesPerView:3,
                spaceBetween: 20,
              },
              1920: {
                slidesPerView: 3,
                spaceBetween: 20,
              },}"
              class="news-swiper-son" ref="news-swiper-son">
              <SwiperSlide class="h-100 pb-4">
                <RouterLink to="/news" class="me-3 text-decoration-none">
                  <div class="card mx-0 p-4 pb-0 rounded-4" style="box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;">
                    <img src="@/assets/img/opening.png"
                      class="card-img-top w-100" alt="慶開幕"
                      style="object-fit:contain ; object-position:center center;height:80% !important;" />
                    <div class="card-body text-center">
                      <h5 class="card-title fw-bold text-dark">慶開幕</h5>
                      <p class="card-text text-dark">輸入優惠碼999全館打9折</p>
                      <button
                        type="btn btn-info"
                        class="d-none rounded-circle position-absolute start-50 translate-middle"
                        style="bottom: -30px;background-color: #b38282;color: white;">
                        >
                      </button>
                    </div>
                  </div>
                </RouterLink>
              </SwiperSlide>
              <SwiperSlide class="h-100 pb-4">
                <RouterLink to="/news" class="me-3 text-decoration-none">
                  <div class="card p-4 pb-0 rounded-4" style="box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;">
                    <img src="@/assets/img/news-pic1.jpg"
                      class="card-img-top " alt="端午連假"
                      style="object-fit:contain ; object-position:center center;height:80% !important;" />
                    <div class="card-body text-center">
                      <h5 class="card-title fw-bold text-dark">我們休息囉</h5>
                      <p class="card-text text-dark">這幾天老闆不上班</p>
                      <button type="btn btn-info"
                        class="d-none rounded-circle position-absolute start-50 translate-middle"
                        style="bottom: -30px;background-color: #b38282;color: white;">
                        >
                      </button>
                    </div>
                  </div>
                </RouterLink>
              </SwiperSlide>
              <SwiperSlide class="h-100 pb-4">
                <RouterLink to="/news" class="me-3 text-decoration-none">
                  <div class="card p-4 pb-0 rounded-4"
                    style="box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;">
                    <img src="@/assets/img/news-pic2.jpg"
                      class="card-img-top " alt="日式擔仔麵"
                      style="object-fit:contain ; object-position:center center;height:80% !important;" />
                    <div class="card-body text-center">
                      <h5 class="card-title fw-bold text-dark">新品上市</h5>
                      <p class="card-text text-dark">日式擔仔麵趕快來嘗鮮</p>
                      <button
                        type="btn btn-info"
                        class="d-none rounded-circle position-absolute start-50 translate-middle"
                        style="bottom: -30px;background-color: #b38282;color: white;">
                        >
                      </button>
                    </div>
                  </div>
                </RouterLink>
              </SwiperSlide>
              <SwiperSlide class="h-100 pb-4">
                <RouterLink to="/news" class="me-3 text-decoration-none">
                  <div class="card  p-4 pb-0 rounded-0"
                    style="box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;">
                    <img src="@/assets/img/news-pic4.jpg"
                      class="card-img-top " alt="南洋叻沙雞肉湯麵"
                      style="object-fit:contain ; object-position:center center;height:80% !important;" />
                    <div class="card-body text-center">
                      <h5 class="card-title fw-bold text-dark">新品上市</h5>
                      <p class="card-text text-dark">南洋雞肉叻沙湯麵</p>
                      <button type="btn btn-info"
                        class="d-none rounded-circle position-absolute start-50 translate-middle"
                        style="bottom: -30px;background-color: #b38282;color: white;">
                        >
                      </button>
                    </div>
                  </div>
                </RouterLink>
              </SwiperSlide>
            </Swiper>
            <div class="swiper-button-prev" ref="prevButton" @click="onPrev">
            <div class="bg-pink px-3 py-2 rounded-2">
              <i class="fa-solid fa-chevron-left text-light fs-5"></i>
            </div>
          </div>
          <div class="swiper-button-next" ref="nextButton" @click="onNext">
            <div class="bg-pink px-3 py-2 rounded-2">
              <i class="fa-solid fa-chevron-right text-light fs-5"></i>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- 輪播 -->
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay, Pagination, EffectFade } from 'swiper'
import { mapActions } from 'pinia'
import cartStore from '@/store/cartStore.js'
// loading
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      products: [],
      modules: [Navigation, Autoplay, Pagination, EffectFade],
      favorites: [],
      // loding css
      color: '#9cd020',
      isLoading: false,
      selectedItem: '',
      fullPage: true,
      loader: 'bars',
      isMenuFixed: false
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    Loading
  },
  methods: {
    testItems (category) {
      this.$http.get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/products/all`)
        .then((res) => {
          this.products = res.data.products
          this.isLoading = false
          this.selectedItem = category
          if (category === '涼麵' || category === '湯麵' || category === '炸物' || category === '精緻小菜' || category === '湯品') {
            this.isfilter = true
            this.products = this.products.filter(item => item.category === category)
          }
        })
    },
    filteredItems (category) {
      this.temProducts = this.products.filter(item => item.category === category)
      return this.temProducts
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
    },
    ...mapActions(cartStore, ['addToCart']),
    doAjax () {
      this.isLoading = true
    },
    toggleFavorite (productId) {
      if (this.favorites.includes(productId)) {
        this.favorites = this.favorites.filter(id => id !== productId)
      } else {
        this.favorites.push(productId)
      }
      localStorage.setItem('favorites', JSON.stringify(this.favorites))
    },
    heartClass (productId) {
      return this.favorites.includes(productId) ? 'fa-solid fa-heart fs-5 text-danger' : 'fa-regular fs-5 fa-heart'
    },
    playAnimation () {
      this.bannerSwiper = document.querySelector('.banner')
      this.bannerSwiper.classList.add('anima')
    }
  },
  mounted () {
    this.doAjax()
    this.testItems('category')
    window.addEventListener('scroll', this.setMenuFixed)
    this.favorites = JSON.parse(localStorage.getItem('favorites')) || []
  }
}
</script>

<style scoped>
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
