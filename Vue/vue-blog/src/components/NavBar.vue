<template>
  <nav class="navbar navbar-expand-md navbar-light" :class="{ 'scrolled': isScrolled }">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">VueLog</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/board">Board</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="nav-area"></div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isScrolled : false
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50 ? true : false;
    },
  },
}

</script>

<style>
nav {
  background-color: white;
  border-bottom: 1px solid lightgray;
  width: 100%;
  position: fixed !important;
  top: 0;
  z-index: 2;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.scrolled {
  background-color: #fff;
}

nav > div {
  width: 90%;
}

li > a:hover {
  color : orange !important;
}

.nav-area {
  height: 60px;
}
</style>