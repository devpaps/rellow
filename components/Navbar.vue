<template>
  <div class="nav">
    <nav class="navbar" role="navigation">
      <div class="logo">
        <a href="/" class="logo-home-link">
          <h2 class="logo-text">Rellow</h2>
          <img src="~/assets/images/rellow-full.svg" alt="Logo" class="logo-image">
        </a>
      </div>
      <div class="navbar-menu">
        <div @click="show" class="nav-handle-open">
          <span class="open-handle"></span>
        </div>
        <div class="navigation">
          <div @click="hide" class="nav-handle-close">
            <span class="close-handle">Stäng</span>
          </div>
          <div class="nav-links">
            <ul>
              <li><nuxt-link title="Hem" @click.native="remove_nav" class="nav-item" exact to="/">Hem</nuxt-link></li>
              <li><nuxt-link title="Tjänster" @click.native="remove_nav" class="nav-item" to="/tjanster">Tjänster</nuxt-link></li>
              <li><nuxt-link title="Projekt" @click.native="remove_nav" class="nav-item" to="/projekt">Projekt</nuxt-link></li>
              <li><nuxt-link title="Om Rellow" @click.native="remove_nav" class="nav-item" to="/omoss">Om Rellow</nuxt-link></li>
              <!-- <li><nuxt-link title="Blogg" @click.native="remove_nav" class="nav-item" to="/blogg">Blogg</nuxt-link></li> -->
              <li><nuxt-link title="Kontakt" @click.native="remove_nav" class="nav-item" to="/kontakt">Kontakt</nuxt-link></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
	data: () => {
		return {};
  },
  mounted() {
    },
	methods: {
    show() {
      const navigation = document.querySelector(".navigation");
			const navItem = document.querySelector(".nav-item");
			navigation.classList.add("show");
      navItem.classList.add("open");
      TweenMax.staggerFrom(".nav-item", 0.5, {y:"-=20px", opacity:0, delay:0.3, ease:Power1.easeOut}, 0.1);
		},
		hide() {
			const navigation = document.querySelector(".navigation");
			const navItem = document.querySelector(".nav-item");
			navigation.classList.remove("show");
      navItem.classList.remove("open");
		},
		remove_nav() {
			const navigation = document.querySelector(".navigation");
			navigation.classList.remove("show");
		}
	},
	created() {
		if (process.browser) {
			window.addEventListener("show", this.handleScroll);
		}
	},
	destroyed() {
		if (process.browser) {
			window.removeEventListener("show", this.handleScroll);
		}
	}
};
</script>

<style lang="sass" scoped>

body
  position: relative
.nav
  position: absolute
  top: 0
  left: 0
  right: 0
  display: block
  margin-left: auto
  margin-right: auto
  width: 100%
  z-index: 10
  background: inherit
  position: fixed
.navbar
  display: flex
  align-items: center
  min-height: 130px
  width: 100%
  position: relative
  transition: all 300ms ease
  padding: 0 2rem
  .logo
    display: block
    margin-right: auto
    @media screen and (max-width: 485px)
      width: 80px
    .logo-home-link
      display: flex
      align-items: center
      @media screen and (max-width: 485px)
        align-items: flex-start
      .logo-image
        width: 70px
        margin-left: 10px
        @media screen and (max-width: 768px)
          width: 45px
        @media screen and (max-width: 485px)
          width: 65px
      .logo-text
        margin: auto 0
        color: #212529
        letter-spacing: 3px
        font-family: Arciform
        @media screen and (max-width: 768px)
          font-size: 1.8rem
        @media screen and (max-width: 485px)
          display: none
  .navbar-menu
    align-self: center
  .nav-handle-open
    cursor: pointer
    width: 30px
  .open-handle
    display: inline-block
    width: 28px
    height: 4px
    border-radius: 5px
    background: #303133
    position: relative
    &::before
      content: ''
      position: absolute
      left: 0
      top: 7px
      display: inline-block
      width: 19px
      height: 4px
      border-radius: 5px
      background: #303133
    &::after
      content: ''
      position: absolute
      left: 0
      top: -7px
      display: inline-block
      width: 23px
      height: 4px
      border-radius: 5px
      background: #303133
  .nav-handle-close
    position: absolute
    right: 2%
    top: 5%
    color: #f1f1f1
    cursor: pointer
    .close-handle
      font-size: 1.5rem
      display: block
      padding: 10px
      color: #fff
  .navigation
    z-index: 10
    position: fixed
    top: 0
    left: 0
    right: 0
    height: 100%
    background: #131313
    display: flex
    flex-direction: column
    align-items: center
    will-change: transform
    justify-content: center
    transform: translateX(100%)
    transition: all ease 300ms
    .nav-links
      ul
        padding: 0
        margin: 0
        position: relative
        top: -20px
        li
          list-style: none
          transform: translate3d(0,calc(100% + 15px),0)
          transition: all .5s
          a
            display: block
            padding: 1rem
            text-align: center
            color: #f1f1f1
            font-family: 'Lato'
            font-size: 2rem
        .nav-item
          position: relative
  .show
    transform: translateX(0%)
.fixed-nav
  min-height: 85px
  transition: all 300ms ease
  box-shadow: 0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28)
  background: #fff
  &.nav
    padding: 0
</style>
