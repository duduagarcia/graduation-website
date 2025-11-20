// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  build: {
    transpile: ["vue"],
  },
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  modules: ["@hypernym/nuxt-gsap","@nuxt/fonts", "@nuxt/image", "@pinia/nuxt",'@nuxtjs/i18n'],
  i18n: {
    vueI18n: './languages.config.ts',
    strategy: 'prefix',
    locales: ['en', 'pt'], // used in URL path prefix
    defaultLocale: 'pt',
  },
  gsap: {
    extraPlugins: {
      scrollTrigger: true,
    },
  },
  fonts: {
    defaults: {
      weights: [400, 500],
      styles: ["normal"]
    }
  },
  app: {
    pageTransition: {
      name: 'page',
      mode: "out-in",
    },
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        {
          rel: "stylesheet",
          href: "https://api.fontshare.com/v2/css?f[]=gambetta@400,500&display=swap",
        },
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
      ],
      bodyAttrs: {
        "data-scrolling-started": "false",
        "data-scrolling-direction": "up",
        "data-menu-opened" : "false",
      },
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { name: 'description', content: 'Ficarei muito feliz em ter você comigo para celebrar essa conquista.' },

        // 🔹 OPEN GRAPH (para WhatsApp, LinkedIn, Facebook)
        { property: 'og:title', content: 'Eduardo A. Garcia • Formatura' },
        { property: 'og:description', content: 'Ficarei muito feliz em ter você comigo para celebrar essa conquista.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://formatura-do-garcia.digital' },
        { property: 'og:image', content: 'https://formatura-do-garcia.digital/og-image.jpg' },

        // 🔹 TWITTER CARD (para Twitter, Discord… opcional)
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Eduardo A. Garcia • Formatura' },
        { name: 'twitter:description', content: 'Ficarei muito feliz em ter você comigo para celebrar essa conquista.' },
        { name: 'twitter:image', content: 'https://formatura-do-garcia.digital/og-image.jpg' },
      ]
    },
  },
});
