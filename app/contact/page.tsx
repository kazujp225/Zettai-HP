"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building2, Mail, Phone, MapPin, Clock, Send, CheckCircle2, FileText, Users } from "lucide-react"

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6 }
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState("business")
  
  const [businessFormData, setBusinessFormData] = useState({
    name: "",
    email: "",
    company: "",
    position: "",
    purpose: "",
    message: "",
  })

  const [careerFormData, setCareerFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleBusinessInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setBusinessFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCareerInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setCareerFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleBusinessSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitSuccess(true)
      
      setTimeout(() => {
        setSubmitSuccess(false)
        setBusinessFormData({
          name: "",
          email: "",
          company: "",
          position: "",
          purpose: "",
          message: "",
        })
      }, 3000)
    } catch (error) {
      console.error('送信エラー:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCareerSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitSuccess(true)
      
      setTimeout(() => {
        setSubmitSuccess(false)
        setCareerFormData({
          name: "",
          email: "",
          phone: "",
          position: "",
          message: "",
        })
      }, 3000)
    } catch (error) {
      console.error('送信エラー:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Corporate Style */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              お問い合わせ
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              AI技術導入、採用、事業提携など、お気軽にご相談ください。<br />
              専門チームが迅速に対応いたします。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-12 max-w-lg mx-auto h-14">
                <TabsTrigger 
                  value="business" 
                  className="text-base font-medium data-[state=active]:bg-gray-900 data-[state=active]:text-white"
                >
                  <Building2 className="h-4 w-4 mr-2" />
                  法人のお客様
                </TabsTrigger>
                <TabsTrigger 
                  value="careers" 
                  className="text-base font-medium data-[state=active]:bg-gray-900 data-[state=active]:text-white"
                >
                  <Users className="h-4 w-4 mr-2" />
                  採用希望の方
                </TabsTrigger>
              </TabsList>

              <div className="grid lg:grid-cols-3 gap-12">
                {/* Business Contact Form */}
                <TabsContent value="business" className="lg:col-span-2 mt-0">
                  <motion.div
                    initial="initial"
                    animate="animate"
                    variants={fadeInUp}
                  >
                    <Card className="border-0 shadow-xl">
                      <CardHeader className="pb-8 px-8 pt-8">
                        <CardTitle className="text-2xl font-bold text-gray-900">
                          法人様向けお問い合わせ
                        </CardTitle>
                        <CardDescription className="text-gray-600 mt-2">
                          AI導入支援、技術コンサルティング、事業提携等のご相談を承ります
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="px-8 pb-8">
                        <form onSubmit={handleBusinessSubmit} className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                ご担当者名 <span className="text-red-500">*</span>
                              </label>
                              <Input
                                id="name"
                                name="name"
                                value={businessFormData.name}
                                onChange={handleBusinessInputChange}
                                required
                                className="h-12"
                                placeholder="山田 太郎"
                              />
                            </div>

                            <div>
                              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                メールアドレス <span className="text-red-500">*</span>
                              </label>
                              <Input
                                id="email"
                                name="email"
                                type="email"
                                value={businessFormData.email}
                                onChange={handleBusinessInputChange}
                                required
                                className="h-12"
                                placeholder="yamada@company.co.jp"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                                会社名 <span className="text-red-500">*</span>
                              </label>
                              <Input
                                id="company"
                                name="company"
                                value={businessFormData.company}
                                onChange={handleBusinessInputChange}
                                required
                                className="h-12"
                                placeholder="株式会社〇〇"
                              />
                            </div>

                            <div>
                              <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                                部署・役職
                              </label>
                              <Input
                                id="position"
                                name="position"
                                value={businessFormData.position}
                                onChange={handleBusinessInputChange}
                                className="h-12"
                                placeholder="営業部 部長"
                              />
                            </div>
                          </div>

                          <div>
                            <label htmlFor="purpose" className="block text-sm font-medium text-gray-700 mb-2">
                              お問い合わせ種別 <span className="text-red-500">*</span>
                            </label>
                            <Select 
                              onValueChange={(value) => setBusinessFormData((prev) => ({ ...prev, purpose: value }))}
                              required
                            >
                              <SelectTrigger className="h-12">
                                <SelectValue placeholder="選択してください" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="ai-consulting">AI導入コンサルティング</SelectItem>
                                <SelectItem value="technical-support">技術支援・開発委託</SelectItem>
                                <SelectItem value="partnership">事業提携・パートナーシップ</SelectItem>
                                <SelectItem value="recruitment">人材採用支援</SelectItem>
                                <SelectItem value="training">企業研修・教育プログラム</SelectItem>
                                <SelectItem value="other">その他</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                              お問い合わせ内容 <span className="text-red-500">*</span>
                            </label>
                            <Textarea
                              id="message"
                              name="message"
                              value={businessFormData.message}
                              onChange={handleBusinessInputChange}
                              required
                              className="min-h-[150px]"
                              rows={6}
                              placeholder="具体的なご相談内容をご記入ください"
                            />
                          </div>

                          <Button 
                            type="submit" 
                            disabled={isSubmitting || submitSuccess}
                            className="w-full h-14 bg-gray-900 hover:bg-gray-800 text-white text-base font-medium"
                          >
                            {submitSuccess ? (
                              <>
                                <CheckCircle2 className="mr-2 h-5 w-5" />
                                送信完了
                              </>
                            ) : isSubmitting ? (
                              <>
                                <div className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                                送信中...
                              </>
                            ) : (
                              <>
                                送信する
                                <Send className="ml-2 h-5 w-5" />
                              </>
                            )}
                          </Button>
                        </form>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>

                {/* Career Contact Form */}
                <TabsContent value="careers" className="lg:col-span-2 mt-0">
                  <motion.div
                    initial="initial"
                    animate="animate"
                    variants={fadeInUp}
                  >
                    <Card className="border-0 shadow-xl">
                      <CardHeader className="pb-8 px-8 pt-8">
                        <CardTitle className="text-2xl font-bold text-gray-900">
                          採用エントリーフォーム
                        </CardTitle>
                        <CardDescription className="text-gray-600 mt-2">
                          キャリア採用、新卒採用、インターンシップのご応募を受け付けています
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="px-8 pb-8">
                        <form onSubmit={handleCareerSubmit} className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <label htmlFor="career-name" className="block text-sm font-medium text-gray-700 mb-2">
                                お名前 <span className="text-red-500">*</span>
                              </label>
                              <Input
                                id="career-name"
                                name="name"
                                value={careerFormData.name}
                                onChange={handleCareerInputChange}
                                required
                                className="h-12"
                                placeholder="山田 太郎"
                              />
                            </div>

                            <div>
                              <label htmlFor="career-email" className="block text-sm font-medium text-gray-700 mb-2">
                                メールアドレス <span className="text-red-500">*</span>
                              </label>
                              <Input
                                id="career-email"
                                name="email"
                                type="email"
                                value={careerFormData.email}
                                onChange={handleCareerInputChange}
                                required
                                className="h-12"
                                placeholder="yamada@example.com"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <label htmlFor="career-phone" className="block text-sm font-medium text-gray-700 mb-2">
                                電話番号
                              </label>
                              <Input
                                id="career-phone"
                                name="phone"
                                type="tel"
                                value={careerFormData.phone}
                                onChange={handleCareerInputChange}
                                className="h-12"
                                placeholder="090-1234-5678"
                              />
                            </div>

                            <div>
                              <label htmlFor="career-position" className="block text-sm font-medium text-gray-700 mb-2">
                                希望職種 <span className="text-red-500">*</span>
                              </label>
                              <Select 
                                onValueChange={(value) => setCareerFormData((prev) => ({ ...prev, position: value }))}
                                required
                              >
                                <SelectTrigger className="h-12">
                                  <SelectValue placeholder="選択してください" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="ai-engineer">AIエンジニア</SelectItem>
                                  <SelectItem value="fullstack-engineer">フルスタックエンジニア</SelectItem>
                                  <SelectItem value="data-scientist">データサイエンティスト</SelectItem>
                                  <SelectItem value="business-dev">ビジネスデベロッパー</SelectItem>
                                  <SelectItem value="product-manager">プロダクトマネージャー</SelectItem>
                                  <SelectItem value="intern">インターンシップ</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div>
                            <label htmlFor="career-message" className="block text-sm font-medium text-gray-700 mb-2">
                              自己PR・志望動機 <span className="text-red-500">*</span>
                            </label>
                            <Textarea
                              id="career-message"
                              name="message"
                              value={careerFormData.message}
                              onChange={handleCareerInputChange}
                              required
                              className="min-h-[150px]"
                              rows={6}
                              placeholder="あなたの経験、スキル、ZETTAIで実現したいことをお聞かせください"
                            />
                          </div>

                          <Button 
                            type="submit" 
                            disabled={isSubmitting || submitSuccess}
                            className="w-full h-14 bg-gray-900 hover:bg-gray-800 text-white text-base font-medium"
                          >
                            {submitSuccess ? (
                              <>
                                <CheckCircle2 className="mr-2 h-5 w-5" />
                                送信完了
                              </>
                            ) : isSubmitting ? (
                              <>
                                <div className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                                送信中...
                              </>
                            ) : (
                              <>
                                エントリーする
                                <Send className="ml-2 h-5 w-5" />
                              </>
                            )}
                          </Button>
                        </form>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>

                {/* Sidebar Information */}
                <div className="lg:col-span-1 space-y-8">
                  {/* Company Information */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <Card className="border-gray-200">
                      <CardHeader>
                        <CardTitle className="text-lg font-bold text-gray-900">会社情報</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">株式会社ZETTAI</h4>
                          <p className="text-sm text-gray-600">AI技術開発・コンサルティング</p>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="flex items-start">
                            <MapPin className="h-4 w-4 text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
                            <div>
                              <p className="text-sm font-medium text-gray-900">本社</p>
                              <p className="text-sm text-gray-600">
                                〒150-0043<br />
                                東京都渋谷区道玄坂1-2-3<br />
                                渋谷フクラス 15F
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start">
                            <Mail className="h-4 w-4 text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
                            <div>
                              <p className="text-sm font-medium text-gray-900">メール</p>
                              <a href="mailto:contact@zettai.ai" className="text-sm text-blue-600 hover:text-blue-800">
                                contact@zettai.ai
                              </a>
                            </div>
                          </div>

                          <div className="flex items-start">
                            <Phone className="h-4 w-4 text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
                            <div>
                              <p className="text-sm font-medium text-gray-900">電話</p>
                              <a href="tel:0364555000" className="text-sm text-blue-600 hover:text-blue-800">
                                03-6455-5000
                              </a>
                              <p className="text-xs text-gray-500 mt-1">平日 9:00-18:00</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Response Time */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <Card className="border-gray-200">
                      <CardHeader>
                        <CardTitle className="text-lg font-bold text-gray-900 flex items-center">
                          <Clock className="h-4 w-4 mr-2" />
                          対応時間
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm font-medium text-gray-900">営業時間</p>
                            <p className="text-sm text-gray-600">平日 9:00 - 18:00</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">返信目安</p>
                            <p className="text-sm text-gray-600">24時間以内（営業日）</p>
                          </div>
                          <div className="pt-3 border-t">
                            <p className="text-xs text-gray-500">
                              土日祝日・年末年始は翌営業日の対応となります
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Documents */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <Card className="border-gray-200">
                      <CardHeader>
                        <CardTitle className="text-lg font-bold text-gray-900 flex items-center">
                          <FileText className="h-4 w-4 mr-2" />
                          資料ダウンロード
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <Button variant="outline" className="w-full justify-start h-10" asChild>
                            <Link href="/download/company-profile">
                              会社案内
                            </Link>
                          </Button>
                          <Button variant="outline" className="w-full justify-start h-10" asChild>
                            <Link href="/download/service-guide">
                              サービス資料
                            </Link>
                          </Button>
                          <Button variant="outline" className="w-full justify-start h-10" asChild>
                            <Link href="/download/case-studies">
                              導入事例集
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </div>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  )
}