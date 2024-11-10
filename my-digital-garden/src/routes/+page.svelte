<script lang="ts">
    import { Hamburger } from 'svelte-hamburgers';
</script>

<header>
    <Hamburger 
        type="squeeze" 
        --color="#980065" 
        --border-radius="1px"
        --layer-height="2px"  
        --layer-spacing="7px"
    />
    <h1>digital_garden</h1>
</header>

<main>
    <section class="intro">
        <p class="ascii-art">
            ˚₊ ˚ ‧₊ .:･˚ *₊ ˚ ‧₊ .:･˚₊ 
        </p>
        <h2>Welcome to my digital garden ^_^</h2>
        <p class="ascii-art">
            ˚₊ ˚ ‧₊ .:･˚ *₊ ˚ ‧₊ .:･˚₊ 
        </p>
        <p>This is my blog where I publish my projects, lessons, and more.</p>
    </section>

    <section class="projects">
        <h3>Projects</h3>
        <div class="grid">
            <!-- Project cards will go here -->
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
        <h3>We ❤️ Web</h3>
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
        padding: 1rem;
    }

    h1 {
        color: #980065;
        font-size: 1.5rem;
        font-weight: bold;
    }

    .intro, .projects, .learning-journal, .web-love {
        text-align: center;
        padding: 1rem;
    }

    .grid {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }

    h2, h3 {
        color: #980065;
        font-weight: bold;
    }

    .see-more {
        color: #980065;
    }
</style>