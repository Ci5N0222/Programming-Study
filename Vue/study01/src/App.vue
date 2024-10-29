<template>
  <div class="menu">
    <!-- 
      *** 반복문 ***
      변수 작명 2개까지 가능
      첫번째 인자 : array 내의 데이터
      두번째 인자 : 1씩 증가하는 정수 (index)
    -->
      <a v-for = "(menu, i) in menus" :key="i">{{ menu }}</a>
  </div>

  <h2 :style="style">원룸샵</h2>

  <div>
    <template v-for="(product, i) in products" :key="i">
      <h4>{{ product }}</h4>
      <p>{{ prices[i] }} 만원</p>
    </template>
  </div>

</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      // 데이터를 오브젝트 형식으로 보관 { 키 : 값 } 
      style: "color : blue",
      products : ["역삼동 원룸", "천호동 원룸", "마포구 원룸"],
      prices : [100, 150, 200],
      menus : ["Home", "Shop", "About"]
    }
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background-color: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px
}
</style>
