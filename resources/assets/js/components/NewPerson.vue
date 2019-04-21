<template >
  <div class="card">
    <div class="card-header">New person</div>

    <div class="card-body">
      <form action="/api/persons" method="post" @submit="submit">
        <input type="hidden" name="_token" :value="csrf">
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            name="name"
            v-model="person.name"
            placeholder="name of the person you want to guide"
          >
        </div>
        <div class="form-group">
          <label for="phone">Phone</label>
          <input
            type="text"
            class="form-control"
            id="phone"
            name="phone"
            v-model="person.phone"
            placeholder="phone of the person you want to guide"
          >
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      csrf: "",
      person: {}
    };
  },
  methods: {
      submit(e) {
        e.preventDefault();
        console.log('this.person: ', this.person);
        axios.post('/api/persons',this.person)
        .then(res=>{
            console.log('res: ', res);
            this.$root.$emit('personAdded');
            this.person = {};
            this.$swal({
              type: 'success',
              title: "Person added with success"
            });
        });
      }
  },
  mounted() {
    this.csrf = window.token;
    console.log("this.csrf: ", this.csrf);
  }
};
</script>

<style>
</style>
