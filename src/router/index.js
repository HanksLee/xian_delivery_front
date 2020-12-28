import Vue from 'vue';
import Router from 'vue-router';

//引用個模塊進到vue-router
const Home = () => import('@/components/Index');
const OrderSearch = () => import('@/components/OrderSearch');
const Fare = () => import('@/components/Fare');
const ReserveStep = () => import('@/components/ReserveStep');
const Company = () => import('@/components/Company');
const Login = () => import('@/components/Login');
const PickUp = () => import('@/components/PickUp');
const MemberCenter = () => import('@/components/MemberCenter');
const AddDriver = () => import('@/components/AddDriver');

Vue.use(Router);

const router = new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/OrderSearch',
      name: 'OrderSearch',
      component: OrderSearch
    },
    {
      path: '/Fare',
      name: 'Fare',
      component: Fare
    },
    {
      path: '/ReserveStep',
      name: 'ReserveStep',
      component: ReserveStep
    },
    {
      path: '/Company',
      name: 'Company',
      component: Company
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/PickUp',
      name: 'PickUp',
      component: PickUp
    },
    {
      path: '/MemberCenter',
      name: 'MemberCenter',
      component: MemberCenter
    },
    {
      path: '/AddDriver',
      name: 'AddDriver',
      component: AddDriver
    },
    // {
    //   path: '/news',
    //   name: 'news',
    //   component: News,
    //   children:[
    //     {
    //       path: '/',
    //       // name: 'blog',
    //       component: () => import('@/components/News/home'),
    //     },
    //     {
    //       path: '1',
    //       // name: 'class',
    //       component: () => import('@/components/News/content'),
    //     }
    //   ]
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: About,
    //   children:[
    //     {
    //       path: '/',
    //       // name: 'blog',
    //       component: () => import('@/components/about/home'),
    //     },
    //   ]
    // },
    // {
    //   path: '/camp',
    //   name: 'camp',
    //   component: Camp,
    //   children:[
    //     {
    //       path: '/',
    //       // name: 'class',
    //       component: () => import('@/components/camp/home'),
    //     },
    //     {
    //       path: '1',
    //       // name: 'class',
    //       component: () => import('@/components/camp/apply'),
    //     }
    //   ]
    // },
    // {
    //   path: '/class',
    //   name: 'class',
    //   component: Class,
    //   children:[
    //     {
    //       path: '/',
    //       // name: 'class',
    //       component: () => import('@/components/class/home'),
    //     },
    //     {
    //       path: '1',
    //       // name: 'class',
    //       component: () => import('@/components/class/apply'),
    //     }
    //   ]
    // },
    // {
    //   path: '/blog',
    //   name: 'blog',
    //   component: Blog,
    //   children:[
    //     {
    //       path: '/',
    //       // name: 'blog',
    //       component: () => import('@/components/blog/home'),
    //     },
    //     {
    //       path: '1',
    //       // name: 'class',
    //       component: () => import('@/components/blog/content'),
    //     }
    //   ]
    // },
    // {
    //   path: '/contact',
    //   name: 'contact',
    //   component: Contact,
    //   children:[
    //     {
    //       path: '/',
    //       // name: 'blog',
    //       component: () => import('@/components/contact/home'),
    //     },
    //   ]
    // },
  ],
});


//每次進頁面之後卷軸高度歸0
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

export default router;
