<template>
  <div id="productDetail">
    <h3 class="text-center">{{ seedList[$route.params.seed_id].title }}</h3>
    <div class="card-body">
      <h3 class="text-center">
        产品简介
      </h3>
      <p class="font-20">{{ seedList[$route.params.seed_id].content }}</p>
      <p class="font-20">{{ seedList[$route.params.seed_id].declaration }}</p>
    </div>
    <div class="card product-detail row">
      <div
        class="col-xs-12 col-md-6 col-lg-6"
        v-if="seedList[$route.params.seed_id].grow01"
      >
        <h3 class="text-center">
            {{ seedList[$route.params.seed_id].grow01.grow01Title }}
        </h3>
        <div class="img-wrapper">
          <img class="card-img-top" :src='seedList[$route.params.seed_id].grow01.growImg01' alt="Card image cap">
        </div>
      </div>
      <div
        class="col-xs-12 col-md-6 col-lg-6"
        v-if="seedList[$route.params.seed_id].grow02"
      >
        <h3 class="text-center">
            {{ seedList[$route.params.seed_id].grow02.grow02Title }}
        </h3>
        <div class="img-wrapper">
          <img class="card-img-top" :src='seedList[$route.params.seed_id].grow02.growImg02' alt="Card image cap">
        </div>
      </div>
      <div
        class="col-xs-12 col-md-6 col-lg-6"
        v-if="seedList[$route.params.seed_id].grow03"
      >
        <h3 class="text-center">
            {{ seedList[$route.params.seed_id].grow03.grow03Title }}
        </h3>
        <div class="img-wrapper">
          <img class="card-img-top" :src='seedList[$route.params.seed_id].grow03.growImg03' alt="Card image cap">
        </div>
      </div>
      <div
        class="col-xs-12 col-md-6 col-lg-6"
        v-if="seedList[$route.params.seed_id].grow04"
      >
        <h3 class="text-center">
            {{ seedList[$route.params.seed_id].grow04.grow04Title }}
        </h3>
        <div class="img-wrapper"> 
          <img class="card-img-top" :src='seedList[$route.params.seed_id].grow04.growImg04' alt="Card image cap">
        </div>
      </div>
      <div
        class="col-xs-12 col-md-6 col-lg-6"
        v-if="seedList[$route.params.seed_id].certificate"
      >
        <h3 class="text-center">
            {{ seedList[$route.params.seed_id].certificate.certificateTitle }}
        </h3>
        <div class="img-wrapper">
          <img class="card-img-top" :src='seedList[$route.params.seed_id].certificate.certificateImg' alt="Card image cap">
        </div>
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
              logo: require("@/assets/img/启源壹号.jpg"),
              grow01: {
                growImg01: require("@/assets/img/壹号苗期.jpg"),
                grow01Title: '壹号苗期'
              },
              grow03: {
                growImg03: require("@/assets/img/壹号成熟.jpg"),
                grow03Title: '壹号成熟期'
              },
              grow04: {
                growImg04: require("@/assets/img/启源壹号.jpg"),
                grow04Title: '启源壹号'
              },
              certificate: {
                certificateImg: require("@/assets/img/壹号证书.jpg"),
                certificateTitle: '认证书'
              },
              id: 0,
              type: 'seed',
              title:
                  "启源壹号",
              content:
                  "该品种生育期95天左右，株高180厘米左右，田间长势旺盛、适应性好、对列当有较好的抗性，商品性极好，皮薄、粒长、仁大、口感香甜。一般垧产4000斤左右。郑重声明：文章描述中涉及到有关品种特征特性及其它数据如结实率、产量等等，皆来源于试验数据。该品种生育期95天左右，株高180厘米左右，田间长势旺盛、适应性好、对列当有较好的抗性，商品性极好，皮薄、粒长、仁大、口感香甜。一般垧产4000斤左右。",
             declaration:
                  "**郑重声明：文章描述中涉及到有关品种特征特性及其它数据如结实率、产量等等，皆来源于试验数据。"
            },
            {
              logo: require("@/assets/img/启源3号.jpg"),
              grow01: {
                growImg01: require("@/assets/img/3号苗期.jpg"),
                grow01Title: '三号苗期'
              },
              grow03: {
                growImg03: require("@/assets/img/3号成熟.jpg"),
                grow03Title: '三号成熟期'
              },
              grow04: {
                growImg04: require("@/assets/img/启源3号.jpg"),
                grow04Title: '启源三号'
              },
              id: 1,
              type: 'seed',
              title:
                  "启源三号",
              content:
                  "该品种生育期90天左右，株高170-180厘米，长势旺盛、抗病性好，商品性好，皮薄、粒长、光泽度好，一般垧产4500斤左右。",
             declaration:
                  "**郑重声明：文章描述中涉及到有关品种特征特性及其它数据如结实率、产量等等，皆来源于试验数据。"
            },
            {
              logo: require("@/assets/img/新启源5号.jpg"),
              grow01: {
                growImg01: require("@/assets/img/5号盘.jpg"),
                grow01Title: '新启源5号-盘'
              },
              grow03: {
                growImg03: require("@/assets/img/5号成熟.jpg"),
                grow03Title: '新启源五号成熟期'
              },
              grow04: {
                growImg04: require("@/assets/img/新启源5号.jpg"),
                grow04Title: '新启源五号'
              },
              id: 2,
              type: 'seed',
              title:
                  "启源五号",
              content:
                  "该品种生育期90天左右，株高180厘米左右，田间植株长势整齐、抗性强，商品籽粒黑底白边略带白色条纹，籽粒长2.1厘米，宽0.85厘米左右，商品籽粒整齐，光亮度好。一般垧产5000斤左右。",
             declaration:
                  "**郑重声明：文章描述中涉及到有关品种特征特性及其它数据如结实率、产量等等，皆来源于试验数据。"
            },
            {
              logo: require("@/assets/img/启源6号.jpg"),
              grow01: {
                growImg01: require("@/assets/img/启源6号花盘.jpg"),
                grow01Title: '启源6号花盘'
              },
              grow02: {
                growImg02: require("@/assets/img/启源6号开花期.jpg"),
                grow02Title: '启源6号开花期'
              },
              grow03: {
                growImg03: require("@/assets/img/启源6号成熟期.jpg"),
                grow03Title: '启源6号成熟期'
              },
              grow04: {
                growImg04: require("@/assets/img/启源6号.jpg"),
                grow04Title: '启源6号'
              },
              id: 0,
              type: 'seed',
              title:
                  "启源6号",
              content:
                  "该品种属中早熟食用向日葵杂交种。生育期97天左右，株高210厘米左右，平均叶片数30片。田间长势旺盛，茎秆粗壮，适应性强，抗病性好，高抗黄萎病、黑斑病。商品籽粒黑底白边略带白条纹，粒长2.4厘米左右，粒宽0.95厘米左右。产量稳定。登记编号：GPD向日葵（2018）221018",
             declaration:
                  "**郑重声明：文章描述中涉及到有关品种特征特性及其它数据如结实率、产量等等，皆来源于试验数据。"
            },
            {
              logo: require("@/assets/img/白绿8号.jpg"),
              grow01: {
                growImg01: require("@/assets/img/白绿8号-苗.jpg"),
                grow01Title: '白绿8号-苗'
              },
              grow03: {
                growImg03: require("@/assets/img/白绿8号.jpg"),
                grow03Title: '白绿8号'
              },
              grow04: {
                growImg04: require("@/assets/img/农作物品种鉴定证书.jpg"),
                grow04Title: '农作物品种鉴定证书'
              },
              certificate: {
                certificateImg: require("@/assets/img/合格证书.jpg"),
                certificateTitle: '合格证书'
              },
              id: 0,
              type: 'seed',
              title:
                  "白绿8号",
              content:
                  "该品种经吉林省白城市农业科学院食用豆研究所育成，由吉林省新启源农业发展有限公司生产、销售。2002年通过吉林省农作物品种审定委员会审定，品种审定合格证书编号为吉审绿2002002。2013年3月通过国家小宗粮豆新品种鉴定委员会鉴定，鉴定证书编号为：国品鉴杂2013005。白绿8号属于早熟绿豆品种，生育期85-90天，株高50-60厘米，主茎分枝4-5个，单株荚数42-54个，荚粒数12-14粒，百粒重6.0-6.2克。粒型长圆柱，粒色浅绿色，籽粒色泽明亮鲜艳、商品均匀、一致性好。对叶斑病、根腐病有较好抗性，抗旱耐瘠、适应性广。",
             declaration:
                  "**郑重声明：文章描述中涉及到有关品种特征特性及其它数据如结实率、产量等等，皆来源于试验数据。"
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
  margin: 30px 0;
  padding: 0 30px;
}

.font-20 {
  font-size: 20px;
}
</style>
