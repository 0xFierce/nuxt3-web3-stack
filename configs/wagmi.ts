import { http, createConfig } from 'use-wagmi'
import { bsc, mainnet, bscTestnet } from 'use-wagmi/chains'
import { walletConnect } from 'use-wagmi/connectors'

const config = createConfig({
    chains: [bsc, mainnet, bscTestnet],
    connectors: [
        walletConnect({
            projectId: process.env.WALLETCONNECT_PROJECT_ID,
            qrModalOptions: { 
                themeMode: 'dark', 
            }
        })
    ],
    transports: {
        [bsc.id]: http('https://bsc-dataseed1.binance.org'),
        [mainnet.id]: http('https://eth-mainnet.public.blastapi.io')
    },
})

export default config