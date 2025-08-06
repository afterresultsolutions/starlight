// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'AR Solutions',
      favicon: '/favicon-new.svg',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://afterresult.solutions',
        },
      ],
      sidebar: [
        {
          label: 'Services',
          items: [
            { label: 'Strategic Implementation', slug: 'services/first-page' },
            { label: 'Digital Growth & Enablement', slug: 'services/second-page' },
            { label: 'Precision-Driven Lead Generation', slug: 'services/third-page' },
            { label: 'Shopify & WooCommerce Development', slug: 'services/f-page' },
            { label: 'Social Media Marketing', slug: 'services/fif' },
            { label: 'Search Engine Optimization (SEO)', slug: 'services/six' },
            { label: 'Google My Business (GMB) Optimization', slug: 'services/seven' },
            { label: 'Quick Commerce Solutions', slug: 'services/eight' },
            { label: 'GrowthFusion Framework Consulting', slug: 'services/nine' },
          ],
          // Add this property to mark collapsed by default
          collapsed: true,
        },
        {
          label: 'Guides',
          items: [
            { label: 'Learn More', slug: 'guides/example' },
            { label: 'Contact', slug: 'contact' },
          ],
          collapsed: true,
        },
        {
          label: 'Blog',
          items: [
            { label: 'AR and AI: The Future', slug: 'blog/first-blog' },
            { label: 'Top Augmented Reality Trends', slug: 'blog/second-blog' },
            { label: 'The Future of Augmented Reality', slug: 'blog/third-blog' },
          ],
          collapsed: true,
        },
        {
          label: 'Pricing',
          items: [
            { label: 'Pricing', slug: 'pricing' },
          ],
          collapsed: true,
        },
      ],
    }),
  ],
});
