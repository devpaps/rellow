<template>
  <div class="container">
    <Contact
      paketText="Lilla paketet"
      underText="Det här paketet är perfekt för dig som vill ha en hemsida som är enkel men som ändå förmedlar ditt budskap på ett bra sätt."
      value="lilla_valt"
      name="lilla[]"
    />
  </div>
</template>

<script>
import Contact from '@/components/Contact'
export default {
  components: {
    Contact
  }
}
</script>

<style lang="sass" scoped></style>
