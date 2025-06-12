"use client"

import { motion } from "framer-motion"
import { Layers, Zap, BarChart3, ArrowRight, CheckCircle2, Users, Brain, Building, Target } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function BusinessPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div 
              className="inline-block mb-4 lg:mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <span className="px-4 py-2 bg-gray-900 text-white text-xs lg:text-sm font-semibold rounded-full">
                BUSINESS MODEL
              </span>
            </motion.div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 text-gray-900">
              事業内容
            </h1>
            <p className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 lg:px-0">
              現場の課題を深く理解し、AI技術で本質的な解決を提供する<br className="hidden lg:block" />
              3つのアプローチで企業の成長を支援します。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Business Services Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-24 lg:space-y-32 max-w-7xl mx-auto">
            {/* Service 01 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                {/* Left: Number and Title */}
                <div className="order-2 lg:order-1">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-baseline gap-4 mb-6">
                      <span className="text-6xl lg:text-8xl font-bold text-gray-200">01</span>
                      <div className="w-16 h-0.5 bg-gray-300" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                      AI×現場改善型 業務効率化支援
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      私たちは、クライアント企業の現場に担当エンジニアが直接訪問し、1日かけて徹底的に現場課題をヒアリング・精査します。現場で見つけた改善余地や業務の非効率を持ち帰り、社内200名以上のエンジニアチームとAI技術を活用して、最適な業務改善ソリューションを設計・開発します。現場感に基づいた要件定義のプロフェッショナルだからこそ、表面的なヒアリングではなく、本質的な業務改善を実現します。
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Users className="w-5 h-5 text-blue-600" />
                        </div>
                        <span className="text-gray-700">現場訪問による深い課題理解</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Brain className="w-5 h-5 text-blue-600" />
                        </div>
                        <span className="text-gray-700">200名以上のエンジニアチーム</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5 text-blue-600" />
                        </div>
                        <span className="text-gray-700">本質的な業務改善の実現</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Right: Visual */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="order-1 lg:order-2"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-3xl transform rotate-3" />
                    <div className="relative bg-white rounded-3xl p-8 lg:p-12 shadow-2xl">
                      <div className="flex justify-center">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          className="w-32 h-32 lg:w-48 lg:h-48"
                        >
                          <Layers className="w-full h-full text-blue-500" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Service 02 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                {/* Left: Visual */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-3xl transform -rotate-3" />
                    <div className="relative bg-white rounded-3xl p-8 lg:p-12 shadow-2xl">
                      <div className="flex justify-center">
                        <motion.div
                          animate={{ y: [-10, 10, -10] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                          className="w-32 h-32 lg:w-48 lg:h-48"
                        >
                          <Zap className="w-full h-full text-emerald-500" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Right: Number and Title */}
                <div>
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-baseline gap-4 mb-6">
                      <span className="text-6xl lg:text-8xl font-bold text-gray-200">02</span>
                      <div className="w-16 h-0.5 bg-gray-300" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                      デベロッパーマッチングプラットフォーム
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      開発を依頼したいクライアントと、プロフェッショナルなエンジニア・デベロッパーをつなぐプラットフォームを運営しています。既存のクラウドソーシングサービスとは異なり、「発注者が損をしない契約設計」と「エンジニアの業務最適化」を両立した独自のVSモデルを採用。双方にとって安心して長期的な取引ができる環境を提供しています。
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                          <Target className="w-5 h-5 text-emerald-600" />
                        </div>
                        <span className="text-gray-700">発注者が損をしない契約設計</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                          <Users className="w-5 h-5 text-emerald-600" />
                        </div>
                        <span className="text-gray-700">エンジニアの業務最適化</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        </div>
                        <span className="text-gray-700">独自のVSモデル採用</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Service 03 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                {/* Left: Number and Title */}
                <div className="order-2 lg:order-1">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-baseline gap-4 mb-6">
                      <span className="text-6xl lg:text-8xl font-bold text-gray-200">03</span>
                      <div className="w-16 h-0.5 bg-gray-300" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                      データドリブン型 M&Aプラットフォーム
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      経験豊富なプロM&Aアナリストが、財務諸表や定性情報を含めた企業データを徹底分析。数値と現場情報の両面から企業価値を精緻に可視化し、透明性の高いクリーンなM&Aプラットフォームを運営しています。売り手・買い手双方が納得できる、安全で健全なM&A取引をサポートします。
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <BarChart3 className="w-5 h-5 text-purple-600" />
                        </div>
                        <span className="text-gray-700">企業データの徹底分析</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <Building className="w-5 h-5 text-purple-600" />
                        </div>
                        <span className="text-gray-700">企業価値の精緻な可視化</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5 text-purple-600" />
                        </div>
                        <span className="text-gray-700">透明性の高いクリーンな取引</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Right: Visual */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="order-1 lg:order-2"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl transform rotate-3" />
                    <div className="relative bg-white rounded-3xl p-8 lg:p-12 shadow-2xl">
                      <div className="flex justify-center">
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                          className="w-32 h-32 lg:w-48 lg:h-48"
                        >
                          <BarChart3 className="w-full h-full text-purple-500" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl lg:rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl" />
              </div>
              
              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="inline-block mb-4"
                >
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold rounded-full">
                    STRATEGIC PARTNERSHIP
                  </span>
                </motion.div>
                
                <h3 className="text-2xl lg:text-4xl font-bold text-white mb-4">
                  共に成長するパートナーを<br className="sm:hidden" />
                  探しています
                </h3>
                <p className="text-gray-300 mb-8 lg:mb-10 max-w-2xl mx-auto">
                  単なる受託開発ではなく、ビジョンを共有し、<br className="hidden sm:block" />
                  長期的な成長を目指すパートナーシップを構築します
                </p>
                
                <div className="grid sm:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl font-bold text-white mb-1">年商10億+</div>
                    <div className="text-sm text-gray-400">成長企業との協業</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl font-bold text-white mb-1">長期契約</div>
                    <div className="text-sm text-gray-400">継続的な価値創造</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl font-bold text-white mb-1">共同成長</div>
                    <div className="text-sm text-gray-400">Win-Winの関係構築</div>
                  </div>
                </div>
                
                <div className="flex gap-3 justify-center">
                  <Button className="bg-white text-gray-900 hover:bg-gray-100 shadow-lg" asChild>
                    <Link href="/contact">
                      パートナーシップについて相談
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900" asChild>
                    <Link href="/contact">
                      事業シナジーを探る
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}