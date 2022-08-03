<style lang="scss">

</style>

<template>
    <div class="page">
        <form>
            <div class="grid-x grid-padding-x">
                <div class="large-12 medium-12 small-12 cell">
                    <label>Name
                        <input type="text" placeholder="Store Name" v-model="name">
                    </label>
                    <span class="validation" v-show="!validations.name.is_valid">{{ validations.name.text }}</span>
                </div>

                <div class="large-12 medium-12 small-12 cell">
                    <label>City
                        <input type="text" placeholder="Store City" v-model="city">
                    </label>
                    <span class="validation" v-show="!validations.city.is_valid">{{ validations.city.text }}</span>
                </div>

                <div class="large-12 medium-12 small-12 cell">
                    <label>Area
                        <input type="text" placeholder="Store Area" v-model="area">
                    </label>
                    <span class="validation" v-show="!validations.area.is_valid">{{ validations.area.text }}</span>
                </div>
                
                <div class="large-12 medium-12 small-12 cell">
                    <label>Address
                        <input type="text" placeholder="Store Address" v-model="address">
                    </label>
                    <span class="validation" v-show="!validations.address.is_valid">{{ validations.address.text }}</span>
                </div>
                
                <div class="large-12 medium-12 small-12 cell">
                    <label>Postal Code
                        <input type="text" placeholder="Postal Code" v-model="postal">
                    </label>
                    <span class="validation" v-show="!validations.postal.is_valid">{{ validations.postal.text }}</span>
                </div>
                
                <div class="large-12 medium-12 small-12 cell">
                    <a class="button" v-on:click="submitNewCafe()">Submit</a>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: '',
                city: '',
                area: '',
                address: '',
                postal: '',
                validations: {
                    name: {
                        is_valid: true,
                        text: ''
                    },
                    city: {
                        is_valid: true,
                        text: ''
                    },
                    area: {
                        is_valid: true,
                        text: ''
                    },
                    address: {
                        is_valid: true,
                        text: ''
                    },
                    postal: {
                        is_valid: true,
                        text: ''
                    }
                }
            }
        },
        methods: {
            validateNewCafe: function () {
                let validNewCafeForm = true;

                // make sure that name is not empty
                if( this.name.trim() === '' ){
                    validNewCafeForm = false;
                    this.validations.name.is_valid = false;
                    this.validations.name.text = 'Please enter the Name of Store';
                }else{
                    this.validations.name.is_valid = true;
                    this.validations.name.text = '';
                }

                // make sure that city is not empty
                if( this.city.trim() === '' ){
                    validNewCafeForm = false;
                    this.validations.city.is_valid = false;
                    this.validations.city.text = 'Please enter the City of the Store';
                }else{
                    this.validations.city.is_valid = true;
                    this.validations.city.text = '';
                }

                // make sure that area is not empty
                if( this.area.trim() === '' ){
                    validNewCafeForm = false;
                    this.validations.area.is_valid = false;
                    this.validations.area.text = 'Please enter the Area of Store';
                }else{
                    this.validations.area.is_valid = true;
                    this.validations.area.text = '';
                }

                // make sure that address is not empty
                if( this.address.trim() === '' ){
                    validNewCafeForm = false;
                    this.validations.address.is_valid = false;
                    this.validations.address.text = 'Please enter the Address of Store';
                }else{
                    this.validations.address.is_valid = true;
                    this.validations.address.text = '';
                }

                // make sure that postal is not empty and valid
                if( this.postal.trim() === '' || !this.postal.match(/(^\d{6}$)/) ){
                    validNewCafeForm = false;
                    this.validations.postal.is_valid = false;
                    this.validations.postal.text = 'Please enter the correct Postal Code of the Store';
                }else{
                    this.validations.postal.is_valid = true;
                    this.validations.postal.text = '';
                }

                return validNewCafeForm;
            },   
            submitNewCafe: function () {
                if (this.validateNewCafe()) {
                    this.$store.dispatch('addCafe', {
                        name: this.name,
                        city: this.city,
                        area: this.area,
                        address: this.address,
                        postal: this.postal
                    }); 
                }
            },
        }
    }
</script>