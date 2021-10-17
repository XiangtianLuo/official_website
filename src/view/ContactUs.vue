<template>
  <div id="ContactUs">
    <div class="container sub-container">
      <div class="container-fuild ContactUs-container">
        <div class="row margin-content">
					<div class="col-xl-4 col-lg-6 col-md-6">
						<div class="widget footer-widget img-margin-top">
							<img src="@/assets/img/company-flower.png" alt="" class="company-logo">
							<address class="mrb-25">
								<div class="address-margin"><i class="fas fa-map-pin company-location"></i>公司地址: 吉林省通榆县开通镇兴华街思源路（武装部北）</div>
								<div class="address-margin"><i class="fas fa-phone-alt company-telephone"></i>联系电话: 0436-4267799</div>
								<div class="address-margin"><i class="fas fa-envelope company-email"></i>电子邮箱: 408718667@qq.com</div>
								<div class="address-margin"><i class="fab fa-internet-explorer company-web"></i>公司网址: www.jilinxinqiyuan.com</div>
							</address>
						</div>
					</div>
          <div class="col-xs-12 col-sm-12 col-md-6">
            <div id="map" class="wow zoomIn"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { WOW } from 'wowjs'
import BMap from "BMap";
export default {
  name: "ContactUs",
  data() {
    return {};
  },
  mounted() {
    var map = new BMap.Map("map"); // 创建地图实例
    var point = new BMap.Point(123.084411,44.833007); // 创建点坐标
    map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别
    map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    var marker = new BMap.Marker(point); // 创建标注
    map.addOverlay(marker); // 将标注添加到地图中
    var opts = {
      width: 50, // 信息窗口宽度
      height: 10, // 信息窗口高度
      title: "吉林省新启源农业发展有限公司" // 信息窗口标题
    };
    var infoWindow = new BMap.InfoWindow(
      "公司地址",
      opts
    ); // 创建信息窗口对象
    map.openInfoWindow(infoWindow, map.getCenter()); // 打开信息窗口
    var wow = new WOW();
    wow.init();
  }
};
</script>
<style scoped>

.sub-container {
  min-height: 100vh;
  background-color: white;
}

.margin-content {
  margin-top: 140px;
}

.banner {
  color: #fff;
  font-size: 30px;
  height: 150px;
  line-height: 150px;
}
.ContactUs-container {
  padding: 80px 0;
  transition: all ease 0.5s;
  box-sizing: border-box;
}
#map {
  width: 100%;
  height: 365px;
}
.row {
  margin-right: 0;
  margin-left: 0;
}
@media screen and (max-width: 997px) {
  .ContactUs-container {
    padding: 20px 0;
  }

  .margin-content {
    margin-top: 140px;
  }

}

.address-margin {
  margin-bottom: 10px;
  font-size: 25px;
}

.company-location {
  margin-right: 10px;
  color: red;
}

.company-telephone {
  margin-right: 5px;
  color: black
}

.company-email {
  margin-right: 5px;
  color: rgb(236, 91, 18);
}

.company-web {
  margin-right: 5px;
  color:rgb(23, 102, 221)
}

.company-wechat {
  margin-right: 5px;
  color: rgb(16, 225, 16);
}

.company-logo {
  max-width: 100%;
  margin-bottom: 20px;
}

</style>

