<template>
  <div class="container">
    <header>
      <nav>
        <NuxtLink to="/" class="logo">Alisa Afanasieva</NuxtLink>
        <ul class="nav-links">
          <li><NuxtLink to="/">Portfolio</NuxtLink></li>
          <li><NuxtLink to="/blog">Blog</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <main>
      <slot />
    </main>

    <footer>
      <p>© 2025 Alisa Afanasieva</p>
    </footer>
  </div>
</template>

<style scoped>
.container {
  font-family: 'Helvetica Neue', sans-serif;
  color: #111;
  background-color: #fff;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  border-bottom: 1px solid #eee;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  list-style: none;
}

.nav-links a {
  text-decoration: none;
  color: black;
  font-weight: 500;
}

.nav-links a:hover {
  color: #ff5da2;
}

footer {
  text-align: center;
  padding: 2rem;
  background-color: #f6f6f6;
  margin-top: 4rem;
  font-size: 0.9rem;
}
</style>
