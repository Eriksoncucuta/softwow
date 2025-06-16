import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

export default defineConfig({
  output: 'static', // <-- Línea agregada
  integrations: [tailwind(), react()],
  vite: {
    ssr: {
      noExternal: ['@nextui-org/react']
    }
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop'
    }
  }
});