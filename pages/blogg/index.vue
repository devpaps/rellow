<template>
  <main>
    <section class="hero">
      <div class="overlay">
        <h1>Artiklar</h1>
        <h3>Allt om kod till naturen</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab.</p>
      </div>
    </section>
    <section class="article wrapper">
      <div class="article-main-text">
        <div v-for="post in posts" :key="post._id">
          <article>
            <div class="entry-meta">
              <header>
                <h1>{{post.title}}</h1>
              </header>
              <div class="meta-author">
                <span>Skriven av {{post.names}} den </span>
                <span>{{post._createdAt.substr(0, 10)}}</span>
                <span>Taggar</span>
                <div v-for="tag in post.tags" :key="tag.id" class="tag">
                  <nuxt-link class="tag-item" to="">{{tag}}</nuxt-link>
                </div>
              </div>
              <div v-if="post.category" class="category">
                <p>Kategori {{post.category}}</p>
              </div>
              <p>{{post.body[0].children[0].text}}</p>
            </div>
            <div class="entry-content">
              <nuxt-link :to="'/blogg/'+ post.slug.current">
                <img :src="urlFor(post.mainImage).ignoreImageParams().width(1600).url()" alt="">
              </nuxt-link>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>
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
  "names": author->name,
  "category": category->title,
  "tags": tags[]->tags,
  ...
  }
`;

  export default {
    data() {
      return {
      }
    },
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
.hero
  /* background: url('~assets/images/chill.svg') bottom no-repeat */
  text-align: left
  width: 100%
  height: auto
  position: relative
  overflow: hidden
  border-radius: 0 0 85% 85% / 30%
  .overlay
    width: 100%
    height: 100%
    padding: 10rem 50px 50px  
    color: #FFF
    /* background-image: linear-gradient( 135deg, #9f05ff69 10%, #fd5e086b 100%) */
.article-main-text
  margin-top: 5rem
article
  display: grid
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr))
  margin-top: 5rem
  h1
    font-family: 'Lato', serif
    font-size: 3rem
  .tag
    display: inline-block
    margin-left: 10px
</style>
