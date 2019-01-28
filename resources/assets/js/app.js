require('./bootstrap');
import Vue from 'vue';
import Tracker from './components/Tracker.vue';
import TrackList from './components/TrackList.vue';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);


new Vue({   
    el: '#app',
    components: {Tracker,TrackList}
});
