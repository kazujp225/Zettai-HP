"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Building2, Heart, Rocket } from 'lucide-react'
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

export default function OfficersPage() {
  const prefersReducedMotion = useReducedMotion()
  
  const officers = [
    {
      name: "山田 太郎",
      position: "代表取締役CEO",
      description: "中学卒業後、独学でプログラミングを習得。AI分野で10年以上の経験を持ち、「ゼッタイやる」精神で多くの困難を乗り越えてきた。",
      expertise: ["AI戦略", "ビジネス開発", "組織運営"],
      philosophy: "学歴・経験不問。「ゼッタイやる」気持ちがあれば、誰でも成功できる。"
    },
    {
      name: "佐藤 花子",
      position: "取締役CTO",
      description: "東京大学工学部卒業後、大手IT企業で10年間AI研究に従事。技術的な深い知見と実装力を兼ね備え、ZETTAIの技術戦略をリードする。",
      expertise: ["機械学習", "深層学習", "技術戦略"],
      philosophy: "技術は人を幸せにするためのツール。常に社会価値を意識した開発を心がける。"
    },
    {
      name: "田中 一郎",
      position: "取締役営業部長",
      description: "光通信グループで営業部長として年間売上100億円を達成。圧倒的な営業力とチームマネジメント力でZETTAIの事業拡大を牽引する。",
      expertise: ["BtoB営業", "事業戦略", "顧客開拓"],
      philosophy: "営業は課題解決のプロフェッショナル。お客様の成功が我々の成功。"
    }
  ]

  const advisors = [
    {
      name: "高橋 智",
      position: "アドバイザー",
      description: "元グーグル日本法人代表。AI・テクノロジー分野での豊富な知見と国際的なネットワークでZETTAIの成長を支援。",
      expertise: ["グローバル戦略", "テクノロジー戦略", "組織開発"]
    },
    {
      name: "渡辺 恵",
      position: "アドバイザー",
      description: "元ソフトバンク投資部門責任者。投資・M&A戦略のエキスパートとして、ZETTAIの資金調達と成長戦略をサポート。",
      expertise: ["投資戦略", "M&A", "事業開発"]
    }
  ]

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section - Minimal & Professional */}
      <section className="relative pt-20 lg:pt-28 pb-8 lg:pb-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
              経営陣
            </h1>
            <div className="w-16 h-0.5 bg-gray-300" />
          </motion.div>
        </div>
      </section>

      {/* Officers Section - Grid Layout */}
      <section className="py-8 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={prefersReducedMotion ? { initial: {}, animate: {} } : staggerChildren}
            className="max-w-6xl mx-auto"
          >
            {/* Officers List - Professional Layout */}
            <div className="space-y-8 lg:space-y-12">
              {officers.map((officer, index) => (
                <motion.div 
                  key={index} 
                  variants={prefersReducedMotion ? { initial: {}, animate: {} } : fadeInUp}
                  className="group"
                >
                  <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start pb-8 border-b border-gray-200 last:border-0">
                    {/* Name & Position */}
                    <div className="lg:col-span-3">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{officer.name}</h3>
                      <p className="text-sm text-gray-600 mb-3">{officer.position}</p>
                      <div className="hidden lg:flex flex-wrap gap-1">
                        {officer.expertise.map((skill, idx) => (
                          <span key={idx} className="text-xs text-gray-500">
                            {skill}{idx < officer.expertise.length - 1 && "・"}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Description */}
                    <div className="lg:col-span-6">
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {officer.description}
                      </p>
                      <p className="text-sm text-gray-500 italic">
                        {officer.philosophy}
                      </p>
                    </div>
                    
                    {/* Stats */}
                    <div className="lg:col-span-3 lg:text-right">
                      <div className="inline-flex items-center gap-2 text-sm text-gray-500">
                        <span className="font-medium">Since 2022</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Advisors Section - Minimal */}
      <section className="py-8 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <h2 className="text-2xl font-light text-gray-900 mb-4">
                アドバイザー
              </h2>
              <div className="w-16 h-0.5 bg-gray-300" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {advisors.map((advisor, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeInUp}
                  className="bg-white p-6 rounded-lg shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{advisor.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{advisor.position}</p>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    {advisor.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {advisor.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section - Grid */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-2xl font-light text-gray-900 mb-8">
              私たちの価値観
            </h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: Users, label: "実力主義", value: "学歴・年齢不問" },
                { icon: Heart, label: "多様性", value: "異なる背景を尊重" },
                { icon: Rocket, label: "挑戦", value: "ゼッタイやる精神" },
                { icon: Building2, label: "成長", value: "100億円企業へ" }
              ].map((item, index) => {
                const IconComponent = item.icon
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="text-center"
                  >
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="w-6 h-6 text-gray-600" />
                    </div>
                    <h3 className="font-medium text-gray-900 mb-1">{item.label}</h3>
                    <p className="text-sm text-gray-600">{item.value}</p>
                  </motion.div>
                )
              })}
            </div>

            {/* CTA */}
            <motion.div
              variants={fadeInUp}
              className="mt-16 text-center"
            >
              <div className="bg-gray-900 rounded-xl p-8 lg:p-12">
                <h3 className="text-xl lg:text-2xl font-light text-white mb-4">
                  一緒に100億円企業を創りませんか？
                </h3>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  私たちは「人」を最も大切にする会社です。
                  多様な経験とスキルを持つ仲間と一緒に、AIで未来を創りましょう。
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100" asChild>
                    <Link href="/careers">
                      採用情報を見る
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-gray-700 text-white hover:bg-gray-800" asChild>
                    <Link href="/contact">
                      カジュアル面談を申し込む
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}