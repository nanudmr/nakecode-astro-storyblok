import { defineConfig } from 'astro/config'
import storyblok from '@storyblok/astro'
import { loadEnv } from 'vite'
import tailwind from '@astrojs/tailwind'
import basicSsl from '@vitejs/plugin-basic-ssl'
const env = loadEnv('', process.cwd(), 'STORYBLOK')

// https://astro.build/config
export default defineConfig({
  site: 'https://nanudmr.github.io',
  base: 'nanudmr/nakecode-astro-storyblok',
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      livePreview: true,
      apiOptions: {
        region: 'us',
      },
      bridge: {
        customParent: 'https://app.storyblok.com',
      },
      components: {
        page: 'storyblok/Page',
        feature: 'storyblok/Feature',
        grid: 'storyblok/Grid',
        teaser: 'storyblok/Teaser',
        herobox: 'storyblok/Herobox',
        menu: 'storyblok/Menu',
        slider: 'storyblok/DoubleSlider',
        services: 'storyblok/Services',
        projects: 'storyblok/ProjectsSlider',
        footer: 'storyblok/Footer'
      },
    }),
    tailwind(),
  ],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
})
