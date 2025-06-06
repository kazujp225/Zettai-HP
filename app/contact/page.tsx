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
import { Calendar, Clock, Mail, MessageCircle, Phone, Send, User, MapPin, CheckCircle, Sparkles, ArrowRight } from "lucide-react"

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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    purpose: "",
    message: "",
    file: null as File | null,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData((prev) => ({ ...prev, file }))
  }

  const validateForm = () => {
    const errors: Record<string, string> = {}
    
    if (!formData.name.trim()) errors.name = "お名前は必須項目です"
    if (!formData.email.trim()) errors.email = "メールアドレスは必須項目です"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "有効なメールアドレスを入力してください"
    if (!formData.message.trim()) errors.message = "お問い合わせ内容は必須項目です"
    
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
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
        setFormData({
          name: "",
          email: "",
          company: "",
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
          <div className="grid lg:grid-cols-5 gap-6 lg:gap-12">
            {/* Contact Form - 3 columns */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <Card className="border-0 shadow-xl bg-white">
                <CardHeader className="pb-6 lg:pb-8">
                  <CardTitle className="text-2xl lg:text-3xl font-bold text-gray-800">お問い合わせフォーム</CardTitle>
                  <CardDescription className="text-gray-600 text-sm lg:text-base">
                    フォームに記入いただければ、24時間以内にご返信いたします。
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
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
                            value={formData.name}
                            onChange={handleInputChange}
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
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="h-12 lg:h-12 bg-gray-50 border-gray-300 focus:border-red-500 focus:ring-red-500 text-base touch-manipulation"
                            placeholder="example@company.com"
                          />
                        </div>
                      </motion.div>

                      <motion.div variants={prefersReducedMotion ? { initial: {}, animate: {} } : fadeInUp}>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          会社名・組織名
                        </label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="h-12 bg-gray-50 border-gray-300 focus:border-red-500 focus:ring-red-500"
                          placeholder="株式会社ZETTAI"
                        />
                      </motion.div>

                      <motion.div variants={prefersReducedMotion ? { initial: {}, animate: {} } : fadeInUp}>
                        <label htmlFor="purpose" className="block text-sm font-medium text-gray-700 mb-2">
                          お問い合わせ内容 <span className="text-red-500">*</span>
                        </label>
                        <Select 
                          onValueChange={(value) => setFormData((prev) => ({ ...prev, purpose: value }))}
                          required
                        >
                          <SelectTrigger className="h-12 lg:h-12 bg-gray-50 border-gray-300 focus:border-red-500 focus:ring-red-500 text-base touch-manipulation">
                            <SelectValue placeholder="選択してください" />
                          </SelectTrigger>
                          <SelectContent className="bg-white">
                            <SelectItem value="recruitment">採用について</SelectItem>
                            <SelectItem value="partnership">事業パートナーシップ</SelectItem>
                            <SelectItem value="service">サービス導入相談</SelectItem>
                            <SelectItem value="media">メディア取材</SelectItem>
                            <SelectItem value="investment">投資・IR関連</SelectItem>
                            <SelectItem value="bootcamp">ブートキャンプについて</SelectItem>
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
                          value={formData.message}
                          onChange={handleInputChange}
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
                            onChange={handleFileChange}
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