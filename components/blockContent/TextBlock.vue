<template>
  <div>
    <div class="meta-author">
      <span>Skriven av </span>
      <div class="author">{{post._createdAt.substr(0, 10)}}</div>
      <div class="written">{{post.author}}</div>
    </div>
    <div class="meta-category">
      <nuxt-link to="">{{post.tags}}</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: Object,
      default: () => {
        return { meta: 'Unknown' }
      }
    }
  }
}
</script>

<style>

</style>
