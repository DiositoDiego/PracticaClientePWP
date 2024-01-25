<template>
  <div>
    <div>
      HOLAMUNDO
    </div>
    <b-input-group>
      <b-form-input
        v-model="name"
        placeholder="Nombre"
        @input="validateName(name)"
        :state="validatedName"
      ></b-form-input>

    </b-input-group>
    
    <b-input-group>

    </b-input-group>
    
    <b-input-group>

    </b-input-group>
  </div>
</template>

<script>
import Vue from "vue";
Vue.createApp({
  data() {
    return {
      name: '',
      lastname: '',
      surname: '',
      birthdate: '',
      email: '',
      phoneNumber: '',
      photo: {},
      //address
      street: '',
      streetNumber: '',
      city: '',
      postalCode: 0,

      validatedName: null,
      validatedLastName: null,
      validatedSurname: null,
      validatedAddress: null,
      validatedBirthdate: null,
      validatedEmail: null,
      validatedPhoneNumber: null,
      validatedPhoto: null,
      validatedStreet: null,
      validatedStreetNumber: null,
      validatedCity: null,
      validatedPostalCode: null,
    };
  },
  methods: {
    validateName(name){
      if (name.length < 3) {
        this.validatedName = false;
      } else {
        this.validatedName = true;
      }
    },
    validateLastName(lastname){
      if (lastname.length < 3) {
        this.validatedLastName = false;
      } else {
        this.validatedLastName = true;
      }
    },
    validateBirthdate(birthdate){
      if(true){

      }
    },
    validateEmail(email){

    },
    validatePhoneNumber(phoneNumber){

    },
    validatePhoto(photo){

    },
    validateStreet(street){

    },
    validateStreetNumber(streetNumber){

    },
    validateCity(city){

    },
    validatePostalCode(postalCode){

    },
  }
});
</script>

<style>

</style>