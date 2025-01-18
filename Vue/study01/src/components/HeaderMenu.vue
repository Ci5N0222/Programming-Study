<template>
    <div class="header">
      <a v-for = "(item, i) in items" :key="i">{{ item }}</a>
  </div>
</template>

<script>
    export default {
        name: "HeaderMenu",
        data() {
            return {
                items : ["Home", "Shop", "About"],
            }
        }
    }
</script>

<style>
.header {
  background-color: darkslateblue;
  padding: 15px;
}

.header a {
  color: white;
  padding: 10px;
  font-weight: 700;
}
</style>