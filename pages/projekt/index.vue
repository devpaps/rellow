<template>
  <section class="projects container">
    <div class="header">
      <div class="header-inner">
        <h1>Våra projekt</h1>
        <div></div>
        <h3>Vi strävar efter att förstå vad <em>ni</em> vill uppnå med hjälp av oss</h3>
      </div>
    </div>
    <div class="work wrapper">
      <CaseLeft
      caseTech_left="Design &amp; Utveckling"
      caseOwner_left="Tåsjö Rör &amp; Bygg AB"
      caseInfo_left="De vill nå ut till flera kunder för få en större marknad"
      id="tasjo" />

      <CaseRight
      caseTech_right="Logotyper, Hemsidor"
      caseOwner_right="Vi löser det mesta"
      caseInfo_right="Stärk upp erat varumärke med hjälp av oss på Rellow"
      id="exempel" 
      />
    </div>
  </section>
</template>

<script>
  import CaseLeft from '@/components/CaseLeft'
  import CaseRight from '@/components/CaseRight'

  export default {
    data() {
      return {
      }
    },
    components: {
      CaseLeft,
      CaseRight
    }
  };
</script>

<style scoped lang="sass">
.projects
  .header
    position: relative
    height: 50vh
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
        font-family: Lato
      div
        width: 100px
        height: 3px
        background: #000
        margin: 0 auto
      h3
        font-family: Lato
  .work
    margin-top: 8rem
    display: flex
    flex-wrap: wrap
  .work > a
    margin-top: 3rem
    a
      &:hover
        color: #545454




</style>
