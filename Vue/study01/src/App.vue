<template>
  <ModalDetail @closeModal="isModal = false" :item = "modalData" :isModal = "isModal"/>
  <HeaderMenu />
  <div class="contents">
    <DiscountBanner />
    <div class="products">
      <CardItem @openModal="modalData = item; isModal = true" :item="item" v-for="(item, i) in data" :key="i"/>
    </div>
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
      modalData : {},
      data : oneroomData
    }
  },
  methods: {
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

  .products {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
  }
</style>
