<template>
  <Layout>
    <div class="max-w-2xl space-y-12">
      <div class="space-y-4">
        <h1 class="font-semibold text-2xl text-zinc-900 dark:text-zinc-100">I sometimes write stuff</h1>
        <p class="font-medium text-zinc-900 dark:text-zinc-100">I intend write large variety of things. Articles are the substance content focusing around IT, design and worklife. Journal will be more relaxed lifestyle blog.</p>
      </div>
      <article
        v-for="post in $page.posts.edges"
        :key="post.id"
      >
        <h2 class="font-medium text-lg text-orange-600 hover:underline hover:text-orange-700 dark:hover:text-orange-600">
          <g-link
            class="inline-flex items-center space-x-3"
            :to="post.node.path"
            rel="bookmark"
          >
            <span>{{ post.node.title }}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </g-link>
        </h2>
        <p class="mt-2 font-mono text-xs text-zinc-900 dark:text-zinc-100 space-x-2">
          <time :datetime="post.node.date">{{ post.node.date }}</time>
          <span aria-hidden="true">/</span>
          <span>
            <g-link
              class="hover:text-orange-700 dark:hover:text-orange-600"
              v-for="tag in post.node.tags"
              :to="tag.path"
              :key="tag.id"
            >#{{ tag.title }} </g-link>
          </span>
        </p>

        <p class="mt-6 text-zinc-900 dark:text-zinc-100">{{ post.node.summary }}</p>
      </article>

      <Pager
        class="pagination font-mono space-x-3 text-zinc-900 dark:text-zinc-100 "
        :info="$page.posts.pageInfo"
      />
    </div>
  </Layout>
</template>

<page-query>
query Posts ($page: Int) {
  posts: allPost (sortBy: "date", order: DESC, perPage: 3, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        date (format: "MMMM D, Y")
        tags {
          title
          path
        }
        summary
        path
      }
    }
  }
}
</page-query>

<script>
import { Pager } from "gridsome";

export default {
  components: {
    Pager,
  },
  metaInfo: {
    title: "View my blog posts",
  },
};
</script>