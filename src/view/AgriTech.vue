<template>
    <div id="agriculture-tech">
        <div class="container">
            <div class="container text-center margin-content">
                <h3 class="agri-title">农艺技术</h3>
                <div class="agri-row">
                    <div 
                      class="col-md-4 col-sm-12 col-xs-12"
                      v-for="(agriItem,index) in agriList"
                      :key="index"
                    >
                      <div class="news-wrapper">
                        <div class="news-thumb">
                          <img class="img-full" :src="agriItem.img" alt="">
                          <div class="news-top-meta">
                            <span class="entry-category">{{ agriItem.category }}</span>
                          </div>
                        </div>
                        <div class="news-details">
                          <div class="news-description">
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
    </div>
</template>
<script>
import { WOW } from 'wowjs';
export default {
    name: 'NewsInformation',
    data(){
        return{
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
        }
    },

    methods: {
      clickAgriTech(id){
        this.$router.push({
            name: 'tech-detail',
            params: {
                tech_id: id
            }
        })
        }
    },
    mounted(){
        var wow = new WOW();
        wow.init();
    },
}
</script>
<style scoped>

.margin-content {
  margin-top: 140px;
}

#agriculture-tech .news-wrapper .news-thumb {
    position: relative;
    overflow: hidden;
    border-radius: 15px;
}


#agriculture-tech .agri-row {
  display: flex;
  flex-wrap: wrap;
}

#agriculture-tech .text-selection:hover {
  cursor: pointer;
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
  height: 300px;
}

#agriculture-tech  .float-right{
  float: right;
}


#agriculture-tech  .agri-title {
  margin-bottom: 36px !important;;
  margin-top: 0px !important;;
}

.agri-title {
  padding-top: 15px;
}
</style>

