<template>
  <Layout>
    <article class="max-w-2xl space-y-12">
      <div>
        <h1 class="font-semibold text-2xl text-zinc-900 dark:text-zinc-100">{{ $page.post.title }}</h1>
        <div class="text-zinc-900 dark:text-zinc-100">
          <g-link v-for="tag in $page.post.tags" :to="tag.path" :key="tag.id"> #{{ tag.title }} </g-link>
        </div>
      </div>

      <div class="text-zinc-900 dark:text-zinc-100">
        <p>Posted on {{ $page.post.date }}</p>

        <div
          class="
          markdown-body
          mb-8"
          id="article-area"
          v-html="$page.post.content"
        />
      </div>
    </article>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    date (format: "MMMM D, Y")
    content
    tags {
      title
      path
    }
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
    };
  },
};
</script>
