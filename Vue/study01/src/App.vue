<template>
  <ModalDetail @closeModal="isModal = false" :item = "modalData" :isModal = "isModal"/>
  <HeaderMenu />
  <div class="contents">
    <DiscountBanner v-if="showDiscount == true" />
    <div class="button-box">
      <button @click="priceSortAsc"> 낮은 가격순 정렬</button>
      <button @click="priceSortDesc"> 높은 가격순 정렬</button>
    </div>
    <CardItem @openModal="handleOpenModal" :items="cpData"/>
  </div>
</template>

<script>
import oneroomData from './oneroom.js';
import DiscountBanner from './components/DiscountBanner.vue';
import ModalDetail from './components/ModalDetail.vue';
import CardItem from './components/CardItem.vue';
import HeaderMenu from './components/HeaderMenu.vue';

export default {
  name: 'App',
  data(){
    return {
      showDiscount : true,
      isModal : false,
      modalData : null,
      data : oneroomData,
      cpData : [...oneroomData]
    }
  },
  methods: {
    handleOpenModal(item) {
      this.modalData = item;
      this.isModal = true;
    },
    priceSortAsc() {
      this.cpData = [...this.data];
      this.cpData.sort(function(a, b) {
        return a.price - b.price;
      });
    },
    priceSortDesc() {
      this.cpData = [...this.data];
      this.cpData.sort(function(a, b) {
        return b.price - a.price;
      });
    },
  },
  components: {
    DiscountBanner,
    ModalDetail,
    CardItem,
    HeaderMenu
  },

  // Vue Lifecycle hook 
  // [ created ( 데이터 생성 ) ]
  created() {
    
  },
  
  // [ mounted( 페이지가 마운트 될때 실행 ) ]
  mounted() {
    setTimeout(() => {
      this.showDiscount = false;
    }, 2000);

    setInterval(() => {

    });
  },
}
</script>

<style>
  body {
    margin: 0;
  }

  div {
    box-sizing: border-box;
  }

  .contents {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .button-box {
    width: 95%;
    display: flex;
    justify-content: left;
    gap: 10px;
    margin: 10px
  }
</style>
