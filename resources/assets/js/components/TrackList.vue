<template>
  <div class="card">
    <div class="card-header">The people that i will guide</div>
    <ul class="list-group">
      <li
        class="list-group-item d-flex justify-content-between align-items-center"
        v-for="person in persons"
        :key="person.id"
      >
        {{person.name}}
        <span class="badge badge-primary badge-pill">{{person.phone}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      persons: []
    };
  },
  methods: {
    async getPersons() {
      const response = await fetch("/api/trackers/");
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
