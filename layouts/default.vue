<template>
  <div class="container">
    <header>
      <nav>
        <NuxtLink to="/" class="logo"></NuxtLink>
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
      
    </footer>
  </div>
</template>

<style >

  :root {
    --font-body: "Inter", sans-serif;
    background-color: rgb(255, 255, 255);
  }

  :global(body) {
    margin: 0;
    padding: 0;
  }

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

</style>