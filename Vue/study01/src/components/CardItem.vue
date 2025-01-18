<template>
    <div class="product">
        <img :src="item.image" :alt="item.title">
        <h4 @click="$emit('openModal', item)">{{ item.title }}</h4>
        <p>{{ item.price }}원</p>
    </div>
</template>

<script>
    export default {
        name :"CardItem",
        props : {
            item: Object
        }
    }
</script>

<style>

.product {
  max-width: 700px;
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
</style>