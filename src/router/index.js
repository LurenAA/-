import Vue from 'vue'
import Router from 'vue-router'
import Host from '@/components/Host'
import News from "@/components/News"
import Achieve from "@/components/Achieve"
import Members from "@/components/Members"
import BackEnd from "@/components/BackEnd"
import MainPages from "@/components/MainPages"
import ManagementSystem from "@/components/ManagementSystem"
import UploadArticle from '@/components/UploadArticle'
import HostPageAdministration from "@/components/HostPageAdministration"
import LookArticles from "@/components/LookArticles.vue"
import MemberAdministration from '@/components/MemberAdministration'
import BokePageAdminnistr from '@/components/BokePageAdminnistr';
import FundamentalInfo from '@/components/FundamentalInfo';
import EventPageAdministar from '@/components/EventPageAdministar';
import Teachers from '@/components/Teachers';
import Direction from '@/components/Direction';
import Detail from '@/components/Detail';
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
        }, {
          path: 'teachers',
          name: 'teachers',
          component: Teachers
        }, {
          path: 'direction',
          name: 'direction',
          component: Direction
        }, {
          path: 'detail',
          name: 'detail',
          component: Detail
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
      },{
        path:"HostPageAdministration",
        name: "HostPageAdministration",
        component:HostPageAdministration
      },{
        path:"LookArticles",
        name: "LookArticles",
        component:LookArticles
      },{
        path: "MemberAdministration",
        name: "MemberAdministration",
        component: MemberAdministration
      }
      ,{
        path: "FundamentalInfo",
        name: "FundamentalInfo",
        component: FundamentalInfo
      },{
        path: "BokePageAdminnistr",
        name: "BokePageAdminnistr",
        component: BokePageAdminnistr
      }, {
        path: "EventPageAdministar",
        name: "EventPageAdministar",
        component: EventPageAdministar
      }
    ]
    }
  ]
})
