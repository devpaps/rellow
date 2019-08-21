<template>
  <div class="main">
    <Navbar v-on:scroll.native="handleScroll"></Navbar>
    <nuxt/>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default {
	components: {
		Navbar,
		Footer
	},
	methods: {
		handleScroll() {
			const navBar = document.querySelector(".navbar");
			let prevScrollpos = window.pageYOffset;

			let x = window.scrollY;
			let currentScrollpos = window.pageYOffset;
			if (prevScrollpos >= 130) {
				navBar.classList.add("fixed-nav");
			} else if (prevScrollpos <= 130 || x === 1) {
				navBar.classList.remove("fixed-nav");
			}
			prevScrollpos = currentScrollpos;
		}
	},
	created() {
		if (process.browser) {
			window.addEventListener("scroll", this.handleScroll);
		}
	},
	destroyed() {
		if (process.browser) {
			window.removeEventListener("scroll", this.handleScroll);
		}
	}
};
</script>


<style lang="sass">

\:root
  --headerColor: #2b3643

h1
  font-size: calc(32px + (110 - 40) * ((100vw - 300px) / (1600 - 300)))
  margin-bottom: calc(1em + (4.125 - 1) * ((100vw - 300px)/(1600 - 300)))
  line-height: calc(1.3rem + (1.5 - 1.2) * ((100vw - 300px)/(1600 - 300)))
  margin-top: 2.0625rem
  font-family: 'Playfair Display', serif
  color: var(--headerColor)

h2
  font-size: 2.625rem
  line-height: 4.125rem
  margin-top: 2.0625rem
  margin-bottom: 2.0625rem
  font-family: 'Playfair Display', serif
  color: var(--headerColor)

h3
  font-size: calc(22px + (26 - 22) * ((100vw - 300px) / (1600 - 300)))
  line-height: 2.0625rem
  margin-top: 2.0625rem
  margin-bottom: 0rem
  font-family: 'Playfair Display', serif
  color: var(--headerColor)

h4
  font-size: 1rem
  line-height: 2.0625rem
  margin-top: 2.0625rem
  margin-bottom: 0rem
  font-family: 'Playfair Display', serif
  color: var(--headerColor)

h5
  font-size: 1rem
  line-height: 2.0625rem
  margin-top: 2.0625rem
  margin-bottom: 0rem
  font-family: 'Playfair Display', serif
  color: var(--headerColor)

p
  margin-top: 1.0625rem
  margin-bottom: 2.0625rem
  // font-family: 'Lato', serif
  color: hsl(0,0%,29%)
  font-size: 1.1rem
  font-weight: 400

span
  font-family: 'Lato',serif
  font-weight: 700
  color: hsl(0,0%,29%)

.eyebrow
  /* background: linear-gradient(to bottom, hsla(196, 70%, 65%, 1) 0%, hsla(196, 70%, 65%, 1) 100%) */
  background: linear-gradient(to bottom, hsl(216, 49%, 67%) 0%, hsl(183, 100%, 86%) 100% )
  background-position: 0 95%
  background-repeat: repeat-x
  background-size: 4px 4px
  color: inherit
  transition: background-size 300ms
  &:hover
    background-size: 4px 50px

.button
  padding: 0 1.5rem
  border: 2px solid #545454
  font-size: 0.8rem
  font-weight: bold
  text-transform: uppercase
  transition: all 300ms ease
  background: transparent
  border-radius: 5px
  &:hover
    cursor: pointer
    color: #fff
    /* background: #000 */
    background: linear-gradient(to right, #83a4d4, #b6fbff)
    border: 2px solid #000
  @media screen and (max-width: 683px)
    font-size: 0.8rem
  @media screen and (max-width: 480px)
    font-size: 0.7rem

a
  color: #545454
  display: inline-block

a:hover
  text-decoration: none
  color: #000

html
  -ms-text-size-adjust: 100%
  -webkit-text-size-adjust: 100%
  -moz-osx-font-smoothing: grayscale
  -webkit-font-smoothing: antialiased

img
  width: 100%
  height: auto
  display: block

body
  line-height: 2.0625rem
  margin: 0 auto

  .wrapper
    background: #fff
    margin: 0 auto
    max-width: 1356px
    padding: 0 2rem
  .container
    margin: 8rem auto
  .full-width
    width: 90%
    max-width: 1600px
    padding-right: 15px
    padding-left: 15px
    margin-right: auto
    margin-left: auto

.page-enter-active, .page-leave-active
  opacity: 1
  transition: opacity .25s
  animation-duration: .3s
  animation-fill-mode: both

.page-enter-active
  animation-name: pageFadeInUp

.page-leave-active
  animation-name: pageFadeOutDown

.page-enter, .page-leave-to
  opacity: 0

@-webkit-keyframes pageFadeInUp
  0%
    opacity: 0
    transform: translate3d(0, 1.25%, 0)

  to
    opacity: 1
    transform: none


@-webkit-keyframes pageFadeOutDown
  0%
    opacity: 1

  to
    opacity: 0
    transform: translate3d(0, 1.25%, 0)

</style>
