<template>
  <Layout>
    <div class="content">
      <h1 class="title is-2">Recent Video Youtube</h1>
      <div class="articles">
        <div v-for="video in $page.videos.edges" :key="video.node.id" class="article content">
          <h2 class="title is-4">
            <g-link :to="video.node.path">{{video.node.title}}</g-link>
          </h2>
        </div>
      </div>
    </div>
    <BulmaPagination
      baseUrl="/video"
      :currentPage="$page.videos.pageInfo.currentPage"
      :totalPages="$page.videos.pageInfo.totalPages"
      :maxVisibleButtons="5"
      v-if="$page.videos.pageInfo.totalPages > 1"
    />
  </Layout>
</template>

<page-query>
query Video ($page: Int) {
  videos: allVideo(perPage: 5, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    totalCount
    edges {
      node {
        id
        title
        slug
        path
        video
        date
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>
import BulmaPagination from "@/components/BulmaPagination";

export default {
  components: {
    BulmaPagination
  }
};
</script>

<style>
.articles {
  margin: 20px 0;
}
.article h2 {
  margin-bottom: 0px !important;
}
.article h2 a:link,
.article h2 a:visited {
  color: #00adad;
}
</style>
