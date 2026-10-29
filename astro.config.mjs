import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({ site: 'https://wayangmuseum.com', output: 'static', trailingSlash: 'always', integrations: [sitemap({ filter: page => !/\/(?:privacy|terms|cookies|404)(?:\.html)?\/?$/.test(page) })], vite: { plugins: [tailwindcss()] } });
