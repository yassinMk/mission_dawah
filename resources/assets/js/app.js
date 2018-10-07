require('./bootstrap');

window.Vue = require('vue');

let Tracker = require('./components/Tracker.vue'); 

const app = new Vue({
    el: '#app',
    components: {Tracker}
});
