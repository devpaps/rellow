<template>
  <section class="article container">
    <div class="article-main-text">
      <div v-for="post in posts" :key="post._id">
        <article>
          <header>
            <h1>{{post.title}}</h1>
          </header>
          <div class="entry-meta">
            <div class="meta-author">
              <span>Skriven av </span>
              <div class="author">{{post._createdAt.substr(0, 10)}}</div>
              <div class="written">{{post.author}}</div>
            </div>
            <div class="meta-category">
              <nuxt-link to="">{{post.tags}}}</nuxt-link>
            </div>
          </div>
          <div class="entry-content">
            <nuxt-link :to="'/blogg/'+ post.slug.current">
              <img :src="urlFor(post.mainImage).ignoreImageParams().width(720).url()" alt="">
            </nuxt-link>
            <p>{{post.body[0].children[0].text}}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import sanity from "~/sanityClient";
import imageUrlBuilder from "@sanity/image-url";
import groq from 'groq';

const builder = imageUrlBuilder(sanity);

const query = groq`*[_type == "post"] {
  title,
  "id": _id,
  slug,
  ...
  }
`;

  export default {
    async asyncData({ params }) {
    return await sanity
      .fetch(query, params)
      .then((data, params) => ({ posts: data }))
      .catch(e => console.log(e));
  },
   methods: {
      urlFor(source) {
      return builder.image(source);
    }
  }
  }
</script>

<style lang="sass" scoped>
.article
  box-shadow: 0 30px 50px 0 rgba(1,1,1,.15)
  max-width: 1170px
  margin: 10rem auto 10rem
  width: 95%
  padding: 16rem 0 15rem
  h1
    font-family: 'Lato', serif
    font-size: 3rem
</style>
