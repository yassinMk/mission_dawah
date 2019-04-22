<template>
    <div>
        <div class="d-flex justify-content-center">
            <h1>{{this.person.name}}</h1>
            <!-- <h1>محمد ولد حومتي</h1> -->
            <!-- <h1>person {{$route.params.id}} board</h1> -->
        </div>
            <hr>
        <div class="row">
            <div class="col-sm-3" v-for="list in person.lists" :key="list.name">
                <b-card no-body :header="list.name">
                    <div v-if="list.new" slot="header">
                        <b-form-input v-model="list.name" placeholder="Enter list name"></b-form-input>
                    </div>
                    <b-list-group flush v-for="task in list.tasks" :key="task.name">
                        <!-- <b-list-group-item href="#">التحبيب للصلاة</b-list-group-item>
                        <b-list-group-item href="#">تعليم الوضوء</b-list-group-item>
                        <b-list-group-item href="#">تعليم الصلاة</b-list-group-item> -->
                    </b-list-group>
                    <b-list-group flush>
                        <b-list-group-item href="#"><i class="fa fa-plus-square"></i> New task</b-list-group-item>
                    </b-list-group>

                </b-card>
            </div>
            <!-- <div class="col-sm-3">
                <b-card no-body header="Fasting">
                    <b-list-group flush>
                        <b-list-group-item href="#">التحبيب للصوم</b-list-group-item>
                        <b-list-group-item href="#">تعليم الصوم</b-list-group-item>
                    </b-list-group>
                    <b-list-group flush>
                        <b-list-group-item href="#"><i class="fa fa-plus-square"></i> New task</b-list-group-item>
                    </b-list-group>

                </b-card>
            </div> -->
            <div class="col-sm-2">
                <b-button variant="outline-primary" @click="newList"><i class="fa fa-plus-square"></i> New list</b-button>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            person: '',
        }
    },
    methods: {
        async getPerson() {
            const response = await fetch(`/api/persons/${this.$route.params.id}`);
            this.person = await response.json();
            console.log("this.person ", this.person);
            this.person.lists = [{
                name: 'Prayer',
                tasks : []
            }, {
                name: 'Fasting',
                tasks : []
            }]
        },
        newList() {
            this.person.lists.push({
                new: true,
                name: '',
                tasks: []
            })
            const response = await fetch.post(`/api/persons/${this.$route.params.id}`, {
                body: {
                    name: 'new list'
                }
            });

            this.$forceUpdate();
        }
    },
    mounted() {
        this.getPerson();
    }
}
</script>

<style>

</style>
