<template>
  <section class="cases">
    <h1>Projektdetaljer</h1>
    <p>Här nedan kommer det var bilder och text om just det projektet. sdsd</p>
    <p>Router: {{ $route.params.id }}</p>
    <p>{{members}}</p>
    <h3>Här är index.vue</h3>

  </section>
</template>

<script>
  export default {
    computed: {
      members() {
        return this.$store.state.members;
      }
    }
  }
</script>

<style scoped lang="sass">
.cases h1
  font-family: 'Lato', serif
</style>
