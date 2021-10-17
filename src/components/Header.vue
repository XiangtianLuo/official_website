<template>
  <!-- 头部整体盒子 -->
  <div id="header" class="container-fuild">
    <!-- 头部顶部 -->
    <!-- 电脑导航 -->
    <div class="header-nav hidden-xs">
      <!-- 导航logo -->
      <div class="header-nav-logo">
        <img src="@/assets/img/company-logo.png">
      </div>
      <!-- 导航内容 -->
      <ul class="header-nav-wrapper">
        <li
          v-for="(item,index) in navList"
          :key="index"
          :class="index==navIndex?'active':''"
          @click="navClick(index,item.name)"
        >
          <router-link :to="item.path">
            {{item.name}}
            <span v-if="item.children.length>0" class="glyphicon glyphicon-menu-down"></span>
          </router-link>
          <dl v-if="item.children.length>0">
            <dt
              v-for="(i,n) in item.children" :key="n"
              @click="navSubClick(i.path)"
            >
              <a>{{i.name}}</a>
            </dt>
          </dl>
        </li>
      </ul>
    </div>
    <!-- 手机导航 -->
    <div class="header-nav-m container-fuild visible-xs">
      <div class="header-nav-m-logo">
        <img class="center-block mobile-header-img" src="@/assets/img/company-logo.png" alt="logo">
      </div>
      <!-- 导航栏 -->
      <div class="header-nav-m-menu text-center">
        {{menuName}}
        <div
          class="header-nav-m-menu-wrapper"
          data-toggle="collapse"
          data-target="#menu"
          @click="menuClick"
        >
          <span :class="menuClass"></span>
        </div>
        <!-- 导航内容 -->
        <ul id="menu" class="header-nav-m-wrapper collapse">
          <li
            class="nav-item"
            :class="item.children.length>0?'dropdown':''"
            v-for="(item,index) in navList"
            :key="index"
            data-toggle="collapse"
            data-target="#menu"
          >
            <div
              v-if="item.children.length==0"
              @click="navClickCollapse(index,item.name,item.path)"
            >
              <div
                :to="item.path"      
              >
                {{item.name}}
                <i class="underline"></i>
              </div>
            </div>

            <div
              v-else
            >
              <a class="nav-link dropdown-toggle text-center dropdown-a" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {{item.name}}
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <div
                  v-for="(i,n) in item.children" :key="n"
                  @click="navSubClick(i.path)"
                >
                  <a class="dropdown-a">{{i.name}}</a>
                  <i class="underline"></i>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      navIndex: sessionStorage.getItem('navIndex') ? sessionStorage.getItem('navIndex') : 0,
      menuName: "首页",
      menuClass: "glyphicon glyphicon-menu-down",
      navList: [
        {
          name: "首页",
          path: "/",
          children: []
        },
        {
          name: "产品介绍",
          path: "/product",
          children: [
            {
              name: "种子产品",
              path: "/product/seeds"
            },
            {
              name: "炒货",
              path: "/product/produces"
            }
          ]
        },
        {
          name: "公司介绍",
          path: "/companyintroduction",
          children: []
        },
        {
          name: "农艺技术",
          path: "/agritech",
          children: []
        },
        {
          name: "联系我们",
          path: "/contactus",
          children: []
        },
        {
          name: "新闻动态",
          path: "/newsinformation",
          children: []
        }
      ]
    };
  },
  methods: {
    navClick(index, name) {
      this.navIndex = index;
      sessionStorage.setItem('navIndex',index)
      this.menuName = name;
    },
    navClickCollapse(index, name, path) {
      this.navIndex = index;
      sessionStorage.setItem('navIndex',index)
      this.menuName = name;
      this.$router.push(path)
    },
    navSubClick(path){
      this.$router.push(path)
    },
    menuClick() {
      if (this.menuClass == "glyphicon glyphicon-menu-down") {
        this.menuClass = "glyphicon glyphicon-menu-up";
      } else {
        this.menuClass = "glyphicon glyphicon-menu-down";
      }
    }
  }
};
</script>
<style scoped>
/* 顶部 */
#header {
  transition: all ease 0.6s;
  position: absolute;
  top: 0;
  width: 100%;
  height: 7.688vw;
  z-index: 999;
  padding: 0 15.22vw;
  background-color: beige;
}
.glyphicon {
  font-size: 1.2vw;
}


#header .header-top {
  height: 50px;
  color: #fff;
  font-size: 12px;
  line-height: 50px;
}
/* 顶部的图标 */
#header .header-top span {
  margin: 0 8px;
}
/* 导航栏 */
#header .header-nav {
  height: 110px;
}
/* 导航栏logo */
#header .header-nav .header-nav-logo {
  width: 8vw;
  height: 7vw;
  float: left;
  position: relative;
}
/* 导航栏logo图片 */
#header .header-nav .header-nav-logo img {
  width: 8vw;
  height: 6vw;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
