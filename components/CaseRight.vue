<template>
  <div v-scroll-reveal.nomobile="{delay: 100}" class="case-right">
    <img class="case-img" v-scroll-reveal.nomobile="{delay: 200}" src="~/assets/images/banner-rellow.png" alt="">
    <div class="case-right-text">
      <p v-scroll-reveal.nomobile="{delay: 300}" class="case-tech">{{ caseTech_right }}</p>
      <p v-scroll-reveal.nomobile="{delay: 400}" class="case-owner">{{ caseOwner_right }}</p>
      <p v-scroll-reveal.nomobile="{delay: 500}" class="case-info"> {{ caseInfo_right }}</p>
      <a class="link-to-case button" href="/kontakt/">Maila oss
        <svg aria-hidden="true" data-prefix="far" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" class="svg-inline--fa fa-angle-right fa-w-6 fa-2x"><path fill="currentColor" d="M187.8 264.5L41 412.5c-4.7 4.7-12.3 4.7-17 0L4.2 392.7c-4.7-4.7-4.7-12.3 0-17L122.7 256 4.2 136.3c-4.7-4.7-4.7-12.3 0-17L24 99.5c4.7-4.7 12.3-4.7 17 0l146.8 148c4.7 4.7 4.7 12.3 0 17z" class=""></path></svg>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["caseTech_right", "caseOwner_right", "caseInfo_right", "id"]
  /* props: {
    caseTech_right: {
      type: String,,
      default: ''
    }
  } */
};
</script>

<style scoped lang="sass">
.case-right
  width: 100%
  margin: 5rem auto
  display: grid
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))
  position: relative
  z-index: 1
  &::after
    content: '02'
    display: block
    font-family: 'Alice', 'Playfair Display'
    font-size: 24rem
    font-weight: bold
    position: absolute
    margin-right: 15rem
    justify-self: center
    align-self: center
    z-index: -1
    color: rgb(238,238,238)
    @media screen and (max-width: 1019px)
      font-size: 20rem
    @media screen and (max-width: 778px)
      font-size: 15rem
      margin-right: 0
      margin-left: 8rem
    @media screen and (max-width: 578px)
      bottom: 120px
    @media screen and (max-width: 450px)
      font-size: 10rem
    @media screen and (max-width: 365px)
      margin-left: 4rem
  .case-img
    border-radius: 5px
    box-shadow: 0 4px 5px -2px rgba(0,0,0,.2), 0 7px 10px 1px rgba(0,0,0,.14), 0 2px 16px 1px rgba(0,0,0,.12)
  .case-right-text
    align-self: center
    margin-right: 5rem
    @media screen and (max-width: 778px)
      margin-left: 3rem
      margin-right: 0
    @media screen and (max-width: 578px)
      margin-left: 0
    .case-tech
      font-weight: bold
      color: #676468
      margin-bottom: 0
      letter-spacing: 3px
      @media screen and (max-width: 778px)
        letter-spacing: 2px
    .case-owner
      font-size: 2rem
      @media screen and (max-width: 778px)
        font-size: 1.5rem
        margin: 0
    .case-info
      font-size: 0.8rem
      font-weight: bold


  img
    order: 2
    border-radius: 5px
    @media screen and (max-width: 778px)
      order: inherit

.link-to-case
  &:hover .fa-angle-right
    transform: translateX(5px)
    @media screen and (max-width: 578px)
      transform: none
  .fa-angle-right
    margin-left: 5px
    vertical-align: middle
    transition: all 300ms ease
    display: inline-block
    width: 7px
    margin-bottom: 2px
</style>
