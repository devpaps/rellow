<template>
  <div class="container">
    <div class="header">
      <div class="header-inner">
        <h1>Våra tjänster</h1>
        <h4>
          Vi kan erbjuda tjänster inom webbdesign, logotyper samt en ny design
          på din befintliga hemsida
        </h4>
      </div>
    </div>
    <div class="services wrapper">
      <div class="services-pilars">
        <div class="services-info">
          <h2 v-scroll-reveal.nomobile>
            Vi jobbar med React
            <img
              style="display: inline-block; width: 50px;"
              title="Vue.js"
              src="~assets/images/react-logo.svg"
              alt="Vue.js logga"
            />
          </h2>
          <p v-scroll-reveal.nomobile="{ delay: 200 }">
            Idag kan det vara kostsamt med en hemsida. Du ska betala för ett
            domännamn och ett webbhotell. Med JAMStack så blir din hemsida
            säkrare då det inte finns någon databas att för någon att attackera,
            hemsidan blir statisk och då även mycket snabbare. Och för oss
            utvecklare så är det en enklare miljö att jobba i, vilket är ett
            stort plus.
            <br />
            Wordpress är ett utmärkt val om du vill starta en webbshop eller
            enkel blogg. Det är även lätt att sköta det administrativa på en
            Wordpress-sida. Men har ni inte tid att göra det så sköter vi det
            er. Och för att hålla säkerheten uppe så kan vi även uppdatera eran
            Wordpress installation kontinuerligt. Allt för att ni ska få en
            säker och smidig hemsida.
          </p>
        </div>
        <div class="jam-services">
          <div class="jam-services-boxes">
            <h3 v-scroll-reveal.nomobile>
              Statisk generator - Next & Gatsby
            </h3>
            <p v-scroll-reveal.nomobile="{ delay: 200 }">
              Fördelarna är många men en sak är att en statiskt genrerad hemsida
              innehåller ingen databas som exempelvis Wordpress har. För varje
              klick på en länk så måste Wordpress hämta data från databasen, det
              tar tid. Alla plugins till Wordpress måste hela tiden uppdateras
              för att säkerheten ska vara på topp. Men med en statisk hemsida så
              blir den säkrare och snabbare på grund av att den inte behöver en
              databas.
            </p>
          </div>
        </div>
      </div>
      <div class="services-logos box">
        <div class="service-box">
          <img src="~/assets/images/pencils.svg" alt="Bild på två pennor" />
          <h1 v-scroll-reveal.nomobile>Logotyper</h1>
        </div>
        <div class="services-lead">
          <div v-scroll-reveal.nomobile="{ delay: 200 }" class="services-text">
            <h3>Att synas</h3>
            <p>
              Med en enkel och tydlig logotyp är igenkänningsfaktor hög. Därför
              är det vikigt att ha en logotyp tycker vi. Det är verksamhetens
              varumärke som ska kunna ge en tydlig bild av vad de sysslar med.
              En del logotyper kan även vara lite mer åt det kreativa hållet, de
              lämnar lite kvar åt fantasin. Det brukar vara ett kul sätt att
              göra en logotyp på.
            </p>
            <p>
              Det är inte fullt så enkelt att designa en logotyp från ett vitt
              papper. Men vi är en kreativ webbyrå som löser det mesta som eran
              verksamhet är i behov av.
            </p>
          </div>
        </div>
      </div>
      <div class="services-webbdesign box">
        <div class="service-box">
          <img src="~/assets/images/browser.svg" alt="Bild på datorskärm" />
          <h1 v-scroll-reveal.nomobile>Webbdesign</h1>
        </div>
        <div class="services-lead">
          <div v-scroll-reveal.nomobile="{ delay: 200 }" class="services-text">
            <h3>React och Next</h3>
            <p>
              Vi arbetar med en modern teknologi som är en fröjd att arbeta i
              för oss utvecklare. React är ett så kallat bibliotek. Next är ett
              ramverk, med det så kan vi göra era webbsida statisk eller
              dynamisk.
            </p>
          </div>
        </div>
      </div>
      <div class="services-upgrade box">
        <div class="service-box">
          <img src="~/assets/images/laptop.svg" alt="Bild på två laptop" />
          <h1 v-scroll-reveal.nomobile>Renovering</h1>
        </div>
        <div class="services-lead">
          <div v-scroll-reveal.nomobile="{ delay: 200 }" class="services-text">
            <h3>Ny teknik och fräsch design</h3>
            <p>
              Om ni har en modern design på eran hemsida visar ni att ni bryr er
              om erat varumäke på internet. Med hjälp av oss så kan vi hjälpa er
              att göra eran hemsida responsiv, alltså mobilanpassad. Om ni inte
              har en mobilanpassad hemsida så kommer sökmotorerna automatiskt
              "straffa" er genom att ge er en sämre plats på exempelvis Google
              om någon söker efter er.
            </p>
            <p>
              Upplevs er hemsida allmänt seg så kan vi se över vad problemet kan
              vara, alternativt kan vi bygga om den med hjälp av ny teknik som
              kommer optimera hemsidan.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>

