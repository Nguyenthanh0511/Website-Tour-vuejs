// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import TourDuLich from '../components/TourDuLich.vue'; // Đảm bảo đường dẫn đúng tới component Home
import HomeView from '../components/HomeView.vue';
import SignIn from '../components/Signin.vue';
import SignUp from '../components/Signup.vue';
import AddTour from '../components/AddTour.vue'
import EditTour from '../components/EditTour.vue'
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
  {
    path: '/SignIn',
    name: 'SignIn',
    component: SignIn,
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/TourDuLich/new',
    name: 'AddTour',
    component: AddTour,
  },
  {
    path: '/TourDuLich/Edit/:id',
    name: 'EditTour',
    component: EditTour,
  },
  // Thêm các route khác nếu cần
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
