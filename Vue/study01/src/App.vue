<template>
  <ModalDetail @closeModal="isModal = false" :item = "modalData" :isModal = "isModal"/>
  <HeaderMenu />
  <div class="contents">
    <DiscountBanner />
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
    }
  },
  components: {
    DiscountBanner,
    ModalDetail,
    CardItem,
    HeaderMenu
  }
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
