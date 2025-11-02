<script setup>
import Accordion from '@/components/Accordion.vue'
</script>

<template>
  <section class="projects-container">
    <div class="heading-container"><h1>My Projects</h1></div>

    <Accordion title="Frontend Development">
      <p>Coming soon...</p>
    </Accordion>

    <Accordion title="Graphic Design">
      <p>Coming soon...</p>
    </Accordion>

    <Accordion title="Motion Design">
      <p>Coming soon...</p>
    </Accordion>

  </section>
</template>

<style scoped>
  .projects-container {
    padding: 2rem 0rem 0rem 0rem;
  }

  .heading-container {
    position: relative;
    display: flex;
    width: 100%;
    border-bottom: 1px solid black;
  }

  .heading-container h1{
    padding-left: 4rem;
    margin-bottom: 3rem;
  }
</style>
