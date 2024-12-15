'use client'

import { createAppKit } from '@reown/appkit/react'
import { Ethers5Adapter } from '@reown/appkit-adapter-ethers5'
import { mainnet, arbitrum } from '@reown/appkit/networks'
import Home from '@/app/page'


export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;


const metadata = {
    name: 'Purple',
    description: 'Purple Hackthon template',
    url: 'https://purple.interchangeably.xyz', 
    icons: ['https://purple.interchangeably.xyz']
}


createAppKit({
    adapters: [new Ethers5Adapter()],
    metadata: metadata,
    networks: [mainnet, arbitrum],
    projectId,
    features: {
        analytics: true // Optional - defaults to your Cloud configuration
    }
})

export default function ConnectButton() {
    return <appkit-button />
}

export function AppKit() {
    return (
        <ConnectButton />
    )
}