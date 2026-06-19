export default defineNuxtConfig({
	modules: ['@nuxt/content'],
	css: ['@/assets/css/main.css'],
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },

	app: {
		head: {
			title: 'alisaafanasieva.online',
			link: [
				{
					rel: 'icon',
					type: 'image/svg+xml',
					href: '/favicon.svg'
				}
			]
		}
	}
})