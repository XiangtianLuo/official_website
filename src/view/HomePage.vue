<template>
  <div id="HomePage">
    <!-- 轮播图 -->
    <section class="video-section home-masthead lazyloaded">
      <div class="bg-title">
        <h1 class="company-title">新启源农科</h1>
        <h2 class="company-title-sub">一切为了客户，为了客户一切，为了一切客户</h2>
        <button 
          type="button"
          class="btn btn-primary flex-button"
          v-on:click='goToCompany'
        >
          公司简介
        </button>
      </div>
      <video id="videoBG" poster='@/assets/img/bg-poster.png' autoplay muted loop>
        <source src="@/assets/img/sunflower-bg.mp4" type="video/mp4">
      </video>
    </section>
    <!-- 客户评价 -->
    <div id="customer" class="container-fuild">
      <div class="customer-container-wrapper">
        <div class="customer-container">
          <p class="customer-title text-center">在售产品</p>
          <div class="swiper-container customer-swiper">
            <div class="swiper-wrapper leftoffset">        
              <div
                class="swiper-slide"
                v-for="(item,index) in productList"
                :key="index"
              >
                <div class="c-promo">
                  <div class="customer-logo">
                    <img class="center-block swiper-lazy" :src="item.logo" alt="logo">
                  </div>
                  <div class="flex-content text-center">
                    <h3 >{{item.title}}</h3>
                    <p>
                      {{item.content}}
                    </p>
                  </div>
                  <button
                    type="button"
                    class="btn btn-primary sub-flex-button"
                    @click='productDetail(item.id, item.type)'
                  >
                    了解详情
                  </button>
                </div>
              </div>
            </div>
            <!-- 如果需要导航按钮 -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- 公司简介 -->
    <div id="about-us">
      	<section class="about-section anim-object">
          <div class="about-sub-container">
            <div class="company-row align-items-center justify-content-center">
              <div class="col-sm-12 col-md-6 company-img">
                <div class="about-image-block mrb-lg-60">
                  <img class="img-full" src="@/assets/img/about_company.png" alt="">
                </div>
              </div>
              <div class="col-sm-12 col-md-6 company-intro">
                <h3 class="about-title text-center">吉林省新启源农业发展有限公司</h3>
                <p class="mb-6 flex-content">吉林省新启源农业发展有限公司成立于2009年，注册资金500万元，公司自成立以来一直从事向日葵杂交种的选育、生产、推广以及技术服务，商品回收、加工为一体的专业化公司，是中国向日葵杂交种行业“育、繁、推”一体化的现代种业公司。
                目前公司拥有科研人员29人，其中中国向日葵首席育种专家1人；专家3人：高级农艺师5人；农艺师20人。在海南建设有国内领先的室内分子实验室，通过分子育种对向日葵的病害、产量抗性等方面进行研究和创新，在向日葵抗列当、抗菌核等领域均属于领先全国水平，公司具有广阔的向日葵品种市场，2018年，公司又在32个品种中选择了3个适宜在白城地区种植的优质品种，正在通榆、大安、洮北等地区进行示范种植。
                公司2011年开始进行葵花种子选育领域，与世界知名育种公司孟山都、道格瑞、CHS等公司保持着长期友好合作关系，先后在甘肃建成1万亩的制种基地，在海南建成100亩的繁育基地。成功推广了家喻户晓的LD5009、SH363等优质食葵品种；自主研发出“启源壹号”、 “启源3号”、“新启源5号”、“启源6号”、“白绿8号”等高端食葵品种，成功打入市场。
                公司产业链条不断延伸，为加快产业链完善，公司于2015年成立新启源农业炒货厂，创立“山富老儿”牌香瓜子，并于2016年获得“吉林省知名品牌”的殊荣。主要生产原味香瓜子、原味南瓜子等系列，首创6道工序挑选，产品品质达到同行业内领先。公司注重线上线下营销相结合，依托淘宝、天猫等电商平台，建立品牌旗舰店，产品销往全国各地，供不应求。
                </p>
                <button 
                  type="button"
                  class="btn btn-primary flex-button"
                  v-on:click='goToCompany'
                >
                  公司简介
                </button>
              </div>
            </div>
          </div>
        </section>
    </div>
    <!-- 为什么选择我们 -->
    <div>
      <cardList 
        :cardsData="qualificationList"
        :cardtitle='qualificationTitle'
        :isContainer='isContainer'
      />
    </div>
    <!-- 农艺一览表 -->
    <!-- News Section Start -->
    <div id="agriculture-tech">
      <section>
        <div class="section-content">
          <div class="agri-container">
            <div class="agri-row">
              <div class="col-lg-8 col-xl-6">
                <h2 class="agri-title"> 农艺技术 </h2>
              </div>
              <div class="col-lg-4 col-xl-6 align-self-center text-left text-lg-right">
                <button 
                  type="button"
                  class="btn btn-primary float-right agri-button"
                  v-on:click='goToAgriTech'
                >
                  更多农艺技术
                </button>
              </div>
            </div>
            <div class="agri-row">
                <div 
                  class="col-md-4 col-sm-12 col-xs-12"
                  v-for="(agriItem,index) in agriList"
                  :key="index"
                >
                  <div class="news-wrapper mrb-30 mrb-sm-40">
                    <div class="news-thumb">
                      <img class="img-full" :src="agriItem.img" alt="">
                      <div class="news-top-meta">
                        <span class="entry-category">{{ agriItem.category }}</span>
                      </div>
                    </div>
                    <div class="news-details">
                      <div class="news-description mb-20">
                        <h4 class="text-center text-selection"><a v-on:click="clickAgriTech(agriItem.id)">{{ agriItem.title }}</a></h4>
                        <div class="news-bottom-meta">
                          <span class="text-center">{{ agriItem.date }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            </div>
          </div>
      </section>
    </div>
    <!-- 您身边的农业专家 -->
    <div id="contactUs" class="container-fuild text-center">
      <div class="contactUs-container slideInUp">
        <div class="contactUs-row">
          <h1>值得信赖的农业专家</h1>
          <h3>为您提供专业的农业服务</h3>
          <button
            class="btn-outline-info btn-sm btn-special"
            onmouseleave="this.style.borderColor='#337ab7'; this.style.backgroundColor='transparent'; this.style.color='#3f3f3f';"
            onmouseenter="this.style.backgroundColor='#337ab7'"
            v-on:click="goContactUs"
          >联系我们</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import { WOW } from 'wowjs';
import cardList from '../components/cardList.vue'
export default {
  name: "HomePage",
  components: {
    'cardList': cardList,
  },
  data() {
    return {
      isContainer: true,
      productList: [
        {
          logo: require("@/assets/img/启源壹号.jpg"),
          id: 0,
          type: 'seed',
          title:
            "启源壹号",
          content:
            "该品种生育期95天左右，株高180厘米左右，田间长势旺盛、适应性好、对列当有较好的..."
        },
        {
          logo: require("@/assets/img/启源3号.jpg"),
          id: 1,
          type: 'seed',
          title:
            "启源3号",
          content:
            "该品种生育期90天左右，株高170-180厘米，长势旺盛、抗病性好，商品性好，皮薄..."
        },
        {
          logo: require("@/assets/img/新启源5号.jpg"),
          id: 2,
          type: 'seed',
          title:
            "新启源5号",
          content:
            "该品种生育期90天左右，株高180厘米左右，田间植株长势整齐、抗性强，商品籽粒..."
        },
        {
          logo: require("@/assets/img/启源6号.jpg"),
          id: 3,
          type: 'seed',
          title:
             "启源6号",
          content:
            "该品种属中早熟食用向日葵杂交种。生育期97天左右，株高210厘米左右，平均叶片数30片..."
        },
        {
          logo: require("@/assets/img/白绿8号.jpg"),
          id: 4,
          type: 'seed',
          title:
             "白绿8号",
          content:
            "该品种经吉林省白城市农业科学院食用豆研究所育成，由吉林省新启源农业发展有限公司生产..."
        },
        {
          logo: require("@/assets/img/袋装瓜子-01.png"),
          id: 0,
          type: 'produce',
          title:
            "袋装瓜子",
          content: "品名: 山富老儿原味香瓜子 东北特产5袋装大粒原味瓜子 坚果零食 保质期180天..."
        },
        {
          logo: require("@/assets/img/精品瓜子-01.png"),
          id: 1,
          type: 'produce',
          title: "精品瓜子",
          content: "品名: 山富老儿精品原味瓜子 东北特产 原味香瓜子 高端礼罐 坚果零食 保质期: 180天..."
        },        
        {
          logo: require("@/assets/img/南瓜子-01.png"),
          id: 2,
          type: 'produce',
          title: "南瓜子",
          content: "山富老儿原味南瓜子精品罐装 东北特产 坚果零食 炒货休闲食品 包邮 保质期: 180天..."
        },
        {
          logo: require("@/assets/img/礼盒-01.png"),
          id: 3,
          type: 'produce',
          title: "瓜子礼盒",
          content: "山富老儿原味瓜子 葵花籽 铁罐礼盒 坚果零食炒货包邮 年货礼盒 保质期: 180天..."
        },
      ],
      qualificationTitle:'为什么选择我们',
      qualificationList: [
        {
          logo: require("@/assets/img/pic01.png"),
          title: "放心消费示范企业"
        },
        {
          logo: require("@/assets/img/pic02.png"),
          title: "诚信经营示范单位"
        },
        {
          logo: require("@/assets/img/pic03.png"),
          title: "食品生产许可证"
        },
        {
          logo: require("@/assets/img/pic04.png"),
          title: "营业执照"
        },
                {
          logo: require("@/assets/img/pic05.png"),
          title: "食品经营许可证"
        },
        {
          logo: require("@/assets/img/pic66.png"),
          title: "食品经营许可证"
        }
      ],
      agriList: [
        {
          id: 1,
          img: require("@/assets/img/sunflower.png"),
          title: '葵花种植',
          category: '向日葵',
          date: '2021年8月1号'
        },
        {
          id: 2,
          img: require("@/assets/img/rice.png"),
          title: '水稻种植技术',
          category: '水稻',
          date: '2021年6月18号'
        },
        {
          id: 3,
          img: require("@/assets/img/bean.png"),
          title: '绿豆种植方法',
          category: '绿豆',
          date: '2021年7月23号'
        }
      ]
    };
  },
  mounted() {
    /* customer-swiper */
    new Swiper(".customer-swiper", {
      loop: true, // 循环模式选项
      slidesPerView: 'auto',
      preventClicks : false,
      // 取消click阻止，用于点击卡片上面的按钮
      preventClicksPropagation: false,
      //自动播放
      autoplay: 300000,
      autoplayDisableOnInteraction: false,
      autoplaystopOnLastSlide: false,
      // 如果需要前进后退按钮
      prevButton: ".swiper-button-prev",
      nextButton: ".swiper-button-next",
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true //修改swiper的父元素时，自动初始化swiper
    });
    /* wowjs动画 */
    var wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true
    })
    wow.init();
  },

  methods: {
    goToCompany() {
      this.$router.push({
          name: 'companyintroduction'
      })
    },

    goToAgriTech() {
      this.$router.push({
          name: 'agritech'
      })
    },

    clickAgriTech(id){
        this.$router.push({
            name: 'tech-detail',
            params: {
                tech_id: id
            }
        })
    },

    productDetail(id, type) {
      // check the type of the product and determine which route
      // to go
      if (type === 'seed') {
        this.$router.push({
          name: 'seed-detail',
          params: {
              seed_id: id
          }
        })
      }
      if (type === 'produce') {
        this.$router.push({
          name: 'produce-detail',
          params: {
              produce_id: id
          }
        })
      }
    },
    goContactUs() {
      this.$router.push({
          name: 'contactus'
      })
    }
  }
};
</script>
<style scoped>
/* 整体盒子 */
#HomePage {
  width: 100%;
}

