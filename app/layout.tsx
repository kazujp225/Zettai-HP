import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ZETTAI - ただ、高く挑め。ゼッタイやる。",
  description: "学歴も経験も関係ない。這い上がる意志だけが、未来を動かす。AI時代のトップランナーとして、共に挑戦しよう。",
  keywords: "AI人材採用, AI導入支援, 自動化AI, AI総合商社, スタートアップ, キャリア, 未経験",
  authors: [{ name: "ZETTAI Inc." }],
  openGraph: {
    title: "ZETTAI - ただ、高く挑め。ゼッタイやる。",
    description: "学歴も経験も関係ない。這い上がる意志だけが、未来を動かす。",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZETTAI - ただ、高く挑め。",
    description: "学歴も経験も関係ない。這い上がる意志だけが、未来を動かす。",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={inter.className}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}