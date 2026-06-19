<template>
	<section class="intro-container" ref="introSection">
		<div class="cross-parallax">
			<img ref="crossEl" src="/cross-background.png" alt="" class="cross-bg" />
		</div>

		<div class="intro">
			<h1 ref="h1El" class="intro-title">
				<span class="name-row name-row-first">
					<span class="decorative">А</span>LISA
				</span>

				<span class="name-row name-row-second">
					<span class="decorative">А</span>FANASIEVA
				</span>
			</h1>

			<p ref="pEl">
				Web designer, Frontend developer, Graphic designer & Motion designer based in the Netherlands.
			</p>
		</div>
	</section>

	<div class="page-rest" ref="restEl">
		<section class="about-container">
			<div class="about-grid">
				<h1 class="about-title">About Me</h1>

				<article class="about-content">
					<p>
						Hi! My name is Alisa. I am a multidisciplinary designer based in the Netherlands, working between graphic design, web design, frontend development, UX/UI design and motion design.
						<br><br>
						I am currently studying Frontend Development and Web Design at the Amsterdam University of Applied Sciences, where I explore how visual systems, interaction and code can come together in digital experiences.
						<br><br>
						My work is driven by a love for aesthetically pleasing design, clear typography, intuitive interfaces and small details that make a website feel more personal. I like combining structure with atmosphere: clean layouts, thoughtful hierarchy, subtle animation and a careful eye for visual balance.
						<br><br>
						As a detail-oriented designer, I always try to create digital experiences that are not only functional, but also pleasant, expressive and visually memorable.
					</p>
				</article>

				<div class="photo-box">
					<img
						src="/images/my-picture.png"
						alt="my picture"
						class="about-photo"
					>
				</div>
			</div>
		</section>

		<ProjectsSection />

		<section class="contact" id="contact">
			<article class="contact-content">
				<h1>Contact</h1>
				<p>Interested in working with me? <br><br> Let's get in touch!</p>
				<ul>
					<li><strong>Mail:</strong> alice.afanasieva@gmail.com</li>
					<li><strong>Whatsapp:</strong> +31 6 01 02 03 04</li>
					<li><strong>Telegram:</strong> @liskinroom</li>
				</ul>
			</article>
		</section>
	</div>
</template>

<script setup>
import { gsap } from 'gsap'

const introSection = ref(null)
const crossEl = ref(null)
const h1El = ref(null)
const pEl = ref(null)
const restEl = ref(null)

let ctx

onMounted(async () => {
	if (import.meta.server) return

	if ('scrollRestoration' in window.history) {
		window.history.scrollRestoration = 'manual'
	}

	window.scrollTo(0, 0)

	requestAnimationFrame(function () {
		window.scrollTo(0, 0)
	})

	const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

	if (reduced) {
		document.documentElement.classList.remove('is-preload')
		return
	}

	await nextTick()

	ctx = gsap.context(() => {
		gsap.set(crossEl.value, {
			y: '-140vh',
			rotation: 0,
			scale: 1,
			transformOrigin: '50% 50%',
			opacity: 1
		})

		gsap.set([h1El.value, pEl.value], { opacity: 0, y: 16 })
		gsap.set('.site-header', { autoAlpha: 0, y: -12 })
		gsap.set(restEl.value, { opacity: 0 })

		const tl = gsap.timeline({
			defaults: { ease: 'power3.out' },
			onStart: () => document.documentElement.classList.remove('is-preload')
		})

		tl.to(crossEl.value, { y: 25, duration: 0.85, ease: 'power4.in' })
			.to(crossEl.value, { y: -25, duration: 0.28, ease: 'sine.out' })
			.to(crossEl.value, { y: 0, duration: 0.2, ease: 'sine.out' })
			.to(crossEl.value, { rotation: 360, duration: 0.7, ease: 'power3.in' })

			.to('.site-header', { opacity: 1, y: 0, duration: 0.45 }, 'introIn')
			.to(h1El.value, { opacity: 1, y: 0, duration: 0.75 }, 'introIn+=0.45')
			.to(pEl.value, { opacity: 1, y: 0, duration: 0.65 }, 'introIn+=0.45')
			.to(crossEl.value, { scale: 1.12, duration: 1.1, ease: 'power2.out' }, 'introIn+=0.5')

			.to(restEl.value, { opacity: 1, duration: 0.5 }, '>-0.05')
	}, introSection.value)
})

onBeforeUnmount(() => {
	if (ctx) {
		ctx.revert()
	}
})
</script>

<style>
html.is-preload header,
html.is-preload .intro,
html.is-preload .page-rest {
	opacity: 0;
}

.page-rest {
	position: relative;
	z-index: 1;
}

h1,
h2,
h3 {
	font-weight: 400;
}

p {
	font-size: clamp(1rem, 2.5cqi, 1.125rem);
	line-height: 1.8;
}

/* ---------------- INTRO ---------------- */

.intro-container {
	container: intro / inline-size;
	position: relative;
	z-index: 0;

	display: grid;
	grid-template-columns:
		1.25rem
		minmax(0, 1fr)
		1.25rem;
	grid-template-areas:
		". intro .";

	min-height: 85svh;
	overflow: hidden;
}