.h3 {
  margin: 0!important;
}

.btn-special {
  background-color: transparent;
  border-color: #337ab7;
}
/* 轮播图 */
#swiper {
  height: 650px;
  width: 100%;
  overflow: hidden;
}
#videoBG {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  height: auto;
  width: auto;
  z-index: -100
}

.bg-title {
  position: relative;
  top: 25%;
  left: 0;
  text-align: center;
  z-index: 10;
}

#about-us .company-row {
  display: flex;
  flex-wrap: wrap;
  padding: 5vw;
}

#about-us .img-full {
  width: 100%;
  height: 70vh;
}

#about-us .about-sub-section {
  padding-bottom: 50px;
  padding-top: 110px;
}

#about-us .company-img {
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#about-us .about-sub-container {
  width: 70vw;
  margin: 0 auto;
  background-color: white;
}

#about-us .company-intro {
  display: flex;
  flex-direction: column;
  padding: 0 0.5vw;
  font-size: 1.2vw;
}

#about-us .about-title {
  margin-bottom: 0.3vh;
  font-weight: bold;
  padding-top: 0.3vh;
  font-size: 1.5vw;
}

#about-us .about-sub-title {
  color: #0c59db;
  font-weight: 400;
  margin-bottom: 30px;
}

#about-us .about-bottom-button {
  margin-top:250px; 
}

