<template>
	<div ref="wrapRef" class="project-scroll-wrap">
		<section class="project-scroll-section">
			<div ref="trackRef" class="project-track">
				<a
					v-for="project in projects"
					:key="project.id"
					:href="project.url"
					class="project-card"
					:class="{ 'is-coming-soon': project.status === 'coming-soon' }"
					@click="handleProjectClick($event, project)"
				>
					<div class="project-card-content">
						<div
							v-if="project.status === 'coming-soon'"
							class="project-coming-soon"
						>
							Coming soon
						</div>

						<template v-else>
							<div v-if="project.image" class="project-card-image">
								<img :src="project.image" :alt="project.title">
							</div>

							<div class="project-card-text">
								<span class="project-category">
									{{ project.category }}
								</span>

								<h2>{{ project.title }}</h2>

								<p>{{ project.description }}</p>

								<ul>
									<li
										v-for="tool in project.tools"
										:key="tool"
									>
										{{ tool }}
									</li>
								</ul>
							</div>
						</template>
					</div>
				</a>
			</div>
		</section>
	</div>
</template>

<script setup>
const props = defineProps({
	projects: {
		type: Array,
		required: true
	}
})

const wrapRef = ref(null)
const trackRef = ref(null)

onMounted(function () {
	window.addEventListener('scroll', updateProjectScroll, { passive: true })
	window.addEventListener('resize', updateProjectScroll)
	window.addEventListener('load', updateProjectScroll)

	nextTick(function () {
		updateProjectScroll()
	})
})

onBeforeUnmount(function () {
	window.removeEventListener('scroll', updateProjectScroll)
	window.removeEventListener('resize', updateProjectScroll)
	window.removeEventListener('load', updateProjectScroll)
})

function updateProjectScroll() {
	if (!wrapRef.value || !trackRef.value) return

	const rect = wrapRef.value.getBoundingClientRect()
	const scrollDistance = wrapRef.value.offsetHeight - window.innerHeight

	if (scrollDistance <= 0) return

	const rawProgress = -rect.top / scrollDistance
	const progress = Math.min(Math.max(rawProgress, 0), 1)
	const maxMove = getMaxMove()

	trackRef.value.style.transform = `translate3d(${-progress * maxMove}px, 0, 0)`
}

function getMaxMove() {
	if (!trackRef.value) return 0

	return Math.max(trackRef.value.scrollWidth - window.innerWidth, 0)
}

function handleProjectClick(event, project) {
	if (project.status === 'coming-soon') {
		event.preventDefault()
	}
}
</script>

<style scoped>
.project-scroll-wrap {
	height: 220vh;
	position: relative;
}

.project-scroll-section {
	position: sticky;
	top: 0;

	height: 100vh;
	width: 100vw;
	overflow: hidden;

	display: flex;
	align-items: center;

	background-color: var(--light-background-color);
}

.project-track {
	display: flex;
	gap: clamp(1rem, 2vw, 2rem);
	width: max-content;
	padding-inline: var(--section-padding-inline);

	transform: translate3d(0, 0, 0);
	will-change: transform;
}

.project-card {
	flex: 0 0 clamp(24rem, 38vw, 42rem);
	aspect-ratio: 1 / 1.15;

	color: currentColor;
	text-decoration: none;
	background-color: transparent;
}

.project-card-content {
	width: 100%;
	height: 100%;

	display: grid;
	align-content: space-between;
	gap: 1.5rem;

	padding: 1.5rem;

	background-color: white;

	filter: blur(4px);
	opacity: 0.65;

	transition:
		filter 0.45s cubic-bezier(0.22, 1, 0.36, 1),
		opacity 0.45s cubic-bezier(0.22, 1, 0.36, 1),
		transform 0.25s ease;
}

.project-card:hover .project-card-content,
.project-card.active-mobile .project-card-content {
	filter: blur(0);
	opacity: 1;
	transform: translateY(-0.25rem);
}

.project-category {
	font-size: 0.9rem;
}

.project-card h2 {
	margin: 0;
	font-size: clamp(2.5rem, 5vw, 5rem);
	font-weight: 400;
	line-height: 0.95;
	text-transform: uppercase;
}

.project-card p {
	margin: 0;
	max-width: 32rem;
}

.project-card ul {
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;

	list-style: none;
	margin: 0;
	padding: 0;
}

.project-card li {
	padding: 0;
	font-size: 0.85rem;
}

.project-card li:not(:last-child)::after {
	content: ",";
}

.project-card-image {
	aspect-ratio: 16 / 9;
	overflow: hidden;
	margin: -1.5rem -1.5rem 1rem;
}

.project-card-image img {
	display: block;
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.project-card.is-coming-soon .project-card-content {
	place-items: center;
	align-content: center;
}

.project-coming-soon {
	display: grid;
	place-items: center;

	width: 100%;
	height: 100%;

	font-size: clamp(1.8rem, 4vw, 3rem);
	text-transform: uppercase;
	text-align: center;
	white-space: nowrap;
}

@media (max-width: 650px) {
	.project-scroll-wrap {
		height: 180vh;
	}

	.project-card {
		flex-basis: 78vw;
	}
}
</style>