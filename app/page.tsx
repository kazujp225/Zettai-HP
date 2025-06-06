"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Rocket, ArrowRight, TrendingUp, Users, Brain, Building, Target, CheckCircle2 } from 'lucide-react'
import { JoinCtaButton } from "@/components/join-cta-button"

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

// Optimized Counter Animation Component
function AnimatedCounter({ target, suffix = "", duration = 2000, className = "" }) {
  const [count, setCount] = useState(0)
  const countRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()
  const isInView = useInView(countRef, { once: true, threshold: 0.3, margin: "0px 0px -100px 0px" })
  
  useEffect(() => {
    if (!isInView) return
    
    // Skip animation if user prefers reduced motion
    if (prefersReducedMotion) {
      setCount(target)
      return
    }
    
    let animationFrame
    let startTime = null
    const startValue = 0
    const endValue = target
    const adjustedDuration = Math.min(duration, 3000) // Cap duration for mobile
    
    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime
      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / adjustedDuration, 1)
      
      // Optimized easing function
      const easedProgress = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2
      const currentCount = Math.floor(startValue + (endValue - startValue) * easedProgress)
      
      setCount(currentCount)
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }
    
    animationFrame = requestAnimationFrame(animate)
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isInView, target, duration, prefersReducedMotion])
  
  return (
    <span ref={countRef} className={className}>
      {count}{suffix}
    </span>
  )
}

