import { createApp } from 'vue'
import App from './App.vue'
import VueCookie from 'vue3-cookies'
import VueClickAway from "vue3-click-away";
import VueSweetalert2 from 'vue-sweetalert2';
import router from './router'
import "../public/static/css/style.css"
import 'sweetalert2/dist/sweetalert2.min.css';


const app = createApp(App).use(VueClickAway).use(VueCookie).use(router).use(VueSweetalert2).mount('#app')
app
// router.beforeEach((to, from, next) => {
//     const isLogin = app.$cookies.isKey('ID');
//     console.log();
//     if (isLogin) {
//         next();
//     } else {
//         if (to.path !== '/login')
//             next('/login');
//         else
//             next();
//     }
// });