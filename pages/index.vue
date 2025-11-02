<template>
  <section class="intro-container">
    <img src="/cross-background.png" alt="" class="cross-bg" />
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

  <ProjectsSection />

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
    position: relative;
    display: flex;
    min-height: 90vh;
    overflow: hidden;
  }

  .cross-bg {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 220px;
    z-index: 0;
    pointer-events: none;
  }

  .intro {
    position: relative;
    z-index: 1; 
    flex: 1;
    text-align: center;
    padding: 20vh 2rem;
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
