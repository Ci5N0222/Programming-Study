<template>
  <div>
    <!-- 피드 -->
     <div v-if="step == 0" >
      <PostV v-for="(item, i) in postdata" :key = "i" :postdata = "item" />
     </div>

    <!-- 필터선택페이지 -->
    <div v-if="step == 1" >
      <div :class="filter" class="upload-image" :style="`background-image:url(${image})`"></div>
      <div class="filters">
        <FilterBox :image="image" :filter="filter" v-for="(filter, i) in filtersName" :key = "i">
          {{ filter }}
        </FilterBox>
      </div>
    </div>

    <!-- 글작성페이지 -->
    <div v-if="step == 2" >
      <div :class="filter" class="upload-image" :style="`background-image:url(${image})`"></div>
      <div class="write">
        <textarea class="write-box" @input="$emit('write', $event.target.value)">write!</textarea>
      </div>
    </div>
    
    <div v-if="step == 3">
      <MyPage :one="1" />
    </div>
    
  </div>
</template>

<script>
import FilterBox from './FilterBox.vue';
import MyPage from './MyPage.vue';
import PostV from './PostV.vue';

export default {
  name: 'ContainerV',
  data() {
    return {
      filtersName : [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"]
    }
  },
  props : {
    postdata : Array,
    step : Number,
    image: String,
    filter: String
  },
  components: {
    PostV,
    FilterBox,
    MyPage
  }
}
</script>

<style>
  .upload-image{
    width: 100%;
    height: 450px;
    background: cornflowerblue;
    background-size : cover;
  }
  .filters{
    overflow-x:scroll;
    white-space: nowrap;
  }
  .filter-1 {
    width: 100px;
    height: 100px;
    background-color: cornflowerblue;
    margin: 10px 10px 10px auto;
    padding: 8px;
    display: inline-block;
    color : white;
    background-size: cover;
  }
  .filters::-webkit-scrollbar {
    height: 5px;
  }
  .filters::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
  .filters::-webkit-scrollbar-thumb {
    background: #888; 
    border-radius: 5px;
  }
  .filters::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }
  .write-box {
    border: none;
    width: 90%;
    height: 100px;
    padding: 15px;
    margin: auto;
    display: block;
    outline: none;
  }
</style>