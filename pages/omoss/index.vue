<template>
  <div class="container">
    <div class="header">
      <h1>Vad är Rellow?</h1>
    </div>
    <div class="about-container wrapper">
      <div class="about-content">
        <h2 class="about-content-title">Hej 👋🏻  <br /> Det är jag som är Lars.</h2>
        <div class="about-content-main">
          <p><strong>Rellow är startat av mig.</strong> Jag är en 35 årig webbutvecklare som bor i det skogstäta norra Norrland. Jag har gått en utbildning till Webbutvecklare på Högskolan Väst i Trollhättan. Utbildningen har gett mig många verktyg jag kan jobba efter. Men det som jag fastnade för var AngularJS. Jag älskade verkligen att man binda datan direkt i HTML filen. </p>
          
          <p>Jag har även jobbat med Wordpress och PHP, jag gillade det med, men jag kände att det inte var riktigt min "grej". Jag hittade då Vue.js, och har sedan dess jobbat med det hela tiden. Det är ett helt underbart ramverkt tycker jag, nu på senare tid så kör jag bara med ramverket Nuxt uppe på Vue.js. Jag säger bara 🤙🏻!</p>

          <p>Jag tror på bra kommunikation och utmärkt service, varför jag vill ge dig det bästa av båda. Om du letar efter något nytt eller saknar något på er hemsida så är du på rätt ställe. Jag strävar efter att vara moderna inom tekniken och innovativa och erbjuda våra kunder något de vill ha. Jag arbetar hårt för att skapa långvariga och meningsfulla relationer med er</p>
        </div>
      </div>
      <div class="imageMe" v-if="inStock">
        <img :src="image" :alt="altText">
        <em style="text-align: center; display: block; margin-top: 0.5em;">Jag i min fräna <a class="eyebrow" href="https://codepen.io/"> Codepen</a> keps.</em>
      </div>
    </div>
    <!-- <div class="contact-us-outer wrapper">
      <div class="contact-us-inner">
        <h2>Hör av dig till oss</h2>
        <a href="/kontakt"><span>👉 här</span></a>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: require('../../assets/images/me.jpg'),
      altText: 'Bild på mig',
      inStock: true
    }
  }
};
</script>

<style lang="sass" scoped>
.container
  .header
    height: 50vh
    background: url('~assets/images/funky-lines.png')
    overflow: hidden
    position: relative
    h1
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%,-50%)
      font-size: calc(22px + (90 - 22) * ((100vw - 300px) / (1600 - 300)))
      line-height: 1.3 
      font-family: 'Lato', serif
  .about-container
    display: flex
    margin-top: 8rem
    @media screen and (max-width: 945px)
      width: 100%
      display: grid
    .about-subtitle
      width: 33%
      p
        font-weight: 900
        color: #000
      .about-subtitle-line
        width: calc(100% - 37%)
        border: none
        margin: 0
        border-top: solid 1px #000
    .about-content
      width: calc(100% - 33%)
      @media screen and (max-width: 945px)
        width: 100%
        order: 2
  .contact-us-inner
    text-align: center
  .imageMe
    margin-left: 2em
    @media screen and (max-width: 945px)
      margin: 0
      order: 1
    img
      border-radius: 5px
      box-shadow: 0 4px 5px -2px rgba(0, 0, 0, .2), 0 7px 10px 1px rgba(0, 0, 0, .14), 0 2px 16px 1px rgba(0, 0, 0, .12)
</style>
