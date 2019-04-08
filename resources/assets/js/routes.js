import Tracker from './components/Tracker.vue';
import TrackList from './components/TrackList.vue';
const Foo = {template:'<h1>Foo</h1>'};
const Bar = {template:'<h1>Bar</h1>'};

export default [
    { path: '/', component: TrackList , name: 'list'},
    { path: '/add', component: Tracker, name: 'add' },
]