// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// Tailwind v4 is wired via PostCSS (postcss.config.mjs) rather than the
// @tailwindcss/vite plugin, which is currently incompatible with Astro 6's
// rolldown-based Vite. Same Tailwind, same tokens.
// https://astro.build/config
export default defineConfig({
  site: 'https://mas-architect.net',
  integrations: [react(), sitemap()],
});
