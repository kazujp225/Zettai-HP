"use client"

import dynamic from 'next/dynamic'

const CardSwap = dynamic(() => import('./CardSwap'), {
  ssr: false,
  loading: () => <div className="w-full h-[600px] animate-pulse bg-gray-100 rounded-lg" />
})

export const Card = dynamic(() => import('./CardSwap').then(mod => ({ default: mod.Card })), {
  ssr: false
})

export default CardSwap