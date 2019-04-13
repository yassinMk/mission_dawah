<template>
    <div>
        <div class="d-flex justify-content-center">
            <h1>محمد ولد حومتي</h1>
            <!-- <h1>person {{$route.params.id}} board</h1> -->
        </div>
        <div class="row">
            <div class="col-sm-3">
                <b-card no-body header="Prayer">
                    <b-list-group flush>
                        <b-list-group-item href="#">التحبيب للصلاة</b-list-group-item>
                        <b-list-group-item href="#">تعليم الوضوء</b-list-group-item>
                        <b-list-group-item href="#">تعليم الصلاة</b-list-group-item>
                    </b-list-group>
                    <b-list-group flush>
                        <b-list-group-item href="#"><i class="fa fa-plus-square"></i> New task</b-list-group-item>
                    </b-list-group>

                </b-card>
            </div>
            <div class="col-sm-3">
                <b-card no-body header="Fasting">
                    <b-list-group flush>
                        <b-list-group-item href="#">التحبيب للصوم</b-list-group-item>
                        <b-list-group-item href="#">تعليم الصوم</b-list-group-item>
                    </b-list-group>
                    <b-list-group flush>
                        <b-list-group-item href="#"><i class="fa fa-plus-square"></i> New task</b-list-group-item>
                    </b-list-group>

                </b-card>
            </div>
            <div class="col-sm-2">
                <b-button variant="outline-primary"><i class="fa fa-plus-square"></i> New list</b-button>
            </div>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
