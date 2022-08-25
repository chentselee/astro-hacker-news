import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import netlify from "@astrojs/netlify/edge-functions";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [preact()],
  output: 'server',
  adapter: process.env.ADAPTER === 'netlify' ? netlify() : cloudflare()
});