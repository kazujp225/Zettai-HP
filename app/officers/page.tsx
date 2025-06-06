"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Award, BookOpen, ArrowRight, Star, Briefcase, GraduationCap, Trophy, Linkedin, Twitter, Mail } from 'lucide-react'
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
      description: "中学卒業後、独学でプログラミングを習得。AI分野で10年以上の経験を持ち、「ゼッタイやる」精神で多くの困難を乗り越えてきた。学歴に関係なく実力で勝負する文化を築く。",
      background: [
        "中学卒業後、独学でプログラミング習得",
        "AI系スタートアップで5年間の実務経験",
        "フリーランスとして大手企業のAI導入支援",
        "2022年 ZETTAI設立"
      ],
      expertise: ["AI戦略策定", "ビジネス開発", "組織運営", "プロダクト開発"],
      philosophy: "学歴・経験不問。「ゼッタイやる」気持ちがあれば、誰でも成功できる。",
      avatar: "/placeholder-user.jpg"
    },
    {
      name: "佐藤 花子",
      position: "取締役CTO",
      description: "東京大学工学部卒業後、大手IT企業で10年間AI研究に従事。技術的な深い知見と実装力を兼ね備え、ZETTAIの技術戦略をリードする。",
      background: [
        "東京大学工学部 情報工学科卒業",
        "大手IT企業で10年間AI研究開発",
        "機械学習エンジニアとして数々のプロダクト開発",
        "2023年 ZETTAI参画"
      ],
      expertise: ["機械学習", "深層学習", "システム設計", "技術戦略"],
      philosophy: "技術は人を幸せにするためのツール。常に社会価値を意識した開発を心がける。",
      avatar: "/placeholder-user.jpg"
    },
    {
      name: "田中 一郎",
      position: "取締役営業部長",
      description: "光通信グループで営業部長として年間売上100億円を達成。圧倒的な営業力とチームマネジメント力でZETTAIの事業拡大を牽引する。",
      background: [
        "早稲田大学商学部卒業",
        "光通信グループで15年間営業に従事",
        "営業部長として年間売上100億円達成",
        "2023年 ZETTAI参画"
      ],
      expertise: ["BtoB営業", "チームマネジメント", "事業戦略", "顧客開拓"],
      philosophy: "営業は課題解決のプロフェッショナル。お客様の成功が我々の成功。",
      avatar: "/placeholder-user.jpg"
    },
    {
      name: "鈴木 美穂",
      position: "取締役CFO",
      description: "公認会計士として大手監査法人で経験を積んだ後、複数のスタートアップでCFOを歴任。財務戦略と投資戦略でZETTAIの急成長を支える。",
      background: [
        "慶應義塾大学経済学部卒業",
        "公認会計士資格取得",
        "大手監査法人で5年間勤務",
        "スタートアップ3社でCFO経験"
      ],
      expertise: ["財務戦略", "投資戦略", "コーポレートガバナンス", "リスク管理"],
      philosophy: "数字は会社の健康状態を表す。透明性の高い経営で持続的成長を実現する。",
      avatar: "/placeholder-user.jpg"
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
      {/* Hero Section - Mobile Optimized */}
      <section className="pt-24 lg:pt-32 pb-12 lg:pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-4 lg:mb-6 bg-blue-100 text-blue-700 hover:bg-blue-100 text-sm">
              <Users className="w-3 lg:w-4 h-3 lg:h-4 mr-2" />
              エキスパートチーム
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight">
              多様な経験と専門性で<br className="hidden sm:block" />未来を創る経営陣
            </h1>
            <p className="text-base lg:text-xl text-gray-600 mb-8 lg:mb-12 leading-relaxed max-w-3xl mx-auto">
              中卒から東大卒まで、多様なバックグラウンドを持つメンバーが<br className="hidden lg:block" />
              「ゼッタイやる」精神のもと、100億円企業を目指します。
            </p>
            <Button 
              size="lg" 
              onClick={() => document.getElementById('officers')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto min-h-[48px] px-6 lg:px-8 text-base touch-manipulation"
            >
              経営陣を見る
              <ArrowRight className="ml-2 w-4 lg:w-5 h-4 lg:h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Officers Section - Mobile Optimized */}
      <section id="officers" className="py-12 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={prefersReducedMotion ? { initial: {}, animate: {} } : staggerChildren}
            className="max-w-6xl mx-auto"
          >
            <motion.div 
              variants={prefersReducedMotion ? { initial: {}, animate: {} } : fadeInUp} 
              className="text-center mb-12 lg:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
                役員紹介
              </h2>
              <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
                それぞれの専門分野で実績を積んだプロフェッショナルが結集
              </p>
            </motion.div>

            <div className="space-y-8 lg:space-y-12">
              {officers.map((officer, index) => (
                <motion.div 
                  key={index} 
                  variants={prefersReducedMotion ? { initial: {}, animate: {} } : fadeInUp}
                >
                  <Card className="p-6 lg:p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 lg:gap-8">
                      {/* Profile - Mobile Optimized */}
                      <div className="text-center lg:text-left">
                        <div className="w-24 lg:w-32 h-24 lg:h-32 bg-gray-200 rounded-full mx-auto lg:mx-0 mb-4 lg:mb-6 overflow-hidden">
                          <img 
                            src={officer.avatar} 
                            alt={officer.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">{officer.name}</h3>
                        <p className="text-base lg:text-lg font-semibold text-blue-600 mb-3 lg:mb-4">{officer.position}</p>
                        <div className="flex justify-center lg:justify-start gap-2 lg:gap-3">
                          <Button size="sm" variant="outline" className="p-2 min-h-[40px] min-w-[40px] touch-manipulation">
                            <Linkedin className="w-3 lg:w-4 h-3 lg:h-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="p-2 min-h-[40px] min-w-[40px] touch-manipulation">
                            <Twitter className="w-3 lg:w-4 h-3 lg:h-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="p-2 min-h-[40px] min-w-[40px] touch-manipulation">
                            <Mail className="w-3 lg:w-4 h-3 lg:h-4" />
                          </Button>
                        </div>
                      </div>

                      {/* Description & Background */}
                      <div className="lg:col-span-2 space-y-6">
                        <p className="text-gray-700 leading-relaxed">{officer.description}</p>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                              <Briefcase className="w-5 h-5 mr-2 text-blue-600" />
                              経歴
                            </h4>
                            <ul className="space-y-2">
                              {officer.background.map((item, itemIndex) => (
                                <li key={itemIndex} className="text-gray-600 text-sm flex items-start">
                                  <ArrowRight className="w-4 h-4 mr-2 mt-0.5 text-gray-400 flex-shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                              <Star className="w-5 h-5 mr-2 text-emerald-600" />
                              専門領域
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {officer.expertise.map((skill, skillIndex) => (
                                <Badge key={skillIndex} variant="outline" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2 text-purple-600" />
                            経営哲学
                          </h4>
                          <p className="text-gray-700 italic">"{officer.philosophy}"</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Advisors Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                アドバイザー
              </h2>
              <p className="text-lg text-gray-600">
                業界トップクラスの経験と知見を持つアドバイザーが成長を支援
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {advisors.map((advisor, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="p-6 bg-white border-0 shadow-lg h-full">
                    <div className="text-center mb-4">
                      <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{advisor.name}</h3>
                      <p className="text-lg font-semibold text-blue-600 mb-3">{advisor.position}</p>
                    </div>
                    <p className="text-gray-700 mb-4 text-sm leading-relaxed">{advisor.description}</p>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">専門領域</h4>
                      <div className="flex flex-wrap gap-1">
                        {advisor.expertise.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Culture Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              組織文化・価値観
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              多様性を力に変える組織づくり
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="p-6 bg-blue-50 border-blue-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">実力主義</h3>
                <p className="text-gray-700 text-sm">
                  学歴・年齢・経験に関係なく、成果と貢献度で正当に評価します。
                </p>
              </Card>

              <Card className="p-6 bg-emerald-50 border-emerald-200">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">多様性</h3>
                <p className="text-gray-700 text-sm">
                  異なる背景を持つメンバーが協力することで、より大きな成果を生み出します。
                </p>
              </Card>

              <Card className="p-6 bg-purple-50 border-purple-200">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">ゼッタイやる</h3>
                <p className="text-gray-700 text-sm">
                  困難に直面しても諦めず、最後まで責任を持ってやり抜く精神を大切にします。
                </p>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                一緒に100億円企業を創りませんか？
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                私たちは「人」を最も大切にする会社です。あなたの成長が会社の成長です。<br />
                多様な経験とスキルを持つ仲間と一緒に、AIで未来を創りましょう。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/careers">
                    採用情報を見る
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">
                    カジュアル面談を申し込む
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}