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
            seedTitle:'当前在售种子',
            seedList: [
                {
                logo: require("../../src/assets/img/启源壹号.jpg"),
                id: 0,
                type: 'seed',
                title:
                    "启源壹号",
                content:
                    "该品种生育期95天左右，株高180厘米左右，田间长势旺盛、适应性好、对列当有较好的抗性，商品性极好..."
                },
                {
                logo: require("../../src/assets/img/启源3号.jpg"),
                id: 1,
                type: 'seed',
                title:
                    "启源3号",
                content:
                    "该品种生育期90天左右，株高170-180厘米，长势旺盛、抗病性好，商品性好，皮薄、粒长、光泽度好..."
                },
                {
                logo: require("@/assets/img/新启源5号.jpg"),
                id: 2,
                type: 'seed',
                title:
                    "新启源5号",
                content:
                    "该品种生育期90天左右，株高180厘米左右，田间植株长势整齐、抗性强，商品籽粒黑底白边..."
                },
                {
                logo: require("@/assets/img/启源6号.jpg"),
                id: 3,
                type: 'seed',
                title:
                    "启源6号",
                content:
                    "有一段简介"
                },
                {
                logo: require("@/assets/img/白绿8号.jpg"),
                id: 4,
                type: 'seed',
                title:
                    "白绿8号",
                content:
                    "有一段简介"
                }
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

