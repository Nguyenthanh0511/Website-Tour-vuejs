import { createApp } from 'vue';
import './index.css';
import App from './App.vue';
import router from './router/index'
import VueSweetalert2 from 'vue-sweetalert2';
// Import the CSS file for sweetalert2
import 'sweetalert2/dist/sweetalert2.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { MotionPlugin } from '@vueuse/motion'
import store from "../store";
const app = createApp(App)

app.use(MotionPlugin)

app.use(router)

app.use(store);

app.use(VueSweetalert2);

app.mount('#app');