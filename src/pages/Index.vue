<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1 class="text-5xl font-medium">Juho Pekkala - Developer & Designer</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste
      tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
    </p>

    <footer class="footer">
      <span class="footer__copyright">Copyright © Juho Pekkala {{ new Date().getFullYear() }}. </span>
      <span class="footer__links">Powered by <a href="//gridsome.org"> Gridsome </a></span>
    </footer>
  </Layout>
</template>

<script>
  export default {
    metaInfo: {
      title: "Hello world!",
    },
  };
</script>

<style>
  .home-links a {
    margin-right: 1rem;
  }
</style>
