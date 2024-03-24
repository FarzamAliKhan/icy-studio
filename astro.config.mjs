import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import compress from "astro-compress";

import preload from "astro-preload";

// https://astro.build/config
export default defineConfig({
  integrations: [preload(), compress(), tailwind(), react(), ]
});