<template>
  <div class="container">
    <h1>{{paketText}}</h1>
    <h3>{{underText}}</h3>

    <div class="content wrapper">
      <form
        name="contact-form"
        action="/tack"
        autocomplete="off"
        netlify-honeypot="bot-field"
        method="POST"
        netlify
        @submit="validateBeforeSubmit"
      >
        <div class="input-field">
          <label class="form-label" for="name">Ditt namn:</label>
          <input
            v-validate="'required|alpha_spaces'"
            class="form-field inputs"
            name="namn"
            placeholder="För- &amp; efternamn"
            onfocus="this.placeholder = ''"
            onblur="this.placeholder = 'För- &amp; efternamn'"
            required
            v-model="namn"
            :class="{'input': true, 'is-danger': errors.has('namn') }"
          >
          <span v-show="errors.has('namn')" class="error">{{ errors.first('namn') }}</span>
          <input type="hidden" name="form-name" value="contact-form">
        </div>

        <div class="input-field">
          <label class="form-label" for="email">Din email:</label>
          <input
            type="email"
            required
            v-validate="'required|email'"
            class="form-field inputs"
            name="email"
            placeholder="namn@foretag.se"
            onfocus="this.placeholder = ''"
            onblur="this.placeholder = 'namn@foretag.se'"
            v-model="email"
            :class="{'input': true, 'is-danger': errors.has('email') }"
          >
          <span v-show="errors.has('email')" class="error">{{ errors.first('email') }}</span>
        </div>

        <div class="select-package hidden">
          <p>Välj vilket paket du önskar - <em>Valfritt</em></p>
          <div class="package-field">
            <input type="checkbox" id="checkbox1" name="checkboxes">
            <label for="checkbox1">Liten</label>
          </div>

          <div class="package-field">
            <input type="checkbox" id="checkbox2" name="checkboxes" checked>
            <label for="checkbox2">Mellan</label>
          </div>

          <div class="package-field">
            <input type="checkbox" id="checkbox3" name="checkboxes">
            <label for="checkbox3">Stor</label>
          </div>
        </div>

        <input type="checkbox" hidden="true" name="form-name" value="Mellan paketet">
        <div class="input-textarea">
          <label class="form-label" for="message">Meddelande:</label>
          <textarea
            required
            class="form-field inputs"
            name="meddelande"
            placeholder="Ditt meddelande..."
            onfocus="this.placeholder = ''"
            onblur="this.placeholder = 'Ditt meddelande...'"
            v-model="meddelande"
            v-validate="'required|min:5'"
            :class="{'input': true, 'is-danger': errors.has('meddelande') }"
          ></textarea>
          <span v-show="errors.has('meddelande')" class="error">{{ errors.first('meddelande') }}</span>
        </div>

        <div class="gdpr">
          <div class="gdpr-checkbox">
            <input type="checkbox" id="GDPR" v-validate="'required'" value="checked" name="GDPR">
            <label v-show="errors.has('GDPR')" class="error" for="GDPR"> Godkänn hanteringen av din personliga data.</label>
            <label v-if="!errors.has('GDPR')" for="GDPR">Godkänn hanteringen av din personliga data.</label>
          </div>
          <p>Ni kan läsa mer om vår policy och vår hantering av persondata <nuxt-link to="/policy" class="gdpr-link eyebrow">här</nuxt-link></p>
          <p>Du måste godkänna <nuxt-link class="gdpr-link eyebrow" to="/policy">hantering av persondata</nuxt-link> för att kunna skicka ditt meddelande.</p>

        </div>

        <div class="form-button">
          <input class="button" type="submit" value="Skicka meddelande">
        </div>

      </form>
    </div>
  </div>
</template>

<script>
import vuex from "vuex"
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";



export default {
  props: ['paketText', 'underText'],
  data: () => {
    return {

    }
  },
  methods: {
    validateBeforeSubmit(e) {

      this.$validator.validate().then(result => {
        console.log(result);
        if (!result) {
          alert("Ange rätt uppgifter i formuläret");
          e.preventDefault();
        } else {
          console.log("Skickat");
          this.$router.push({
            name: "tack",
            path: "/tack"
          });
          return true;
        }
      });
    }
  },
  computed: {
    meddelande: {
      get() {
        return this.$store.state.meddelande;
      },
      set(val) {
        this.$store.commit("update_meddelande", val);
      }
    },
    email: {
      get() {
        return this.$store.state.email;
      },
      set(val) {
        this.$store.commit("update_email", val);
      }
    },
    namn: {
      get() {
        return this.$store.state.namn;
      },
      set(val) {
        this.$store.commit("update_namn", val);
      }
    }
  }
};
</script>

