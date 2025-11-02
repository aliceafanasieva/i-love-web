<template>
  <section class="intro">
    <h1>Alisa Afanasieva</h1>
    <p>Web designer, Frontend developer, Graphic designer & Motion designer based in the Netherlands.</p>
  </section>

  <section class="about">
    <h2>About Me</h2>
    <div class="about-content">
      <p>
        Hi! My name is Alisa, I am a graphic designer and UX/UI designer currently studying
        Frontend Development and Web Design at the University of Applied Sciences in Amsterdam.
        I’m a perfectionist who loves aesthetically pleasing design and great user experience.
      </p>
      <div class="photo-box">my picture</div>
    </div>
  </section>

  <section class="projects">
    <h2>My Projects</h2>
    <div class="project-grid">
      <div class="project">Frontend Development</div>
      <div class="project">Graphic Design</div>
      <div class="project">Motion Design</div>
    </div>
  </section>

  <section class="contact">
    <h2>Contact</h2>
    <p>Interested in working with me? Let’s get in touch!</p>
    <ul>
      <li><strong>Mail:</strong> alice.afanasieva@gmail.com</li>
      <li><strong>Whatsapp:</strong> +31 6 01 02 03 04</li>
      <li><strong>Telegram:</strong> @liskinroom</li>
    </ul>
  </section>
</template>

<style scoped>
.intro {
  text-align: center;
  padding: 5rem 2rem;
  background-color: #fff;
}

.intro h1 {
  font-size: 3rem;
  font-family: 'Playfair Display', serif;
  font-weight: 600;
}

.about {
  background-color: #ffcbe0;
  padding: 4rem 2rem;
}

.about-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

.photo-box {
  width: 200px;
  height: 200px;
  background: white;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
}

.projects {
  padding: 4rem 2rem;
  background-color: #fff;
  text-align: center;
}

.project-grid {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
}

.project {
  width: 200px;
  height: 150px;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
}

.contact {
  background-color: #111;
  color: white;
  padding: 3rem 2rem;
  text-align: center;
}

.contact ul {
  list-style: none;
  margin-top: 1rem;
  padding: 0;
}
</style>
