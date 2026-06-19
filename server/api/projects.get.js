const projects = [
	{
		id: 1,
		title: 'SHKAF Wardrobe Blog',
		category: 'Frontend Development',
		year: '2025',
		description: 'A designer clothing findings blog.',
		tools: ['Node.js', 'Express', 'Liquid', 'CSS', 'JavaScript'],
		image: '/projects/shkaf.png',
		colour: '#ec5aa7',
		url: 'https://shkaf.onrender.com/',
		status: 'published'
	},
	{
		id: 2,
		title: 'Portfolio Website',
		category: 'Frontend Development',
		year: '2026',
		description: 'A personal portfolio website.',
		tools: ['Nuxt', 'Vue', 'GSAP', 'CSS'],
		image: '/projects/portfolio.png',
		colour: '#ff8ac8',
		url: '/',
		status: 'published'
	},
	{
		id: 3,
		title: 'Coming Soon',
		category: 'Motion Design',
		year: '2026',
		description: ' ',
		tools: [],
		image: '',
		colour: '#ff8ac8',
		url: '#',
		status: 'coming-soon'
	},
	{
		id: 4,
		title: 'Coming Soon',
		category: 'Motion Design',
		year: '2026',
		description: ' ',
		tools: [],
		image: '',
		colour: '#ff8ac8',
		url: '#',
		status: 'coming-soon'
	},
	{
		id: 5,
		title: 'Coming Soon',
		category: 'Motion Design',
		year: '2026',
		description: ' ',
		tools: [],
		image: '',
		colour: '#ff8ac8',
		url: '#',
		status: 'coming-soon'
	},
	{
		id: 6,
		title: 'Coming Soon',
		category: 'Design',
		year: '2026',
		description: ' ',
		tools: [],
		image: '',
		colour: '#ff8ac8',
		url: '#',
		status: 'coming-soon'
	},
	{
		id: 7,
		title: 'Coming Soon',
		category: 'Design',
		year: '2026',
		description: ' ',
		tools: [],
		image: '',
		colour: '#ff8ac8',
		url: '#',
		status: 'coming-soon'
	},
	{
		id: 8,
		title: 'Coming Soon',
		category: 'Design',
		year: '2026',
		description: ' ',
		tools: [],
		image: '',
		colour: '#ff8ac8',
		url: '#',
		status: 'coming-soon'
	}
]

export default defineEventHandler(function () {
	return projects
})