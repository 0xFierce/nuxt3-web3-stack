// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  modules: [
    '@nuxtjs/apollo',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
    '@sidebase/nuxt-auth',
    '@vee-validate/nuxt',
    '@nuxt/image',
    'dayjs-nuxt',
    'nuxt-particles',
    'nuxt-lodash'
  ],

  imports: {
    dirs: [
      'graphql/types/*.ts',
      'types/*.ts'
    ],
  },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
        tsconfigRaw: {
          compilerOptions: {
            experimentalDecorators: true
          }
        },
      },
    },
  },

  auth: {
    baseURL: process.env.NODE_ENV === 'production' ? process.env.API_URL : process.env.API_URL_DEV,
    globalAppMiddleware: true,
    provider: {
      type: 'authjs'
    }
  },

  apollo: {
    clients: {
      default: {
        httpEndpoint: `${ process.env.NODE_ENV === 'production' ? process.env.API_URL : process.env.API_URL_DEV }/api/graphql`
      }
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: [
    '~/assets/css/main.css'
  ],

  image: {
    format: ['webp'],
    quality: 80,
  }
})
