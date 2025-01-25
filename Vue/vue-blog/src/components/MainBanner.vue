<template>
  <div class="main-banner">
    <img src="../assets/home-banner2.jpg">
  </div>
</template>

<script>
export default {
    name: 'MainBanner'
}
</script>

<style>
    .main-banner {
        width: 100%;
        max-height: 650px;
        background-color: #eee;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
    }

    .main-banner > img {
        width: 100%;
    }
</style>