// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import TourDuLich from '../components/TourDuLich.vue'; // Đảm bảo đường dẫn đúng tới component Home
import HomeView from '../components/HomeView.vue';
const routes = [
  {
    path: '/Home',
    name: 'HomeView',
    component: HomeView,
  },
  {
    path:'/',
    redirect:'/Home'
  },
  {
    path: '/TourDuLich',
    name: 'TourDuLich',
    component: TourDuLich,
  },
  // Thêm các route khác nếu cần
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