.intro {
	grid-area: intro;

	position: relative;
	z-index: 1;

	display: grid;
	grid-template-areas:
		"title"
		"text";
	align-content: center;
	justify-items: start;

	width: 100%;
	min-height: 85svh;
	padding: 5rem 0 4rem;

	text-align: left;
}

.cross-parallax {
	grid-area: intro;
	justify-self: center;
	align-self: center;

	z-index: 0;
	width: clamp(18rem, 70cqi, 24rem);
	pointer-events: none;

	will-change: translate;
}

.cross-bg {
	display: block;
	width: 100%;
	opacity: 0.5;
}

.intro h1 {
	grid-area: title;
	justify-self: start;
	align-self: center;

	z-index: 1;
	width: 100%;
	max-width: 32rem;
	margin: 0;

	display: grid;
	grid-template-rows: auto auto;
	row-gap: 3.5rem;

	text-transform: uppercase;
	text-align: left;
	font-size: clamp(2.5rem, 11cqi, 4rem);
	line-height: 1.05;
	white-space: normal;
}

.name-row {
	display: block;
	white-space: nowrap;
}

.name-row-first,
.name-row-second {
	justify-self: start;
	transform: none;
}

.decorative {
	font-family: "Stezhok", serif;
	font-size: clamp(7rem, 16cqi, 8.5rem);
	margin: 0;
	line-height: 1rem;
}

.intro p {
	grid-area: text;
	justify-self: start;

	z-index: 1;
	width: 100%;
	max-width: 26rem;
	margin: clamp(7rem, 20cqi, 10rem) 0 0;

	text-align: left;
}

@media (min-width: 601px) {
	.intro-container {
		grid-template-columns:
			minmax(2rem, 1fr)
			minmax(0, 44rem)
			minmax(2rem, 1fr);

		min-height: 90svh;
	}

	.intro {
		min-height: 90svh;
		padding: 0;

		align-content: center;
		justify-items: center;

		text-align: center;
	}

	.intro h1 {
		justify-self: center;
		width: 100%;
		max-width: 44rem;

		row-gap: 4rem;

		font-size: clamp(4rem, 8.5cqi, 5.3rem);
		line-height: 1;
		text-align: center;
	}

	.name-row-first {
		justify-self: start;
		transform: translateX(2rem);
	}

	.name-row-second {
		justify-self: end;
		transform: translateX(-1rem);
	}

	.decorative {
		font-size: clamp(8.5rem, 15cqi, 15rem);
	}

	.intro p {
		width: min(100%, 34rem);
		margin-top: clamp(4rem, 8cqi, 5.5rem);
		margin-left: auto;
		margin-right: 0;

		text-align: left;
	}

	.cross-parallax {
		width: clamp(17rem, 38cqi, 22rem);
	}
}

@media (min-width: 901px) {
	.intro-container {
		grid-template-columns:
			minmax(2rem, 1fr)
			minmax(0, clamp(48rem, 78cqi, 78rem))
			minmax(2rem, 1fr);

		min-height: 90vh;
	}

	.intro {
		min-height: 85vh;
		justify-items: center;

		text-align: center;
	}

	.intro h1 {
		max-width: 100%;

		display: block;

		font-size: clamp(4.5rem, 7cqi, 5.6rem);
		line-height: 0.95;
		white-space: nowrap;
	}

	.name-row {
		display: inline;
		white-space: normal;
	}

	.name-row-first,
	.name-row-second {
		justify-self: auto;
		transform: none;
	}

	.decorative {
		font-size: clamp(5.5rem, 14cqi, 12rem);
	}

	.intro p {
		justify-self: center;
		max-width: 62rem;
		margin: clamp(2rem, 4cqi, 3rem) 0 0;

		text-align: center;
	}

	.cross-parallax {
		width: clamp(16rem, 22cqi, 19rem);
	}
}

/* ---------------- INTRO PARALLAX ---------------- */

@supports (animation-timeline: view()) {
	.intro-container {
		view-timeline-name: --intro-scroll;
		view-timeline-axis: block;
	}

	.intro {
		animation: introTextParallax linear both;
		animation-timeline: --intro-scroll;
		animation-range: exit 0% exit 100%;
		will-change: translate;
	}

	.cross-parallax {
		animation: introCrossParallax linear both;
		animation-timeline: --intro-scroll;
		animation-range: exit 0% exit 100%;
	}
}

@keyframes introTextParallax {
	from {
		translate: 0 0;
	}

	to {
		translate: 0 -15rem;
	}
}

@keyframes introCrossParallax {
	from {
		translate: 0 0;
	}

	to {
		translate: 0 11rem;
	}
}

/* ---------------- ABOUT ---------------- */

.about-container {
	container: about / inline-size;
	position: relative;
	z-index: 1;

	width: 100%;
	background-color: var(--dark-pink-background);
}

.about-grid {
	--_text-column: 42rem;
	--_photo-min: 24rem;
	--_photo-max: 48rem;

	display: grid;
	grid-template-columns: 1fr;
	grid-template-areas:
		"title"
		"photo"
		"text";

	width: 100%;
	min-height: auto;
	padding-block: 3rem 4rem;
	padding-inline: var(--section-padding-inline);

	row-gap: 2.5rem;
	align-items: start;
}

