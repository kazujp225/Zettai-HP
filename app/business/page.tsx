"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Brain, Building, Target, CheckCircle2, ArrowRight, TrendingUp, Rocket, Star, Zap, Globe } from 'lucide-react'
import Link from 'next/link'

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

export default function BusinessPage() {
  const prefersReducedMotion = useReducedMotion()
  
  const services = [
    {
      icon: Users,
      title: "AI人材事業",
      subtitle: "トップクラスの人材を企業に提供",
      description: "AI分野の専門知識を持つ優秀な人材の採用・派遣サービスを提供。企業のAI導入を人材面からサポートします。",
      features: [
        "トップクラスAI人材の採用・派遣",
        "企業向けAI人材育成プログラム",
        "技術コンサルティング・伴走支援",
        "チーム構築・組織設計支援"
      ],
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      iconBg: "bg-blue-100"
    },
    {
      icon: Brain,
      title: "AI導入支援",
      subtitle: "業務プロセスの完全自動化",
      description: "企業の業務プロセスにAIを導入し、効率化と自動化を実現。戦略策定から実装まで一貫してサポートします。",
      features: [
        "業務プロセス自動化システム構築",
        "AI戦略策定・実装サポート",
        "導入後の運用・最適化支援",
        "ROI最大化コンサルティング"
      ],
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
      iconBg: "bg-emerald-100"
    },
    {
      icon: Building,
      title: "AI総合商社",
      subtitle: "最適なソリューションをワンストップで",
      description: "業界・用途別に最適なAIツール・サービスを選定し、統合・運用までを一括サポートする総合商社機能。",
      features: [
        "業界特化型AIツール選定",
        "既存システムとの連携・統合",
        "継続的メンテナンス・アップデート",
        "コスト最適化・効果測定"
      ],
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      iconBg: "bg-purple-100"
    }
  ]

  const achievements = [
    { number: "500+", label: "支援企業数", description: "大手企業から中小企業まで" },
    { number: "98%", label: "顧客満足度", description: "継続率の高さが実証" },
    { number: "15倍", label: "平均生産性向上", description: "導入企業の実績平均" },
    { number: "3.5億円", label: "年間売上", description: "2024年実績" }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Mobile Optimized */}
      <section className="pt-20 sm:pt-24 lg:pt-32 pb-8 sm:pb-12 lg:pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-3 sm:mb-4 lg:mb-6 bg-blue-100 text-blue-700 hover:bg-blue-100 text-xs sm:text-sm">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
              AI導入率100%達成
            </Badge>
            <h1 className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6">
              AIで企業の可能性を<br className="sm:hidden" />
              <span className="sm:hidden">最大化する</span>
              <span className="hidden sm:inline">最大化する事業</span>
            </h1>
            <p className="text-sm sm:text-base lg:text-xl text-gray-600 mb-6 sm:mb-8 lg:mb-12 leading-relaxed px-4 sm:px-0">
              人材・技術・戦略の3つの軸で、<br className="sm:hidden" />
              企業のAI導入を総合的にサポート。<br className="hidden sm:inline" />
              単なるツール提供ではなく、<br className="sm:hidden" />
              本質的な価値創造を実現します。
            </p>
            <div className="flex gap-3 justify-center px-4 sm:px-0">
              <Button size="default" className="flex-1 sm:flex-none text-sm sm:text-base h-10 sm:h-11 lg:h-12" asChild>
                <Link href="/contact">
                  事業相談をする
                  <ArrowRight className="ml-1.5 sm:ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </Button>
              <Button 
                size="default" 
                variant="outline"
                className="flex-1 sm:flex-none text-sm sm:text-base h-10 sm:h-11 lg:h-12"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                サービス詳細を見る
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section - Mobile Optimized */}
      <section id="services" className="py-8 sm:py-12 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-6 sm:mb-10 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-4 lg:mb-6">
                3つのコア事業
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 px-4 sm:px-0">
                AI人材・技術・戦略の3つの軸で、<br className="sm:hidden" />
                企業のDX推進を総合的にサポートします。
              </p>
            </motion.div>

            {/* Mobile Layout - Compact Cards */}
            <div className="lg:hidden space-y-4">
              {services.map((service, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <div className={`${service.bgColor} rounded-xl border border-gray-200 overflow-hidden`}>
                    {/* Mobile Header */}
                    <div className="p-4 border-b border-gray-200">
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 ${service.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <service.icon className={`w-6 h-6 ${service.iconColor}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                          <p className="text-xs text-gray-600">{service.subtitle}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Mobile Content */}
                    <div className="p-4 space-y-3">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {service.description}
                      </p>
                      
                      {/* Compact Features List */}
                      <div className="bg-white rounded-lg p-3">
                        <h4 className="text-xs font-semibold text-gray-900 mb-2">主要サービス</h4>
                        <ul className="space-y-1.5">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <CheckCircle2 className="w-3.5 h-3.5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-xs text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button size="sm" className="w-full bg-white text-gray-800 hover:bg-gray-50 shadow-sm" asChild>
                        <Link href="/contact">
                          詳しく相談する
                          <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Desktop Layout - Keep Original */}
            <div className="hidden lg:block space-y-12">
              {services.map((service, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className={`p-8 border-0 shadow-lg ${service.bgColor}`}>
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="flex items-center mb-6">
                          <div className={`w-16 h-16 ${service.iconBg} rounded-xl flex items-center justify-center mr-6`}>
                            <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                          </div>
                          <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">{service.title}</h3>
                            <p className="text-lg text-gray-600">{service.subtitle}</p>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                        <Button className="bg-white text-gray-800 hover:bg-gray-50 shadow-md" asChild>
                          <Link href="/contact">
                            詳しく相談する
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Link>
                        </Button>
                      </div>
                      <div className="bg-white rounded-2xl p-6 shadow-sm">
                        <h4 className="font-bold text-gray-900 mb-4">主要サービス</h4>
                        <ul className="space-y-3">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                              <span className="text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section - Mobile Optimized */}
      <section className="py-8 sm:py-12 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-6 sm:mb-10 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-4 lg:mb-6">
                実績・成果
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 px-4 sm:px-0">
                数字で見るZETTAIの成果と実績
              </p>
            </motion.div>

            {/* Mobile Layout - 2x2 Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-8">
              {achievements.map((achievement, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="p-3 sm:p-4 lg:p-6 text-center bg-white border-0 shadow-md lg:shadow-lg hover:shadow-lg lg:hover:shadow-xl transition-shadow">
                    <div className="text-xl sm:text-2xl lg:text-4xl font-bold text-blue-600 mb-1 lg:mb-2">{achievement.number}</div>
                    <div className="text-xs sm:text-sm lg:text-lg font-semibold text-gray-900 mb-0.5 lg:mb-2">{achievement.label}</div>
                    <div className="text-xs lg:text-sm text-gray-600 hidden sm:block">{achievement.description}</div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section - Mobile Optimized */}
      <section className="py-8 sm:py-12 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-4 lg:mb-6">
              私たちのビジョン
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 lg:mb-12 px-4 sm:px-0">
              5年以内に売上100億円を達成し、<br className="sm:hidden" />
              日本のAI導入を加速する
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-8 mb-6 sm:mb-8 lg:mb-12">
              <Card className="p-4 sm:p-5 lg:p-6 bg-blue-50 border-blue-200">
                <div className="flex items-center mb-2 sm:mb-3 lg:mb-4">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-2 sm:mr-3" />
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">2029年目標</h3>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 lg:mb-2">100億円</div>
                <p className="text-sm sm:text-base text-gray-700">年間売上目標達成</p>
              </Card>

              <Card className="p-4 sm:p-5 lg:p-6 bg-emerald-50 border-emerald-200">
                <div className="flex items-center mb-2 sm:mb-3 lg:mb-4">
                  <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 mr-2 sm:mr-3" />
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">社会インパクト</h3>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-emerald-600 mb-1 lg:mb-2">10,000社</div>
                <p className="text-sm sm:text-base text-gray-700">AI導入支援企業数</p>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4">
                持続可能な成長モデル
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-5 lg:mb-6">
                単なる売上拡大ではなく、<br className="sm:hidden" />
                顧客価値の創造と社会課題の解決を通じて、<br className="hidden sm:inline" />
                長期的に成長し続ける企業を目指します。
              </p>
              <Button size="default" className="w-full sm:w-auto text-sm sm:text-base h-10 sm:h-11 lg:h-12" asChild>
                <Link href="/contact">
                  ビジョン実現に参加する
                  <Rocket className="ml-1.5 sm:ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Mobile Optimized */}
      <section className="py-8 sm:py-12 lg:py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6">
              一緒にAIで未来を創りませんか？
            </h2>
            <p className="text-sm sm:text-base lg:text-xl text-gray-300 mb-6 sm:mb-8 lg:mb-12 px-4 sm:px-0">
              あなたの企業のAI導入を全力でサポートします。
            </p>

            <div className="flex gap-3 justify-center px-4 sm:px-0">
              <Button size="default" className="bg-blue-600 hover:bg-blue-700 flex-1 sm:flex-none text-sm sm:text-base h-10 sm:h-11 lg:h-12" asChild>
                <Link href="/contact">
                  事業相談をする
                  <ArrowRight className="ml-1.5 sm:ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </Button>
              <Button size="default" variant="outline" className="border-white bg-white/10 text-white hover:bg-white hover:text-gray-900 flex-1 sm:flex-none text-sm sm:text-base h-10 sm:h-11 lg:h-12" asChild>
                <Link href="/careers">
                  採用情報を見る
                </Link>
              </Button>
            </div>

            <p className="mt-6 sm:mt-8 text-xs sm:text-sm text-gray-400">
              お問い合わせから24時間以内にご返信いたします。
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}