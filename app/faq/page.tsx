"use client"

import type React from "react"

import { useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Send, HelpCircle, MessageSquare, Search, ArrowRight, CheckCircle, Plus } from "lucide-react"
import Link from "next/link"

type FAQ = {
  id: string
  question: string
  answer: string
  category: string
}

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const prefersReducedMotion = useReducedMotion()
  const [faqs, setFaqs] = useState<FAQ[]>([
    {
      id: "1",
      question: "ZettAIとはどんな会社ですか？",
      answer:
        "ZettAIは、AIの力を活用して企業や個人の成長を支援する会社です。「ゼッタイやる」という熱い想いを持ち、AI人材事業、AI導入支援、AI総合商社の3つのコア事業を展開し、5年以内に売上100億円を目指しています。",
      category: "company",
    },
    {
      id: "2",
      question: "どのような事業を行っていますか？",
      answer:
        "主に3つの事業を展開しています。1) AI人材事業：トップクラスのAI人材の採用・派遣、2) AI導入支援：業務プロセスの自動化システム構築、3) AI総合商社：最適なAIツール・サービスをワンストップで提供しています。",
      category: "service",
    },
    {
      id: "3",
      question: "AIの導入支援はどのような形で行っていますか？",
      answer:
        "企業のニーズに合わせたカスタマイズ支援を行っています。業務分析から始まり、最適なAIツールの選定、導入、社内トレーニングまで一貫してサポートします。また、専門のAIエンジニアを派遣することも可能です。",
      category: "service",
    },
    {
      id: "4",
      question: "ZettAIへの投資や協業は可能ですか？",
      answer:
        "はい、可能です。現在、事業拡大に向けて様々なパートナーシップを募集しています。投資や協業についてのご相談は、お問い合わせフォームからお願いします。",
      category: "ir",
    },
    {
      id: "5",
      question: "採用条件はありますか？",
      answer:
        "「ゼッタイやる」という強い意志を持っていることが最大の条件です。学歴や経験よりも、熱意と成長意欲を重視しています。AI エンジニア、営業・ビジネス開発、プロダクトマネージャーを募集中です。",
      category: "company",
    },
    {
      id: "6",
      question: "チームに参加するにはどうすればいいですか？",
      answer:
        "採用情報ページから各職種の詳細をご確認いただき、お問い合わせフォームまたは直接応募してください。カジュアル面談も随時受け付けています。熱意と「ゼッタイやる」という意志を持った方を常に募集しています。",
      category: "company",
    },
    {
      id: "7",
      question: "会社の成長目標について教えてください",
      answer:
        "2029年までに年間売上100億円の達成を目指しています。現在の年間売上3.5億円（2024年実績）から、AI市場の年率30%以上成長と企業のDX需要急拡大を背景に、急成長を計画しています。",
      category: "company",
    },
    {
      id: "8",
      question: "どのような企業文化ですか？",
      answer:
        "実力主義、多様性、「ゼッタイやる」精神を大切にしています。中卒から東大卒まで多様なバックグラウンドを持つメンバーが、学歴・年齢・経験に関係なく成果と貢献度で評価される環境です。",
      category: "company",
    },
    {
      id: "9",
      question: "リモートワークは可能ですか？",
      answer:
        "はい、フレックスタイム制とリモートワークを導入しています。また、書籍購入支援、カンファレンス参加費支給、資格取得支援など、成長を支援する制度も充実しています。",
      category: "company",
    },
    {
      id: "10",
      question: "お問い合わせの返信はどのくらいで来ますか？",
      answer:
        "お問い合わせをいただいてから24時間以内にご返信いたします。緊急の場合は、直接メール（contact@zettai.com）または電話（03-1234-5678）でご連絡ください。",
      category: "support",
    },
  ])

  const [newQuestion, setNewQuestion] = useState({
    question: "",
    name: "",
    email: "",
  })

  const [filter, setFilter] = useState("all")

  const filteredFaqs = faqs.filter((faq) => {
    const matchesFilter = filter === "all" || faq.category === filter
    const matchesSearch = searchTerm === "" || 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // 新しい質問をFAQリストに追加（実際のアプリでは、これはサーバーに送信される）
    const newFaq: FAQ = {
      id: `user-${Date.now()}`,
      question: newQuestion.question,
      answer: "ありがとうございます。この質問は現在確認中です。回答が準備でき次第、このページに追加されます。",
      category: "user",
    }

    setFaqs([...faqs, newFaq])
    setNewQuestion({ question: "", name: "", email: "" })

    // 自動スクロール
    setTimeout(() => {
      const element = document.getElementById(newFaq.id)
      element?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section - Mobile Optimized */}
      <section className="pt-24 lg:pt-32 pb-12 lg:pb-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-4 lg:mb-6 bg-blue-100 text-blue-700 hover:bg-blue-100 text-sm">
              <HelpCircle className="w-3 lg:w-4 h-3 lg:h-4 mr-2" />
              よくある質問
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight">
              疑問を解決して<br className="hidden sm:block" />次のステップへ
            </h1>
            <p className="text-base lg:text-xl text-gray-600 mb-8 lg:mb-12 leading-relaxed max-w-3xl mx-auto">
              ZettAIに関するよくある質問をまとめました。<br className="hidden lg:block" />
              見つからない場合は、お気軽にお問い合わせください。
            </p>
            <Button 
              size="lg" 
              onClick={() => document.getElementById('faq-search')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto min-h-[48px] px-6 lg:px-8 text-base touch-manipulation"
            >
              質問を検索する
              <Search className="ml-2 w-4 lg:w-5 h-4 lg:h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Main FAQ Section - Mobile Optimized */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Search Bar - Mobile Optimized */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              variants={prefersReducedMotion ? { initial: {}, animate: {} } : fadeInUp}
              id="faq-search"
              className="mb-8 lg:mb-12"
            >
              <Card className="p-4 lg:p-6 bg-gray-50 border-0 shadow-sm">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 lg:w-5 h-4 lg:h-5" />
                  <Input
                    type="text"
                    placeholder="質問を検索してください..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 lg:pl-12 h-12 lg:h-14 bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-base touch-manipulation"
                  />
                </div>
              </Card>
            </motion.div>

            {/* Category Filters - Mobile Optimized */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              variants={prefersReducedMotion ? { initial: {}, animate: {} } : fadeInUp}
              className="mb-8 lg:mb-12"
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap gap-2 lg:gap-3 lg:justify-center">
                <Button
                  variant={filter === "all" ? "default" : "outline"}
                  onClick={() => setFilter("all")}
                  className={`min-h-[44px] text-sm lg:text-base touch-manipulation ${
                    filter === "all" ? "bg-blue-600 hover:bg-blue-700" : "border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  すべて
                </Button>
                <Button
                  variant={filter === "company" ? "default" : "outline"}
                  onClick={() => setFilter("company")}
                  className={`min-h-[44px] text-sm lg:text-base touch-manipulation ${
                    filter === "company" ? "bg-blue-600 hover:bg-blue-700" : "border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  会社について
                </Button>
                <Button
                  variant={filter === "service" ? "default" : "outline"}
                  onClick={() => setFilter("service")}
                  className={`min-h-[44px] text-sm lg:text-base touch-manipulation ${
                    filter === "service" ? "bg-blue-600 hover:bg-blue-700" : "border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  事業・サービス
                </Button>
                <Button
                  variant={filter === "ir" ? "default" : "outline"}
                  onClick={() => setFilter("ir")}
                  className={`min-h-[44px] text-sm lg:text-base touch-manipulation ${
                    filter === "ir" ? "bg-blue-600 hover:bg-blue-700" : "border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  投資・IR
                </Button>
                <Button
                  variant={filter === "support" ? "default" : "outline"}
                  onClick={() => setFilter("support")}
                  className={`min-h-[44px] text-sm lg:text-base touch-manipulation ${
                    filter === "support" ? "bg-blue-600 hover:bg-blue-700" : "border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  サポート
                </Button>
                <Button
                  variant={filter === "user" ? "default" : "outline"}
                  onClick={() => setFilter("user")}
                  className={`min-h-[44px] text-sm lg:text-base touch-manipulation col-span-2 sm:col-span-1 ${
                    filter === "user" ? "bg-blue-600 hover:bg-blue-700" : "border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  ユーザー質問
                </Button>
              </div>
            </motion.div>

            {/* FAQ Results */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
            >
              {filteredFaqs.length === 0 ? (
                <Card className="p-8 text-center bg-gray-50 border-0">
                  <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">質問が見つかりませんでした</h3>
                  <p className="text-gray-600 mb-4">検索条件を変更するか、下記から直接お問い合わせください。</p>
                  <Button asChild>
                    <Link href="/contact">
                      お問い合わせする
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </Card>
              ) : (
                <Accordion type="single" collapsible className="space-y-4">
                  {filteredFaqs.map((faq, index) => (
                    <motion.div key={faq.id} variants={fadeInUp}>
                      <AccordionItem
                        value={faq.id}
                        id={faq.id}
                        className={`border-0 shadow-sm rounded-lg overflow-hidden ${faq.category === "user" ? "bg-blue-50" : "bg-white"}`}
                      >
                        <AccordionTrigger className="text-gray-900 hover:text-blue-600 text-left px-6 py-4 hover:no-underline">
                          <div className="flex items-start w-full">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                {faq.category === "user" && (
                                  <Badge className="bg-blue-100 text-blue-700 text-xs">
                                    新着
                                  </Badge>
                                )}
                                <Badge variant="outline" className="text-xs">
                                  {faq.category === "company" && "会社"}
                                  {faq.category === "service" && "事業"}
                                  {faq.category === "ir" && "投資"}
                                  {faq.category === "support" && "サポート"}
                                  {faq.category === "user" && "ユーザー"}
                                </Badge>
                              </div>
                              <p className="font-semibold text-left">{faq.question}</p>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 px-6 pb-4 leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </Accordion>
              )}
            </motion.div>

          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                まだ解決しない場合は
              </h2>
              <p className="text-lg text-gray-600">
                お気軽にお問い合わせください。24時間以内にご返信いたします。
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <motion.div variants={fadeInUp}>
                <Card className="p-6 text-center bg-white border-0 shadow-lg hover:shadow-xl transition-shadow h-full">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">お問い合わせ</h3>
                  <p className="text-gray-600 text-sm mb-4">具体的なご質問やご相談はこちらから</p>
                  <Button className="w-full" asChild>
                    <Link href="/contact">
                      お問い合わせする
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="p-6 text-center bg-white border-0 shadow-lg hover:shadow-xl transition-shadow h-full">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">採用について</h3>
                  <p className="text-gray-600 text-sm mb-4">キャリアや採用に関するご質問</p>
                  <Button className="w-full" variant="outline" asChild>
                    <Link href="/careers">
                      採用情報を見る
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="p-6 text-center bg-white border-0 shadow-lg hover:shadow-xl transition-shadow h-full">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <HelpCircle className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">事業について</h3>
                  <p className="text-gray-600 text-sm mb-4">サービス内容や事業詳細について</p>
                  <Button className="w-full" variant="outline" asChild>
                    <Link href="/business">
                      事業内容を見る
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </Card>
              </motion.div>
            </div>

            {/* Add Question Form */}
            <motion.div variants={fadeInUp}>
              <Card className="p-8 bg-white border-0 shadow-lg">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Plus className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    新しい質問を投稿する
                  </h3>
                  <p className="text-gray-600">
                    こちらから質問を投稿していただくと、FAQに追加される可能性があります。
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-2">
                      質問内容 <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="question"
                      value={newQuestion.question}
                      onChange={(e) => setNewQuestion({ ...newQuestion, question: e.target.value })}
                      placeholder="具体的な質問を入力してください..."
                      required
                      className="bg-gray-50 border-gray-300 focus:border-blue-500 focus:ring-blue-500 min-h-[120px]"
                      rows={5}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        お名前（任意）
                      </label>
                      <Input
                        id="name"
                        value={newQuestion.name}
                        onChange={(e) => setNewQuestion({ ...newQuestion, name: e.target.value })}
                        placeholder="お名前"
                        className="bg-gray-50 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        メールアドレス（任意）
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={newQuestion.email}
                        onChange={(e) => setNewQuestion({ ...newQuestion, email: e.target.value })}
                        placeholder="返信をご希望の場合"
                        className="bg-gray-50 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                    質問を送信
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