.about-title {
	grid-area: title;
	margin: 0;

	font-size: clamp(3.2rem, 13cqi, 4.2rem);
	line-height: 1;
	font-weight: 400;
}

.about-content {
	grid-area: text;
}

.about-content p {
	max-width: 42rem;
	margin: 0;
}

.photo-box {
	grid-area: photo;

	width: 100%;
	max-width: none;
	aspect-ratio: 1 / 0.92;

	background-color: white;
	display: grid;
	place-items: center;

	font-size: clamp(1rem, 1.6cqi, 1.25rem);
}

@media (min-width: 521px) {
	.about-grid {
		padding-block: clamp(3rem, 8cqi, 5rem);
		row-gap: clamp(2rem, 6cqi, 4rem);
	}

	.about-title {
		font-size: clamp(4rem, 12cqi, 5.8rem);
	}

	.photo-box {
		width: 100%;
		max-width: 35rem;
		justify-self: stretch;
	}
}

@media (min-width: 901px) {
	.about-container {
		min-height: 100vh;
	}

	.about-grid {
		grid-template-columns:
			minmax(0, var(--_text-column))
			minmax(var(--_photo-min), 1fr);
		grid-template-areas:
			"title title"
			"text photo";

		column-gap: clamp(3rem, 8cqi, 8rem);
		row-gap: clamp(3rem, 6cqi, 5rem);

		min-height: 100vh;
		padding-block: clamp(4rem, 8cqi, 7rem);

		align-items: center;
	}

	.about-title {
		font-size: clamp(4rem, 8cqi, 6rem);
	}

	.about-content {
		align-self: center;
	}

	.photo-box {
		align-self: start;
		justify-self: end;

		max-width: var(--_photo-max);
	}
}

/* ---------------- ABOUT PARALLAX ---------------- */

@media (min-width: 901px) {
	.about-title,
	.about-content,
	.photo-box {
		will-change: translate;
	}

	@supports (animation-timeline: view()) {
		.about-container {
			view-timeline-name: --about-scroll;
			view-timeline-axis: block;
		}

		.about-title,
		.about-content {
			animation: aboutTextParallax linear both;
			animation-timeline: --about-scroll;
			animation-range: entry 0% exit 100%;
		}

		.photo-box {
			animation: aboutPhotoParallax linear both;
			animation-timeline: --about-scroll;
			animation-range: entry 0% exit 100%;
		}
	}
}

@keyframes aboutTextParallax {
	from {
		translate: 0 4rem;
	}

	50% {
		translate: 0 0;
	}

	to {
		translate: 0 -5rem;
	}
}

@keyframes aboutPhotoParallax {
	from {
		translate: 0 -10rem;
	}

	50% {
		translate: 0 0;
	}

	to {
		translate: 0 6rem;
	}
}

/* ---------------- CONTACT ---------------- */

.contact {
	container: contact / inline-size;

	min-height: auto;
	padding-block: 3rem;
	padding-inline: var(--section-padding-inline);

	background-color: #212121;
	color: white;
}

.contact-content {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	opacity: 0.2;
}

.contact h1 {
	margin-top: 0;
	margin-bottom: clamp(2rem, 5cqi, 3rem);

	font-size: clamp(2.4rem, 15cqi, 3.5rem);
}

.contact ul {
	list-style: none;
	margin-top: 1rem;
	padding: 0;

	line-height: 2rem;
}

.contact li {
	display: grid;
	grid-template-columns: 1fr;
	gap: 0.25rem;
	margin-bottom: 1rem;
}

@media (min-width: 601px) {
	.contact {
		min-height: 60vh;
		padding-block: clamp(3rem, 7cqi, 5rem);
	}

	.contact h1 {
		font-size: clamp(2.5rem, 8cqi, 5.6rem);
	}

	.contact ul {
		line-height: 3rem;
	}

	.contact li {
		grid-template-columns: 8rem 1fr;
		gap: 1rem;
		margin-bottom: 0;
	}
}

/* ---------------- SCROLL REVEAL ---------------- */

.about-grid,
.projects-container,
.contact-content {
	opacity: 1;
	transform: none;
}

@supports (animation-timeline: view()) {
	.about-grid,
	.projects-container,
	.contact-content {
		animation: section-reveal both;
		animation-timeline: view();
		animation-range-start: 10%;
		animation-range-end: 75%;
		opacity: 0.2;
		transform: translateY(6rem);
	}
}

@keyframes section-reveal {
	50% {
		opacity: 1;
		transform: translateY(0);
	}

	to {
		opacity: 1;
		transform: translateY(0);
	}
}

/* ---------------- REDUCED MOTION ---------------- */

@media (prefers-reduced-motion: reduce) {
	.intro,
	.cross-parallax,
	.about-title,
	.about-content,
	.photo-box,
	.about-grid,
	.projects-container,
	.contact-content {
		animation: none;
		translate: none;
		transform: none;
		opacity: 1;
	}
}
</style>