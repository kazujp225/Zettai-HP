"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, Mail, MessageCircle, Phone, Send, User, MapPin, CheckCircle, Sparkles, ArrowRight, Building, Users } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function ContactPage() {
  const prefersReducedMotion = useReducedMotion()
  const [activeTab, setActiveTab] = useState("business")
  
  const [businessFormData, setBusinessFormData] = useState({
    name: "",
    email: "",
    company: "",
    position: "",
    purpose: "",
    message: "",
    file: null as File | null,
  })

  const [careerFormData, setCareerFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    message: "",
    resume: null as File | null,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})

  const handleBusinessInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setBusinessFormData((prev) => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleCareerInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setCareerFormData((prev) => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleBusinessFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setBusinessFormData((prev) => ({ ...prev, file }))
  }

  const handleCareerResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const resume = e.target.files?.[0] || null
    setCareerFormData((prev) => ({ ...prev, resume }))
  }

  const validateBusinessForm = () => {
    const errors: Record<string, string> = {}
    
    if (!businessFormData.name.trim()) errors.name = "お名前は必須項目です"
    if (!businessFormData.email.trim()) errors.email = "メールアドレスは必須項目です"
    else if (!/\S+@\S+\.\S+/.test(businessFormData.email)) errors.email = "有効なメールアドレスを入力してください"
    if (!businessFormData.company.trim()) errors.company = "会社名は必須項目です"
    if (!businessFormData.message.trim()) errors.message = "お問い合わせ内容は必須項目です"
    
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const validateCareerForm = () => {
    const errors: Record<string, string> = {}
    
    if (!careerFormData.name.trim()) errors.name = "お名前は必須項目です"
    if (!careerFormData.email.trim()) errors.email = "メールアドレスは必須項目です"
    else if (!/\S+@\S+\.\S+/.test(careerFormData.email)) errors.email = "有効なメールアドレスを入力してください"
    if (!careerFormData.message.trim()) errors.message = "志望動機・自己PRは必須項目です"
    
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleBusinessSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateBusinessForm()) {
      return
    }
    
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setSubmitSuccess(true)
      
      // Reset form after success
      setTimeout(() => {
        setSubmitSuccess(false)
        setBusinessFormData({
          name: "",
          email: "",
          company: "",
          position: "",
          purpose: "",
          message: "",
          file: null,
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
    
    if (!validateCareerForm()) {
      return
    }
    
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setSubmitSuccess(true)
      
      // Reset form after success
      setTimeout(() => {
        setSubmitSuccess(false)
        setCareerFormData({
          name: "",
          email: "",
          phone: "",
          position: "",
          experience: "",
          message: "",
          resume: null,
        })
      }, 3000)
    } catch (error) {
      console.error('送信エラー:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section - Mobile Optimized */}
      <section className="pt-24 lg:pt-32 pb-12 lg:pb-20 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Cpath d='M0 0h100v100H0z'/%3E%3Cpath d='M0 0l50 50-50 50M50 0l50 50-50 50' fill='%23000000' fill-opacity='0.02'/%3E%3C/g%3E%3C/svg%3E')",
            backgroundSize: "100px 100px",
          }}
        />
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.span
              variants={prefersReducedMotion ? { initial: {}, animate: {} } : fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm text-sm font-medium text-gray-700 shadow-md mb-6"
            >
              <Sparkles className="w-4 h-4 text-red-500" />
              迅速対応・24時間以内返信
            </motion.span>
            
            <motion.h1
              variants={prefersReducedMotion ? { initial: {}, animate: {} } : fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6 text-gray-800 leading-tight"
            >
              話すより<span className="text-red-600">早い</span>？<br />
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">30分</span>で解決
            </motion.h1>
            
            <motion.p
              variants={prefersReducedMotion ? { initial: {}, animate: {} } : fadeInUp}
              className="text-base lg:text-xl text-gray-600 max-w-3xl mx-auto px-4"
            >
              どんな些細なことでも、お気軽にお問い合わせください。
              「ゼッタイやる」チームが、あなたの課題解決をサポートします。
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content - Mobile Optimized */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          {/* Tab Selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto mb-8 lg:mb-12"
          >
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8 h-auto p-1 bg-gray-100 border border-gray-200">
                <TabsTrigger 
                  value="business" 
                  className="flex items-center gap-2 py-3 px-4 text-sm lg:text-base font-medium min-h-[48px] touch-manipulation data-[state=active]:bg-white data-[state=active]:text-red-600 data-[state=active]:shadow-sm"
                >
                  <Building className="h-4 w-4" />
                  企業・事業相談
                </TabsTrigger>
                <TabsTrigger 
                  value="careers" 
                  className="flex items-center gap-2 py-3 px-4 text-sm lg:text-base font-medium min-h-[48px] touch-manipulation data-[state=active]:bg-white data-[state=active]:text-red-600 data-[state=active]:shadow-sm"
                >
                  <Users className="h-4 w-4" />
                  採用・キャリア相談
                </TabsTrigger>
              </TabsList>

              <div className="grid lg:grid-cols-5 gap-6 lg:gap-12">
                {/* Business Contact Form */}
                <TabsContent value="business" className="lg:col-span-3 mt-0">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className="border-0 shadow-xl bg-white">
                      <CardHeader className="pb-6 lg:pb-8">
                        <CardTitle className="text-2xl lg:text-3xl font-bold text-gray-800 flex items-center gap-2">
                          <Building className="h-6 w-6 text-red-600" />
                          企業・事業相談フォーム
                        </CardTitle>
                        <CardDescription className="text-gray-600 text-sm lg:text-base">
                          AI導入支援、人材採用、事業パートナーシップなどのご相談はこちらから
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <form onSubmit={handleBusinessSubmit} className="space-y-6">
                    <motion.div
                      initial="initial"
                      animate="animate"
                      variants={staggerChildren}
                      className="space-y-6"
                    >
                      <motion.div variants={prefersReducedMotion ? { initial: {}, animate: {} } : fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            お名前 <span className="text-red-500">*</span>
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={businessFormData.name}
                            onChange={handleBusinessInputChange}
                            required
                            className="h-12 lg:h-12 bg-gray-50 border-gray-300 focus:border-red-500 focus:ring-red-500 text-base touch-manipulation"
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
                            className="h-12 lg:h-12 bg-gray-50 border-gray-300 focus:border-red-500 focus:ring-red-500 text-base touch-manipulation"
                            placeholder="example@company.com"
                          />
                        </div>
                      </motion.div>

                      <motion.div variants={prefersReducedMotion ? { initial: {}, animate: {} } : fadeInUp}>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          会社名・組織名 <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="company"
                          name="company"
                          value={businessFormData.company}
                          onChange={handleBusinessInputChange}
                          required
                          className="h-12 lg:h-12 bg-gray-50 border-gray-300 focus:border-red-500 focus:ring-red-500 text-base touch-manipulation"
                          placeholder="株式会社ZETTAI"
                        />
                      </motion.div>

                      <motion.div variants={prefersReducedMotion ? { initial: {}, animate: {} } : fadeInUp}>
                        <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                          役職・部署
                        </label>
                        <Input
                          id="position"
                          name="position"
                          value={businessFormData.position}
                          onChange={handleBusinessInputChange}
                          className="h-12 lg:h-12 bg-gray-50 border-gray-300 focus:border-red-500 focus:ring-red-500 text-base touch-manipulation"
                          placeholder="代表取締役、営業部長など"
                        />
                      </motion.div>

                      <motion.div variants={prefersReducedMotion ? { initial: {}, animate: {} } : fadeInUp}>
                        <label htmlFor="purpose" className="block text-sm font-medium text-gray-700 mb-2">
                          お問い合わせ内容 <span className="text-red-500">*</span>
                        </label>
                        <Select 
                          onValueChange={(value) => setBusinessFormData((prev) => ({ ...prev, purpose: value }))}
                          required
                        >
                          <SelectTrigger className="h-12 lg:h-12 bg-gray-50 border-gray-300 focus:border-red-500 focus:ring-red-500 text-base touch-manipulation">
                            <SelectValue placeholder="選択してください" />
                          </SelectTrigger>
                          <SelectContent className="bg-white">
                            <SelectItem value="ai-consulting">AI導入支援・コンサルティング</SelectItem>
                            <SelectItem value="recruitment">AI人材採用支援</SelectItem>
                            <SelectItem value="partnership">事業パートナーシップ</SelectItem>
                            <SelectItem value="investment">投資・IR関連</SelectItem>
                            <SelectItem value="media">メディア取材</SelectItem>
                            <SelectItem value="bootcamp">ブートキャンプ法人研修</SelectItem>
                            <SelectItem value="other">その他</SelectItem>
                          </SelectContent>
                        </Select>
                      </motion.div>

                      <motion.div variants={prefersReducedMotion ? { initial: {}, animate: {} } : fadeInUp}>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          詳細メッセージ <span className="text-red-500">*</span>
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={businessFormData.message}
                          onChange={handleBusinessInputChange}
                          required
                          className="bg-gray-50 border-gray-300 focus:border-red-500 focus:ring-red-500 min-h-[120px] lg:min-h-[150px] text-base touch-manipulation"
                          rows={6}
                          placeholder="具体的な内容をお聞かせください..."
                        />
                      </motion.div>

                      <motion.div variants={prefersReducedMotion ? { initial: {}, animate: {} } : fadeInUp}>
                        <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-2">
                          ファイル添付（任意）
                        </label>
                        <div className="relative">
                          <Input
                            id="file"
                            type="file"
                            onChange={handleBusinessFileChange}
                            className="h-12 bg-gray-50 border-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
                            accept=".pdf,.doc,.docx,.ppt,.pptx,.jpg,.jpeg,.png"
                          />
                          <p className="text-xs text-gray-500 mt-2">
                            PDF、Word、PowerPoint、画像ファイル（最大10MB）
                          </p>
                        </div>
                      </motion.div>

                      <motion.div variants={prefersReducedMotion ? { initial: {}, animate: {} } : fadeInUp}>
                        <Button 
                          type="submit" 
                          disabled={isSubmitting || submitSuccess}
                          className="w-full h-12 lg:h-14 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white text-base lg:text-lg font-semibold shadow-lg hover:shadow-xl transition-all min-h-[48px] touch-manipulation"
                        >
                          {submitSuccess ? (
                            <>
                              <CheckCircle className="mr-2 h-5 w-5" />
                              送信完了しました
                            </>
                          ) : isSubmitting ? (
                            <>
                              <div className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                              送信中...
                            </>
                          ) : (
                            <>
                              お問い合わせを送信
                              <Send className="ml-2 h-5 w-5" />
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
                </TabsContent>

                {/* Career Contact Form */}
                <TabsContent value="careers" className="lg:col-span-3 mt-0">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className="border-0 shadow-xl bg-white">
                      <CardHeader className="pb-6 lg:pb-8">
                        <CardTitle className="text-2xl lg:text-3xl font-bold text-gray-800 flex items-center gap-2">
                          <Users className="h-6 w-6 text-red-600" />
                          採用・キャリア相談フォーム
                        </CardTitle>
                        <CardDescription className="text-gray-600 text-sm lg:text-base">
                          キャリア相談、求人応募、インターンシップなどのご相談はこちらから
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <form onSubmit={handleCareerSubmit} className="space-y-6">
                          <motion.div
                            initial="initial"
                            animate="animate"
                            variants={staggerChildren}
                            className="space-y-6"
                          >
                            <motion.div variants={prefersReducedMotion ? { initial: {}, animate: {} } : fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
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
                                  className="h-12 lg:h-12 bg-gray-50 border-gray-300 focus:border-red-500 focus:ring-red-500 text-base touch-manipulation"
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
                                  className="h-12 lg:h-12 bg-gray-50 border-gray-300 focus:border-red-500 focus:ring-red-500 text-base touch-manipulation"
                                  placeholder="example@university.ac.jp"
                                />
                              </div>
                            </motion.div>

                            <motion.div variants={prefersReducedMotion ? { initial: {}, animate: {} } : fadeInUp}>
                              <label htmlFor="career-phone" className="block text-sm font-medium text-gray-700 mb-2">
                                電話番号
                              </label>
                              <Input
                                id="career-phone"
                                name="phone"
                                type="tel"
                                value={careerFormData.phone}
                                onChange={handleCareerInputChange}
                                className="h-12 lg:h-12 bg-gray-50 border-gray-300 focus:border-red-500 focus:ring-red-500 text-base touch-manipulation"
                                placeholder="090-1234-5678"
                              />
                            </motion.div>

                            <motion.div variants={prefersReducedMotion ? { initial: {}, animate: {} } : fadeInUp}>
                              <label htmlFor="career-position" className="block text-sm font-medium text-gray-700 mb-2">
                                希望職種・ポジション <span className="text-red-500">*</span>
                              </label>
                              <Select 
                                onValueChange={(value) => setCareerFormData((prev) => ({ ...prev, position: value }))}
                                required
                              >
                                <SelectTrigger className="h-12 lg:h-12 bg-gray-50 border-gray-300 focus:border-red-500 focus:ring-red-500 text-base touch-manipulation">
                                  <SelectValue placeholder="選択してください" />
                                </SelectTrigger>
                                <SelectContent className="bg-white">
                                  <SelectItem value="ai-engineer">AIエンジニア</SelectItem>
                                  <SelectItem value="ml-engineer">機械学習エンジニア</SelectItem>
                                  <SelectItem value="data-scientist">データサイエンティスト</SelectItem>
                                  <SelectItem value="frontend-engineer">フロントエンドエンジニア</SelectItem>
                                  <SelectItem value="backend-engineer">バックエンドエンジニア</SelectItem>
                                  <SelectItem value="business-dev">事業開発</SelectItem>
                                  <SelectItem value="sales">営業</SelectItem>
                                  <SelectItem value="marketing">マーケティング</SelectItem>
                                  <SelectItem value="hr">人事</SelectItem>
                                  <SelectItem value="intern">インターンシップ</SelectItem>
                                  <SelectItem value="consulting">キャリア相談のみ</SelectItem>
                                  <SelectItem value="other">その他</SelectItem>
                                </SelectContent>
                              </Select>
                            </motion.div>

                            <motion.div variants={prefersReducedMotion ? { initial: {}, animate: {} } : fadeInUp}>
                              <label htmlFor="career-experience" className="block text-sm font-medium text-gray-700 mb-2">
                                経験・スキル
                              </label>
                              <Select 
                                onValueChange={(value) => setCareerFormData((prev) => ({ ...prev, experience: value }))}
                              >
                                <SelectTrigger className="h-12 lg:h-12 bg-gray-50 border-gray-300 focus:border-red-500 focus:ring-red-500 text-base touch-manipulation">
                                  <SelectValue placeholder="選択してください" />
                                </SelectTrigger>
                                <SelectContent className="bg-white">
                                  <SelectItem value="student">学生（未経験）</SelectItem>
                                  <SelectItem value="junior">実務経験1-2年</SelectItem>
                                  <SelectItem value="mid">実務経験3-5年</SelectItem>
                                  <SelectItem value="senior">実務経験5年以上</SelectItem>
                                  <SelectItem value="bootcamp">ブートキャンプ修了</SelectItem>
                                  <SelectItem value="self-taught">独学</SelectItem>
                                  <SelectItem value="research">研究・学術経験</SelectItem>
                                </SelectContent>
                              </Select>
                            </motion.div>

                            <motion.div variants={prefersReducedMotion ? { initial: {}, animate: {} } : fadeInUp}>
                              <label htmlFor="career-message" className="block text-sm font-medium text-gray-700 mb-2">
                                志望動機・自己PR <span className="text-red-500">*</span>
                              </label>
                              <Textarea
                                id="career-message"
                                name="message"
                                value={careerFormData.message}
                                onChange={handleCareerInputChange}
                                required
                                className="bg-gray-50 border-gray-300 focus:border-red-500 focus:ring-red-500 min-h-[120px] lg:min-h-[150px] text-base touch-manipulation"
                                rows={6}
                                placeholder="なぜZettAIで働きたいのか、あなたの経験やスキル、今後のキャリアビジョンなどをお聞かせください..."
                              />
                            </motion.div>

                            <motion.div variants={prefersReducedMotion ? { initial: {}, animate: {} } : fadeInUp}>
                              <label htmlFor="career-resume" className="block text-sm font-medium text-gray-700 mb-2">
                                履歴書・ポートフォリオ（推奨）
                              </label>
                              <div className="relative">
                                <Input
                                  id="career-resume"
                                  type="file"
                                  onChange={handleCareerResumeChange}
                                  className="h-12 bg-gray-50 border-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
                                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                                />
                                <p className="text-xs text-gray-500 mt-2">
                                  PDF、Word、画像ファイル（最大10MB）
                                </p>
                              </div>
                            </motion.div>

                            <motion.div variants={prefersReducedMotion ? { initial: {}, animate: {} } : fadeInUp}>
                              <Button 
                                type="submit" 
                                disabled={isSubmitting || submitSuccess}
                                className="w-full h-12 lg:h-14 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white text-base lg:text-lg font-semibold shadow-lg hover:shadow-xl transition-all min-h-[48px] touch-manipulation"
                              >
                                {submitSuccess ? (
                                  <>
                                    <CheckCircle className="mr-2 h-5 w-5" />
                                    送信完了しました
                                  </>
                                ) : isSubmitting ? (
                                  <>
                                    <div className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                                    送信中...
                                  </>
                                ) : (
                                  <>
                                    応募・相談を送信
                                    <Send className="ml-2 h-5 w-5" />
                                  </>
                                )}
                              </Button>
                            </motion.div>
                          </motion.div>
                        </form>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>

            {/* Sidebar - 2 columns */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2 space-y-4 lg:space-y-6"
            >
              {/* Quick Zoom Booking */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-emerald-50 to-teal-50">
                <CardHeader>
                  <CardTitle className="text-lg lg:text-xl font-bold text-gray-800 flex items-center">
                    <Calendar className="mr-2 h-4 lg:h-5 w-4 lg:w-5 text-emerald-600" />
                    30分Zoom予約
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    直接話したい方は、こちらから予約できます
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <Button className="w-full justify-start h-12 lg:h-12 bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 shadow-sm min-h-[48px] touch-manipulation text-sm lg:text-base">
                      <User className="mr-2 h-4 lg:h-4 w-4 lg:w-4 text-emerald-600" />
                      代表取締役との面談
                    </Button>
                    <Button className="w-full justify-start h-12 lg:h-12 bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 shadow-sm min-h-[48px] touch-manipulation text-sm lg:text-base">
                      <User className="mr-2 h-4 lg:h-4 w-4 lg:w-4 text-emerald-600" />
                      技術責任者との面談
                    </Button>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-emerald-100">
                    <div className="text-sm font-medium text-gray-700 mb-3">次回空き時間</div>
                    <div className="space-y-2">
                      {["今日 15:00-15:30", "明日 10:00-10:30", "明日 14:00-14:30"].map((time, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                          className="flex items-center text-gray-600 hover:text-emerald-600 cursor-pointer transition-colors"
                        >
                          <Clock className="mr-2 h-4 w-4" />
                          {time}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Direct Contact */}
              <Card className="border-0 shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="text-lg lg:text-xl font-bold text-gray-800">直接連絡</CardTitle>
                  <CardDescription className="text-gray-600">
                    緊急の場合は、こちらからご連絡ください
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a href="mailto:contact@zettai.com" className="flex items-center p-3 lg:p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors group min-h-[48px] touch-manipulation">
                    <Mail className="mr-3 h-4 lg:h-5 w-4 lg:w-5 text-red-500" />
                    <div>
                      <div className="font-medium text-gray-800 group-hover:text-red-600 transition-colors text-sm lg:text-base">メール</div>
                      <div className="text-xs lg:text-sm text-gray-600">contact@zettai.com</div>
                    </div>
                  </a>

                  <a href="tel:0312345678" className="flex items-center p-3 lg:p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors group min-h-[48px] touch-manipulation">
                    <Phone className="mr-3 h-4 lg:h-5 w-4 lg:w-5 text-red-500" />
                    <div>
                      <div className="font-medium text-gray-800 group-hover:text-red-600 transition-colors text-sm lg:text-base">電話</div>
                      <div className="text-xs lg:text-sm text-gray-600">03-1234-5678（平日 9:00-18:00）</div>
                    </div>
                  </a>

                  <div className="flex items-center p-3 lg:p-4 rounded-lg bg-gray-50">
                    <MapPin className="mr-3 h-4 lg:h-5 w-4 lg:w-5 text-red-500" />
                    <div>
                      <div className="font-medium text-gray-800 text-sm lg:text-base">オフィス</div>
                      <div className="text-xs lg:text-sm text-gray-600">東京都渋谷区道玄坂1-2-3</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Link */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 to-red-50">
                <CardContent className="p-6">
                  <h3 className="text-base lg:text-lg font-bold text-gray-800 mb-2">お問い合わせ前に</h3>
                  <p className="text-gray-600 text-xs lg:text-sm mb-4">
                    よくある質問をまとめています。先にご確認いただくと、より早く解決できるかもしれません。
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full border-red-200 hover:bg-red-50 text-red-600 min-h-[48px] touch-manipulation text-sm lg:text-base"
                    asChild
                  >
                    <Link href="/faq">
                      FAQページを見る
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
              </div>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Floating Chat Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 rounded-full p-3 lg:p-4 shadow-2xl hover:shadow-3xl transition-all group min-h-[48px] min-w-[48px] touch-manipulation">
          <MessageCircle className="h-5 lg:h-6 w-5 lg:w-6 group-hover:scale-110 transition-transform" />
        </Button>
      </motion.div>
    </div>
  )
}