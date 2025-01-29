<template>
  <div class="header">
    <ul class="header-button-left">
      <li v-if="step > 0" @click="step = 0">Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1" @click="step++">Next</li>
      <li v-if="step == 2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <h4>{{ $store.state.name }} ( {{ $store.state.age }} )</h4>
  <button @click="$store.commit('updateAge')">버튼</button>

  <p>{{ $store.state.more }}</p>
  <button @click="$store.dispatch('getData')">더보기버튼</button>

  <ContainerV :postdata = "postdata" :step = "step" :image = "image" :filter = "filter" @write="myBoard = $event"/>
  <div ref="infiniteScrollTrigger" class="trigger"></div>

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" accept="image/*" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
 </div>
</template>

<script>
import ContainerV from './components/ContainerV.vue';
import postdata from './assets/data/postdata';
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      postdata,
      count : 0,
      step : 0,
      isFetching : false,
      hasMore : true,
      image: "",
      myBoard : "",
      filter: ""
    }
  },
  mounted() {
    this.emitter.on('filter', (res) => {
      this.filter = res;
    });
    this.initIntersectionObserver();
  },
  methods : {
    loadPosts() {
      if(this.isFetching || !this.hasMore) return;

      this.isFetching = true;

      axios.get(`https://codingapple1.github.io/vue/more${this.count}.json`).then(res => {
        this.postdata = [ ...this.postdata, res.data ];
      }).catch(err => {
        if(err.status == "404") this.hasMore = false;
      });
      this.count++;
      this.isFetching = false;
    },

    initIntersectionObserver() {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 1.0
      };

      const observer = new IntersectionObserver(([entry]) => {
        if(entry.isIntersecting) {
          this.loadPosts();
        }
      }, options);
      observer.observe(this.$refs.infiniteScrollTrigger);
    },

    upload(e) {
      const target = e.target.files;

      // 업도르한 이미지의 url을 생성
      this.image = URL.createObjectURL(target[0]);
      this.step = 1;
    },

    publish() {
      let myBoard = {
        name: "Noh Sion",
        userImage: "https://picsum.photos/100?random=3",
        postImage: this.image,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.myBoard,
        filter: this.filter
      }

      this.postdata = [ myBoard, ...this.postdata ];
      this.step = 0;
    }
  },
  components: {
    ContainerV
  }
}
</script>

  <style>
  body {
    margin: 0;
  }
  ul {
    padding: 5px;
    list-style-type: none;
  }
  .logo {
    width: 22px;
    margin: auto;
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 13px;
  }
  .header {
    width: 100%;
    height: 40px;
    background-color: white;
    padding-bottom: 8px;
    position: sticky;
    top: 0;
  }
  .header-button-left {
    color: skyblue;
    float: left;
    width: 50px;
    padding-left: 20px;
    cursor: pointer;
    margin-top: 10px;
  }
  .header-button-right {
    color: skyblue;
    float: right;
    width: 50px;
    cursor: pointer;
    margin-top: 10px;
  }
  .footer {
    width: 100%;
    position: sticky;
    bottom: 0;
    padding-bottom: 10px;
    background-color: white;
  }
  .footer-button-plus {
    width: 80px;
    margin: auto;
    text-align: center;
    cursor: pointer;
    font-size: 24px;
    padding-top: 12px;
  }
  .sample-box {
    width: 100%;
    height: 600px;
    background-color: bisque;
  }
  .inputfile {
    display: none;
  }
  .input-plus {
    cursor: pointer;
  }
  .trigger {
    height: 1px;
  }
  #app {
    box-sizing: border-box;
    font-family: "consolas";
    margin-top: 60px;
    width: 100%;
    max-width: 460px;
    margin: auto;
    position: relative;
    border-right: 1px solid #eee;
    border-left: 1px solid #eee;
  }
</style>
