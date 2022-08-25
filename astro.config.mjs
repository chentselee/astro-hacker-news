import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import netlify from "@astrojs/netlify/functions";
import vercel from '@astrojs/vercel/serverless'

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [preact()],
  output: 'server',
  adapter: process.env.ADAPTER === 'netlify' ? netlify() : process.env.ADAPTER === 'vercel' ? vercel() : cloudflare()
});