<template>
  <div>
    <div class="card">
      <div class="card-header">The people that i will guide</div>
      <ul class="list-group">
        <li
          class="list-group-item d-flex justify-content-between align-items-center"
          v-for="person in persons"
          :key="person.id">
          {{person.name}}
          <!-- <span class="badge badge-primary ">{{person.phone}}</span> -->
            <router-link :to="'/persons/'+person.id">
          <b-btn variant="primary">
              Show Person
          </b-btn>
            </router-link>
        </li>
      </ul>
    </div>

  <!-- the modal -->
  <b-modal ref="person" title="Edit person data">
    <div>
      <b-form-group id="exampleInputGroup1"
                    label="name:"
                    label-for="name">
        <b-form-input id="name"
                      type="email"
                      v-model="currentPerson.name"
                      required
                      placeholder="Enter name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="phone:"
                    label-for="phone">
        <b-form-input id="phone"
                      type="text"
                      v-model="currentPerson.phone"
                      required
                      placeholder="Enter phone">
        </b-form-input>
      </b-form-group>

      <b-button variant="outline-primary">الصلاة</b-button>
      <b-button variant="outline-primary">إيقاف التدخين</b-button>

    </div>
    <div slot="modal-footer">
      <b-btn variant="warning" @click="hideModal">
        Close
      </b-btn>
      <b-btn variant="primary" @click="updatePerson()">
        Update
      </b-btn>
    </div>
  </b-modal>
  </div>
</template>

<script>

export default {
  data() {
    return {
      persons: [],
      currentPerson: {},
    };
  },
  methods: {
    onSubmit() {
      console.log(this.currentPerson);
    },
    editPerson(person) {
      console.log('person: ', person);
      this.currentPerson = person;
      this.$refs.person.show();
    },
    updatePerson() {
      console.log("person updated in browser, will update him in db soon");
      this.$refs.person.hide();
    },
    hideModal() {
      this.$refs.person.hide();
    },
    async getPersons() {
      const response = await fetch("/api/trackers");
      this.persons = await response.json();
    }
  },
  mounted() {
    let vm = this;
    this.getPersons();
    this.$root.$on("personAdded", () => {
      console.log("event listened");
      vm.getPersons();
    });
  }
};
</script>

<style>
</style>
