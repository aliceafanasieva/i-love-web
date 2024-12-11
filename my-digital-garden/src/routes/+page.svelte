<script lang="ts">
    import { Hamburger } from 'svelte-hamburgers';
    import ProjectCard from '../lib/ProjectCard.svelte';
</script>

<header>
    <div class="hamburger-menu">
        <Hamburger 
            type="squeeze" 
            --color="var(--main-text-color)" 
            --border-radius="0.063rem"
            --layer-height="0.125rem"  
            --layer-spacing="0.438rem"
        />
    </div>

    <h1 class="logo">digital_garden</h1>

    <nav class="nav-list">
        <ul>
            <li><a href="#about-me">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#learning-journal">Learning Journal</a></li>
            <li><a href="#we-love-web">We love Web</a></li>
        </ul>
    </nav>
</header>

<main>
    <section class="intro">
        <section class="intro-greeting">
            <p class="ascii-art">
                ₊ ˚ ‧₊ . ･˚ *₊ ˚ ‧₊ .･ 
            </p>
            <!-- svelte-ignore a11y_missing_content -->
            <h1 class="kao_animate"> </h1>
            <p class="ascii-art">
                ₊ ˚ ‧₊ . ･˚ *₊ ˚ ‧₊ .･  
            </p>
        </section>
        <p>This is my blog where I publish my projects, lessons, and more.</p>
    </section>

    <section class="category projects">
        <h2 class="title_category">Projects</h2>
        <div class="grid">
            <ProjectCard title="naam van project" description="beschrijving van project" image="./flowers/lotus.png" />
            <ProjectCard title="naam van project" description="beschrijving van project" image="./flowers/orchid-dots-2.png" />
            <ProjectCard title="naam van project" description="beschrijving van project" image="./flowers/orchid-dots.png" />
            <ProjectCard title="naam van project" description="beschrijving van project" image="./flowers/orchid-fuchsia.png" />
            <ProjectCard title="naam van project" description="beschrijving van project" image="./flowers/lotus.png" />
            <ProjectCard title="naam van project" description="beschrijving van project" image="./flowers/orchid-dots-2.png" />
        </div>
        <a href="/projects" class="see_more_btn">see more</a>
    </section>

    <section class="category learning-journal">
        <h2 class="title_category">Learning Journal</h2>
        <div class="grid">
            <!-- Learning journal -->
            <ProjectCard title="naam van project" description="beschrijving van project" image="./flowers/lotus.png" />
            <ProjectCard title="naam van project" description="beschrijving van project" image="./flowers/orchid-dots-2.png" />
            <ProjectCard title="naam van project" description="beschrijving van project" image="./flowers/orchid-dots.png" />
            <ProjectCard title="naam van project" description="beschrijving van project" image="./flowers/orchid-fuchsia.png" />
            <ProjectCard title="naam van project" description="beschrijving van project" image="./flowers/lotus.png" />
            <ProjectCard title="naam van project" description="beschrijving van project" image="./flowers/orchid-dots-2.png" />
        </div>
        <a href="/learning-journal" class="see_more_btn">see more</a>
    </section>

    <section class="category web-love">
        <h2 class="title_category">We love Web</h2>
        <div class="grid">
            <!-- We love web -->
            <ProjectCard title="naam van project" description="beschrijving van project" image="./flowers/lotus.png" />
            <ProjectCard title="naam van project" description="beschrijving van project" image="./flowers/orchid-dots-2.png" />
            <ProjectCard title="naam van project" description="beschrijving van project" image="./flowers/orchid-dots.png" />
            <ProjectCard title="naam van project" description="beschrijving van project" image="./flowers/orchid-fuchsia.png" />
            <ProjectCard title="naam van project" description="beschrijving van project" image="./flowers/lotus.png" />
            <ProjectCard title="naam van project" description="beschrijving van project" image="./flowers/orchid-dots-2.png" />
        </div>
        <a href="/we-love-web" class="see_more_btn">see more</a>
    </section>
</main>

