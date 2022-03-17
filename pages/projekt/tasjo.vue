<template>
  <div class="container">
    <div class="header">
      <div class="header-inner">
        <h1>Tåsjö Rör &amp; Bygg AB</h1>
        <h4>En helt ny webbplats för att nå ut till flera kunder</h4>
      </div>
    </div>
    <div class="case wrapper">
      <div class="case-image"><img src="~/assets/images/iPhoneMockup.jpg" alt="Bild på Tåsjö Rör &amp; Bygg:s webbplats"></div>
      <div class="case-details">
        <h2>Om projektet</h2>
        <p>Tåsjö Rör hörde av sig till oss för att förbättra deras kundkrets. Dem skulle öppna en ny gren inom företaget och ville då satsa på att synas på webben. <br> Hemsidan skulle vara väldigt enkelt designad med lätt navigering till de olika grenarna inom företaget. Det skulle även finnas med en beräkningskalkyl för att beräkna kostnaden vid ett fjärrvärmeläckage. </p>
        <ul>
          <li> <i class="fas fa-mobile-alt small-icons"></i> Responsiv</li>
          <li> <i class="fab fa-wordpress small-icons"></i> Wordpress</li>
          <li> <i class="fas fa-envelope small-icons"></i> E-mail</li>
          <li> <i class="fas fa-calculator small-icons"></i> Beräknings formulär</li>
        </ul>
        &nbsp;
        <h3>Detaljer</h3>
        <br>
        <div class="case-small-details" v-on:scroll.native="handleScroll">
          <h5>Kund:</h5>
          <span><i class="far fa-address-card"></i> Tåsjö Rör &amp; Bygg AB</span>
          <h5>Datum:</h5>
          <span><i class="far fa-calendar-alt"></i> Juni, 2018</span>
          <h5>Hemsida:</h5>
          <span><i class="fas fa-link"></i>  <a href="https://tasjorb.se" target="_blank"> https://tasjorb.se</a></span>
          <h5>Uppgift:</h5>
          <span><i class="fas fa-briefcase"></i> Design, Utveckling</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	data: () => {
		return {
			/* hello: 'asd' */
		};
	},
	methods: {
		handleScroll() {
			const details = document.querySelector(".case-details");

			console.log(window.scrollY);
			let scrollY = window.scrollY;

			if (window.innerWidth >= 768) {
				details.style.transform = "translate(0px, -" + scrollY / 70 + "%";
			}
		}
	},
	mounted() {},
	created() {
		if (process.client) {
			window.addEventListener("scroll", this.handleScroll);
		}
	},
	destroyed() {
		if (process.client) {
			window.removeEventListener("scroll", this.handleScroll);
		}
	}
};
</script>

<style lang="sass" scoped>
.container
  margin: 8rem auto 0
  .header
    position: relative
    height: 50vh
    text-align: center
    .header-inner
      position: relative
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
  h1
    font-family: 'Lato', serif
    font-size: calc(32px + (80 - 32) * ((100vw - 500px) / (1600 - 500)))
    margin-top: calc(9rem + (150.125 - 9) * ((100vw - 300px)/(2000 - 300)))
  h2
    margin-top: calc(2rem + (3 - 2) * ((100vw - 300px)/(2000 - 300)))
    &::after
      content: ''
      display: block
      width: 220px
      height: 25px
      /* background: #67c3e4 */
      background: linear-gradient(to right, #83a4d4, #b6fbff)
      position: absolute
      left: 152px
      top: 71px
      z-index: -1
      @media screen and (max-width: 786px)
        top: 136px
        left: 130px
        width: 180px
      @media screen and (max-width: 678px)
        top: 71px
        left: 76px
        width: 220px
  h4
    margin-bottom: calc(5em + (4.125 - 1) * ((100vw - 300px)/(1600 - 300)))
    font-family: Lato
    color: #666
  .case
    display: grid
    grid-template-columns: repeat( auto-fit, minmax(300px, 1fr))
    margin-top: 8rem
    min-height: 100vh
    .case-image
      z-index: 2
      @media screen and (max-width: 678px)
        z-index: 0
        max-height: unset
      img
        border-radius: 5px
        box-shadow: 0 4px 5px -2px rgba(0,0,0,.2), 0 7px 10px 1px rgba(0,0,0,.14), 0 2px 16px 1px rgba(0,0,0,.12)
    .case-details
      padding: 0 2rem 2rem 6rem
      background: #F8F4F3
      position: relative
      margin: 0 0 0 -2rem
      top: -150px
      z-index: 1
      will-change: transform
      @media screen and (max-width: 678px)
        top: 0
        margin: 3rem 0
        padding: 1rem 1rem 3rem
        z-index: 0
      h3
        font-size: calc(22px + (26 - 22) * ((100vw - 300px) / (1600 - 300)))
      p
        line-height: 2.2rem
        &:nth-child(1)
          margin-top: 0
          @media screen and (max-width: 678px)
            margin-top: 3rem
      h5
        font-family: Lato
      a
        display: inline
        border-bottom-style: dotted
        border-width: 1px
      ul
        column-count: 2
        padding: 0
        margin: 0
        @media screen and (max-width: 480px)
          column-count: 1
        li
          list-style: none
          @media screen and (max-width: 480px)
            margin: 1rem 0
          .small-icons
            margin-right: 0.3rem

    .case-small-details
      column-count: 2
      background: #67c3e4
      padding: 1rem
      @media screen and (max-width: 480px)
        column-count: 1
      h5
        color: #fff
        &:nth-child(1)
          margin-top: 0
      span, a
        color: #272727
</style>
