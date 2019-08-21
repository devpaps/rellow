import Vue from 'vue';
import VeeValidate, { Validator }  from 'vee-validate';
import sv from 'vee-validate/dist/locale/sv';

Vue.use(VeeValidate, {
  inject: false
})

const dictonary = {
  custom: {
    namn: {
      required: 'Ange ett giltligt namn utan siffror'
    },
    email: {
      required: 'Ange en giltig e-postadress'
    },
    meddelande: {
      required: 'Du måste ha något du vill skriva?'
    },
    GDPR: {
      required: 'Rött'
    }
  }
}

// adds and sets the validator locale
Validator.localize('sv', dictonary)