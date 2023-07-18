import Vue from 'vue';
import VueRouter from 'vue-router';
import {routes} from './routes';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import Swal from 'sweetalert2';


Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes
});

Vue.use(VueSweetalert2);

require('./bootstrap');

window.Vue = require('vue').default;

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('navbar-component', require('./components/NavbarComponent.vue').default);
Vue.component('sidebar-component', require('./components/SidebarComponent.vue').default);
Vue.component('footer-component', require('./components/FooterComponent.vue').default);





const app = new Vue({
    el: '#app',
    router
});
