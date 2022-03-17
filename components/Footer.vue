<template>
    <section class="footer ">
     
<!--         <cookie-law
          theme="base"
          buttonText="Jag förstår"
          >
          <div slot="message">
            Den här webbplatsen använder cookies för att du ska få den bästa upplevelsen på vår hemsida. <nuxt-link class="cookie-link" to="/policy">Läs mer här</nuxt-link>
          </div>
        </cookie-law> -->
    

      <div class="footer-seperate">
        <div class="footer-text">
          <a href="/" class="logo-home-link">
            <img src="~/assets/images/rellow-full.svg" alt="Logo" class="logo-image-footer">
          </a>
          <p class="footer-text-small">Kontakta mig på <a class="link-dotted" href="mailto:info@rellow.se">info@rellow.se</a></p>
          <p class="footer-text-small">Rellow är en digital webbyrå som bygger ett värde åt våra kunders behov på nätet. Vi strävar efter att ligga i framkant inom de tekniska lösningar som finns, allt för att ni ska få en så bra upplevelse som möjligt. </p>
          <p><nuxt-link to="/policy" class="link-dotted">Integritetspolicy</nuxt-link></p>
        </div>
        <div class="footer-links">
          <nuxt-link title="Hem" class="nav-item link-dotted" exact to="/">Hem</nuxt-link>
          <nuxt-link title="Tjänster" class="nav-item link-dotted" to="/tjanster">Tjänster</nuxt-link>
          <nuxt-link title="Projekt" class="nav-item link-dotted" to="/projekt">Projekt</nuxt-link>
          <nuxt-link title="Om oss" class="nav-item link-dotted" to="/omoss">Om oss</nuxt-link>
          <!-- <nuxt-link title="Blogg" class="nav-item" to="/blogg">Blogg</nuxt-link> -->
          <nuxt-link title="Kontakt" class="nav-item link-dotted" to="/kontakt">Kontakt</nuxt-link>
        </div>
      </div>
      <p class="footer-copyright">&copy; {{ datum }} - Made with ☕️ by <nuxt-link title="Hem" class="nav-item" exact to="/">Rellow</nuxt-link> </p>
    </section>
</template>

<script>
//import CookieLaw from 'vue-cookie-law';
//import NoSSR from 'vue-no-ssr';
//import ClientOnly from 'vue-client-only'

export default {
  props: {
    message: {
    type: String,
    default: ''
    }
  },
	data() {
		return {
			datum: ""
		};
	},
	// En Hook, mounted och created, funktionen är till för att köra en funktion när allt har renederats ut på skärmen
	// Skulle kunna köra på MOUNTED hooken här, men efter som jag kör SSR så kommer jag inte åt MOUNTED, utan jag måste då köra på CREATED
	created: function() {
		this.getYear();
	},
	methods: {
		getYear() {
			let date = new Date();
			let year = date.getFullYear();
			this.datum = `${year}`;
		}
	},
  components: {

    }
  }

</script>

<style lang="sass" scoped>
.footer
  background: #141414
  margin-top: 8rem
  padding: 2rem
  position: relative
  .footer-copyright
    color: #f1f1f1
    font-size: 0.9em
    text-align: center
    a
      color: #f1f1f1
      &:hover
        color: lightblue
    @media screen and (max-width: 785px)
      margin-top: 3em
  .cookie-link
    color: #007bff
  .footer-seperate
    max-width: 1356px
    display: grid
    margin: auto
    grid-template-columns: repeat(2, 1fr)
    @media screen and (max-width: 785px)
      grid-template-columns: 1fr
  .footer-text
    .footer-text-small
      color: #f1f1f1
    .logo-image-footer
      width: 70px
      border-radius: 50%
      border: 2px solid #fff
  .footer-links
    margin-top: 6rem
    justify-self: flex-end
    @media screen and (max-width: 785px)
      justify-self: flex-start
      margin-top: 0
    @media screen and (max-width: 400px)
      margin: auto
    a
      margin-right: 1rem
      font-family: Lato
      font-weight: 700
      @media screen and (max-width: 400px)
        font-size: 0.8rem
        text-decoration: underline

.link-dotted
  border-bottom: dotted 1px #fff
  color: #fff
  &:hover
    color: lightblue
</style>
