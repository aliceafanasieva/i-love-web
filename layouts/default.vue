<script setup>
const isScrolled = ref(false)

useHead({
  link: [
    {
      rel: 'preload',
      href: '/fonts/Stezhok.otf',
      as: 'font',
      type: 'font/otf',
      crossorigin: 'anonymous'
    }
  ]
})

function checkScroll() {
  isScrolled.value = window.scrollY > 80
}

onMounted(function () {
  document.documentElement.classList.add('is-preload')

  checkScroll()
  window.addEventListener('scroll', checkScroll, { passive: true })
})

onBeforeUnmount(function () {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<template>
  <div class="container">
    <FloatingShapes />

    <header class="site-header" :class="{ 'is-scrolled': isScrolled }">
      <div class="logo">
        <NuxtLink to="/">
          <img src="/cross.svg" alt="Logo" class="logo-img" />
        </NuxtLink>
      </div>

      <nav>
        <ul class="nav-links">
          <li><NuxtLink to="/">portfolio</NuxtLink></li>
          <li><NuxtLink to="/blog">blog</NuxtLink></li>
          <li><NuxtLink to="/#contact">contact</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped>
.container {
  font-family: var(--font-body), sans-serif;
  color: var(--dark-text-color);
  background-color: var(--light-background-color);
}

.site-header,
main {
  position: relative;
  z-index: 1;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: 1px solid #000000;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 1000;

  display: flex;
  justify-content: space-between;
  align-items: center;

  min-height: 3rem;
  padding: 1.5rem 3rem;
  border-bottom: 1px solid #000000;

  background-color: rgba(255, 255, 255, 0);
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);

  transition:
    min-height 0.35s ease,
    padding 0.35s ease,
    background-color 0.35s ease,
    backdrop-filter 0.35s ease,
    -webkit-backdrop-filter 0.35s ease,
}

.site-header.is-scrolled {
  min-height: 4.5rem;
  padding: 0.75rem 3rem;

  background-color: rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(18px) saturate(170%);
  -webkit-backdrop-filter: blur(18px) saturate(170%);
  border-bottom: none;

  box-shadow: 0 1px 24px rgba(0, 0, 0, 0.08);
}

.logo-img {
  width: 32px;
  height: 32px;
  cursor: pointer;
  transition: transform 0.2s ease, width 0.35s ease, height 0.35s ease;
}

.site-header.is-scrolled .logo-img {
  width: 2rem;
  height: 2rem;
}

.logo-img:hover {
  transform: rotate(90deg);
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  list-style: none;
}

.nav-links a {
  text-decoration: none;
  color: var(--dark-text-color);
  transition: color 0.2s ease, font-size 0.35s ease;
}

.nav-links a:hover {
  color: var(--accent-color);
}

@media (max-width: 768px) {
  header {
    padding: 1rem;
  }

  .nav-links {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  .nav-links a {
    font-size: 0.95rem;
  }

  .logo-img {
    width: 28px;
    height: 28px;
  }
}
</style>