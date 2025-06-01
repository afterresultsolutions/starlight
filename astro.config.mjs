// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'AfterResult Solutions',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://afterresult.solutions' }],
			sidebar: [
				{
					label: 'Service',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Service', slug: 'service' },
					],
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Learn More', slug: 'guides/example' },
					],
				},
				{
					label: 'Service',
					autogenerate: { directory: 'Service' },
				},
			],
		}),
	],
});
