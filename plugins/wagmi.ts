import { UseWagmiPlugin } from 'use-wagmi'
import config from '~/configs/wagmi'

export default defineNuxtPlugin((NuxtApp) => {

  NuxtApp.vueApp.use(UseWagmiPlugin, { config })

})
