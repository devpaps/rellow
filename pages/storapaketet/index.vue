<template>
  <div class="container">
    <Contact
      paketText="Stora paketet"
      underText="Ett konkurrenskraftigt paket som innehåller i princip allt som du kommer behöva i för att leverera ett slagkraftigt resultat för att nå fler besökare till din hemsida."
      stor="true"
      value="stora_valt"
      name="stora[]"
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
