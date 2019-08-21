<template>
  <div class="blogg container">
    <div v-for="post in posts" :key="post._id">
      <img :src="urlFor(post.mainImage).ignoreImageParams().url()" alt="">
      <h1>{{post.title}}</h1>
      <h5>Skapad den: {{post._createdAt.substr(0, 10)}}</h5>
      <div v-if="post.body[1]">
        <img class="content-image" :src="urlFor(post.body[1].asset._ref).ignoreImageParams().width(300).url()" alt="">
      </div>
      <p>{{post.body[0].children[0].text}}</p>
    </div>
    




  </div>
</template>

<script>

import sanity from "~/sanityClient";
import imageUrlBuilder from "@sanity/image-url";
import groq from 'groq';
import BlockContent from 'sanity-blocks-vue-component'

const builder = imageUrlBuilder(sanity);

const query = groq`*[_type == "post" && slug.current == $id] {
  ...
  }
`;

export default {
  async asyncData({ params }) {
  return await sanity
    .fetch(query, params)
    .then((data, params) => ({posts: data}))
  },
  methods: {
      urlFor(source) {
      return builder.image(source);
    }
  }
}
</script>

<style scoped lang="sass">
img
  display: block
  height: 100vh
  background-size: cover
.content-image
  display: block
  width: auto
  height: auto
</style>