#about-us .anim-object {
  position: relative;
  overflow: hidden;;
}

#about-us .anim-object:before {
  position: absolute;
  content: "";
  background-image: url('../assets/img/object_1.png');
  height: 325px;
  width: 325px;
  top: 10%;
  right: 25%;
  background-size: contain;
  background-repeat: no-repeat;
  animation-name: spinInfinit;
  animation-duration: 60s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  opacity: 0.8;
}

@keyframes spinInfinit {
	from {
		transform:rotate(0deg);
	}
	to {
		transform:rotate(360deg);
	}
}

#swiper .banner-swiper {
  width: 100%;
  height: 100%;
}
#swiper .banner-swiper .swiper-slide img {
  width: 100%;
  height: 100%;
}

#customer .swiper-slide{
  width: 33.33%;
}

#customer .swiper-button-next {
  top: 50%;
}
#customer .swiper-button-prev {
  top: 50%;
}

#swiper .banner-swiper .swiper-slide-title {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999999999;
  width: 100%;
  height: 100%;
  color: #fff;
  background: rgba(51, 51, 51, 0.534);
  text-align: center;
  line-height: 80px;
}
#swiper .banner-swiper .swiper-slide-title > h1{
  font-size: 50px;
  margin-top: 12%;
}
#swiper .banner-swiper .swiper-slide-title > p{
  font-size: 20px;
  margin-top: 1%;
  font-weight: 700;
}
/* 加工类产品 */
#produce {
  padding: 100px;
  transition: all ease 0.6s;
  box-sizing: border-box;
}
#produce .produce-title {
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}
#produce p {
  font-size: 14px;
  color: #333;
  line-height: 2rem;
}