<style lang="sass" scoped>
.container
  margin-top: 15rem
  h1
    text-align: center
    margin: 15rem 0 2rem
    font-family: 'Lato'
  h3
    text-align: center
    font-family: 'Lato'
    margin: 5rem auto 10rem
    line-height: 1.7
    width: 80%
    color: #585858
.content
  form
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    width: 70%
    margin: auto
    border: 10px solid #E4EFFF
    padding: 2rem
    @media screen and (max-width: 768px)
      width: 100%
    @media screen and (max-width: 767px)
      padding: 0
      border: none
    .hidden
      display: none
    .input-field
      position: relative
      width: calc((100% - 30px) / 2)
      margin-bottom: 65px
      &:nth-child(1)
        margin-bottom: 35px
      @media screen and (max-width: 768px)
        width: 100%
      label
        color: #999
      input
        border-top: none
        border-left: none
        border-right: none
        border-bottom: 2px solid #d9d9d9
        background: transparent
        display: block
        outline: none
        touch-action: manipulation
        font-size: 1.1rem
        font-weight: bold
        width: 100%
    .error
      color: red
      .name
        position: relative
        top: 50%
        left: auto
        text-align: left
        transform: translateY(-50%)
    .input-textarea
      border-bottom: 2px solid #d9d9d9
      position: relative
      width: 100%
      margin-bottom: 2rem
      label
        color: #999
      textarea
        width: 100%
        min-height: 100px
        line-height: 1.2
        font-size: 1.1rem
        font-weight: bold
        border: none
        outline: none
    .form-button
      width: 100%
      margin: 3rem 0 0
      .animate
        position: absolute
        display: block
        width: 100%
        height: 100%
        top: 0
        left: 0
        pointer-events: none
        &::before
          content: ""
          display: block
          position: absolute
          bottom: -2px
          left: 0
          width: 0px
          height: 2px
          transition: all 0.4s
          background: #ff4b5a
    select
      margin-bottom: 35px
      font-size: 16px
      padding: 0 10px
      border: 1px solid #ccc
      height: auto
      font-weight: bold
      color: #666
      &::-ms-expand
        display: none
    p
      margin: 0
    .select-package
      margin: 0 0 2rem 0
      .package-field
        display: inline-block
        label
          &:hover
            cursor: pointer
          &:nth-child(1n)
            margin-right: 1rem
          &:nth-child(2n)
            margin-right: 1rem
          &:nth-child(3n)
            margin-right: 1rem
  .gdpr
    p
      font-style: italic
      &:nth-child(2n)
        margin-bottom: 0
      &:nth-child(1n)
        margin-top: 0

    .gdpr-checkbox
      display: flex
      align-items: baseline
      label
        margin-left: 8px
        font-weight: bold
.hide
  display: none

input[type=checkbox]
  display: inline-block
  height: 16px
  width: 16px
  overflow: hidden
  margin-top: -4px
  vertical-align: middle
  -webkit-appearance: none
  -moz-appearance: none
  background-color: transparent
  background-repeat: no-repeat
  background-position: 50% 50%
  border: 1px solid #ccc
  &:hover
    cursor: pointer
  &:checked
    background-color: #1e87f0
    border-color: transparent
    background-image: url('data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2214%22%20height%3D%2211%22%20viewBox%3D%220%200%2014%2011%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23fff%22%20points%3D%2212%201%205%207.5%202%205%201%205.5%205%2010%2013%201.5%22%20%2F%3E%0A%3C%2Fsvg%3E%0A')
  &:checked + label
    background-image: url('data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2214%22%20height%3D%2211%22%20viewBox%3D%220%200%2014%2011%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23fff%22%20points%3D%2212%201%205%207.5%202%205%201%205.5%205%2010%2013%201.5%22%20%2F%3E%0A%3C%2Fsvg%3E%0A')
</style>
