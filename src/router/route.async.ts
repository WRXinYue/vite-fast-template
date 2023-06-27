// 需要鉴权的业务路由
import type { RouteRecordRaw } from 'vue-router'

const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/process',
    name: 'process',
    meta: {
      title: 'Template configuration process',
      icon: '',
    },
    component: () => import('~/pages/example/MarkdownPage.vue'),
  },
]

export default asyncRoutes
