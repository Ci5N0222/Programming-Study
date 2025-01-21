<template>
  <NavBar />
  <MainBanner />
  <div class="container mt-4">
    <BoardList :board = "board"/>
  </div>
</template>

<script>
import BoardList from './components/BoardList.vue';
import MainBanner from './components/MainBanner.vue';
import NavBar from './components/NavBar.vue';
import board from './assets/board';

export default {
  name: 'App',
  data() {
    return {
      board : board
    }
  },
  components: {
    NavBar,
    MainBanner,
    BoardList
  }
}
</script>

<style>
#app {
  text-align: center;
}
</style>
