<template>
  <section class="intro-container">
    <div class="intro">
      <h1>
      <span class="decorative">А</span>LISA 
      <span class="decorative">А</span>FANASIEVA
      </h1>
      <p>Web designer, Frontend developer, Graphic designer & Motion designer based in the Netherlands.</p>
    </div>
  </section>

  <section class="about-container">
    <div class="about-content">
      <h1>About Me</h1>
      <p>
        Hi! My name is Alisa<br><br></br>I am a graphic designer and UX/UI designer currently studying
        Frontend Development and Web Design at the University of Applied Sciences in Amsterdam.
        I'm a perfectionist who loves aesthetically pleasing design and great user experience.
      </p>
    </div>
    <div class="photo-box">my picture</div>
  </section>

  <section class="projects-container">
    <h1>My Projects</h1>
    <section class="projects">
      <div class="project"><h2>Frontend Development</h2></div>
      <div class="project"><h2>Graphic Design</h2></div>
      <div class="project"><h2>Motion Design</h2></div>
    </section>
  </section>

  <section class="contact">
    <h1>Contact</h1>
    <p>Interested in working with me? <br><br></br> Let’s get in touch!</p>
    <ul>
      <li><strong>Mail:</strong> alice.afanasieva@gmail.com</li>
      <li><strong>Whatsapp:</strong> +31 6 01 02 03 04</li>
      <li><strong>Telegram:</strong> @liskinroom</li>
    </ul>
  </section>
</template>

<style>

  h1, h2, h3{
    font-weight: 400;
  }

  h1 {
    font-size: var(--font-size-xl);
  }

  h2 {
    font-size: var(--font-size-lg);
  }

  p {
    font-size: var(--font-size-sm);
    line-height: 2rem;
  }
  .intro-container {
    display: flex;
    min-height: 90vh;
  }

  .intro {
    flex: 1;
    text-align: center;
    padding: 20vh 2rem;
    background-color: #fff;
  }

  .intro h1 {
    text-transform: uppercase;
  }

  .decorative {
    font-family: "Stezhok", serif;
    font-size: var(--font-size-xxl); 
    margin: 0;
    line-height: 1rem;
  }

  .about-container {
    display: flex;
    position: relative;
    background-color: #ffcbe0;
    min-height: 85vh;
    gap: 10rem;
    padding: 5rem 4rem;
    align-items: flex-start;
  }

  .about-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }

  .photo-box {
    min-width: 400px;
    min-height: 400px;
    background: white;
    border: 1px solid #ccc;
    display: flex;
    align-self: center;
    justify-content: center;
    align-items: center;
  }

  .projects-container {
    text-align: left;
    min-height: 90vh;
  }

  .projects-container h1{
    padding-left: 4rem;
  }

  .projects {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 2rem;
  }

  .projects :nth-child(1),
  .projects :nth-child(2) {
    border-bottom: none;
  }

  .project {
    padding-left: 4rem;
    display: flex;
    flex: 1;
    border: 1px solid #000000;
    text-transform: uppercase;
    align-items: left;
  }

  .contact h1 {
    margin-top: 0; 
    margin-bottom: 3rem;
  }

  .contact {
    display: flex;
    flex-direction: column;
    align-items: left;
    min-height: 60vh;
    background-color: #212121;
    color: white;
    padding: 5rem;
  }

  .contact ul {
    list-style: none;
    margin-top: 1rem;
    padding: 0;
    line-height: 3rem;
  }
</style>
