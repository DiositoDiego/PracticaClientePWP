<template>
  <div style="width: 1000px">
    <div style="display: flex; align-content: space-between">
      <div style="margin-right: 50px">
        <b-col>
          <label>Nombre:</label>
          <b-form-input
            v-model="name"
            placeholder="Nombre"
            @input="validateName(name)"
            :state="validatedName"
          />
          <b-form-invalid-feedback> {{ nameError }} </b-form-invalid-feedback>
        </b-col>
        <b-col>
          <label>Apellido paterno</label>
          <b-form-input
            v-model="lastName"
            placeholder="Apellido paterno"
            @input="validateLastName(lastName)"
            :state="validatedLastName"
          />
          <b-form-invalid-feedback>
            {{ lastNameError }}
          </b-form-invalid-feedback>
        </b-col>
        <b-col>
          <label>Apellido materno</label>
          <b-form-input
            v-model="surname"
            placeholder="Apellido materno"
            @input="validateSurname(surname)"
            :state="validatedSurname"
          />
          <b-form-invalid-feedback>
            Apellido materno inválido
          </b-form-invalid-feedback>
        </b-col>
        <b-col>
          <label>Correo electrónico</label>
          <b-form-input
            v-model="email"
            placeholder="Correo electrónico"
            @input="validateEmail(email)"
            :state="validatedEmail"
          />
          <b-form-invalid-feedback>
            {{ emailError }}
          </b-form-invalid-feedback>
        </b-col>
        <b-col>
          <label>Número telefónico</label>
          <b-form-input
            v-model="phoneNumber"
            placeholder="Número telefónico"
            @input="validatePhoneNumber(phoneNumber)"
            :state="validatedPhoneNumber"
            type="number"
          />
          <b-form-invalid-feedback>
            {{ phoneNumberError }}
          </b-form-invalid-feedback>
        </b-col>
        <b-col>
          <label>Foto</label>
          <b-form-file
            v-model="photo"
            @input="validatePhoto(photo)"
            :state="validatedPhoto"
          />
          <b-form-invalid-feedback>
            La foto pesa demasiado
          </b-form-invalid-feedback>
        </b-col>
      </div>
      <div style="margin-left: 50px">
        <h5>Dirección</h5>
        <b-col>
          <label>Código postal</label>
          <b-form-input
            v-model="postalCode"
            placeholder="Código postal"
            @input="validatePostalCode(postalCode)"
            :state="validatedPostalCode"
            type="number"
          />
          <b-form-invalid-feedback>
            {{ postalCodeError }}
          </b-form-invalid-feedback>
        </b-col>
        <b-col>
          <label>Calle</label>
          <b-form-input
            v-model="street"
            placeholder="Calle"
            @input="validateStreet(street)"
            :state="validatedStreet"
          />
          <b-form-invalid-feedback> {{ streetError }} </b-form-invalid-feedback>
        </b-col>
        <b-col>
          <label>Número de calle</label>
          <b-form-input
            v-model="streetNumber"
            placeholder="Número de calle"
            @input="validateStreetNumber(streetNumber)"
            :state="validatedStreetNumber"
          />
          <b-form-invalid-feedback>
            Número de calle inválido
          </b-form-invalid-feedback>
        </b-col>
        <b-col>
          <label>Ciudad</label>
          <b-form-input
            v-model="city"
            placeholder="Ciudad"
            @input="validateCity(city)"
            :state="validatedCity"
          />
          <b-form-invalid-feedback> {{ cityError }} </b-form-invalid-feedback>
        </b-col>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      name: "",
      lastName: "",
      surname: "",
      birthdate: "",
      email: "",
      phoneNumber: "",
      photo: [],
      //address
      street: "",
      streetNumber: "",
      city: "",
      postalCode: "",

      nameError: "",
      lastNameError: "",
      surnameError: "",
      birthdateError: "",
      emailError: "",
      phoneNumberError: "",
      photoError: "",
      //address
      streetError: "",
      streetNumberError: "",
      cityError: "",
      postalCodeError: "",

      emailRegex: /([A-z0-9]+@[A-z]{1,}\.[A-z]{1,})(\.[A-z]{1,})?/,

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
    validateName(name) {
      if (name.length > 0 && name.length <= 2) {
        this.validatedName = false;
        this.nameError = "Nombre inválido";
      } else if (name.length === 0) {
        this.validatedName = false;
        this.nameError = "El nombre no puede estar vacío";
      } else {
        this.validatedName = true;
      }
    },
    validateLastName(lastname) {
      if (lastname.length > 0 && lastname.length <= 3) {
        this.validatedLastName = false;
        this.lastNameError = "Apellido paterno inválido";
      } else if (lastname.length === 0) {
        this.validatedLastName = false;
        this.lastNameError = "El apellido paterno no puede estar vacío";
      } else {
        this.validatedLastName = true;
      }
    },
    validateSurname(surname) {
      if (surname.length > 0 && surname.length < 3) {
        this.validatedSurname = false;
        this.surnameError = "Apellido materno inválido";
      } else {
        this.validatedSurname = true;
      }
    },
    validateBirthdate(birthdate) {
      if (true) {
      }
    },
    validateEmail(email) {
      if (email.length === 0) {
        this.validatedEmail = false;
        this.emailError = "El correo electrónico no puede estar vacío";
      } else if (!this.emailRegex.test(email)) {
        this.validatedEmail = false;
        this.emailError = "El correo electrónico no cumple con el formato";
      } else {
        this.validatedEmail = true;
      }
    },
    validatePhoneNumber(phoneNumber) {
      if (phoneNumber < 0){
        this.validatedPhoneNumber = false;
        this.phoneNumberError = "El número telefónico no puede ser negativo";
      } else if ((phoneNumber+"").length < 10 && (phoneNumber+"").length > 0) {
        this.validatedPhoneNumber = false;
        this.phoneNumberError = "El número telefónico es muy corto";
      } else if ((phoneNumber+"").length === 0) {
        this.validatedPhoneNumber = false;
        this.phoneNumberError = "El número telefónico no puede estar vacío";
      } else if ((phoneNumber+"").length > 10) {
        this.validatedPhoneNumber = false;
        this.phoneNumberError = "El número telefónico es muy largo";
      } else {
        this.validatedPhoneNumber = true;
      }
    },
    validatePhoto(photo) {},
    validateStreet(street) {
      if (street.length === 0) {
        this.validatedStreet = false;
        this.streetError = "La calle no puede estar vacía";
      } else {
        this.validatedStreet = true;
      }
    },
    validateStreetNumber(streetNumber) {
        this.validatedStreetNumber = true;
    },
    validateCity(city) {
      if (city.length === 0) {
        this.validatedCity = false;
        this.cityError = "La ciudad no puede estar vacía";
      } else {
        this.validatedCity = true;
      }
    },
    validatePostalCode(postalCode) {
      if (postalCode < 0) {
        this.validatedPostalCode = false;
        this.postalCodeError = "El código postal no puede ser negativo";
      } else if ((postalCode+"").length < 5 && (postalCode+"").length > 0) {
        this.validatedPostalCode = false;
        this.postalCodeError = "El código postal es muy corto";
      } else if ((postalCode+"").length === 0) {
        this.validatedPostalCode = false;
        this.postalCodeError = "El código postal no puede estar vacío";
      } else if ((postalCode+"").length > 5) {
        this.validatedPostalCode = false;
        this.postalCodeError = "El código postal es muy largo";
      } else {
        this.validatedPostalCode = true;
      }
    },
  },
});
</script>

<style></style>
