<template>
    <div class="header">
      <div class="navi">
        <div class="menu">
          <a v-for = "(menu, i) in menus" :key="i">{{ menu }}</a>
        </div>
        <div class="sub">
          <a v-for="(item, i) in user.sessionMenu" :key="i">{{ item }}</a>
        </div>
      </div>
  </div>
</template>

<script>
    export default {
        name: "HeaderMenu",
        data() {
            return {
                menus : ["Home", "Shop", "About"],
                user : {
                  state : "fail",
                  sessionMenu : ["Sign-in", "Sign-up"],
                }
            }
        }
    }
</script>

<style>
.header {
  background-color: darkslateblue;
  padding: 15px;
  display: flex;
  justify-content: center;
}

.header > .navi {
  width: 95%;
  max-width: 1320px;
  display: flex;
  justify-content: space-between;
}

.header > .navi > .menu > a {
  color: white;
  padding: 10px;
  font-weight: 700;
}

.header > .navi > .sub {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: white;
  gap: 10px;
}
</style>