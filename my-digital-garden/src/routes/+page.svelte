<script lang="ts">
    import { Hamburger } from 'svelte-hamburgers';
    import ProjectCard from '../lib/ProjectCard.svelte';
</script>

<header>
    <Hamburger 
        type="squeeze" 
        --color="var(--main-text-color)" 
        --border-radius="0.063rem"
        --layer-height="0.125rem"  
        --layer-spacing="0.438rem"
    />

    <h1 class="logo">digital_garden</h1>
</header>

<main>
    <section class="intro">
        <section class="intro-greeting">
            <p class="ascii-art">
                ˚₊ ˚ ‧₊ .:･˚ *₊ ˚ ‧₊ .:･˚₊ 
            </p>
            <h2>Welcome to my digital garden (^_^*) </h2>
            <p class="ascii-art">
                ˚₊ ˚ ‧₊ .:･˚ *₊ ˚ ‧₊ .:･˚₊ 
            </p>
        </section>
        <p>This is my blog where I publish my projects, lessons, and more.</p>
    </section>

    <section class="category projects">
        <h3 class="title_category">Projects</h3>
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
        <h3 class="title_category">Learning Journal</h3>
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
        <h3 class="title_category">We love Web</h3>
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

