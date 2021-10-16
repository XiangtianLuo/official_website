<template>
    <div id="Product" class="container">
        <div class="row">
            <div class="container">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
import { WOW } from "wowjs";
export default {
    name: 'Product',
    mounted() {
        var wow = new WOW();
        wow.init();
    },

    methods: {
        handleClick(routingPath) {
           this.$router.push(routingPath);
        }
    }
}
</script>
<style scoped>
#left{
    margin: 50px 0;
}

#Product {
    margin-top: 100px;
}

.left-container{
    width: 60%;
    margin: 0 auto;
    border: 1px solid #474747;
    border-radius: 5px;
    float:left;
}
.left-container>p{
    text-align: center;
    line-height: 45px;
    padding: 0;
    margin: 0;
    background: #474747;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
}
.left-container>li {
  text-align: center;
  height: 38px;
  line-height: 38px;
  margin: 0;
  border-top: 1px solid #474747;
}
.left-container>li>a{
    text-decoration: none;
}
.left-container>li:hover{
    background: #928989;
    cursor: pointer;
}
#right{
    padding: 50px 0;
}
@media screen and (max-width: 768px){
    #right{
        padding: 15px;
    }
    .left-container{
        width: 60%;
        margin: 0 auto;
        border: 1px solid #474747;
        border-radius: 5px;
        float: unset;
    }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
    .left-container{
        width: 60%;
        margin: 5px auto;
        border: 1px solid #474747;
        border-radius: 5px;
        float: unset;
    }
}
</style>