.header
  position: relative
  height: 50vh
  // &:after
  //   content: 'Front-end geek'
  //   display: block
  //   font-size: 15rem
  //   position: absolute
  //   left: 200px
  //   height: 200px
  //   top: 0
  //   z-index: -10
  //   font-weight: bold
  //   font-family: Lato
  //   color: rgba(0,0,0, .1)
  .header-inner
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    width: 100%
    margin-left: auto
    margin-right: auto
    text-align: center
    padding: 0 2rem
    h1
      font-family: 'Lato', serif
    h4
      font-family: 'Lato', serif
      width: 50%
      display: block
      font-size: 1.2rem
      webkit-text-stroke: 1px red
      margin: 0 auto
      @media screen and (max-width: 768px)
        width: 100%

.services
  display: flex
  flex-direction: column
  .box
    margin-top: 5rem
    display: grid
    grid-template-columns: 1fr 75%
    @media screen and (max-width: 768px)
      display: block
      margin-top: 8rem
    .service-box
      display: flex
      align-self: center
      flex-direction: column
      justify-self: center
      img
        margin: 0 auto
        width: 75px
      h1
        font-size: calc(22px + (35 - 22) * ((100vw - 300px) / (1600 - 300)))
        line-height: 1.2
        @media screen and (max-width: 768px)
          text-align: center
    .services-lead
      display: flex
      @media screen and (max-width: 768px)
        z-index: 10
        width: 100%
    .services-text
      h3
        font-family: 'Lato', serif
        margin-bottom: calc(15px + (35 - 15) * ((100vw - 300px) / (1600 - 300)))
        font-size: calc(20px + (30 - 20) * ((100vw - 300px) / (1600 - 300)))
        font-weight: 900
      > p
        margin-bottom: 0
      .services-number
        font-size: 8rem
        font-weight: bold
        color: rgb(148, 148, 148)
        @media screen and (max-width: 768px)
          position: absolute
          z-index: 1
          opacity: 0.2
          font-size: 8rem
          left: 50%



.services-pilars
  margin-top: 5rem
  h1
    font-size: calc(32px + (75 - 32) * ((100vw - 300px) / (1600 - 300)))
    line-height: calc(2.3rem + 0.02308vw - 0.06923px)
    text-align: center
    span
      text-decoration: underline
      color: inherit
      font-weight: 900
  .services-info-lead
    margin-bottom: 5rem
    text-align: center
    > p
      font-weight: 900
      font-size: 1.3rem
  .services-info
    margin-bottom: 5rem
    p
      font-weight: 600
      width: 75%
      @media screen and (max-width: 768px)
        width: 100%
  .jam-services
    .jam-services-boxes
      margin-top: 3rem
      h3
        font-family: Lato

a
  &:hover
    color: inherit
.eyebrow
  background: linear-gradient(to bottom, hsla(196, 70%, 65%, 1) 0%, hsla(196, 70%, 65%, 1) 100%)
  background-position: 0 100%
  background-repeat: repeat-x
  background-size: 4px 4px
  color: inherit
  transition: background-size 300ms
  &:hover
    background-size: 4px 50px
</style>
