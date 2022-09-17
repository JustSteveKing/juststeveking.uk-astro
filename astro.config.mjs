import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import serviceWorker from "astrojs-service-worker";
import webmanifest from 'astro-webmanifest';
import compressor from "astro-compressor";
import robotsTxt from 'astro-robots-txt';
import { SITE_DESCRIPTION, SITE_TITLE } from './src/config';

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  site: 'https://juststeveking-uk-astro.pages.dev/',
  integrations: [mdx(), sitemap(), tailwind(), image(), compressor(), serviceWorker(), robotsTxt(), webmanifest({
    name: SITE_TITLE,
    description: SITE_DESCRIPTION,
    start_url: '/',
    icon: 'https://juststeveking-uk-astro.pages.dev/favicon.svg',
    display: 'standalone',
    theme_color: '#2dd4bf',
    background_color: '#fafafa'
  }), alpinejs()]
});