<template>
  <div style="padding : 10px">
    <h4>팔로워</h4>
    <input placeholder="?" />
    <div v-for="follower in followers" :key="follower.id" class="post-header">
      <div class="profile" :style="`background-image:url(${follower.image})`"></div>
      <span class="profile-name">{{ follower.name }}</span>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import { onMounted, reactive, ref } from 'vue';

export default {
  name: "MyPage",
  setup() {
    // setup에서 데이터 생성하는 방법( reference data type을 사용해야 실시간 반영됨 )
    let followers = ref([]);

    onMounted(() => {
      axios.get('/follower.json').then(res => {
        followers.value = res.data;
      });
    }) 

    return { followers }
  }
}
</script>

<style>

</style>