#contactUs {
  color: rgb(1, 1, 1);
  height: 100%;
}
#contactUs .contactUs-container {
  width: 70vw;
  height: 36vh;
  background-color: white;
  margin: 0 auto;
}
#contactUs .contactUs-container button {
  width: 300px;
  height: 50px;
  margin-top: 40px;
}
#contactUs .contactUs-container .contactUs-contactWay span {
  display: inline-block;
  width: 48px;
  height: 48px;
  margin: 30px;
}

/* 客户评价 */
#customer {
  box-sizing: border-box;
  transition: all ease 0.6s;
  height: 40vh;
}

.company-title {
  font-family: cursive;
  font-style: italic;
  font-weight: bold;
  font-size: 3vh;
}

.company-title-sub {
  font-family: cursive;
  font-style: italic;
  font-weight: bold;
  font-size: 3vh;
}


.flex-content {
  flex: 1 1 auto;
  padding-top: 0.1vh;
}

.flex-content p {
  font-size: 1vw;
}

.flex-content h3 {
  font-size: 1.5vw;
  margin-top: 0.2vh;
  margin-bottom: 0.2vh;
}

.sub-flex-button {
  font-size: 1vw;
  flex: 0 1 auto;
}

.flex-button {
  font-size: 1.5vw;
  flex: 0 1 auto;
}

