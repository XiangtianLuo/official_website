<template>
  <div id="whyChooseUs" class="conatiner-fuild background-custom-1">
      <div 
        :class="isContainer?'container':''"
      >
        <div class="whyChooseUs-title text-center">
            <h2 class="margin-40">{{ cardtitle }}</h2>
          </div>
          <div class="row">
          <div
              class="col-xs-12 col-md-6 col-lg-4"
              v-for="(item,index) in cardsData"
              :key="index"
              @click="productClick(item.id, item.type)"
          >
              <div
              class="server-block wow slideInUp server-wrapper"
              onmouseenter="this.style.color='#28f';this.style.borderColor='#28f'"
              onmouseleave="this.style.color='#666';this.style.borderColor='#ccc'"
              >
              <img class="certificates" :src="item.logo" alt="logo">
              <p class="text-center">{{item.title}}</p>
              </div>
          </div>
          </div>
      </div>
  </div>
</template>
<script>
import Seed_detail from '../view/Seed_detail.vue'

export default {
  name: "cardList",
  components: {
    'Seed_detail': Seed_detail
  },
  props: ['cardsData', 'cardtitle', 'isContainer'],
  data() {
    return {
    };
  },
  methods: {
    productClick(id, type) {
      if (type === 'seed') {
        this.$router.push({
            name: 'seed-detail',
            params: {
                seed_id: id
            }
        })
      }
      else if (type === 'produce') {
        this.$router.push({
            name: 'produce-detail',
            params: {
                produce_id: id
            }
        })
      }
    }
  }
};
</script>
<style scoped>
/* 为什么选择我们 */
#whyChooseUs {
  padding: 100px;
}

#whyChooseUs .server-wrapper{
  background-color: white;
}
#whyChooseUs .whyChooseUs-title {
  margin-bottom: 50px;
}
#whyChooseUs .whyChooseUs-title p:nth-of-type(1) {
  font-size: 25px;
  font-weight: 500;
}
#whyChooseUs .whyChooseUs-title p:nth-of-type(2) {
  font-size: 14px;
}
#whyChooseUs .server-block {
  padding: 50px 20px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
  border-radius: 25px;
  border-bottom: 5px solid #ccc;
  cursor: pointer;
}
#whyChooseUs .server-block img {
  width: 100%;
  height: 250px;
}
#whyChooseUs .server-block > p {
  font-size: 20px;
  margin: 30px 0;
}
#whyChooseUs .server-block > div {
  color: #ccc;
}

#whyChooseUs {
  padding: 20px 0;
  transition: all ease 0.6s;
}
#whyChooseUs .whyChooseUs-title p:nth-of-type(1) {
  font-size: 20px;
  font-weight: 700;
}
#whyChooseUs .whyChooseUs-title p:nth-of-type(2) {
  font-size: 12px;
}
#whyChooseUs .server-block {
  padding: 50px 0;
  border: 1px solid #ccc;
  border-bottom: 5px solid #ccc;
}
#whyChooseUs .server-block img {
  width: 100%;
  height: 250px;
}
#whyChooseUs .server-block > p {
  font-size: 20px;
  margin: 30px 0;
}
#whyChooseUs .server-block > div {
  color: #ccc;
}


/* 媒体查询（手机） */
@media screen and (max-width: 768px) {
  #whyChooseUs .margin-40 {
    margin-top: 40px!important;
  }
}
</style>
