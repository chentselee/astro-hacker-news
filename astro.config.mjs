import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import netlify from "@astrojs/netlify/functions";
import vercel from "@astrojs/vercel/edge";
import cloudflare from "@astrojs/cloudflare";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), tailwind()],
  output: "server",
  adapter:
    process.env.ADAPTER === "netlify"
      ? netlify()
      : process.env.ADAPTER === "vercel"
      ? vercel()
      : process.env.ADAPTER === "cloudflare"
      ? cloudflare()
      : node({ mode: "standalone" }),
});
