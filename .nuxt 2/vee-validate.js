import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'

import sv from 'vee-validate/dist/locale/sv'

Validator.localize('sv', sv)

Vue.use(VeeValidate, {})
