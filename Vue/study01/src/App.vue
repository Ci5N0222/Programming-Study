<template>

  <!--
    동적인 UI 만드는 법
      1. 다자인
      2. UI의 현재 상태를 데이터로 저장해둠
      3. 데이터에 따라 UI가 어떻게 보일지 작성

  -->

  <!--
    *** 조건문 ***
    사용법 : v-if=" 조건식 "
  -->
  <!-- 모달창 -->
  <div class="black-bg" v-if="isModal">
    <div class="white-bg">
      <h4>상세페이지임</h4>
      <p>상세페이지 내용임</p>
      <button @click="isModal = !isModal">닫기</button>
    </div>
  </div>

  <div class="menu">
    <!-- 
      *** 반복문 ***
      변수 작명 2개까지 가능
      사용법 : v-for="배열의 인자 in 배열"
      첫번째 인자 : array 내의 데이터
      두번째 인자 : 1씩 증가하는 정수 (index)
    -->
      <a v-for = "(menu, i) in menus" :key="i">{{ menu }}</a>
  </div>

  <!-- 데이터 바인딩 : {{ 변수 }} -->
  <!-- <h2 :style="style">{{ title }}</h2> -->

  <!-- src에 있는 파일 가져올 때 ./ 시작 -->
  <img src="./assets/images/room0.jpg" />

  <div>
    <template v-for="(product, i) in products" :key="i">
      <h4 @click="isModal = !isModal">{{ product }}</h4>
      <p>{{ prices[i] }} 만원</p>
      <!-- Vue onClick Event -->
      <button @click="reportEvent(i)"> 허위매물 신고 </button>
      <span> {{ reports[i] }} </span>
    </template>
  </div>
  
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      // 데이터를 오브젝트 형식으로 보관 { 키 : 값 } 
      title : "원룸 샵",
      style: "color : blue",
      products : ["역삼동 원룸", "천호동 원룸", "마포구 원룸"],
      prices : [100, 150, 200],
      menus : ["Home", "Shop", "About"],
      reports: [1, 2, 3],
      isModal : false
    }
  },
  // 함수 들을 보관
  methods: {
    reportEvent : function(i) {
      this.reports[i] += 1;
    }
  },
  components: {
  }
}
</script>

<style>
body {
  margin: 0
}

div {
  box-sizing: border-box;
}

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  widows: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
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
