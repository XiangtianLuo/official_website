<template>
    <div id="NewsInformation">
        <div class="container sub-container">
            <div class="container text-center margin-content">
                <h3>新闻动态</h3>
                <p style="color:#b2b2b2">Company News</p>
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
    min-height: 100vh;
    background-color: white;
}

.news-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>

