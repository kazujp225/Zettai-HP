"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Rocket, Users, Brain, Target, CheckCircle2, MapPin, Clock, DollarSign, Star, GraduationCap } from 'lucide-react'
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

export default function CareersPage() {
  const prefersReducedMotion = useReducedMotion()
  
  const jobPositions = [
    {
      title: "AI エンジニア",
      department: "技術開発部",
      type: "正社員",
      location: "東京・リモート",
      salary: "500万円〜1,200万円",
      description: "最新のAI技術を活用したプロダクト開発をリードするポジションです。",
      requirements: [
        "Python、TensorFlow/PyTorchの実務経験",
        "機械学習モデルの設計・実装経験",
        "チーム開発経験"
      ],
      preferred: [
        "LLM（大規模言語モデル）の開発経験",
        "クラウド環境での開発経験",
        "英語でのコミュニケーション能力"
      ]
    },
    {
      title: "営業・ビジネス開発",
      department: "営業部",
      type: "正社員",
      location: "東京",
      salary: "400万円〜1,000万円",
      description: "AI導入を検討する企業への提案営業とビジネス開発を担当します。",
      requirements: [
        "BtoB営業経験2年以上",
        "顧客折衝・提案資料作成スキル",
        "目標達成に向けた行動力"
      ],
      preferred: [
        "IT/SaaS業界での営業経験",
        "大手企業への営業経験",
        "新規事業開発経験"
      ]
    },
    {
      title: "プロダクトマネージャー",
      department: "プロダクト開発部",
      type: "正社員",
      location: "東京・リモート",
      salary: "600万円〜1,500万円",
      description: "AIプロダクトの企画・開発・運用を統括するポジションです。",
      requirements: [
        "プロダクト開発・運用経験3年以上",
        "要件定義・仕様策定スキル",
        "エンジニアとの協業経験"
      ],
      preferred: [
        "AI/ML プロダクトの開発経験",
        "アジャイル開発経験",
        "データ分析スキル"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-100">
              <Star className="w-4 h-4 mr-2" />
              We're Hiring
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              AIで未来を創る仲間を<br />募集しています
            </h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              学歴・経験不問。「ゼッタイやる」という意志があれば、<br />
              あなたの可能性をAIで最大化できる環境があります。
            </p>
            <Button size="lg" asChild>
              <Link href="#positions">
                募集職種を見る
                <Rocket className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                なぜZETTAIで働くのか？
              </h2>
              <p className="text-lg text-gray-600">
                私たちは「人」を最も大切にする会社です。あなたの成長が会社の成長です。
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <motion.div variants={fadeInUp}>
                <Card className="p-8 text-center border-gray-200 shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Brain className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">最先端技術に触れる</h3>
                  <p className="text-gray-600">
                    ChatGPT、Claude等の最新AI技術を業務で活用。常に技術の最前線で学び続けることができます。
                  </p>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="p-8 text-center border-gray-200 shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">急成長環境</h3>
                  <p className="text-gray-600">
                    5年で100億円を目指す急成長企業。責任あるポジションで、大きな裁量を持って働けます。
                  </p>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="p-8 text-center border-gray-200 shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">実力主義の評価</h3>
                  <p className="text-gray-600">
                    学歴・年齢・経験に関係なく、成果と貢献度で正当に評価。ストックオプション制度もあります。
                  </p>
                </Card>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp} className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">充実した福利厚生・制度</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">働き方</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-600">フレックスタイム制</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-600">リモートワーク可</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-600">週休2日制</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">成長支援</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-600">書籍購入支援</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-600">カンファレンス参加費支給</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-600">資格取得支援</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="positions" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                募集職種
              </h2>
              <p className="text-lg text-gray-600">
                現在募集中のポジションです。ご質問・ご相談はお気軽にお問い合わせください。
              </p>
            </motion.div>

            <div className="space-y-8">
              {jobPositions.map((job, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="p-8 bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                          <Badge variant="outline">{job.type}</Badge>
                        </div>
                        <p className="text-gray-600 mb-4">{job.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-2" />
                            {job.department}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            {job.location}
                          </div>
                          <div className="flex items-center">
                            <DollarSign className="w-4 h-4 mr-2" />
                            {job.salary}
                          </div>
                        </div>
                      </div>
                      <Button className="mt-4 lg:mt-0" asChild>
                        <Link href="/contact">応募する</Link>
                      </Button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">必須要件</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-start">
                              <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                              <span className="text-gray-600">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">歓迎要件</h4>
                        <ul className="space-y-2">
                          {job.preferred.map((pref, prefIndex) => (
                            <li key={prefIndex} className="flex items-start">
                              <Star className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                              <span className="text-gray-600">{pref}</span>
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

      {/* Culture Section */}
      <section className="py-20 bg-white">
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
                私たちが大切にする価値観
              </h2>
              <p className="text-lg text-gray-600">
                ZETTAIで働く全てのメンバーが共有する価値観です。
              </p>
            </motion.div>

            <div className="space-y-8">
              <motion.div variants={fadeInUp} className="bg-blue-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">ゼッタイやる</h3>
                <p className="text-gray-700 leading-relaxed">
                  困難に直面しても諦めず、最後まで責任を持ってやり抜く。これが私たちの最も大切にする価値観です。
                  学歴や経験ではなく、この「やり抜く力」こそが成功の鍵だと信じています。
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-emerald-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">学習し続ける</h3>
                <p className="text-gray-700 leading-relaxed">
                  AI技術は日進月歩で進化しています。私たちは常に学習し、新しい技術やアイデアを積極的に取り入れ、
                  お客様により良い価値を提供し続けます。
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-purple-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">チームワーク</h3>
                <p className="text-gray-700 leading-relaxed">
                  一人ひとりの強みを活かし、お互いを尊重し支え合うチームワークを大切にします。
                  多様な背景を持つメンバーが協力することで、より大きな成果を生み出します。
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6">
              一緒にAIで未来を創りませんか？
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              あなたの「ゼッタイやる」気持ちを、私たちは全力でサポートします。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                <Link href="/contact">
                  まずは相談する
                  <Rocket className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900" asChild>
                <Link href="/faq">
                  よくある質問
                </Link>
              </Button>
            </div>

            <p className="mt-8 text-sm text-gray-400">
              カジュアル面談も随時受け付けています。お気軽にお声がけください。
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}