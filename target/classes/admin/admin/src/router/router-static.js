import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

         import users from '@/views/modules/users/list'
        import chongwulingyang from '@/views/modules/chongwulingyang/list'
        import chongwulingyangshenhe from '@/views/modules/chongwulingyangshenhe/list'
        import chongwurenling from '@/views/modules/chongwurenling/list'
        import chongwurenlingshenhe from '@/views/modules/chongwurenlingshenhe/list'
        import dictionary from '@/views/modules/dictionary/list'
        import ganxiexin from '@/views/modules/ganxiexin/list'
        import jiaoxueshipin from '@/views/modules/jiaoxueshipin/list'
        import jiaoxueshipinCollection from '@/views/modules/jiaoxueshipinCollection/list'
        import jiaoxueshipinLiuyan from '@/views/modules/jiaoxueshipinLiuyan/list'
        import news from '@/views/modules/news/list'
        import yonghu from '@/views/modules/yonghu/list'
        import config from '@/views/modules/config/list'
        import dictionaryChongwulingyang from '@/views/modules/dictionaryChongwulingyang/list'
        import dictionaryChongwulingyangshenheYesno from '@/views/modules/dictionaryChongwulingyangshenheYesno/list'
        import dictionaryChongwurenlingshenheYesno from '@/views/modules/dictionaryChongwurenlingshenheYesno/list'
        import dictionaryJiaoxueshipin from '@/views/modules/dictionaryJiaoxueshipin/list'
        import dictionaryJiaoxueshipinCollection from '@/views/modules/dictionaryJiaoxueshipinCollection/list'
        import dictionaryJieshu from '@/views/modules/dictionaryJieshu/list'
        import dictionaryNews from '@/views/modules/dictionaryNews/list'
        import dictionarySex from '@/views/modules/dictionarySex/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
    ,{
        path: '/dictionaryChongwulingyang',
        name: '宠物类型名称',
        component: dictionaryChongwulingyang
    }
    ,{
        path: '/dictionaryChongwulingyangshenheYesno',
        name: '申请状态',
        component: dictionaryChongwulingyangshenheYesno
    }
    ,{
        path: '/dictionaryChongwurenlingshenheYesno',
        name: '申请状态',
        component: dictionaryChongwurenlingshenheYesno
    }
    ,{
        path: '/dictionaryJiaoxueshipin',
        name: '视频类型名称',
        component: dictionaryJiaoxueshipin
    }
    ,{
        path: '/dictionaryJiaoxueshipinCollection',
        name: '收藏表类型',
        component: dictionaryJiaoxueshipinCollection
    }
    ,{
        path: '/dictionaryJieshu',
        name: '是否',
        component: dictionaryJieshu
    }
    ,{
        path: '/dictionaryNews',
        name: '公告类型名称',
        component: dictionaryNews
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/chongwulingyang',
        name: '宠物领养',
        component: chongwulingyang
      }
    ,{
        path: '/chongwulingyangshenhe',
        name: '宠物领养审核',
        component: chongwulingyangshenhe
      }
    ,{
        path: '/chongwurenling',
        name: '宠物认领',
        component: chongwurenling
      }
    ,{
        path: '/chongwurenlingshenhe',
        name: '宠物认领审核',
        component: chongwurenlingshenhe
      }
    ,{
        path: '/dictionary',
        name: '字典表',
        component: dictionary
      }
    ,{
        path: '/ganxiexin',
        name: '感谢信',
        component: ganxiexin
      }
    ,{
        path: '/jiaoxueshipin',
        name: '教学视频',
        component: jiaoxueshipin
      }
    ,{
        path: '/jiaoxueshipinCollection',
        name: '视频收藏',
        component: jiaoxueshipinCollection
      }
    ,{
        path: '/jiaoxueshipinLiuyan',
        name: '视频留言',
        component: jiaoxueshipinLiuyan
      }
    ,{
        path: '/news',
        name: '公告',
        component: news
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