.home-masthead {
    height: 100vh;
    background-color: #0c1116;
    background-size: cover;
    padding-top: 35vh;
}

.video-section {
    padding-top: 50px;
    padding-bottom: 50px;
    overflow: hidden;
    width: 100%;
    z-index: 5;
    position: relative;
    background-color: #fff;
}

#customer .customer-title {
  font-size: 2vh;
  color: black;
  margin: 0 0 0.5vh;
}
#customer .customer-block {
  background: #fff;
  padding: 40px;
}
#customer .c-promo {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    display: flex;
    border-radius: 25px;
    padding: 1vw;
    height: 100%;
    background-color: #fff;
    flex-direction: column;
    border-bottom: none;
    position: relative;
    z-index: 1;
    transition: transform 420ms cubic-bezier(.165,.84,.44,1);
}

#customer .customer-logo img {
  width: 100%;
  height: 15vh;
}
#customer .customer-yh img {
  width: 34px;
  height: 34px;
}
#customer .customer-content1 {
  padding-bottom: 20px;
  border-bottom: 1px solid #0ce9f1;
}

#customer .customer-container-wrapper {
    width: 70vw;
    margin: 0 auto;
}

#customer .swiper-button-prev{
  width: 6vh;
  height: 7vh;
  background-size: 3vw 7vw;
}

#customer .swiper-button-next {
  width: 6vh;
  height: 7vh;
  background-size: 3vw 7vw;
}


#customer .customer-container {
  position: relative;
  height: 40vh;
  width: 70vw;
  background-color: white;
  padding: 2vw;
}

#customer .swiper-container {
  margin: 0 50px;
  position: static;
}
/* 为什么选择我们 */
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
}
#whyChooseUs .server-block img {
  width: 100%;
  height: 25vh;
}
#whyChooseUs .server-block > p {
  font-size: 20px;
  margin: 30px 0;
}
#whyChooseUs .server-block > div {
  color: #ccc;
}

#agriculture-tech .section-title {
  margin-bottom: 30px;
}

#agriculture-tech .sub-title-side-line {
    margin-bottom: 15px;
    color: #0c59db;
    position: relative;
    padding-left: 60px;
    display: inline-block;
}

#agriculture-tech .news-wrapper .news-thumb {
    position: relative;
    overflow: hidden;
    border-radius: 15px;
}


#agriculture-tech .section-content {
  width: 70vw;
  margin: 0 auto;
  background-color: white;
  padding: 2vw;
}

#agriculture-tech .agri-button {
  font-size: 1.5vw;
}

#agriculture-tech .agri-row {
  display: flex;
  flex-wrap: wrap;
}

#agriculture-tech .text-selection:hover {
  cursor: pointer;
}

#agriculture-tech .text-selection a {
  font-size: 1.2vw;
}

#agriculture-tech .news-wrapper .news-thumb .news-top-meta span{
  font-size: 1.2vw;
}

#agriculture-tech .news-wrapper .news-thumb .news-top-meta {
    position: absolute;
    bottom: 0;
    left: 0;
    text-align: center;
    z-index: 1;
    padding: 4px 14px;
    background: #0c59db;
    font-size: 14px;
    color: #fff;
}

#agriculture-tech .news-wrapper .news-details .news-description .news-bottom-meta {
    color: #828c99;
    background: #f5f6fc;
    padding: 10px 20px;
    border-left: 3px solid #0c59db;
}


#agriculture-tech .news-wrapper .news-details .news-description .news-bottom-meta span{
  font-size: 1.2vw;
}

#agriculture-tech .news-wrapper:hover .news-thumb img {
  -moz-transform: scale3d(1.1, 1.1, 1.1);
  -o-transform: scale3d(1.1, 1.1, 1.1);
  -ms-transform: scale3d(1.1, 1.1, 1.1);
  -webkit-transform: scale3d(1.1, 1.1, 1.1);
  transform: scale3d(1.1, 1.1, 1.1);
  -webkit-transition: 0.3s;
  -ms-transition: 0.3s;
  -o-transition: 0.3s;
  -moz-transition: 0.3s;
  transition: 0.3s;
}

