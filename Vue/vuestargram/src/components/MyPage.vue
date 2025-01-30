<template>
  <div style="padding : 10px">
    <h4>팔로워</h4>
    <input @input="search" placeholder="검색" />
    <div v-for="follower in followers" :key="follower.id" class="post-header">
      <div class="profile" :style="`background-image:url(${follower.image})`"></div>
      <span class="profile-name">{{ follower.name }}</span>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import { onMounted, ref, toRefs } from 'vue';
import { useStore } from 'vuex';

export default {
  name: "MyPage",
  methods : {
  },
  props : {
    one : Number
  },
  setup(props) { // 첫번째 인자는 props
    // setup에서 데이터 생성하는 방법( reference data type을 사용해야 실시간 반영됨 )
    let followers = ref([]);
    console.log(followers.value);

    let followersData = ref([]);

    // Composition API에서 props 사용법( toRefs )
    let propsData = toRefs(props);
    console.log(propsData);

    let store = useStore();
    console.log("store.state.name === ", store.state.name);

    const search = (e) => {
      followers.value = [ ...followersData.value ];
      const name = e.target.value;
      console.log(name)
      if(name !== "") followers.value = followersData.value.filter(item => item.name.includes(name));
    }

    onMounted(() => {
      axios.get('/follower.json').then(res => {
        followers.value = res.data;
        followersData.value = res.data;
      });
    }) 

    return { followers, search }
  }
}
</script>

<style>

</style>