<template>
    <div id="CompanyIntroduction">
        <div class="container">
            <div id="about-us" class="background-custom-2">
                <section class="about-section anim-object">
                <div>
                    <h3 class="about-title text-center">吉林省新启源农业发展有限公司</h3>
                    <div class="company-row align-items-center justify-content-center">
                    <div class="col-sm-12 col-md-6 company-img">
                        <div class="about-image-block mrb-lg-60">
                        <img class="img-full" src="@/assets/img/about_company.png" alt="">
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 company-intro">
                        <p class="mb-6 flex-content">吉林省新启源农业发展有限公司成立于2009年，注册资金500万元，公司自成立以来一直从事向日葵杂交种的选育、生产、推广以及技术服务，商品回收、加工为一体的专业化公司，是中国向日葵杂交种行业“育、繁、推”一体化的现代种业公司。
                        目前公司拥有科研人员29人，其中中国向日葵首席育种专家1人；专家3人：高级农艺师5人；农艺师20人。在海南建设有国内领先的室内分子实验室，通过分子育种对向日葵的病害、产量抗性等方面进行研究和创新，在向日葵抗列当、抗菌核等领域均属于领先全国水平，公司具有广阔的向日葵品种市场，2018年，公司又在32个品种中选择了3个适宜在白城地区种植的优质品种，正在通榆、大安、洮北等地区进行示范种植。
                        公司2011年开始进行葵花种子选育领域，与世界知名育种公司孟山都、道格瑞、CHS等公司保持着长期友好合作关系，先后在甘肃建成1万亩的制种基地，在海南建成100亩的繁育基地。成功推广了家喻户晓的LD5009、SH363等优质食葵品种；自主研发出“启源壹号”、 “启源3号”、“新启源5号”、“启源6号”、“白绿8号”等高端食葵品种，成功打入市场。
                        公司产业链条不断延伸，为加快产业链完善，公司于2015年成立新启源农业炒货厂，创立“山富老儿”牌香瓜子，并于2016年获得“吉林省知名品牌”的殊荣。主要生产原味香瓜子、原味南瓜子等系列，首创6道工序挑选，产品品质达到同行业内领先。公司注重线上线下营销相结合，依托淘宝、天猫等电商平台，建立品牌旗舰店，产品销往全国各地，供不应求。
                        </p>
                    </div>
                    </div>
                </div>
                </section>
            </div>
            <div id="customer" class="container-fuild background-custom-1">
                <div class="customer-container">
                    <p class="customer-title text-center">企业画廊</p>
                    <div class="swiper-container customer-swiper">
                    <div class="swiper-wrapper">        
                        <div
                        class="swiper-slide"
                        v-for="(item,index) in companyPicsList"
                        :key="index"
                        >
                        <div class="c-promo">
                            <div class="customer-logo">
                            <h4 class="text-center">{{item.title}}</h4>
                            <img class="center-block swiper-lazy" :src="item.logo" alt="logo">
                            </div>
                            <div class="flex-content">
                            </div>
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
    </div>
</template>
<script>
import { WOW } from 'wowjs';
import Swiper from "swiper";

