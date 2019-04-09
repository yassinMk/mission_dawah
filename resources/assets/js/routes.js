import Tracker from './components/Tracker.vue';
import TrackList from './components/TrackList.vue';
import Person from './components/Person.vue';

export default [
    { path: '/', component: TrackList , name: 'list'},
    { path: '/add', component: Tracker, name: 'add' },
    { path: '/persons/:id', component: Person, name: 'person' },
]