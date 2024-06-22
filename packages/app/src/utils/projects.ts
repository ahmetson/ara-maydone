import { linea, lineaSepolia } from 'viem/chains'

export const WALLETCONNECT_PROJECT_ID = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ?? ''
if (!WALLETCONNECT_PROJECT_ID) {
  console.warn('You need to provide a NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID env variable')
}

export type Funding = {}

export const funding: { [key: string]: Funding } = {
  wagmi: {},
}

export const FROG_WARS_CHAIN_ID = process.env.NODE_ENV === 'production' ? linea.id : lineaSepolia.id
