<template>
  <NavBar />
  <router-view></router-view>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  data() {
    return {
    }
  },
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  text-align: center;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  
}
</style>
