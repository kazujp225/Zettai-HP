"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card as UICard } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Rocket, Users, Brain, Target, CheckCircle2, MapPin, Clock, DollarSign, Star, GraduationCap, Code, ChartBar, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import CardSwap, { Card } from '@/components/CardSwapClient'
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'

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
  
  const testimonials = [
    {
      quote: "困難に直面しても諦めず、最後まで責任を持ってやり抜く。これが私たちの最も大切にする価値観です。学歴や経験ではなく、この「やり抜く力」こそが成功の鍵だと信じています。",
      name: "山田 太郎",
      designation: "CEO / 創業者",
      src: "/placeholder-user.jpg"
    },
    {
      quote: "AI技術は日進月歩で進化しています。私たちは常に学習し、新しい技術やアイデアを積極的に取り入れ、お客様により良い価値を提供し続けます。",
      name: "佐藤 花子",
      designation: "CTO / 技術責任者",
      src: "/placeholder-user.jpg"
    },
    {
      quote: "一人ひとりの強みを活かし、お互いを尊重し支え合うチームワークを大切にします。多様な背景を持つメンバーが協力することで、より大きな成果を生み出します。",
      name: "鈴木 一郎",
      designation: "人事部長",
      src: "/placeholder-user.jpg"
    },
    {
      quote: "ZETTAIでは実力主義を徹底しています。年齢や学歴に関係なく、成果と貢献度で正当に評価されるため、若手でも大きな裁量を持って働けます。",
      name: "田中 美咲",
      designation: "プロダクトマネージャー",
      src: "/placeholder-user.jpg"
    },
    {
      quote: "最新のAI技術に触れながら、社会に大きなインパクトを与えるプロダクトを開発できる。エンジニアとしてこれ以上の環境はありません。",
      name: "伊藤 健太",
      designation: "リードエンジニア",
      src: "/placeholder-user.jpg"
    }
  ]
  
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
      {/* Hero Section with Card Swap */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-50 to-white pt-20 lg:pt-24">
        <div className="container mx-auto px-4 h-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-6rem)]">
            
            {/* 左側: 既存のテキストコンテンツ */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <Badge className="mb-6 bg-red-100 text-red-700 hover:bg-red-100">
                  <Star className="w-4 h-4 mr-2" />
                  JOIN ZETTAI
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  一緒に<span className="text-red-600">未来</span>を<br />
                  創りませんか？
                </h1>
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                  ZettAIは、AI技術で日本の未来を変える仲間を探しています。<br />
                  実力主義、多様性、そして「ゼッタイやる」精神を持つあなたを待っています。
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">学歴・経験不問</h3>
                    <p className="text-gray-600">やる気と実力があれば、誰でもチャンスがあります</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">急成長環境</h3>
                    <p className="text-gray-600">5年で100億円企業を目指す、刺激的な環境</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">最先端技術</h3>
                    <p className="text-gray-600">ChatGPT、Claude等の最新AI技術を業務で活用</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700" asChild>
                  <Link href="#positions">
                    採用情報を見る
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">
                    カジュアル面談
                  </Link>
                </Button>
              </div>
            </motion.div>
            
            {/* 右側: Card Swap アニメーション (デスクトップ) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:flex lg:items-center lg:justify-center relative"
            >
              <div className="w-full h-[600px] flex items-center justify-center pt-20">
                <CardSwap
                  cardDistance={60}
                  verticalDistance={70}
                  delay={5000}
                  pauseOnHover={false}
                  easing="elastic"
                  width={400}
                  height={500}
                >
                <Card className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-8">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6">
                        <Brain className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold mb-3">AIエンジニア</h3>
                      <p className="text-xl text-white/90 mb-4">最先端技術で未来を創る</p>
                      <p className="text-white/80 leading-relaxed">GPT-4、Claude、最新のAI技術を駆使して、企業の課題を解決するソリューションを開発</p>
                    </div>
                    <Button 
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30" 
                      variant="outline"
                      asChild
                    >
                      <Link href="/contact">
                        このポジションに応募する
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </Card>
                <Card className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6">
                        <Code className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold mb-3">フルスタックエンジニア</h3>
                      <p className="text-xl text-white/90 mb-4">End-to-Endで価値を届ける</p>
                      <p className="text-white/80 leading-relaxed">React/Next.js、Node.js、クラウドインフラまで、幅広い技術スタックで開発</p>
                    </div>
                    <Button 
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30" 
                      variant="outline"
                      asChild
                    >
                      <Link href="/contact">
                        このポジションに応募する
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </Card>
                <Card className="bg-gradient-to-br from-orange-500 to-red-600 text-white p-8">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6">
                        <Rocket className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold mb-3">ビジネスデベロッパー</h3>
                      <p className="text-xl text-white/90 mb-4">技術と事業の架け橋</p>
                      <p className="text-white/80 leading-relaxed">AI技術の可能性を理解し、クライアントの成功を最大化する提案と実行</p>
                    </div>
                    <Button 
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30" 
                      variant="outline"
                      asChild
                    >
                      <Link href="/contact">
                        このポジションに応募する
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </Card>
                <Card className="bg-gradient-to-br from-pink-500 to-rose-600 text-white p-8">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6">
                        <ChartBar className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold mb-3">データサイエンティスト</h3>
                      <p className="text-xl text-white/90 mb-4">データから価値を生み出す</p>
                      <p className="text-white/80 leading-relaxed">機械学習、統計解析、ビッグデータ処理で、意思決定を支援</p>
                    </div>
                    <Button 
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30" 
                      variant="outline"
                      asChild
                    >
                      <Link href="/contact">
                        このポジションに応募する
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </Card>
                </CardSwap>
              </div>
            </motion.div>
          </div>
          
          {/* モバイル用 Card Swap (ヒーローセクションの下) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:hidden pb-20 relative mx-auto"
            style={{ height: '500px', maxWidth: '400px' }}
          >
            <CardSwap
              cardDistance={40}
              verticalDistance={50}
              delay={5000}
              pauseOnHover={false}
              easing="elastic"
              width={300}
              height={400}
            >
              <Card className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">AIエンジニア</h3>
                    <p className="text-lg text-white/90 mb-3">最先端技術で未来を創る</p>
                    <p className="text-white/80 leading-relaxed text-sm">GPT-4、Claude、最新のAI技術を駆使して、企業の課題を解決</p>
                  </div>
                  <Button 
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30 text-sm" 
                    variant="outline"
                    asChild
                  >
                    <Link href="/contact">
                      応募する
                      <ArrowRight className="ml-2 w-3 h-3" />
                    </Link>
                  </Button>
                </div>
              </Card>
              <Card className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-6">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">フルスタックエンジニア</h3>
                    <p className="text-lg text-white/90 mb-3">End-to-Endで価値を届ける</p>
                    <p className="text-white/80 leading-relaxed text-sm">React/Next.js、Node.js、クラウドインフラまで、幅広い技術スタック</p>
                  </div>
                  <Button 
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30 text-sm" 
                    variant="outline"
                    asChild
                  >
                    <Link href="/contact">
                      応募する
                      <ArrowRight className="ml-2 w-3 h-3" />
                    </Link>
                  </Button>
                </div>
              </Card>
              <Card className="bg-gradient-to-br from-orange-500 to-red-600 text-white p-6">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">ビジネスデベロッパー</h3>
                    <p className="text-lg text-white/90 mb-3">技術と事業の架け橋</p>
                    <p className="text-white/80 leading-relaxed text-sm">AI技術の可能性を理解し、クライアントの成功を最大化</p>
                  </div>
                  <Button 
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30 text-sm" 
                    variant="outline"
                    asChild
                  >
                    <Link href="/contact">
                      応募する
                      <ArrowRight className="ml-2 w-3 h-3" />
                    </Link>
                  </Button>
                </div>
              </Card>
              <Card className="bg-gradient-to-br from-pink-500 to-rose-600 text-white p-6">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                      <ChartBar className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">データサイエンティスト</h3>
                    <p className="text-lg text-white/90 mb-3">データから価値を生み出す</p>
                    <p className="text-white/80 leading-relaxed text-sm">機械学習、統計解析、ビッグデータ処理で、意思決定を支援</p>
                  </div>
                  <Button 
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30 text-sm" 
                    variant="outline"
                    asChild
                  >
                    <Link href="/contact">
                      応募する
                      <ArrowRight className="ml-2 w-3 h-3" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </CardSwap>
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
                <UICard className="p-8 text-center border-gray-200 shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Brain className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">最先端技術に触れる</h3>
                  <p className="text-gray-600">
                    ChatGPT、Claude等の最新AI技術を業務で活用。常に技術の最前線で学び続けることができます。
                  </p>
                </UICard>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <UICard className="p-8 text-center border-gray-200 shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">急成長環境</h3>
                  <p className="text-gray-600">
                    5年で100億円を目指す急成長企業。責任あるポジションで、大きな裁量を持って働けます。
                  </p>
                </UICard>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <UICard className="p-8 text-center border-gray-200 shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">実力主義の評価</h3>
                  <p className="text-gray-600">
                    学歴・年齢・経験に関係なく、成果と貢献度で正当に評価。ストックオプション制度もあります。
                  </p>
                </UICard>
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
                  <UICard className="p-8 bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
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
                  </UICard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Culture Section with Animated Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              私たちが大切にする価値観
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              ZETTAIで働く全てのメンバーが共有する価値観です。
            </p>
            
            {/* Values Hero Image Card */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1">
                <div className="relative bg-white rounded-xl p-8 md:p-12">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-50 rounded-xl"></div>
                  <div className="relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 bg-blue-100 rounded-full flex items-center justify-center">
                          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        <h3 className="font-bold text-gray-900">革新</h3>
                        <p className="text-sm text-gray-600">Innovation</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 bg-purple-100 rounded-full flex items-center justify-center">
                          <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </div>
                        <h3 className="font-bold text-gray-900">協働</h3>
                        <p className="text-sm text-gray-600">Collaboration</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 bg-pink-100 rounded-full flex items-center justify-center">
                          <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <h3 className="font-bold text-gray-900">挑戦</h3>
                        <p className="text-sm text-gray-600">Challenge</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 bg-green-100 rounded-full flex items-center justify-center">
                          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <h3 className="font-bold text-gray-900">責任</h3>
                        <p className="text-sm text-gray-600">Responsibility</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-semibold text-gray-900 mb-2">
                        "ゼッタイやる" を合言葉に
                      </p>
                      <p className="text-gray-600">
                        私たちは、不可能を可能にする情熱と、最後までやり抜く責任感を持って、<br className="hidden md:block" />
                        AIの力で社会に価値を届けます。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
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