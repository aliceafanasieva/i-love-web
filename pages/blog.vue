<template>
  <div class="blog-page">
    <h1>We love Web Blogs</h1>

    <ContentDoc path="/We_Love_Web" v-slot="{ doc }">
      <article class="blog-article">
        <h2>{{ doc.title }}</h2>
        <div v-html="doc.body" class="blog-content"></div>
      </article>
    </ContentDoc>
  </div>
</template>

<script setup>

</script>

<style scoped>


.blog-page {
  max-width: 800px;
  margin: 4rem auto;
  padding: 2rem;
  line-height: 1.6;
}

.blog-article h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.blog-content img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 1.5rem 0;
}
</style>
