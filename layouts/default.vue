<script setup>
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
</script>


<template>
  <div class="container">
    <header>
      <div class="logo">
        <NuxtLink to="/">
          <img src="/cross.svg" alt="Logo" class="logo-img" />
        </NuxtLink>
      </div>
      <nav>
        <NuxtLink to="/" class="logo"></NuxtLink>
        <ul class="nav-links">
          <li><NuxtLink to="/">portfolio</NuxtLink></li>
          <li><NuxtLink to="/blog">blog</NuxtLink></li>
          <li><NuxtLink to="/contact">contact</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <main>
      <slot /> 
    </main>

    <footer>
      
    </footer>
  </div>
</template>

<style>

  .container {
    font-family: var(--font-body), sans-serif;
    color: var(--dark-text-color);
    background-color: var(--background-color);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    border-bottom: 1px solid #000000;
  }

  .logo-img {
    width: 32px;
    height: 32px;
    cursor: pointer;
    transition: transform 0.2s ease;
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
  }

  .nav-links a:hover {
    color: #ff5da2;
  }

</style>