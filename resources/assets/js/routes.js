import NewPerson from './components/NewPerson.vue';
import PersonsList from './components/PersonsList.vue';
import Person from './components/Person.vue';

export default [
    { path: '/', component: PersonsList , name: 'list'},
    { path: '/add', component: NewPerson, name: 'add' },
    { path: '/persons/:id', component: Person, name: 'person' },
]