<template>
    <ul class="navbar-nav mr-auto">
        <li><router-link class="nav-link" :to="{ name: 'add' }">New Person</router-link></li>
        <li><router-link class="nav-link" :to="{ name: 'list' }">List the persons</router-link></li>
    </ul>
</template>

<script>
export default {

}
</script>