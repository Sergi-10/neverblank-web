// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.neverblanc.com',
  // Astro 7 dropped `output: 'hybrid'` — its replacement is exactly this:
  // default `output: 'static'` (every page prerendered, same as before)
  // plus an adapter, so an individual route can opt into on-demand
  // rendering with `export const prerender = false` (see
  // src/pages/api/contact.ts). No `output` override needed here.
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: true
    }
  }
});