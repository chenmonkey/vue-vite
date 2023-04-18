import { createWebHashHistory, createRouter } from 'vue-router';

// 公共路由
export const constantRoutes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: () => import('../views/login/index.vue')
    }
]

const router = createRouter({
    // createWebHistory：路由模式路径不带#号，生产环境下不能直接访问，需要nginx转发；createWebHashHistory：路由模式路径带#号
    history: createWebHashHistory(),
    // 路由
    routes: constantRoutes,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { top: 0 }
      }
    },
  });
  
  export default router;