// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import TourDuLich from '../components/TourDuLich.vue'; // Đảm bảo đường dẫn đúng tới component Home

const routes = [
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
