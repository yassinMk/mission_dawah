<template >
    <form action="/trackers" method="post">
        <input type="hidden" name="_token" :value="csrf">       
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" placeholder="name of the person you want to guide">
        </div>
        <div class="form-group">
            <label for="phone">Phone</label>
            <input type="text" class="form-control" id="phone" placeholder="phone of the person you want to guide">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>

<script>
    export default{
        data() {
            return {
                csrf: "",
            }
        },
        mounted() {
            this.csrf = window.token;
            console.log('this.csrf: ', this.csrf);
        }
    }
</script>

<style>

</style>
