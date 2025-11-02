<template>
  <section class="accordion">
    <header class="accordion-header" @click="toggle">
      <h2>{{ title }}</h2>
      <button class="icon" @click.stop="toggle">
        <svg
          v-if="!isOpen"
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="sharp"
          stroke-linejoin="sharp"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>

        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="sharp"
          stroke-linejoin="sharp"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </button>

    </header>

    <div
      v-show="isOpen"
      class="accordion-content"
    >
      <slot />
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  title: String
})

const isOpen = ref(false)
const toggle = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>

header {
  border-bottom: none;
}

.accordion {
  border-bottom: 1px solid black;
}

.accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  padding: 0rem 4rem;
  cursor: pointer;

}

.icon {
  background: none;
  border: none;
  font-size: 4rem;
  line-height: 1;
  cursor: pointer;
}

.accordion-content {
  padding: 0rem 4rem;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
