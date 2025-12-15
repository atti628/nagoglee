// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap'; // ★ここを追加
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://nagoglee.pages.dev',
  
  // ★ここを追加（これがサイトマップを作ってくれます）
  integrations: [
    sitemap()
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});