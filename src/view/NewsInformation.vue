<template>
    <div id="NewsInformation">
        <div class="sub-container">
            <div class="container text-center margin-content">
                <ul class="list-group">
                    <li 
                        v-for="(news, index) in newsList"
                        :key='index'
                        class="list-group-item news-header"
                    > 
                        <h5><a
                            v-on:click="clickTheNews(news.id)"
                        >
                            {{ news.title }}
                        </a>
                        </h5>
                        <h5>
                            {{ news.date }}
                        </h5>
                    </li>
                </ul>
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
            newsList:[
            ]
        }
    },

    methods: {
        clickTheNews(id){
        this.$router.push({
            name: 'news-detail',
            params: {
                news_id: id
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

.sub-container {
    width: 70vw;
    min-height: 100vh;
    background-color: white;
    margin-top: 7.688vw;
    margin-left: auto;
    margin-right: auto;
    padding: 0.5vw;
}

.news-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

@media screen and (max-width: 768px) {
  .sub-container {
      margin-top: 150px;
  }
}
</style>

