import { Chains, createWeb3Auth } from '@kolirt/vue-web3-auth'

export default defineNuxtPlugin({
    name: 'web3',
    async setup (nuxtApp) {
        nuxtApp.vueApp.use(createWeb3Auth({
            projectId: process.env.WALLETCONNECT_PROJECT_ID as string,
            chains: [
                Chains.bsc
            ],
            web3modalOptions: {
                themeMode: 'dark'
            }
        }))
    }
})