import { defineConfig } from "vitepress";

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: "ja-JP",
  title: "VitePress-BoilerPlate",
  description: "Vite & Vue powered static site generator.",
  base: "/aion0721/vitepress-boilerplate/",

  themeConfig: {
    search: {
      provider: "local",
    },
  },
});
