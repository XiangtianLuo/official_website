<template>
  <div id="footer" class="container-fluid">
    <p class="title">吉林省新启源农业发展有限公司</p>
    <p class="address_tel_fax">
      <span class="text-nowrap">地址：吉林省通榆县开通镇兴华街思源路（武装部北）</span>
      <span class="text-nowrap" >电话：0436-4267799</span>
      <span class="text-nowrap" >传真：0436-4267799</span>
    </p>
    <p class="email_wx text-nowrap">
      <span>邮箱：408718667@qq.com</span>
    </p>
    <p class="copy text-nowrap">Copyright &copy; 2020 - 2021 吉林省新启源农业发展有限公司</p>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {};
  }
};
</script>
<style scoped>
#footer {
  width: 100%;
  height: 100%;
  color: rgb(0, 0, 0);
  background: beige;
  overflow: hidden;
  text-align: center;
  flex: 0 1 auto;
  border-top: 1px solid black;
}
.logo {
  width: 95px;
  height: 45px;
  margin: 50px auto 20px;
}
.title {
  font-size: 25px;
  margin-bottom: 20px;
  margin-top: 5px;
}
.address_tel_fax {
  color: rgb(0, 0, 0);
  font-size: 14px;
  margin: 10px 0;
}
.email_wx {
  color: rgb(0, 0, 0);
  font-size: 14px;
}
.copy {
  color: rgb(0, 0, 0);
  font-size: 14px;
  margin: 50px 0 10px;
}
@media screen and (max-width: 997px) {
  .title {
    font-size: 20px;
  }
  .address_tel_fax {
    font-size: 12px;
  }
  .email_wx {

  font-size: 12px;
}
.copy {
  font-size: 12px;
  margin: 30px 0 10px;
}
}
</style>
