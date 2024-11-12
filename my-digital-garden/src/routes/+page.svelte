<script lang="ts">
    import { Hamburger } from 'svelte-hamburgers';
    import ProjectCard from '../lib/ProjectCard.svelte';
</script>

<header>
    <Hamburger 
        type="squeeze" 
        --color="var(--main-text-color)" 
        --border-radius="1px"
        --layer-height="2px"  
        --layer-spacing="7px"
    />
    <h1>digital_garden</h1>
</header>

<main>
    <section class="intro">
        <section class="intro-greeting">
            <p class="ascii-art">
                ˚₊ ˚ ‧₊ .:･˚ *₊ ˚ ‧₊ .:･˚₊ 
            </p>
            <h2>Welcome to my digital garden ^_^</h2>
            <p class="ascii-art">
                ˚₊ ˚ ‧₊ .:･˚ *₊ ˚ ‧₊ .:･˚₊ 
            </p>
        </section>
        <p style="font-style: italic;">This is my blog where I publish my projects, lessons, and more.</p>
    </section>

    <section class="projects">
        <h3>Projects</h3>
        <div class="grid">
            <ProjectCard title="naam van project" description="beschrijving van project" image="./flowers/lotus.png" />
            <ProjectCard title="naam van project" description="beschrijving van project" image="./flowers/orchid-dots-2.png" />
            <ProjectCard title="naam van project" description="beschrijving van project" image="./flowers/orchid-dots.png" />
            <ProjectCard title="naam van project" description="beschrijving van project" image="./flowers/orchid-fuchsia.png" />
        </div>
        <a href="/projects" class="see-more">see more</a>
    </section>

    <section class="learning-journal">
        <h3>Learning Journal</h3>
        <div class="grid">
            <!-- Learning journal entries will go here -->
        </div>
        <a href="/learning-journal" class="see-more">see more</a>
    </section>

    <section class="web-love">
        <h3>We love Web</h3>
        <div class="grid">
            <!-- Web love entries will go here -->
        </div>
        <a href="/we-love-web" class="see-more">see more</a>
    </section>
</main>

<style>
    header {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: var(--padding);
    }

    h1 {
        color: var(--main-text-color);
        font-size: 1.5rem;
    }

    .intro-greeting {
        font-family: var(--font-pixel);
    }

    .intro, .projects, .learning-journal, .web-love {
        text-align: center;
        padding: var(--padding);
    }

    .grid {
        display: grid;
        gap: var(--grid-gap);
        grid-template-columns: repeat(auto-fit, minmax(var(--grid-column-width), 1fr));
    }

    .see-more {
        color: var(--main-text-color);
    }
</style>
