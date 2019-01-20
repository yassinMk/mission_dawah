require('./bootstrap');

window.Vue = require('vue');

let Tracker = require('./components/Tracker.vue'); 
let TrackList = require('./components/TrackList.vue'); 

const app = new Vue({
    el: '#app',
    components: {Tracker,TrackList}
});
