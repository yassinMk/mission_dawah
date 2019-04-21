require('./bootstrap');
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router';
import routes from './routes';
import App from './components/App.vue';
import navbar from './components/navbar.vue';
import VueSweetalert2 from 'vue-sweetalert2';
const options = {
    confirmButtonColor: '#41b882',
    cancelButtonColor: '#ff7674'
}
  
Vue.use(VueSweetalert2, options)
Vue.use(BootstrapVue);
Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: 'history'
});

new Vue({   
    el: '#app',
    router,
    components:{App,navbar}
});
