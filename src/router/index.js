import Vue from 'vue'
import Router from 'vue-router'
import Host from '@/components/Host'
import News from "@/components/News"
import Achieve from "@/components/Achieve"
import Members from "@/components/Members"
import BackEnd from "@/components/BackEnd"
import MainPages from "@/components/MainPages"
import ManagementSystem from "@/components/ManagementSystem"
import UploadArticle from '@/components/UploadArticle';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPages',
      component: MainPages,
      redirect: "/host",
      children:[
        {
          path: 'host',
          name: "host",
          component: Host
        },
        {
          path: 'news',
          name: "news",
          component: News
        },
        {
          path: 'achieve',
          name: "achieve",
          component: Achieve
        },
        {
          path: 'members',
          name: "members",
          component: Members
        }
      ]
    },
    {
      path: '/backEnd',
      name: "backEnd",
      component: BackEnd
    },
    {
      path: "/managementsystem",
      name: "managementSystem",
      component: ManagementSystem,
      children: [{
        path: "UploadArticle",
        name: "UploadArticle",
        component: UploadArticle
      }]
    }
  ]
})
