<template>
  <div id="productDetail">
    <div class="card-body">
      <h3 class="text-center">
        产品简介
      </h3>
      <p class="text-center font-20">{{ seedList[$route.params.produce_id].content }}</p>
    </div>
    <div class="button-wrapper">
      <button
        class="btn btn-outline-success text-center"
      ><a :href='seedList[$route.params.produce_id].link'>
        点击购买
      </a>
      </button>
    </div>
    <h3 class="text-center">{{ seedList[$route.params.produce_id].title }}</h3>
    <div class="card product-detail row">
      <div
        class="col-xs-12 col-md-6 col-lg-6"
      >
        <img class="card-img-top" :src='seedList[$route.params.produce_id].intro01.introImg01' alt="Card image cap">
      </div>
      <div
        class="col-xs-12 col-md-6 col-lg-6"
      >
        <img class="card-img-top" :src='seedList[$route.params.produce_id].intro02.introImg02' alt="Card image cap">
      </div>
      <div
        class="col-xs-12 col-md-6 col-lg-6"
      >
        <img class="card-img-top" :src='seedList[$route.params.produce_id].intro03.introImg03' alt="Card image cap">
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
        seedList: [
            {
              logo: require("@/assets/img/袋装瓜子-01.png"),
              intro01: {
                introImg01: require("@/assets/img/袋装瓜子-01.png"),
              },
              intro02: {
                introImg02: require("@/assets/img/袋装瓜子-02.png"),
              },
              intro03: {
                introImg03: require("@/assets/img/袋装瓜子-03.png"),
              },
              link: 'https://item.taobao.com/item.htm?spm=a230r.1.14.6.222828fbbXw5YS&id=537324813500&ns=1&abbucket=20#detail',
              id: 0,
              type: 'produce',
              title:
                  "山富老儿香瓜子(袋装)",
              content:
                  "山富老儿 东北特产5袋装大粒原味瓜子 葵花籽葵瓜子坚果零食包邮"
            }, {
              logo: require("@/assets/img/精品瓜子-01.png"),
              intro01: {
                introImg01: require("@/assets/img/精品瓜子-01.png"),
              },
              intro02: {
                introImg02: require("@/assets/img/精品瓜子-02.png"),
              },
              intro03: {
                introImg03: require("@/assets/img/精品瓜子-03.png"),
              },
              link: 'https://item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-13614357268.13.6ed013456VPHdk&id=526583202341',
              id: 1,
              type: 'produce',
              title:
                  "山富老儿精品瓜子",
              content:
                  "山富老儿 精品原味瓜子东北特产葵花籽罐装坚果零食炒货 包邮"
            }, {
              logo: require("@/assets/img/南瓜子-01.png"),
              intro01: {
                introImg01: require("@/assets/img/南瓜子-01.png"),
              },
              intro02: {
                introImg02: require("@/assets/img/南瓜子-02.png"),
              },
              intro03: {
                introImg03: require("@/assets/img/南瓜子-03.png"),
              },
              link: 'https://item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-13614357268.10.18ec1345O5KKSC&id=526588449550',
              id: 2,
              type: 'produce',
              title:
                  "山富老儿南瓜子",
              content:
                  "山富老儿 原味南瓜子 瓜子坚果零食大礼包炒货休闲食品 礼盒装"
            }, {
              logo: require("@/assets/img/礼盒-01.png"),
              intro01: {
                introImg01: require("@/assets/img/礼盒-01.png"),
              },
              intro02: {
                introImg02: require("@/assets/img/礼盒-02.png"),
              },
              intro03: {
                introImg03: require("@/assets/img/礼盒-03.png"),
              },
              link: 'https://item.taobao.com/item.htm?spm=a230r.1.14.21.222828fbbXw5YS&id=526427250012&ns=1&abbucket=20#detail',
              id: 3,
              type: 'produce',
              title:
                  "山富老儿瓜子(礼盒)",
              content:
                  "山富老儿原味瓜子 葵花籽 铁罐礼盒 坚果零食炒货包邮 年货礼盒"
            },
        ]
    };
  },
  methods: {
  }
};
</script>
<style scoped>
.card-img-top {
  width: 100%;
  height: 400px;
  margin: 5px auto;
}

.product-detail {
  padding: 0 15px;
  margin: 0 auto;
}

.card-body {
  margin-top: 15px;
}

.button-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}

.font-20 {
  font-size: 20px;
}
</style>