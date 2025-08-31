// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  image: {
    domains: [
      'images.unsplash.com',
      'thumbs.dreamstime.com',
      'camvi.mx',
      'pbs.twimg.com',
      'lh3.googleusercontent.com',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '**.dreamstime.com',
      },
      {
        protocol: 'https',
        hostname: '**.twimg.com',
      },
      {
        protocol: 'https',
        hostname: '**.googleusercontent.com',
      },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
