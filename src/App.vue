<script setup lang="ts">
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/vue'

const projectId = 'bc3b39325dd604f219c9a5a86446bee1' // change with the new projectId 

// 2. Set chains
const cybria = {
  chainId: 6661,
  name: 'Cybria Mainnet',
  currency: 'CYBA',
  explorerUrl: 'https://cybascan.io',
  rpcUrl: 'https://rpc-mainnet.cybria.io'
}

// 3. Create your application's metadata object
const metadata = {
  name: 'Wallet Connect Setup',
  description: 'WalletConnect For Cybria Network',
  url: 'https://cybria.io', // url must match your domain & subdomain
  icons: ['https://raw.githubusercontent.com/Cybria-Chain/frontend-configs/main/configs/network-icons/cybria.svg']
}

// 4. Create Ethers config
const ethersConfig = defaultConfig({
  /*Required*/
  metadata,

  /*Optional*/
  enableEIP6963: true, // true by default
  enableInjected: true, // true by default
  enableCoinbase: true, // true by default
  rpcUrl: '...', // used for the Coinbase SDK
  defaultChainId: 6661,
})

// 5. Create a Web3Modal instance
const modal = createWeb3Modal({
  ethersConfig,
  chains: [cybria],
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true, // Optional - false as default 
  allowUnsupportedChain: true,
  termsConditionsUrl: 'https://www.mytermsandconditions.com',
  privacyPolicyUrl: 'https://www.myprivacypolicy.com',
  customWallets: [
    {
      id: 'Bridge Cybria',
      name: 'Cybria Wallet',
      homepage: 'https://bridge.cybria.io', // Optional
      image_url: 'https://raw.githubusercontent.com/Cybria-Chain/frontend-configs/main/configs/network-icons/cybria.svg', // Optional
      mobile_link: 'https://swap.cybria.io', // Optional - Deeplink or universal
      desktop_link: 'https://bridge.cybria.io', // Optional - Deeplink
      webapp_link: 'https://bridge.cybria.io', // Optional
      app_store: 'https://bridge.cybria.io', // Optional
      play_store: 'https://bridge.cybria.io' // Optional
    }
  ],
  chainImages: {
    6661: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=032'
  },
  tokens: {
    6661: {
      address: '0x95622Fce49d65D1101f6FDa8b6325459A6188E52',
      image: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=032' //optional
    }
  }
})
</script>

<template>
  <w3m-button />
</template>