export default function Home() {
  const [email, setEmail] = useState("")
  const prefersReducedMotion = useReducedMotion()

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section - Mobile-Optimized Minimalist Design */}
      <section className="relative min-h-screen flex items-center bg-white px-4 sm:px-6 lg:px-8">
        {/* Optimized Geometric Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Responsive Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.02] hidden sm:block">
            <div className="w-full h-full" style={{
              backgroundImage: `
                linear-gradient(90deg, #000 1px, transparent 1px),
                linear-gradient(180deg, #000 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }} />
          </div>

          {/* Minimalist Geometric Elements - Desktop Only */}
          <motion.div 
            className="absolute top-20 right-4 sm:right-20 w-1 h-16 sm:h-32 bg-gray-200 hidden sm:block"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: prefersReducedMotion ? 1 : 1 }}
            transition={{ duration: prefersReducedMotion ? 0 : 1.5, delay: prefersReducedMotion ? 0 : 0.5 }}
          />
          <motion.div 
            className="absolute top-20 right-2 sm:right-16 w-16 sm:w-32 h-1 bg-gray-200 hidden sm:block"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: prefersReducedMotion ? 1 : 1 }}
            transition={{ duration: prefersReducedMotion ? 0 : 1.5, delay: prefersReducedMotion ? 0 : 0.8 }}
          />

          <motion.div 
            className="absolute bottom-32 left-4 sm:left-20 w-1 h-12 sm:h-24 bg-gray-300 hidden sm:block"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: prefersReducedMotion ? 1 : 1 }}
            transition={{ duration: prefersReducedMotion ? 0 : 1.2, delay: prefersReducedMotion ? 0 : 1.2 }}
          />
          <motion.div 
            className="absolute bottom-28 left-2 sm:left-16 w-12 sm:w-24 h-1 bg-gray-300 hidden sm:block"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: prefersReducedMotion ? 1 : 1 }}
            transition={{ duration: prefersReducedMotion ? 0 : 1.2, delay: prefersReducedMotion ? 0 : 1.5 }}
          />

          {/* Mobile-friendly Accent Elements */}
          <motion.div 
            className="absolute top-32 left-1/4 sm:left-1/3 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gray-400 rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: prefersReducedMotion ? 0 : 2 }}
          />
          <motion.div 
            className="absolute bottom-32 right-1/4 sm:right-1/3 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-gray-300 rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: prefersReducedMotion ? 0 : 2.3 }}
          />

          {/* Typography Symbols - Hidden on mobile */}
          <motion.div 
            className="absolute top-1/4 left-4 sm:left-10 text-4xl sm:text-6xl font-thin text-gray-100 select-none hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: prefersReducedMotion ? 1 : 1 }}
            transition={{ duration: prefersReducedMotion ? 0 : 2, delay: prefersReducedMotion ? 0 : 1 }}
          >
            ／
          </motion.div>
          <motion.div 
            className="absolute bottom-1/4 right-4 sm:right-10 text-4xl sm:text-6xl font-thin text-gray-100 select-none hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: prefersReducedMotion ? 1 : 1 }}
            transition={{ duration: prefersReducedMotion ? 0 : 2, delay: prefersReducedMotion ? 0 : 1.5 }}
          >
            ＼
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 1, delay: prefersReducedMotion ? 0 : 0.3 }}
            className="max-w-6xl mx-auto"
          >
            {/* Mobile-First Professional Layout */}
            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[70vh] lg:min-h-[80vh]">
              
              {/* Left Content - Mobile Optimized */}
              <div className="w-full lg:col-span-7 space-y-6 lg:space-y-8 order-2 lg:order-1">
                {/* Company Identifier */}
                <motion.div 
                  className="flex items-center space-x-3 lg:space-x-4 mb-4 lg:mb-6"
                  initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: prefersReducedMotion ? 0 : 0.5 }}
                >
                  <div className="w-2.5 lg:w-3 h-2.5 lg:h-3 bg-black rounded-full" />
                  <span className="text-xs lg:text-sm font-medium text-gray-600 tracking-wider uppercase">ZETTAI Inc. 2024</span>
                </motion.div>

                {/* Main Headline - Mobile Responsive */}
                <motion.div
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 1, delay: prefersReducedMotion ? 0 : 0.7 }}
                >
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 leading-[0.9] mb-4 lg:mb-6">
                    <span className="block font-extralight">AIで企業の</span>
                    <span className="block font-bold">未来を創る</span>
                  </h1>
                  
                  {/* Subtle accent line */}
                  <motion.div 
                    className="w-12 lg:w-16 h-px bg-gray-900 mb-6 lg:mb-8"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: prefersReducedMotion ? 1 : 1 }}
                    transition={{ duration: prefersReducedMotion ? 0 : 1, delay: prefersReducedMotion ? 0 : 1.2 }}
                  />
                </motion.div>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: prefersReducedMotion ? 0 : 1 }}
                  className="space-y-4 lg:space-y-6"
                >
                  <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-xl">
                    2030年まで残り6年。日本企業のAI導入を加速し、
                    持続可能な成長を実現するパートナーです。
                  </p>
                  
                  {/* Key Points */}
                  <div className="space-y-2 lg:space-y-3">
                    {[
                      "AI人材・技術・戦略の3軸サポート",
                      "5年以内に売上100億円突破を目指す",
                      "実力主義・多様性・「ゼッタイやる」精神"
                    ].map((point, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 1.3 + index * 0.1 }}
                      >
                        <div className="w-1 h-1 bg-gray-400 rounded-full mt-2.5 lg:mt-3 flex-shrink-0" />
                        <span className="text-sm lg:text-base text-gray-600 leading-relaxed">{point}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* CTA Buttons - Mobile Optimized */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-3 lg:gap-4 pt-6 lg:pt-8"
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: prefersReducedMotion ? 0 : 1.8 }}
                >
                  <motion.div
                    whileHover={prefersReducedMotion ? {} : { y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto"
                  >
                    <JoinCtaButton 
                      size="lg" 
                      className="w-full sm:w-auto bg-gray-900 hover:bg-gray-800 text-white px-6 lg:px-8 py-3 lg:py-3.5 font-medium transition-all duration-200 text-base min-h-[48px] touch-manipulation"
                    >
                      お問い合わせ
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </JoinCtaButton>
                  </motion.div>
                  
                  <motion.div
                    whileHover={prefersReducedMotion ? {} : { y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto"
                  >
                    <Button 
                      size="lg" 
                      variant="outline"
                      onClick={() => document.getElementById('why-ai')?.scrollIntoView({ behavior: 'smooth' })}
                      className="w-full sm:w-auto border-gray-300 text-gray-700 hover:bg-gray-50 px-6 lg:px-8 py-3 lg:py-3.5 font-medium transition-all duration-200 text-base min-h-[48px] touch-manipulation"
                    >
                      詳しく見る
                    </Button>
                  </motion.div>
                </motion.div>
              </div>

              {/* Right Message Element - Mobile Optimized */}
              <div className="w-full lg:col-span-5 relative order-1 lg:order-2">
                <motion.div
                  initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 1.2, delay: prefersReducedMotion ? 0 : 0.8 }}
                  className="relative space-y-8 lg:space-y-12"
                >
                  {/* Main Catch Copy */}
                  <div className="relative pt-4 lg:pt-8">
                    {/* Yellow Accent - Responsive */}
                    <motion.div 
                      className="absolute -left-3 lg:-left-6 top-4 lg:top-8 w-1 h-16 lg:h-20 bg-yellow-400"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: prefersReducedMotion ? 1 : 1 }}
                      transition={{ duration: prefersReducedMotion ? 0 : 1, delay: prefersReducedMotion ? 0 : 1.2 }}
                    />
                    
                    <motion.div
                      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: prefersReducedMotion ? 0 : 1, delay: prefersReducedMotion ? 0 : 1 }}
                      className="pl-6 lg:pl-8"
                    >
                      <div className="text-xs lg:text-sm font-medium text-yellow-600 mb-3 lg:mb-4 tracking-wider">
                        🟨 MISSION STATEMENT
                      </div>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 leading-[1.2] mb-4 lg:mb-6">
                        AIで、<br />
                        <span className="font-bold">未来を拓く人材と企業を。</span>
                      </h2>
                    </motion.div>
                  </div>

                  {/* Sub Catch Copy */}
                  <div className="relative">
                    {/* Green Accent - Responsive */}
                    <motion.div 
                      className="absolute -left-3 lg:-left-6 top-0 w-1 h-24 lg:h-32 bg-green-500"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: prefersReducedMotion ? 1 : 1 }}
                      transition={{ duration: prefersReducedMotion ? 0 : 1, delay: prefersReducedMotion ? 0 : 1.8 }}
                    />
                    
                    <motion.div
                      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: prefersReducedMotion ? 0 : 1, delay: prefersReducedMotion ? 0 : 1.5 }}
                      className="pl-6 lg:pl-8"
                    >
                      <div className="text-xs lg:text-sm font-medium text-green-600 mb-4 lg:mb-6 tracking-wider">
                        🟩 OUR STANCE
                      </div>
                      <div className="space-y-3 lg:space-y-4 text-base lg:text-lg text-gray-700 leading-relaxed">
                        <p>
                          ZettAIは、<span className="font-semibold text-gray-900">AI技術・人材・営業力の3軸</span>で、<br className="hidden sm:block" />
                          日本企業の成長と進化を支援するスタートアップです。
                        </p>
                        <p>
                          <span className="font-semibold text-gray-900">次世代を担う若い才能</span>とともに、<br className="hidden sm:block" />
                          <span className="text-xl lg:text-2xl font-bold text-gray-900">5年以内に100億円企業</span>を目指します。
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Call to Action Highlight - Mobile Optimized */}
                  <motion.div
                    initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: prefersReducedMotion ? 0 : 2.2 }}
                    className="relative"
                  >
                    <div className="bg-gray-50 border-l-4 border-gray-900 p-4 lg:p-6 rounded-r-lg">
                      <div className="flex items-center space-x-2 lg:space-x-3 mb-2 lg:mb-3">
                        <div className="w-1.5 lg:w-2 h-1.5 lg:h-2 bg-gray-900 rounded-full" />
                        <span className="text-xs lg:text-sm font-medium text-gray-600 tracking-wider uppercase">
                          JOIN OUR TEAM
                        </span>
                      </div>
                      <p className="text-sm lg:text-base text-gray-700 mb-3 lg:mb-4">
                        「ゼッタイやる」精神を持つ人材を募集中
                      </p>
                      <motion.div
                        whileHover={prefersReducedMotion ? {} : { x: 5 }}
                        className="flex items-center text-gray-900 font-medium cursor-pointer touch-manipulation"
                      >
                        <span className="text-sm lg:text-base">採用情報を見る</span>
                        <ArrowRight className="ml-2 w-3 lg:w-4 h-3 lg:h-4" />
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Decorative Elements - Desktop Only */}
                  <motion.div 
                    className="absolute -top-4 lg:-top-8 -right-4 lg:-right-8 w-8 lg:w-12 h-8 lg:h-12 border border-gray-200 rounded-full bg-white shadow-sm hidden lg:block"
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: prefersReducedMotion ? 1 : 1, rotate: prefersReducedMotion ? 0 : 0 }}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: prefersReducedMotion ? 0 : 2.5 }}
                  />
                  <motion.div 
                    className="absolute -bottom-3 lg:-bottom-6 -left-1 lg:-left-2 w-3 lg:w-4 h-3 lg:h-4 bg-gray-900 rounded-full hidden lg:block"
                    initial={{ scale: 0 }}
                    animate={{ scale: prefersReducedMotion ? 1 : 1 }}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: prefersReducedMotion ? 0 : 2.7 }}
                  />
                  
                  {/* Subtle Background Pattern - Desktop Only */}
                  <div className="absolute top-1/2 right-0 w-24 lg:w-32 h-24 lg:h-32 opacity-[0.02] pointer-events-none hidden lg:block">
                    <div className="w-full h-full" style={{
                      backgroundImage: `
                        linear-gradient(45deg, #000 25%, transparent 25%),
                        linear-gradient(-45deg, #000 25%, transparent 25%)
                      `,
                      backgroundSize: '6px 6px lg:8px 8px'
                    }} />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why AI Now Section - Mobile Optimized */}
      <section id="why-ai" className="py-12 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={prefersReducedMotion ? { initial: {}, animate: {} } : fadeInUp}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
                なぜ今、AIなのか？
              </h2>
              <p className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
                日本が直面する構造的課題に対する、唯一の現実的解決策です。
              </p>
            </div>

            {/* Desktop Card Layout */}
            <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
              <Card className="p-6 lg:p-8 text-center border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 lg:w-16 h-12 lg:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
                  <TrendingUp className="w-6 lg:w-8 h-6 lg:h-8 text-red-600" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 lg:mb-4">労働力不足</h3>
                <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                  2030年まで644万人の働き手が不足。AI導入は選択肢ではなく必須条件です。
                </p>
              </Card>

              <Card className="p-6 lg:p-8 text-center border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 lg:w-16 h-12 lg:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
                  <Building className="w-6 lg:w-8 h-6 lg:h-8 text-blue-600" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 lg:mb-4">競争力格差</h3>
                <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                  AI導入企業と未導入企業の生産性格差は年々拡大。早期導入が生存戦略です。
                </p>
              </Card>

              <Card className="p-6 lg:p-8 text-center border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 lg:w-16 h-12 lg:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
                  <Brain className="w-6 lg:w-8 h-6 lg:h-8 text-green-600" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 lg:mb-4">技術革新</h3>
                <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                  ChatGPT登場で実用的AIが現実に。今こそ導入のベストタイミングです。
                </p>
              </Card>
            </div>

            {/* Mobile-Optimized Layout */}
            <div className="md:hidden space-y-6 mb-12">
              {[
                {
                  icon: TrendingUp,
                  iconColor: "text-red-600",
                  bgColor: "bg-red-50",
                  title: "労働力不足",
                  description: "2030年まで644万人の働き手が不足。AI導入は選択肢ではなく必須条件です。"
                },
                {
                  icon: Building,
                  iconColor: "text-blue-600", 
                  bgColor: "bg-blue-50",
                  title: "競争力格差",
                  description: "AI導入企業と未導入企業の生産性格差は年々拡大。早期導入が生存戦略です。"
                },
                {
                  icon: Brain,
                  iconColor: "text-green-600",
                  bgColor: "bg-green-50", 
                  title: "技術革新",
                  description: "ChatGPT登場で実用的AIが現実に。今こそ導入のベストタイミングです。"
                }
              ].map((item, index) => {
                const IconComponent = item.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`${item.bgColor} rounded-2xl p-6 border-l-4 border-l-current ${item.iconColor}`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 ${item.bgColor.replace('50', '100')} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <IconComponent className={`w-6 h-6 ${item.iconColor}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-700 leading-relaxed text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <div className="bg-gray-50 rounded-xl lg:rounded-2xl p-6 lg:p-8 text-center">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">
                AIは未来への投資ではなく、現在の必需品
              </h3>
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                私たちは、企業がAIを活用して競争力を維持・向上できるよう、<br className="hidden lg:block" />
                包括的なソリューションを提供します。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Business Section */}
      <section className="relative py-32 bg-gradient-to-b from-gray-50 via-white to-blue-50 overflow-hidden">
        {/* Background Art Elements */}
        <div className="absolute inset-0">
          {/* Geometric Background Shapes */}
          <motion.div 
            className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-blue-100/30 to-purple-100/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-tr from-emerald-100/30 to-cyan-100/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 0.8, 1],
              x: [0, 30, 0]
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Abstract Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1200 600">
            <motion.path
              d="M0,300 Q300,100 600,300 T1200,200"
              stroke="url(#businessGrad1)"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
            <motion.path
              d="M0,400 Q400,200 800,400 T1200,350"
              stroke="url(#businessGrad2)"
              strokeWidth="1.5"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 4, ease: "easeInOut", delay: 0.5 }}
            />
            <defs>
              <linearGradient id="businessGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="businessGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              initial: {},
              animate: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            className="max-w-7xl mx-auto"
          >
            {/* Enhanced Header */}
            <motion.div 
              className="text-center mb-20"
              variants={fadeInUp}
            >
              <motion.div 
                className="inline-block mb-6"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-semibold rounded-full border border-blue-200">
                  3つのコア事業で企業をサポート
                </span>
              </motion.div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                <span className="text-gray-900">私たちの</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600">
                  コアビジネス
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                AI人材・技術・戦略の3つの軸で、企業のDX推進を総合的にサポートし、
                <br className="hidden md:block" />
                持続可能な成長を実現します。
              </p>
            </motion.div>

            {/* Enhanced Business Cards Grid - Desktop Only */}
            <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-16">
              {/* AI人材事業 */}
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="relative p-8 bg-gradient-to-br from-white to-blue-50/50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 h-full overflow-hidden">
                  {/* Card Background Art */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-200/30 to-transparent rounded-bl-full" />
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-tr from-blue-100/40 to-transparent rounded-full" />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="flex items-center mb-8"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <motion.div 
                        className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                      >
                        <Users className="w-8 h-8 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">AI人材事業</h3>
                        <p className="text-blue-600 font-medium">Human Resources</p>
                      </div>
                    </motion.div>
                    
                    <div className="space-y-4 mb-8">
                      {[
                        "トップクラスAI人材の採用・派遣",
                        "企業向けAI人材育成プログラム", 
                        "技術コンサルティング・伴走支援",
                        "チーム構築・組織設計支援"
                      ].map((item, index) => (
                        <motion.div 
                          key={index}
                          className="flex items-start group"
                          initial={{ x: -10, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                        >
                          <motion.div
                            className="w-2 h-2 bg-blue-500 rounded-full mt-2.5 mr-4 flex-shrink-0"
                            whileHover={{ scale: 1.5 }}
                          />
                          <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    <motion.div 
                      className="pt-4 border-t border-blue-100"
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex items-center text-blue-600 font-medium">
                        <span>詳しく見る</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>

              {/* AI導入支援 */}
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="relative p-8 bg-gradient-to-br from-white to-emerald-50/50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 h-full overflow-hidden">
                  {/* Card Background Art */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-200/30 to-transparent rounded-bl-full" />
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-tr from-emerald-100/40 to-transparent rounded-full" />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="flex items-center mb-8"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <motion.div 
                        className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                      >
                        <Brain className="w-8 h-8 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">AI導入支援</h3>
                        <p className="text-emerald-600 font-medium">Implementation</p>
                      </div>
                    </motion.div>
                    
                    <div className="space-y-4 mb-8">
                      {[
                        "業務プロセス自動化システム構築",
                        "AI戦略策定・実装サポート",
                        "導入後の運用・最適化支援",
                        "ROI最大化コンサルティング"
                      ].map((item, index) => (
                        <motion.div 
                          key={index}
                          className="flex items-start group"
                          initial={{ x: -10, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                        >
                          <motion.div
                            className="w-2 h-2 bg-emerald-500 rounded-full mt-2.5 mr-4 flex-shrink-0"
                            whileHover={{ scale: 1.5 }}
                          />
                          <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    <motion.div 
                      className="pt-4 border-t border-emerald-100"
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex items-center text-emerald-600 font-medium">
                        <span>詳しく見る</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>

              {/* AI総合商社 */}
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="relative p-8 bg-gradient-to-br from-white to-purple-50/50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 h-full overflow-hidden">
                  {/* Card Background Art */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-200/30 to-transparent rounded-bl-full" />
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-tr from-purple-100/40 to-transparent rounded-full" />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="flex items-center mb-8"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <motion.div 
                        className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                      >
                        <Building className="w-8 h-8 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">AI総合商社</h3>
                        <p className="text-purple-600 font-medium">One-Stop Solution</p>
                      </div>
                    </motion.div>
                    
                    <div className="space-y-4 mb-8">
                      {[
                        "業界特化型AIツール選定",
                        "既存システムとの連携・統合",
                        "継続的メンテナンス・アップデート",
                        "コスト最適化・効果測定"
                      ].map((item, index) => (
                        <motion.div 
                          key={index}
                          className="flex items-start group"
                          initial={{ x: -10, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                        >
                          <motion.div
                            className="w-2 h-2 bg-purple-500 rounded-full mt-2.5 mr-4 flex-shrink-0"
                            whileHover={{ scale: 1.5 }}
                          />
                          <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    <motion.div 
                      className="pt-4 border-t border-purple-100"
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex items-center text-purple-600 font-medium">
                        <span>詳しく見る</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            </div>

            {/* Mobile-Optimized Business Layout */}
            <div className="lg:hidden space-y-8 mb-16">
              {[
                {
                  icon: Users,
                  iconBg: "bg-blue-500",
                  bgColor: "bg-blue-50",
                  borderColor: "border-l-blue-500",
                  title: "AI人材事業",
                  subtitle: "Human Resources",
                  description: "トップクラスのAI人材採用・派遣から、企業向け育成プログラム、技術コンサルティングまで、人材面でのトータルサポートを提供します。",
                  features: ["トップクラスAI人材の採用・派遣", "企業向けAI人材育成プログラム", "技術コンサルティング・伴走支援", "チーム構築・組織設計支援"]
                },
                {
                  icon: Target,
                  iconBg: "bg-emerald-500", 
                  bgColor: "bg-emerald-50",
                  borderColor: "border-l-emerald-500",
                  title: "AI総合商社事業",
                  subtitle: "Comprehensive AI Solutions",
                  description: "最適なAIツール選定から導入、運用まで、企業のニーズに合わせたワンストップソリューションをご提供いたします。",
                  features: ["最新AI技術・ツールの調査分析", "企業ニーズに合わせたAI戦略立案", "導入プロジェクトの管理・推進", "ROI測定・改善提案"]
                },
                {
                  icon: Rocket,
                  iconBg: "bg-purple-500",
                  bgColor: "bg-purple-50", 
                  borderColor: "border-l-purple-500",
                  title: "自動化AI導入事業",
                  subtitle: "AI Automation Solutions",
                  description: "業務プロセスの効率化を実現する自動化AIの導入支援で、企業の生産性向上と競争力強化をサポートします。",
                  features: ["業界特化型AIツール選定", "既存システムとの連携・統合", "継続的メンテナンス・アップデート", "コスト最適化・効果測定"]
                }
              ].map((business, index) => {
                const IconComponent = business.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={`${business.bgColor} border-l-4 ${business.borderColor} rounded-r-2xl p-6 shadow-sm`}
                  >
                    <div className="flex items-start space-x-4 mb-4">
                      <div className={`w-14 h-14 ${business.iconBg} rounded-xl flex items-center justify-center flex-shrink-0 shadow-md`}>
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{business.title}</h3>
                        <p className="text-sm text-gray-600 font-medium">{business.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                      {business.description}
                    </p>
                    
                    <div className="space-y-2">
                      {business.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4 pt-3 border-t border-gray-200">
                      <div className="flex items-center text-gray-600 text-sm font-medium">
                        <span>詳しく見る</span>
                        <ArrowRight className="w-3 h-3 ml-2" />
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Enhanced Bottom CTA Section */}
            <motion.div 
              variants={fadeInUp}
              className="text-center bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-12 shadow-2xl relative overflow-hidden"
            >
              {/* Background Art */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-blue-900/90 to-purple-900/90" />
              <motion.div 
                className="absolute top-0 left-0 w-full h-full opacity-10"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1 }}
              >
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <circle cx="100" cy="100" r="2" fill="white" opacity="0.6" />
                  <circle cx="200" cy="150" r="1.5" fill="white" opacity="0.4" />
                  <circle cx="300" cy="80" r="2.5" fill="white" opacity="0.5" />
                  <circle cx="150" cy="250" r="1" fill="white" opacity="0.7" />
                  <circle cx="350" cy="200" r="2" fill="white" opacity="0.3" />
                </svg>
              </motion.div>
              
              <div className="relative z-10">
                <motion.h3 
                  className="text-3xl md:text-4xl font-bold text-white mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  一緒に未来を創りませんか？
                </motion.h3>
                <motion.p 
                  className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  あなたの企業のAI導入を、3つのコア事業で総合的にサポートします。
                </motion.p>
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 shadow-lg">
                      無料相談を始める
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                      事業詳細を見る
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Growth Target Section */}
      <section className="relative py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        {/* Subtle Background Lines */}
        <div className="absolute inset-0">
          <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 1200 800">
            <motion.path
              d="M0,400 Q300,200 600,400 T1200,300"
              stroke="#059669"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              initial: {},
              animate: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="max-w-6xl mx-auto"
          >
            {/* Clean Header */}
            <motion.div 
              className="text-center mb-12"
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                5年以内に売上100億円突破
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                明確なビジョンと実証された戦略により、持続可能で力強い成長を実現
              </p>
            </motion.div>

            {/* Revenue Comparison - Horizontal Layout */}
            <motion.div 
              className="mb-12"
              variants={fadeInUp}
            >
              <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
                <div className="grid md:grid-cols-5 gap-8 items-center">
                  {/* Current Revenue */}
                  <div className="md:col-span-2 text-center">
                    <div className="text-4xl md:text-5xl font-bold text-blue-700 mb-2">
                      <AnimatedCounter target={3} suffix="億円" duration={3600} />
                    </div>
                    <div className="text-gray-700 font-medium">親会社年間売上</div>
                    <div className="text-sm text-gray-500 mt-1">2025年予測</div>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center">
                    <ArrowRight className="w-8 h-8 text-emerald-600" />
                  </div>

                  {/* Target Revenue */}
                  <div className="md:col-span-2 text-center">
                    <div className="text-4xl md:text-5xl font-bold text-emerald-700 mb-2">
                      <AnimatedCounter target={100} suffix="億円" duration={5000} />
                    </div>
                    <div className="text-gray-700 font-medium">目標年間売上</div>
                    <div className="text-sm text-gray-500 mt-1">2029年目標</div>
                  </div>
                </div>

                {/* Growth Metrics */}
                <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      <AnimatedCounter target={33.3} suffix="倍" duration={4000} />
                    </div>
                    <div className="text-sm text-gray-600">成長倍率</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      <AnimatedCounter target={5} suffix="年間" duration={3000} />
                    </div>
                    <div className="text-sm text-gray-600">達成期間</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      <AnimatedCounter target={97} suffix="億円" duration={4400} />
                    </div>
                    <div className="text-sm text-gray-600">成長幅</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Strategy & Market Environment - Desktop Cards */}
            <motion.div variants={fadeInUp} className="hidden lg:block">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Growth Strategy */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <Target className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">成長戦略</h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      "主力事業の市場シェア拡大",
                      "新規サービス・プロダクト開発",
                      "戦略的パートナーシップ構築",
                      "優秀な人材の積極採用"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Market Environment */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mr-3">
                      <TrendingUp className="w-5 h-5 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">市場環境</h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      "AI市場の年率30%以上成長",
                      "企業のDX需要急拡大",
                      "労働力不足による自動化ニーズ",
                      "政府のデジタル政策推進"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mobile-Optimized Strategy Layout */}
            <motion.div variants={fadeInUp} className="lg:hidden">
              <div className="space-y-6">
                {/* Growth Strategy - Mobile */}
                <div className="bg-blue-50 border-l-4 border-l-blue-500 rounded-r-2xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-3">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">成長戦略</h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      "主力事業の市場シェア拡大",
                      "新規サービス・プロダクト開発", 
                      "戦略的パートナーシップ構築",
                      "優秀な人材の積極採用"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Market Environment - Mobile */}
                <div className="bg-emerald-50 border-l-4 border-l-emerald-500 rounded-r-2xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center mr-3">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">市場環境</h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      "AI市場の年率30%以上成長",
                      "企業のDX需要急拡大",
                      "労働力不足による自動化ニーズ",
                      "政府のデジタル政策推進"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
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
              一緒に未来を創りませんか？
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              あなたの企業のAI導入を全力でサポートします。
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                window.location.href = '/contact'
              }}
              className="max-w-md mx-auto"
            >
              <div className="flex gap-4">
                <Input
                  type="email"
                  placeholder="メールアドレス"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  required
                />
                <Button 
                  type="submit" 
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  相談する
                  <Rocket className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </form>

            <p className="mt-6 text-sm text-gray-400">
              お問い合わせから24時間以内にご返信いたします。
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}