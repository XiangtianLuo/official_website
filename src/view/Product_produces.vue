<template>
    <div id="seeds">
        <cardList
            :cardtitle='seedTitle'
            :cardsData="seedList"
            :isContainer='isContainer'
        />
    </div>
</template>
<script>
import cardList from '../components/cardList.vue'
export default {
  components: { cardList },
    name: 'seeds',
    data(){
        return{
            isContainer: false,
            seedTitle:'山富老儿瓜子',
            seedList: [
                {
                logo: require("@/assets/img/袋装瓜子-01.png"),
                id: 0,
                type: 'produce',
                title:
                    "山富老儿瓜子",
                content: ""
                },
                {
                logo: require("@/assets/img/精品瓜子-01.png"),
                id: 1,
                type: 'produce',
                title: "山富老儿精品瓜子",
                content: ""
                },        
                {
                logo: require("@/assets/img/南瓜子-01.png"),
                id: 2,
                type: 'produce',
                title: "山富老儿南瓜子",
                content: ""
                },
                {
                logo: require("@/assets/img/礼盒-01.png"),
                id: 3,
                type: 'produce',
                title: "山富老儿礼盒",
                content: ""
                },
            ]
        }
    }
}
</script>
<style scoped>
.page-title {
    margin-top: 0 !important;
    padding-left: 15px;
    padding-right: 15px;
}
</style>
