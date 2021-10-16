<template>
  <div id="productDetail">
    <h3>{{ $route.params.product_id }}</h3>
    <div class="product-card">
      <img class="card-img-top" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "productDetail",
  props: ['cardsData', 'cardtitle'],
  data() {
    return {
      
    };
  },
  methods: {
  }
};
</script>
<style scoped>
.product-card {
  width: 100%;
  height: 100%;
  padding-left: 15px;
  padding-right: 15px;
}

.card-img-top {
  height: 180px;
  width: 100%;
  display: block;
}
</style>
