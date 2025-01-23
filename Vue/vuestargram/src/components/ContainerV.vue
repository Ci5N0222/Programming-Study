<template>
  <div>
    <PostV  v-for="(item, i) in postdata" :key = "i" :postdata = "item" />
  </div>
</template>

<script>
import PostV from './PostV.vue';

export default {
  name: 'ContainerV',
  props : {
    postdata : Array
  },
  components: {
    PostV
  }
}
</script>

<style>
</style>