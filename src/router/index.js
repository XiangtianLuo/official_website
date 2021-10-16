import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    }, {
      path: '/',
      name: 'PageView',
      component: resolve => require(['@/view/PageView'], resolve),
      children: [
        {
          path: '/',
          redirect: '/home'
        }, {
          path: '/home',
          name: 'home',
          component: resolve => require(['@/view/HomePage'], resolve),
          meta: {
            title: '吉林省新启源农业发展有限公司'
          }
        }, {
          path: '/product',
          name: 'product',
          component: resolve => require(['@/view/product'], resolve),
          meta: {
            title: '在售产品'
          },
          children: [
            {
              path: '/product',
              redirect: '/product/seeds'
            },
            {
              path: '/product/seeds',
              name: 'product',
              component: resolve => require(['@/view/Product_seeds'], resolve),
              meta: {
                title: '在售产品丨种子'
              }
            },
            {
              path: '/product/produces',
              name: 'product',
              component: resolve => require(['@/view/Product_produces'], resolve),
              meta: {
                title: '在售产品丨炒货'
              }
            },
            {
              path: '/product/seed-detail/:seed_id',
              name: 'seed-detail',
              component: resolve => require(['@/view/Seed_detail'], resolve)
            },
            {
              path: '/product/produce-detail/:produce_id',
              name: 'produce-detail',
              component: resolve => require(['@/view/Produce_detail'], resolve)
            }
          ]
        }, {
          path: '/newsinformation',
          name: 'newsinformation',
          component: resolve => require(['@/view/NewsInformation'], resolve),
          meta: {
            title: '新闻动态'
          }
        }, {
          path: '/newsinformation/:news_id',
          name: 'news-detail',
          component: resolve => require(['@/view/News_detail'], resolve)
        },{
          path: '/companyintroduction',
          name: 'companyintroduction',
          component: resolve => require(['@/view/CompanyIntroduction'], resolve),
          meta: {
            title: '公司介绍'
          }
        }, {
          path: '/contactus',
          name: 'contactus',
          component: resolve => require(['@/view/ContactUs'], resolve),
          meta: {
            title: '联系我们'
          }
        }, {
          path: '/agritech',
          name: 'agritech',
          component: resolve => require(['@/view/AgriTech'], resolve),
          meta: {
            title: '联系我们'
          }
        }, {
          path: '/agritech/:tech_id',
          name: 'tech-detail',
          component: resolve => require(['@/view/Tech_detail'], resolve)
        }
      ]
    }
  ],
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
