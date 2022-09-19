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
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    image(),
    compressor(),
    serviceWorker(),
    robotsTxt(),
    alpinejs(),
    webmanifest({
      name: SITE_TITLE,
      description: SITE_DESCRIPTION,
      start_url: '/',
      icon: 'https://juststeveking-uk-astro.pages.dev/favicon.svg',
      display: 'standalone',
      theme_color: '#2dd4bf',
      background_color: '#fafafa'
    })
  ],
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'github-light',
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: [],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
    },
  }
});