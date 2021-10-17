<template>
  <div id="GoTop" @click="GoTop()">
    <span class="glyphicon glyphicon-chevron-up"></span>
  </div>
</template>
<script>
export default {
  name: "GoTop",
  data() {
    return {
      flag: false
    };
  },
  methods: {
    GoTop() {
      (function smoothscroll() {
        var currentScroll =
          document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
          window.requestAnimationFrame(smoothscroll);
          window.scrollTo(0, currentScroll - currentScroll / 10);
        }
      })();
    }
  }
};
</script>
<style scoped>
#GoTop {
  width: 50px;
  height: 50px;
  position: fixed;
  right: 3vw;
  bottom: 2vw;
  z-index: 99999999;
  cursor: pointer;
}
#GoTop > span {
  display: block;
  width: 100%;
  height: 100%;
  color: rgb(8, 162, 233);
  font-size: 2vw
}

@media screen and (max-width: 768px) {
  #GoTop {
    right: 20px;
    bottom: 20px;
  }
  #GoTop > span {
    font-size: 30px;
  }
}
</style>
