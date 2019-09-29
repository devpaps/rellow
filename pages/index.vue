<template>
  <section main>
    <div class="hero">
      <div class="hero-container" v-on:scroll.native="handleScroll">
        <div class="hero-image">
          <img src="~/assets/images/header-test2.png" alt="Bild på en hero">
        </div>
        <div class="hero-image-text">
          <h1 class="hero-text-header">Vi skapar.</h1>
          <h3
            class="hero-text-lead"
          >Rellow är en digital webbyrå som har ett starkt fokus på att ge kunden en kvalitativ lösning.</h3>
        </div>
      </div>
    </div>

    <section class="customer-lead">
      <div class="features">
        <div v-scroll-reveal.nomobile class="left">
          <div class="left-text">
            <h2>Det här är vi</h2>
            <h3>Vi jobbar ständigt på att ligga i framkant inom den senaste tekniken, allt för att ni som kunder ska få en bra och snabb webbplats.</h3>
          </div>
        </div>

        <div class="rigth">
          <div v-scroll-reveal.nomobile>
            <h3>Logotyper</h3>
            <p>En logga är det första som kännetecknar erat företag, det som ska göra er synbar för alla. Det ska förespråka er och erat budskap som företag. Vi vill att alla som ska äga en snygg och estetisk logga. Genom att gå igenom exempelvis vad eran verksamhet sysslar med eller vad ni vill att eran logotyp ska leverera för känsla, så kan vi snabbt börja skissa på loggan.</p>
          </div>
          <div v-scroll-reveal.nomobile="{delay: 100}">
            <h3>Webbdesign</h3>
            <p>
              Det mest huvudsakliga vi sysslar med, vi levererar högkvalitativa hemsidor till er baserade efter vad ni behöver. Vi använder oss av JAMStack. Det är utmärkt sätt att göra hemsidor. Läs mera om det under
              <nuxt-link to="/tjanster" title="Tjänster" class="eyebrow">Tjänster</nuxt-link>
            </p>
          </div>
          <div v-scroll-reveal.nomobile="{delay: 200}">
            <h3>Modernisering</h3>
            <p>Har ni redan en hemsida som ni skulle vilja få uppfräschad och mer modern, hör då av dig till oss. Vi kommer tillsammans gå igenom vad ni har för mål med hemsidan. Och sedan designar vi den utefter dem.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="project wrapper">
      <div v-scroll-reveal.nomobile="{delay: 100}" class="projects">
        <div class="image">
          <nuxt-link to="/projekt/tasjo">
            <img src="~/assets/images/iPhoneMockup2.jpg" alt="Bild på ett projekt">
          </nuxt-link>
        </div>
      </div>

      <div v-scroll-reveal.nomobile="{delay: 200}" class="projects">
        <div class="image">
          <a href="/kontakt">
            <img src="~/assets/images/banner-rellow.png" alt="Bild på en tänd lampa">
          </a>
        </div>
      </div>

      <div v-scroll-reveal.nomobile class="project-text">
        <h1 v-scroll-reveal.nomobile="{delay: 200}" class="project-text-header">Projekt</h1>
        <nuxt-link class="button project-text-button" to="/projekt">Visa fler</nuxt-link>
      </div>
    </section>

    <section class="how-we-work">
      <div class="how-we-work-text full-width">
        <div v-scroll-reveal.nomobile class="how-we-work-left">
            <h2 v-scroll-reveal.nomobile="{delay: 200}" class="how-we-work-lead">Hur jobbar vi? <span><img style="display: inline; vertical-align: baseline; margin-left: 2px;" src="~/assets/images/coffee-cup.svg" alt="Bild på en kaffekopp"></span></h2>
          <p
            v-scroll-reveal.nomobile="{delay: 300}">Vi försöker både vara kreativa och tekniska i våra lösningar som ni kommer med till oss, och för att göra det så enkelt som möjligt så kommer ni få svara på några frågor som jag skicka till er. Sedan när vi sätter oss ned antigen på en kopp kaffe eller via ett samtal på Skype så kommer vi börja med att titta på vad ni har för förutsättningar och vilka era önskemål är som ni angett i formuläret. Därefter kommer vi fram till den bästa lösningen.</p>
        </div>
        <img src="~/assets/images/hur-vi-jobbar-v2.jpg" alt="Bild på en dator">
      </div>
    </section>

    <section class="gold wrapper">
      <div class="list">
        <div class="row">
          <div class="gold-lead">
            <h2 v-scroll-reveal.nomobile>Prispaket</h2>
            <p
              v-scroll-reveal.nomobile="{delay: 300}"
            >Vi erbjuder förmånliga paketlösningar som ska passa just för erat behov.</p>
          </div>
        </div>

        <div class="paket">
          <div v-scroll-reveal.nomobile="{delay: 200}" class="column one">
            <div class="box-lead">
              <h3>Liten</h3>
              <!-- <p>Underhåll: Gratis</p> -->
            </div>
            <div class="box">
              <img src="~/assets/images/box.svg" alt="Bild på låda">
            </div>
            <div class="box-text">
              <p>Om du behöver en snabb lösning</p>
            </div>
            <div class="box-list">
              <ul class="fa-ul">
                <li class="icon-check">
                  <strong>Undersidor:</strong> Upp till 4 st
                </li>
                <li class="icon-check nope">
                  <strong>Design:</strong> Unik
                </li>
                <li class="icon-check">
                  <strong>Design:</strong> Mall
                </li>
                <li class="icon-check nope">
                  <strong>Seo:</strong> Enklare sökmotoroptimering
                </li>
                <li class="icon-check">
                  <strong>Support:</strong> Via e-post (3 månader)
                </li>
                <li class="icon-check">Kontaktuppgifter</li>
              </ul>
            </div>
            <nuxt-link to="/lillapaketet" class="linkPaket">
              <div class="pris">
                <div>
                  <span>Från 9 000 kr</span> <em>exkl moms</em>
                </div>
              </div>
            </nuxt-link>
          </div>

          <div v-scroll-reveal.nomobile="{delay: 300}" class="column two">
            <div class="box-lead">
              <h3>Mellan</h3>
              <!-- <p>Underhåll: 600kr/mån</p> -->
            </div>
            <div class="box">
              <img src="~/assets/images/trolley.svg" alt="Bild på låda">
            </div>
            <div class="box-text">
              <p>För dig som behöver det lilla extra</p>
            </div>
            <div class="box-list">
              <ul class="fa-ul">
                <li class="icon-check">
                  <strong>Undersidor:</strong> Upp till 7 st
                </li>
                <li class="icon-check">
                  <strong>Design:</strong> Unik
                </li>
                <li class="icon-check">
                  <strong>Seo:</strong> Enklare sökmotoroptimering
                </li>
                <li class="icon-check">
                  <strong>Support:</strong> Via e-post (6 månader)
                </li>
                <li class="icon-check">Kontaktformulär</li>
              </ul>
            </div>
            <nuxt-link to="/mellanpaketet" class="linkPaket">
              <div class="pris">
                <div>
                  <span>Från 12 000 kr</span> <em>exkl moms</em>
                </div>
              </div>
            </nuxt-link>
          </div>

          <div v-scroll-reveal.nomobile="{delay: 400}" class="column three">
            <div class="box-lead">
              <h3>Stor</h3>
              <!-- <p>Underhåll: 800kr/mån</p> -->
            </div>
            <div class="box">
              <img src="~/assets/images/package.svg" alt="Bild på låda">
            </div>
            <div class="box-text">
              <p>Offert</p>
            </div>
            <div class="box-list">
              <ul class="fa-ul">
                <li class="icon-check">
                  <strong>Undersidor:</strong> Över 7 st
                </li>
                <li class="icon-check">
                  <strong>Design:</strong> Unik
                </li>
                <li class="icon-check">
                  <strong>Support:</strong> 6 månader
                </li>
                <li class="icon-check">
                  <strong>Seo:</strong> Avancerad sökmotoroptimering
                </li>
                <li class="icon-check">
                  <strong>Support:</strong> Via e-post (12 månader)
                </li>
                <li class="icon-check">Kontaktformulär</li>
              </ul>
            </div>
            <nuxt-link to="storapaketet" class="linkPaket">
              <div class="pris">
                <div>
                  <span>Offert</span>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>


  </section>
