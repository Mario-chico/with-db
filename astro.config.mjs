import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), db()],
  output: 'hybrid',
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en", "pt-br"],
  }
});