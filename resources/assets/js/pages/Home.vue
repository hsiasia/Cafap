<style lang="scss">
  
</style>

<template>
    <div id="home">
        <span v-show="cafesLoadStatus == 1">Loading</span>
        <span v-show="cafesLoadStatus == 2">Cafes loaded successfully!</span>
        <span v-show="cafesLoadStatus == 3">Cafes loaded unsuccessfully!</span>
    </div>
    <ul>
        <li v-for="cafe in cafes">{{ cafe.name }}</li>
    </ul>
</template>

<script>
    export default {
    created() {
        // Vuex $store dispatch loadCafes to call API, load coffee shop, save to cafes 
        this.$store.dispatch( 'loadCafes' );
    },
    // vuex getters would import computed data to vue component
    computed: {
        // get status
        cafesLoadStatus(){
            return this.$store.getters.getCafesLoadStatus;
        },
        // get coffee
        cafes(){
            return this.$store.getters.getCafes;
        }
    }
    }
</script>