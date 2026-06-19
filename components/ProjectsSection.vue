<script setup>
import ProjectScrollCarousel from '@/components/ProjectScrollCarousel.vue'

const projects = ref([])
const isLoading = ref(true)
const errorMessage = ref('')

onMounted(function () {
	getProjects()
})

async function getProjects() {
	try {
		const response = await fetch('/api/projects')

		if (!response.ok) {
			throw new Error('Projects could not be loaded')
		}

		projects.value = await response.json()
	} catch (error) {
		errorMessage.value = 'Something went wrong while loading the projects.'
	} finally {
		isLoading.value = false
	}
}
</script>

<template>
	<section class="projects-container">
		<div class="heading-container">
			<h1>My Projects</h1>
		</div>

		<p v-if="isLoading" class="projects-message">
			Loading projects...
		</p>

		<p v-else-if="errorMessage" class="projects-message">
			{{ errorMessage }}
		</p>

		<ProjectScrollCarousel
			v-else
			:projects="projects"
		/>
	</section>
</template>

<style scoped>
.projects-container {
	padding: 0;
}

.heading-container {
	position: relative;
	display: flex;
	width: 100%;
	border-bottom: 1px solid black;
}

.heading-container h1 {
	margin: 0;
	padding-block: 2rem;
	padding-inline: var(--section-padding-inline);
}

.projects-message {
	padding-inline: var(--section-padding-inline);
}

@media (min-width: 901px) {
	.projects-container {
		padding: 2rem 0 0;
	}

	.heading-container h1 {
		padding-block: 0 3rem;
	}
}
</style>