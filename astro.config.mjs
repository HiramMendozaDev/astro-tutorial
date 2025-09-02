// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://hamr-astro-tutorial.netlify.app/",
  integrations: [preact()]
});