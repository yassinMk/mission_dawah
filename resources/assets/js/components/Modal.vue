<template>
    <div class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">
                    <slot name="title">
                        Modal title
                    </slot>
                </h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <slot name="body">
                    <p>Modal body text goes here.</p>
                </slot>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary">Save changes</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="close">Close</button>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'modal',
    methods: {
        close() {
            this.$emit('close');
        }
    }
}
</script>

<style>

</style>
