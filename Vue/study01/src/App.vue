<template>
  <img alt="Vue logo" src="./assets/logo.png">

  <div>
    <h2 :style="style">원룸샵</h2>
    <h4> {{products[0]}} </h4>
    <p>  {{ price1 }} 만원 </p>
  </div>
  <div>
    <h4> {{products[1]}} </h4>
    <p>  {{ price2 }} 만원 </p>
  </div>
  <div>
    <h4> {{products[2]}} </h4>
    <p>  {{ price2 }} 만원 </p>
  </div>

</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      // 데이터를 오브젝트 형식으로 보관 { 키 : 값 } 
      price1: 50,
      price2: 70,
      style: "color : blue",
      products : ["역삼동 원룸", "천호동 원룸", "마포구 원룸"]
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
  margin-top: 60px;
}
</style>
