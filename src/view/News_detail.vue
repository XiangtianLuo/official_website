<template>
    <div id="NewsInformation">
        <div class="container">
            <div class="container text-center margin-content">
                <h3>{{ serverList[$route.params.news_id - 1].title }}</h3>
                <h5>{{ serverList[$route.params.news_id - 1].date }}</h5>
                <p class='main-content text-left'>{{ serverList[$route.params.news_id - 1].description }}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "newsDetail",
  data() {
    return {
      serverList: [
      ]
    };
  },
  methods: {
  }
};
</script>
<style scoped>
.margin-content {
    margin-top: 140px;
}

.main-content {
  margin-top: 50px;
}
</style>
