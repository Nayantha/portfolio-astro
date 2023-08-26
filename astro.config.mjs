import {defineConfig} from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    site: "https://nayantha.github.io",
    base: "./portfolio-astro",
    integrations: [tailwind()]
});