</template>

<script>
export default {
  methods: {
    handleScroll() {
      const heroContainer = document.querySelector(".hero-container");
      const heroImageText = document.querySelector(".hero-image-text");

      let scrollY = window.scrollY;

      if (window.innerWidth >= 768) {
        heroContainer.style.transform = "translate(0px, " + scrollY / 5 + "%";
        heroImageText.style.transform =
          "translate(0px, -" + scrollY / 1.9 + "%";
      }
    }
  },
  mounted() {
    TweenMax.to(".hero-image", 1, { right: "-=60px", ease: Power1.easeOut });
    TweenMax.to(".hero-image", 1.5, {
      opacity: 1,
      delay: 0.3,
      ease: Back.easeOut
    });
    TweenMax.to(".hero-text-header", 1.5, { scaleY: 1, height: "65px" });
    TweenMax.to(".hero-image-text", 1.5, {
      opacity: 1,
      y: 0,
      delay: 0.3,
      ease: Back.easeOut.config(1.7)
    });
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
.linkPaket
  display: block

.hero
  position: relative
  /* background: linear-gradient(to left, #ffa17f, #6aa3ad) */
  /* background: #83a4d4 */
  /* background: linear-gradient(to right, #83a4d4, #b6fbff) */
  background: rgb(234,234,234)
  background: -moz-linear-gradient(180deg, rgba(234,234,234,1) 0%, rgba(255,255,255,1) 100%)
  background: -webkit-linear-gradient(180deg, rgba(234,234,234,1) 0%, rgba(255,255,255,1) 100%)
  background: linear-gradient(180deg, rgba(234,234,234,1) 0%, rgba(255,255,255,1) 100%)
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#eaeaea",endColorstr="#ffffff",GradientType=1)

  overflow: hidden
  .hero-container
    display: flex
    height: 100vh
    will-change: transform
    @media screen and (max-width: 820px)
      flex-direction: column
      justify-content: center
    .hero-image
      position: relative
      right: 65px
      opacity: 0
      img
        height: 100%
        object-fit: cover
    .hero-image-text
      align-self: center
      text-align: center
      margin: 0 2rem
      width: 100%
      opacity: 0
      @media screen and (max-width: 820px)
        width: 100%
        padding: 0 2rem
        margin: 0 auto
      .hero-text-header
        font-weight: 900
        font-family: 'Lato'
        margin-bottom: 4rem
        line-height: 1
        @media screen and (max-width: 820px)
          margin-bottom: 2rem
      .hero-text-lead
        font-family: 'Lato'



    // CUSTOMER

.customer-lead
  margin: 3rem auto
  max-width: 1356px
  padding: 0 2rem
  .features
    display: grid
    /* 295px */
    grid-template-columns: repeat(auto-fit, minmax(345px, 1fr))
    grid-gap: 2rem
    @media screen and (max-width: 767px)
      grid-template-columns: repeat(auto-fit, minmax(295px, 1fr))
    @media screen and (max-width: 320px)
      grid-template-columns: repeat(auto-fit, minmax(258px, 1fr))
    .rigth
      display: grid
      h3
        /* &::after
          content: ''
          width: 65px
          height: 4px
          background: linear-gradient(to right, #83a4d4, #b6fbff)
          display: block
          margin-top: 1rem */
      div
        padding: 0 1rem
        &:nth-child(1)
          grid-column: 1 / 2
        &:nth-child(2)
          grid-column: 2 / 2
        &:nth-child(3)
          grid-column: 1 / 3
        @media screen and (max-width: 640px)
          padding: 0
          &:nth-child(1)
            grid-column: 1 / 1
          &:nth-child(2)
            grid-column: 1 / 1
          &:nth-child(3)
            grid-column: 1 / 1
      p
        color: #676468
    .left
      align-self: center
      .left-text
        h2
          &::after
            content: ''
            display: block
            width: 220px
            height: 25px
            background: linear-gradient(to right, #83a4d4, #b6fbff)
            position: absolute
            left: 32px
            top: 71px
            z-index: -1
        h3
          line-height: 1.7
          font-family: 'Lato', serif

    // PROJECT

.project
  margin-top: 8rem!important
  padding: 1.5rem 2rem
  display: grid
  grid-template-columns: repeat(auto-fit, minmax(295px, 1fr))
  grid-gap: 1rem
  position: relative
  .projects
    &:hover
      pointer: cursor
    .image
      opacity: 1
      transition: all 300ms ease
      margin: 0
      position: relative
      &:hover
        transform: opacity 300ms ease
        opacity: 0.5
      img
        border-radius: 5px
        box-shadow: 0 4px 5px -2px rgba(0, 0, 0, .2), 0 7px 10px 1px rgba(0, 0, 0, .14), 0 2px 16px 1px rgba(0, 0, 0, .12)
    a
      display: block
  .project-text
    @media screen and (max-width: 973px)
      grid-row: 1 / 1
  .project-text-header
    position: absolute
    @media screen and (max-width: 683px)
      position: relative
    &::after
      content: 'Med våra klienter'
      font-size: 12.8px
      font-size: 0.9rem
      position: absolute
      top: 35px
      right: -175px
      width: 120px
      transform-origin: 0 0
      transform: rotate(90deg)
      @media screen and (max-width: 768px)
        transform: rotate(0deg)
        top: 3rem
        right: 0
        left: 0
  .project-text-button
    position: absolute
    top: 210px
    right: 55px
    @media screen and (max-width: 973px)
      right: unset
      top: 67%
    @media screen and (max-width: 800px)
      top: 100px
    @media screen and (max-width: 683px)
      position: relative
      margin: 2rem 0 1rem
      padding: 0 0.5rem
      top: 0px

    // HOW_WE_WORK

.how-we-work
  background: #141516
  .how-we-work-text
    padding: 3rem 0
    margin-top: 8rem
    display: grid
    grid-gap: 3rem
    grid-template-columns: repeat(auto-fit, minmax(325px, 1fr))
    .how-we-work-left
      div
        display: flex
      img
        width: 40px
        margin-left: 20px
      .how-we-work-lead
        color: #fff
        position: relative
        z-index: 0
        @media screen and (max-width: 768px)
          order: 2
      p
        color: #fff
    img
      border-radius: 5px
      box-shadow: 0 4px 5px -2px rgba(0, 0, 0, .2), 0 7px 10px 1px rgba(0, 0, 0, .14), 0 2px 16px 1px rgba(0, 0, 0, .12)


    // SAVE_TIME

.gold
  .list
    margin-top: 8rem
  .gold-lead
    margin-bottom: 6rem
    text-align: center
  .paket
    display: flex
    text-align: center
    @media screen and (max-width: 976px)
      display: block
    .column
      width: 100%
      border-radius: 5px
      box-shadow: 0 4px 5px -2px rgba(0, 0, 0, .2), 0 7px 10px 1px rgba(0, 0, 0, .14), 0 2px 16px 1px rgba(0, 0, 0, .12)
      background: #fff
      @media screen and (max-width: 976px)
        margin: 5rem auto
      &:nth-child(2)
        margin: -25px
        z-index: 3
        @media screen and (max-width: 976px)
          margin: 0
      &:nth-child(1)
        z-index: 1
      &:nth-child(3)
        z-index: 2
      .box-lead
        padding: 1rem 0
        background: hsl(214, 33%, 96%)
        h3
          margin-top: 0
          font-family: 'Lato'
          font-size: calc(25px + (26 - 25) * ((100vw - 300px) / (1600 - 300)))
          color: hsl(213, 39%, 33%)
        p
          margin: 0
          color: hsl(0,0%,37%)
          font-weight: bold
          font-size: 0.9rem

      .box
        > img
          width: 100px
          margin: auto
          padding: 2rem 0
      .box-text
        font-weight: bold
      .box-list
        text-align: left
        margin: auto
        width: 70%
        @supports (display: grid)
          width: max-content
        padding-bottom: 2rem
        ul
          padding: 0
          .icon-check
            list-style: none
            &::before
              content: ''
              background-image: url('~assets/images/check-new.svg')
              width: 20px
              height: 20px
              margin-left: -25px
              vertical-align: sub
              margin-right: 10px
              display: inline-block
          .nope
            text-decoration: line-through
      .pris
        margin: 0 3rem 3rem
        div
          background: hsl(216, 100%, 82%)
          padding: 0.5rem
          border-radius: 5px
          word-break: break-word
          span
            font-size: 1.1rem
            font-weight: bold
            color: #000
        @media screen and (max-width: 976px)
          padding: 0 3rem 3rem
.grid
  display: grid
  grid-template-columns: 1fr 1fr 1fr 1fr
  align-content: end
  align-items: center
  justify-content: stretch
  .div-block-10
    grid-row-start: span 2

    // FOOTER
.underline
  font-weight: bold

</style>
