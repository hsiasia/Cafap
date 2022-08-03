<style lang="scss">

</style>

<template>
    <!-- layout file -->
    <div id="app-layout">
        <navigation></navigation>
        <!-- render children component -->
        <router-view></router-view>
    </div>
</template>

<script>
    import Navigation from '../components/global/Navigation.vue';

    export default {
        components: {
            Navigation
        },
        created(){
            this.$store.dispatch( 'loadCafes' );
            // this.$store.dispatch( 'loadUser' );
        }
    }
</script>