#agriculture-tech .img-full {
    width: 100%;
    height: 26vh;
}

#agriculture-tech  .float-right{
  float: right;
}

#agriculture-tech .agri-title {
  padding-top: 0.2vh;
  font-size: 1.5vw
}

#contactUs .contactUs-row {
    height: 100%;
    padding: 2vw;
  }
#contactUs .contactUs-container h1 {
  font-size: 2vw;
}
#contactUs .contactUs-container h3 {
  font-size: 1.8vw;
}
#contactUs .contactUs-container button {
  width: 15vw;
  height: 5vh;
  margin-top: 1vh;
  font-size: 1.2vw;
}

/* 媒体查询（手机） */
@media screen and (max-width: 768px) {
  #swiper {
    height: 200px;
  }
  #produce {
    padding: 30px;
  }
  #produce .produce-title {
    font-size: 20px;
  }

  #videoBG {
    display: none;
  }

  #customer .customer-container-wrapper {
    width: 100%;
  }

  #about-us .about-sub-container {
    width: 100%;
  }

  #contactUs .contactUs-container {
    width: 100%;
  }

  #agriculture-tech .section-content {
    width: 100%;
    margin: 0 auto;
    background-color: white;
    padding: 2vw;
  }
  .bg-title {
    top: 130px;
  }

  .video-section {
    background: url('../assets/img/mobile-bg.png') no-repeat;
    background-size: cover;
    background-position: 0 120px;
  }

  #contactUs {
    height: 200px;
    transition: all ease 0.6s;
  }

  #contactUs .contactUs-container {
    padding-top: 0;
  }
  #contactUs .contactUs-container h1 {
    font-size: 25px;
  }
  #contactUs .contactUs-container h3 {
    font-size: 18px;
  }
  #contactUs .contactUs-container button {
    width: 200px;
    height: 30px;
    margin-top: 20px;
  }
  #contactUs .contactUs-container .contactUs-contactWay span {
    display: inline-block;
    width: 28px;
    height: 28px;
    margin: 10px;
  }
  #customer {
    padding: 30px 0;
    box-sizing: border-box;
    background: #fff;
  }
  #customer .customer-container {
    width: 100%;
  }

  #customer .leftoffset {
    margin-left: 2px;
  }
  #customer .customer-title {
    font-size: 16px;
    font-weight: bold;
  }
  #customer .customer-logo img {
    width: 100%;
    height: 134px;
  }
  #customer .customer-block {
    padding: 30px;
  }
  #customer .customer-block > div {
    padding: 30px 0;
  }

  #customer .swiper-slide{
    width: 100%;
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
    height: 250px;
  }

  #whyChooseUs .server-block > p {
    font-size: 20px;
    margin: 30px 0;
  }

  #whyChooseUs .server-block > div {
    color: #ccc;
  }
}

/* 媒体查询（平板） */
@media screen and (min-width: 768px) and (max-width: 1200px) {
  .bg-title {
    top: 130px;
  }

  #produce {
    padding: 60px;
  }
  #produce .produce-title {
    font-size: 30px;
  }
  #contactUs {
    height: 300px;
  }
  #contactUs .contactUs-container {
    padding-top: 50px;
  }
  #contactUs .contactUs-container h1 {
    font-size: 30px;
  }
  #contactUs .contactUs-container h3 {
    font-size: 20px;
  }
  #contactUs .contactUs-container button {
    width: 300px;
    height: 50px;
    margin-top: 30px;
  }
  #contactUs .contactUs-container .contactUs-contactWay span {
    display: inline-block;
    width: 32px;
    height: 32px;
    margin: 15px;
  }
  #customer .customer-title {
    font-size: 24px;
  }
  #customer .swiper-slide{
    width: 50%;
  }
  #customer .leftoffset {
    margin-left: 2px;
  }

  #whyChooseUs {
    padding: 20px 0;
  }
}
</style>