export default {
    name: 'CompanyIntroduction',
    data(){
        return{
            companyPicsList: [
                {
                    logo: require("@/assets/img/企业图片-正门.jpg"),
                    title: "公司正门"
                },
                {
                    logo: require("@/assets/img/企业图片-公司主楼.jpg"),
                    title: "公司主楼"
                },
                {
                    logo: require("@/assets/img/公司图片-炒货厂.jpg"),
                    title: "炒货厂"
                },
                {
                    logo: require("@/assets/img/公司图片-炒货设备.jpg"),
                    title: "炒货设备"
                },
                {
                    logo: require("@/assets/img/公司图片-公司大厅.jpg"),
                    title: "公司大厅"
                },
                {
                    logo: require("@/assets/img/公司图片-会议室.jpg"),
                    title: "会议室"
                },
                {
                    logo: require("@/assets/img/企业图片-乒乓球室.jpg"),
                    title: "乒乓球室"
                },
                {
                    logo: require("@/assets/img/公司图片-公司茶室.jpg"),
                    title: "公司茶室"
                },
                {
                    logo: require("@/assets/img/公司图片-餐厅.jpg"),
                    title: "餐厅"
                },
                {
                    logo: require("@/assets/img/公司图片-会客室.jpg"),
                    title: "会客厅"
                }
            ],
        }
    },
    mounted(){
        /* customer-swiper */
        new Swiper(".customer-swiper", {
        loop: true, // 循环模式选项
        slidesPerView: 1,
        //自动播放
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false
        },
        // 如果需要前进后退按钮
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true //修改swiper的父元素时，自动初始化swiper
        });
        var wow = new WOW();
        wow.init();
    }
}
</script>
<style scoped>
.banner{
    color: #fff;
    font-size: 30px;
    height: 150px;
    line-height: 150px;
}

.row{
    margin-right: 0;
    margin-left: 0;
}
.CompanyIntroduction-container{
    margin-top: 100px;
    padding: 20px 0;
    color: #808080;
    transition: all ease 0.5s;
}
.CompanyIntroduction-container>div>p{
    font-size: 14px;
    line-height: 2.5rem;
}
#about-us .company-row {
  display: flex;
  flex-wrap: wrap;
  margin-right: 15px;
  margin-left: 15px;
}

#about-us .about-section {
  padding-bottom: 50px;
  margin-top: 140px
}

#about-us .about-sub-section {
  padding-bottom: 50px;
  padding-top: 110px;
}

#about-us .company-img {
  padding: 0 20px;
}

#about-us .company-intro {
  display: flex;
  flex-direction: column;
  padding: 0 20px;
}

#about-us .about-title {
  margin-bottom: 30px;
  font-weight: bold;
  padding-top: 15px;
}

#about-us .about-sub-title {
    color: #0c59db;
    font-weight: 400;
    margin-bottom: 0px;
}

#about-us .img-full {
    width: 100%
}

#about-us .about-bottom-button {
  margin-top:250px; 
}

.flex-content {
  flex: 1 1 auto;
  font-size: 18px;
}
.flex-button {
  flex: 0 1 auto;
}
#customer .customer-container {
    position: relative;
    margin-bottom: 50px;
}
#customer .swiper-container {
  margin: 0 50px;
  position: static;
  height: 730px;
}
#customer .swiper-button-prev {
    top: 60%;
}
#customer .swiper-button-next {
    top: 60%;
}
#customer .customer-title {
  font-size: 30px;
  color: black;
  margin: 0 0 30px;
}
#customer .customer-block {
  background: #fff;
  padding: 40px;
}
#customer .swiper-slide{
    width: 33.3333333333333333%;
}
#customer .c-promo {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    display: flex;
    border-radius: 25px;
    padding: 20px;
    background-color: #fff;
    width: 100%;
    height: 720px;
    flex-direction: column;
    border-bottom: none;
    position: relative;
    z-index: 1;
    transition: transform 420ms cubic-bezier(.165,.84,.44,1);
}

#customer .customer-logo img {
  width: 100%;
  height: 630px;
}
#customer .customer-yh img {
  width: 34px;
  height: 34px;
}
#customer .customer-content1 {
  padding-bottom: 20px;
  border-bottom: 1px solid #0ce9f1;
}


@media screen and (max-width: 997px){
    #about-us .company-img {
        padding: 10px 20px;
    }

    #customer .swiper-slide{
        width: 100%;
    }

    .CompanyIntroduction-container{
        padding: 10px 0;
        color: #808080;
    }

    #customer .c-promo {
        height: 420px;
    }

    #customer .swiper-container {
        height: 420px;
    }
    #customer .customer-logo img {
        height: 330px;
    }
}

</style>

