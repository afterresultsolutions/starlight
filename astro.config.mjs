// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'AR Solutions',
      favicon: '/favicon-new.svg', // ✅ Added here
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://afterresult.solutions',
        },
      ],
      sidebar: [
        {
          label: 'Service',
          items: [{ label: 'Service', slug: 'service' }],
        },
        {
          label: 'Guides',
          items: [{ label: 'Learn More', slug: 'guides/example' }],
          items: [{ label: 'Contact', slug: 'contact' }], 
        },
        {
          label: 'Guides',
          items: [{ label: 'Learn More', slug: 'guides/example' }],
        },
        {
          label: 'Pricing',
          items: [{ label: 'Pricing', slug: 'pricing' }],
        },
      ],
    }),
  ],
});
