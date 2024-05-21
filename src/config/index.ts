import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { cookieStorage, createStorage } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

if (!projectId) throw new Error('Project ID is not defined')

export const config = defaultWagmiConfig({
  projectId,
  chains: [mainnet, sepolia],
  metadata: {
    name: 'KBCFoundation',
    description: 'Web3Modal Explorer',
    url: 'https://testnet-scan.kbcfoundation.com',
    icons: ['https://testnet-scan.kbcfoundation.com/assets/network_logo_dark.png']
  },
  storage: createStorage({
    storage: cookieStorage
  }),
  ssr: true
})
