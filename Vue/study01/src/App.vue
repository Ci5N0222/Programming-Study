<template>
  <ModalDetail @closeModal="isModal = false" :item = "modalData" :isModal = "isModal"/>
  <HeaderMenu />
  <div class="contents">
    <DiscountBanner />
    <CardItem @openModal="handleOpenModal" :items="data"/>
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
      data : oneroomData
    }
  },
  methods: {
    handleOpenModal(item) {
      this.modalData = item;
      this.isModal = true;
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

</style>