/* 导航栏 导航容器 */
#header .header-nav-fixed .header-nav-wrapper {
  line-height: 50px;
}
#header .header-nav .header-nav-wrapper {
  line-height: 8vw;
  float: right;
  margin: 0;
  height: 7vw;
}
/* 导航栏 每个导航 */
#header .header-nav .header-nav-wrapper > li {
  float: left;
  padding: 0 1vw;
  position: relative;
}
/* 导航栏 每个导航下面的 a 链接 */
#header .header-nav .header-nav-wrapper > li > a {
  display: block;
  color: #000;
  font-size: 1.5vw;
  width: 100%;
  height: 100%;
  font-weight: bold;
  position: relative;
}
/* 导航栏 每个导航下面的 a 链接的下划线 */
#header .header-nav .header-nav-wrapper > li > a > i {
  display: block;
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 0.1vw;
  opacity: 0;
  transition: all 0.6s ease;
  background-color: #2141c1;
}
/* 导航栏 每个导航下面的 a 链接的右侧小三角 */
#header .header-nav .header-nav-wrapper > li > a > span {
  transition: transform ease 0.5s;
}
/* 导航栏 每个导航下面的 a 链接 鼠标滑上去的样式 */
#header .header-nav .header-nav-wrapper > li > a:hover {
  color: #2141c1;
  text-decoration: none;
}
/* 导航栏 每个导航下面的 a 链接 鼠标滑上去下划线的样式 */
#header .header-nav .header-nav-wrapper > li > a:hover .underline {
  opacity: 1;
  width: 100%;
  left: 0;
}
/* 导航栏 每个导航下面的 a 链接 鼠标滑上去三角标的样式 */
#header .header-nav .header-nav-wrapper > li > a:hover span {
  transform: rotate(180deg);
}
/* 导航栏 每个导航下面的 a 链接 鼠标点击后的样式 */
#header .header-nav .header-nav-wrapper > li.active > a {
  text-decoration: none;
  border-bottom: 0.5vw solid #2141c1;
}
/* 导航栏 每个导航下面的二级导航容器 */
#header .header-nav .header-nav-wrapper > li > dl {
  display: none;
  position: absolute;
  width: 8vw;
  top: 74%;
  left: 0;
  z-index: 999999;
  box-shadow: 0 0 3px 1px #ccc;
  background: #fff;
}
/* 导航栏 每个导航下面的二级导航容器的每个导航 */
#header .header-nav .header-nav-wrapper > li > dl > dt {
  width: 8vw;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
/* 导航栏 每个导航下面的二级导航容器的每个导航 当鼠标滑上时的样式*/
#header .header-nav .header-nav-wrapper > li > dl > dt > a:hover {
  text-decoration: none;
}

#header .header-nav .header-nav-wrapper > li > dl > dt > a {
  font-size: 1vw;
}

/* 导航栏 滑上一级导航显示二级导航 */
#header .header-nav .header-nav-wrapper > li > a:hover + dl {
  display: block;
}
#header .header-nav .header-nav-wrapper > li > dl:hover {
  display: block;
}
#header .header-nav .header-nav-wrapper > li > dl > dt:hover {
  cursor: pointer;
  background: #ccc;
}
@media screen and (max-width: 997px){
  .header-nav {
    height: 110px;
    width: 768px!important;
  }
}
@media screen and (max-width: 768px) {
  #header {
    -webkit-transition: all .6s ease;
    transition: all .6s ease;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 999;
    background-color: beige;
    padding: 0;
    height: auto;
}
  #header .header-nav-m {
    position: relative;
  }
  /* 导航栏logo容器 */
  #header .header-nav-m .header-nav-m-logo {
    height: 80px;
    position: relative;
  }
  /* 导航栏logo图片 */
  #header .header-nav-m .header-nav-m-logo img {
    width: 120px;
    height: 90px;
    position: absolute;
    top: 17px;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
  /* 导航栏  菜单容器 */
  #header .header-nav-m .header-nav-m-menu {
    margin-top: 20px;
    color: #fff;
    height: 50px;
    font-size: 20px;
    line-height: 50px;
    background: #337ab7;
    position: relative;
  }
  /* 导航栏 菜单图标 */
  #header .header-nav-m .header-nav-m-menu-wrapper {
    position: absolute;
    top: 50%;
    right: 20px;
    margin-top: -20px;
    width: 50px;
    height: 40px;
    color: #fff;
    z-index: 999999;
    font-size: 12px;
  }
  /* 导航栏 */
  #header .header-nav-m .header-nav-m-wrapper {
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    background: #474747;
    z-index: 9999999;
  }
  /* 导航栏 每个导航 */
  #header .header-nav-m .header-nav-m-wrapper > li {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ccc;
  }
  /* 导航栏 每个导航下面的 a 链接 */
  #header .header-nav-m .header-nav-m-wrapper > li > a {
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    padding: 15px 0;
    position: relative;
  }
  /* 导航栏 每个导航下面的 a 链接的右侧小三角 */
  #header .header-nav .header-nav-wrapper > li > a > span {
    font-size: 10px;
  }
  .header-nav {
    height: 110px;
    width: 768px!important;
  }
  #header .dropdown {
    width: 100%;
  }


  /*drop试验田 */
  .dropdown-menu {
    width: 100%;
    text-align: center;
    padding: 0 0 !important;
    background: #337ab7;
  }

  .dropdown-menu > div{
    border: 1px solid;
  }


  .dropdown-item {
      display: block;
      width: 100%;
      padding: .25rem 1.5rem;
      clear: both;
      font-weight: 400;
      color: #212529;
      text-align: inherit;
      white-space: nowrap;
      background-color: transparent;
      border: 0;
  }
}

.dropdown-toggle::after {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: .255em;
  vertical-align: .255em;
  content: "";
  border-top: .3em solid;
  border-right: .3em solid transparent;
  border-bottom: 0;
  border-left: .3em solid transparent;
}

.dropdown-a {
  color: #fff!important;
  text-decoration: none!important;
}
</style>
