// import { createRouter, createWebHistory } from 'vue-router'
// //createRouter 创建router实例对象
// //createWEebHistory 创建history路由模式的路由

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//   {
//     path:'/',
//     component:()=>import('@/pages/Home/index.vue')
//   },
//   {
//     path:'/login',
//     component:()=>import('@/pages/Login/index.vue')
//   },
//   ]
// })

// export default router


//哈希路由
import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router';

const routes = [
  {
        path:'/',
        component:()=>import('@/pages/Layout/index.vue'),
        children:[
          {
            path:'',
        component:()=>import('@/pages/Home/index.vue')
          },
          {
            path:'/category/:id',
        component:()=>import('@/pages/Category/index.vue')
          },
          {
            path:'/sub/category/:id',
        component:()=>import('@/pages/SubCategory/index.vue')
          },
          {
            path:'/details/:id',
        component:()=>import('@/pages/Details/index.vue')
          },
        ]
      },
      {
        path:'/login',
        component:()=>import('@/pages/Login/index.vue')
      },
];

const router = createRouter({
  // history: createWebHistory(),
    history: createWebHashHistory(),
  routes,
      // 路由滚动行为定制
      scrollBehavior() {
        return {
            top: 0
        }
    }
});

export default router;
