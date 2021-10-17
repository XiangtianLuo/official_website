<template>
  <div id="whyChooseUs" class="conatiner-fuild background-custom-1">
      <div 
        :class="isContainer?'whyChooseUs-container':''"
      >
        <div class="whyChooseUs-title text-center">
            <h2>{{ cardtitle }}</h2>
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
              <p class="text-center certificates-text">{{item.title}}</p>
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
.whyChooseUs-container {
  margin: 0 auto;
  width: 70vw;
  background-color: white;
  padding: 2vw;
}

.row {
  margin-right: 0!important;
  margin-left: 0!important;
}

.certificates-text {
  font-size: 1vw;
}

#whyChooseUs .server-wrapper{
  background-color: white;
}
#whyChooseUs .whyChooseUs-title h2{
  font-size: 1.5vw;
  margin-bottom: 3vh;
  margin-top: 3vh;
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
  height: 27vh;
}
#whyChooseUs .server-block > p {
  font-size: 1vw;
  margin: 30px 0;
}
#whyChooseUs .server-block > div {
  color: #ccc;
}

#whyChooseUs {
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
  height: 25vh;
}

#whyChooseUs .server-block > div {
  color: #ccc;
}


/* 媒体查询（手机） */
@media screen and (max-width: 768px) {
  #whyChooseUs .margin-40 {
    margin-top: 40px!important;
  }
  .whyChooseUs-container {
    width: 100%;
  }
}
</style>
