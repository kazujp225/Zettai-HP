"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github, Clock, User } from "lucide-react"

type PortfolioItem = {
  id: number
  title: string
  description: string
  image: string
  url: string
  github?: string
  category: string
  time: string
  author: string
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function PortfolioPage() {
  const prefersReducedMotion = useReducedMotion()
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "クリエイティブエージェンシー",
      description: "モダンなデザインのクリエイティブエージェンシーのウェブサイト",
      image: "/placeholder.svg?key=jrk1i",
      url: "https://example.com/creative-agency",
      github: "https://github.com/username/creative-agency",
      category: "corporate",
      time: "36時間",
      author: "田中太郎",
    },
    {
      id: 2,
      title: "フードデリバリーアプリ",
      description: "レスポンシブなフードデリバリーサービスのランディングページ",
      image: "/placeholder.svg?key=74uuz",
      url: "https://example.com/food-delivery",
      category: "service",
      time: "42時間",
      author: "佐藤花子",
    },
    {
      id: 3,
      title: "ポートフォリオサイト",
      description: "デザイナー向けのミニマルなポートフォリオテンプレート",
      image: "/placeholder.svg?key=3tzv5",
      url: "https://example.com/portfolio",
      github: "https://github.com/username/portfolio",
      category: "portfolio",
      time: "24時間",
      author: "鈴木一郎",
    },
    {
      id: 4,
      title: "SaaSダッシュボード",
      description: "モダンなSaaSサービスの管理画面UI",
      image: "/placeholder.svg?key=fsjnl",
      url: "https://example.com/saas-dashboard",
      github: "https://github.com/username/saas-dashboard",
      category: "app",
      time: "48時間",
      author: "山田健太",
    },
    {
      id: 5,
      title: "ECサイト",
      description: "ファッションブランドのオンラインストア",
      image: "/placeholder.svg?key=82ky6",
      url: "https://example.com/fashion-store",
      category: "ecommerce",
      time: "40時間",
      author: "伊藤美咲",
    },
    {
      id: 6,
      title: "旅行ブログ",
      description: "写真中心の旅行ブログテンプレート",
      image: "/placeholder.svg?key=0ss8n",
      url: "https://example.com/travel-blog",
      github: "https://github.com/username/travel-blog",
      category: "blog",
      time: "32時間",
      author: "高橋直樹",
    },
  ]

  const [filter, setFilter] = useState("all")

  const filteredItems = filter === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === filter)

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section - Mobile Optimized */}
      <div className="pt-24 lg:pt-32 pb-12 lg:pb-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8 }}
            className="text-center mb-8 lg:mb-12"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold mb-4 lg:mb-6 leading-tight">
              <span className="text-emerald-400">完成</span>サイト<br className="sm:hidden" />
              <span className="text-red-500">ショーケース</span>
            </h1>
            <p className="text-base lg:text-xl text-gray-300 max-w-3xl mx-auto px-4 leading-relaxed">
              ブートキャンプ参加者が48時間以内に作成した作品集。<br className="hidden lg:block" /> あなたも次は、ここに作品を掲載しませんか？
            </p>
          </motion.div>

          {/* Filter Tabs - Mobile Optimized */}
          <motion.div 
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.2 }}
            className="mb-6 lg:mb-8"
          >
            <Tabs defaultValue="all" onValueChange={setFilter}>
              <TabsList className="grid grid-cols-3 lg:grid-cols-7 mb-6 lg:mb-8 h-auto p-1 bg-gray-800 border border-gray-700">
                <TabsTrigger value="all" className="text-xs lg:text-sm py-2 px-2 lg:px-4 data-[state=active]:bg-red-600 data-[state=active]:text-white min-h-[40px] touch-manipulation">すべて</TabsTrigger>
                <TabsTrigger value="corporate" className="text-xs lg:text-sm py-2 px-2 lg:px-4 data-[state=active]:bg-red-600 data-[state=active]:text-white min-h-[40px] touch-manipulation">企業</TabsTrigger>
                <TabsTrigger value="service" className="text-xs lg:text-sm py-2 px-2 lg:px-4 data-[state=active]:bg-red-600 data-[state=active]:text-white min-h-[40px] touch-manipulation">サービス</TabsTrigger>
                <TabsTrigger value="portfolio" className="text-xs lg:text-sm py-2 px-2 lg:px-4 data-[state=active]:bg-red-600 data-[state=active]:text-white min-h-[40px] touch-manipulation">ポートフォリオ</TabsTrigger>
                <TabsTrigger value="app" className="text-xs lg:text-sm py-2 px-2 lg:px-4 data-[state=active]:bg-red-600 data-[state=active]:text-white min-h-[40px] touch-manipulation">アプリ</TabsTrigger>
                <TabsTrigger value="ecommerce" className="text-xs lg:text-sm py-2 px-2 lg:px-4 data-[state=active]:bg-red-600 data-[state=active]:text-white min-h-[40px] touch-manipulation">EC</TabsTrigger>
                <TabsTrigger value="blog" className="text-xs lg:text-sm py-2 px-2 lg:px-4 data-[state=active]:bg-red-600 data-[state=active]:text-white min-h-[40px] touch-manipulation">ブログ</TabsTrigger>
              </TabsList>
            </Tabs>
          </motion.div>

          {/* Portfolio Grid - Mobile Optimized */}
          <motion.div 
            initial="initial"
            animate="animate"
            variants={prefersReducedMotion ? { initial: {}, animate: {} } : staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8"
          >
            {filteredItems.map((item, index) => (
              <motion.div 
                key={item.id} 
                variants={prefersReducedMotion ? { initial: {}, animate: {} } : fadeInUp}
                className="group"
              >
                <Card className="bg-gray-900 border-gray-700 overflow-hidden transition-all duration-300 hover:border-emerald-500 h-full">
                  <div className="relative">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full aspect-video object-cover"
                      loading="lazy"
                    />
                    {/* Mobile: Show description below image, Desktop: Show on hover */}
                    <div className="absolute inset-0 bg-black/70 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 flex-col justify-center items-center p-3 lg:p-4 hidden lg:flex">
                      <p className="text-white mb-3 text-sm lg:text-base text-center">{item.description}</p>
                      <div className="flex flex-col sm:flex-row gap-2 lg:gap-4">
                        <Button size="sm" className="bg-red-600 hover:bg-red-700 min-h-[36px] touch-manipulation text-xs lg:text-sm" asChild>
                          <a href={item.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3 lg:h-4 w-3 lg:w-4 mr-1 lg:mr-2" />
                            サイトを見る
                          </a>
                        </Button>
                        {item.github && (
                          <Button size="sm" variant="outline" className="border-gray-400 text-white hover:bg-gray-700 min-h-[36px] touch-manipulation text-xs lg:text-sm" asChild>
                            <a href={item.github} target="_blank" rel="noopener noreferrer">
                              <Github className="h-3 lg:h-4 w-3 lg:w-4 mr-1 lg:mr-2" />
                              GitHub
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-3 lg:p-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                      <h3 className="font-bold text-base lg:text-lg">{item.title}</h3>
                      <div className="bg-emerald-900 text-emerald-300 text-xs px-2 py-1 rounded self-start flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {item.time}
                      </div>
                    </div>
                    <div className="text-xs lg:text-sm text-gray-400 mb-3 flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      作成者: {item.author}
                    </div>
                    <p className="text-xs lg:text-sm text-gray-300 mb-3 lg:hidden">{item.description}</p>
                    {/* Mobile action buttons */}
                    <div className="flex flex-col sm:flex-row gap-2 lg:hidden">
                      <Button size="sm" className="bg-red-600 hover:bg-red-700 min-h-[40px] touch-manipulation text-sm" asChild>
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          サイトを見る
                        </a>
                      </Button>
                      {item.github && (
                        <Button size="sm" variant="outline" className="border-gray-400 text-white hover:bg-gray-700 min-h-[40px] touch-manipulation text-sm" asChild>
                          <a href={item.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            GitHub
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section - Mobile Optimized */}
          <motion.div 
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.4 }}
            className="mt-12 lg:mt-16 text-center"
          >
            <h2 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 px-4">あなたの作品をここに掲載しませんか？</h2>
            <Button size="lg" className="bg-red-600 hover:bg-red-700 min-h-[48px] px-6 lg:px-8 text-base lg:text-lg touch-manipulation" asChild>
              <Link href="/bootcamp">ブートキャンプに参加する</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
