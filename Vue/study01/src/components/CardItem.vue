<template>
  <Transition name="itemBinding" appear>
    <div class="products">
        <div class="product" v-for="(item, i) in items" :key="i">
            <img :src="item.image" :alt="item.title">
            <h4 @click="$emit('openModal', item)">{{ sliceText(item.title) }}</h4>
            <p>{{ moneyComma(item.price) }}원</p>
        </div>
    </div>
  </Transition>
</template>

<script>
  import {sliceText, moneyComma} from '@/common';

    export default {
        name :"CardItem",
        props : {
            items: Object
        },
        methods : {
          sliceText,
          moneyComma
        }
    }
</script>

<style>

.products {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
  }

.product {
  max-width: 300px;
  border: 1px solid black;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 10px;
  align-items: center;
}

.product > img {
  width: 100%;
  max-width: 500px;
}

.product > h4:hover {
  cursor: pointer;
  scale: 1.1;
  color: orange;
}

.product > .report {
  display: flex;
  gap: 10px;
}

.itemBinding-enter-from{
  opacity: 0;
  transform: translateY(50px);
}
.itemBinding-enter-active{
  transition: all 1s;
}
.itemBinding-enter-end{
  opacity: 1;
  transform: translateY(0px);
}
</style>