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
    defaultLocale: 'en',
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
        // {
        //   rel: "stylesheet",
        //   href: "https://api.fontshare.com/v2/css?f[]=satoshi@400,401,500,501,700&display=swap",
        // },
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
    },
  },
});
