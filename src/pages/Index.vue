<template>
  <Layout>
    <div class="content">
      <div class="columns">
        <!-- <div class="">
          <g-image src="../assets/img/ricky.jpeg" class="avatar" alt="Ricky Januari" />
          
        </div> -->
        <div class="column text-center">
          <h1 class="title is-2">Hello <br>I’m Ricky Januari.</h1>
          <vue-typed-js :strings="['Front-end Developer', 'Wordpress Developer']">
            <h3 class="title"><span class="typing"></span> <br>based in Bandung, Indonesia</h3>
          </vue-typed-js>
            
          <h4
            class="intro"
          >Helping start-ups, small businesses, and agencies achieve high quality websites and exceptional user experience</h4>
          
          <!-- <p class="subscribe">Subscribe to get my weekly newsletter and latest articles.</p>
          <convertkit uid="e6035d0111" script="https://f.convertkit.com/e6035d0111/99c16f05bd.js" /> -->
        </div>
        
      </div>
    </div>
    <!-- <h2 class="title is-3">Recent Blog Posts</h2>
    <div class="posts">
      <div v-for="post in $page.recentPosts.edges" :key="post.node.id" class="post">
        <g-link :to="post.node.path" :aria-label="post.node.title">
          <div class="overlay"></div>
          <g-image :src="post.node.cover" class="post-img" :alt="post.node.title" />
          <div class="post-details fadeIn-bottom">
            <h3 class="post-title">{{ post.node.title }}</h3>
            <p class="post-text">{{ post.node.date }} • ☕️ {{ post.node.timeToRead }} min read</p>
          </div>
        </g-link>
      </div>
    </div> -->
  </Layout>
</template>

<page-query>
query Posts {
  recentPosts: allPost(perPage: 9) {
    edges {
      node {
        id
        title
        cover
        path,
        date(format: "MMMM DD, YYYY"),
        timeToRead
      }
    }
  }
}
</page-query>

<script>
import convertkit from "@/components/ConvertKit";


export default {
  components: {
    convertkit
  },
  metaInfo: {
    title: "Welcome to my website",
    meta: [
      { name: "author", content: "Ricky Januari" },
      {
        name: "description",
        content: "This is the personal blog of Ricky Januari."
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:description", content: "The personal blog of Ricky Januari" },
      { name: "twitter:title", content: "Ricky Januari" },
      { name: "twitter:site", content: "@rickyjanuari" },
      {
        name: "twitter:image",
        content: `${process.env.GRIDSOME_BASE_URL}/images/rickyjanuari_cover.png`
      },
      { name: "twitter:creator", content: "@rickyjanuari" }
    ]
  }
};
</script>

<style>
.intro {
  line-height: 2.3rem;
}
.avatar {
  max-width: 200px;
  text-align: center;
  margin: 30px auto;
      border-radius: 50%;
}
.text-center {
  text-align: center;
}
.typed-element {
    display: block;
    align-items: center;
}
.intro {
  width: 50%;
}

/* We only want our complex grid layout when we are on larger screens */
@media screen and (min-width: 769px) {
  .posts {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    margin-bottom: 30px;
  }
  .intro {
  width: 100%;
}

  .post {
    position: relative;
    overflow: hidden;
  }
  .post:nth-child(1),
  .post:nth-child(6),
  .post:nth-child(7) {
    grid-column: span 2;
    grid-row: span 2;
  }
  .post:nth-child(6) {
    grid-column: 2/4;
    grid-row: 3/5;
  }
  .post:nth-child(4),
  .post:nth-child(5) {
    grid-column: 1;
  }
  .post:nth-child(3),
  .post:nth-child(5),
  .post:nth-child(9) {
    display: flex;
    align-self: flex-end;
  }
  .post-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .post .overlay {
    background: rgba(0, 0, 0, 0.7);
    position: absolute;
    height: 99%;
    width: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    opacity: 0;
    -webkit-transition: all 0.4s ease-in-out 0s;
    -moz-transition: all 0.4s ease-in-out 0s;
    transition: all 0.4s ease-in-out 0s;
  }

  .post:hover .overlay {
    opacity: 1;
  }
  .post-details {
    position: absolute;
    text-align: center;
    padding-left: 1em;
    padding-right: 1em;
    width: 100%;
    top: 50%;
    left: 50%;
    opacity: 0;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    -webkit-transition: all 0.3s ease-in-out 0s;
    -moz-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }

  .post:hover .post-details {
    top: 50%;
    left: 50%;
    opacity: 1;
  }

  .post-details h3 {
    color: #fff;
    font-weight: 500;
    letter-spacing: 0.15em;
    margin-bottom: 0.5em;
    text-transform: uppercase;
  }

  .post-details p {
    color: #fff;
    font-size: 0.8em;
  }

  .fadeIn-bottom {
    top: 80%;
  }
}

@media screen and (max-width: 768px) {
  .post {
    margin-bottom: 10px;
  }
  .post-details {
    display: none;
  }
}

/* HOME PAGE SUBSCRIBE */
.subscribe {
  font-family: "Permanent Marker", cursive;
}
#convertkit {
  margin: 0px;
}
@media screen and (min-width: 767px) {
  .formkit-form[data-uid="e6035d0111"] .formkit-fields {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      flex-wrap: nowrap !important;
      margin: 0 auto;
  }

  .formkit-form[data-uid="e6035d0111"] .formkit-field, .formkit-form[data-uid="e6035d0111"] .formkit-submit {
      margin: 0 0 15px 0;
      -webkit-flex: none !important;
      -ms-flex: none !important;
      flex: none !important;
  }
  .formkit-form[data-uid="e6035d0111"] .formkit-field {
    width: 40% !important;
  }
}
</style>
