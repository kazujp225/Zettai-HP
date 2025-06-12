"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Rocket, ArrowRight, TrendingUp, Users, Brain, Building, Target, CheckCircle2, Clock, Mail, Phone, Layers, Zap, BarChart3 } from 'lucide-react'
import { JoinCtaButton } from "@/components/join-cta-button"
import Link from 'next/link'

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
  const videoRef = useRef<HTMLVideoElement>(null)
  const videoRef2 = useRef<HTMLVideoElement>(null)
  const mobileVideoRef = useRef<HTMLVideoElement>(null)
  const mobileVideoRef2 = useRef<HTMLVideoElement>(null)
  const [currentVideo, setCurrentVideo] = useState(1)

  // 動画の自動再生と切り替えロジック
  useEffect(() => {
    const playVideo = async (video: HTMLVideoElement | null) => {
      if (video) {
        try {
          video.muted = true
          await video.play()
        } catch (error) {
          console.log('Video autoplay failed:', error)
          const playOnInteraction = () => {
            video.play()
            document.removeEventListener('touchstart', playOnInteraction)
            document.removeEventListener('click', playOnInteraction)
          }
          document.addEventListener('touchstart', playOnInteraction, { once: true })
          document.addEventListener('click', playOnInteraction, { once: true })
        }
      }
    }

    let cleanupFunctions: (() => void)[] = []

    const handleVideoTransition = (video1: HTMLVideoElement, video2: HTMLVideoElement) => {
      let isTransitioning = false
      let currentActiveVideo = 1 // ローカル状態として管理

      const switchVideo = () => {
        if (isTransitioning) return
        isTransitioning = true

        if (currentActiveVideo === 1) {
          // Video1からVideo2への切り替え
          video1.style.opacity = '0'
          video2.style.opacity = '1'
          video2.currentTime = 0
          playVideo(video2)
          currentActiveVideo = 2
          setTimeout(() => {
            isTransitioning = false
          }, 1000)
        } else {
          // Video2からVideo1への切り替え
          video2.style.opacity = '0'
          video1.style.opacity = '1'
          video1.currentTime = 0
          playVideo(video1)
          currentActiveVideo = 1
          setTimeout(() => {
            isTransitioning = false
          }, 1000)
        }
      }

      const handleTimeUpdate1 = () => {
        // Video1がアクティブかつ9.5秒経過時に切り替え
        if (currentActiveVideo === 1 && video1.currentTime >= 9.5 && !isTransitioning) {
          switchVideo()
        }
      }

      const handleTimeUpdate2 = () => {
        // Video2がアクティブかつ9.5秒経過時に切り替え
        if (currentActiveVideo === 2 && video2.currentTime >= 9.5 && !isTransitioning) {
          switchVideo()
        }
      }

      video1.addEventListener('timeupdate', handleTimeUpdate1)
      video2.addEventListener('timeupdate', handleTimeUpdate2)

      cleanupFunctions.push(() => {
        video1.removeEventListener('timeupdate', handleTimeUpdate1)
        video2.removeEventListener('timeupdate', handleTimeUpdate2)
      })
    }

    // 初期設定
    if (videoRef.current && videoRef2.current) {
      videoRef2.current.style.opacity = '0'
      videoRef2.current.style.transition = 'opacity 1s ease-in-out'
      videoRef.current.style.transition = 'opacity 1s ease-in-out'
      playVideo(videoRef.current)
      handleVideoTransition(videoRef.current, videoRef2.current)
    }

    if (mobileVideoRef.current && mobileVideoRef2.current) {
      mobileVideoRef2.current.style.opacity = '0'
      mobileVideoRef2.current.style.transition = 'opacity 1s ease-in-out'
      mobileVideoRef.current.style.transition = 'opacity 1s ease-in-out'
      playVideo(mobileVideoRef.current)
      handleVideoTransition(mobileVideoRef.current, mobileVideoRef2.current)
    }

    return () => {
      cleanupFunctions.forEach(cleanup => cleanup())
    }
  }, [])

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Hero Section - Mobile-First Design */}
      <section className="relative bg-white">
        {/* Desktop Hero Layout */}
        <div className="hidden lg:block">
          <div className="relative w-full h-[100vh] min-h-[600px] max-h-[800px]">
            {/* Desktop Background - Video optimized for 16:9 */}
            <div className="absolute inset-0 overflow-hidden bg-black">
              {/* First Video */}
              <video
                ref={videoRef}
                autoPlay
                muted
                playsInline
                preload="auto"
                webkit-playsinline="true"
                className="w-full h-full object-cover transition-opacity duration-1000"
                style={{
                  minWidth: '100%',
                  minHeight: '100%',
                  width: 'auto',
                  height: 'auto',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  opacity: 1
                }}
              >
                <source src="/hirosectionvideo.mp4" type="video/mp4" />
              </video>
              {/* Second Video */}
              <video
                ref={videoRef2}
                muted
                playsInline
                preload="auto"
                webkit-playsinline="true"
                className="w-full h-full object-cover transition-opacity duration-1000"
                style={{
                  minWidth: '100%',
                  minHeight: '100%',
                  width: 'auto',
                  height: 'auto',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  opacity: 0
                }}
              >
                <source src="/hirosectionvideo.mp4" type="video/mp4" />
              </video>
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-black/30 z-10" />
            </div>

            {/* Desktop Content - Repositioned to top-left with better positioning for 16:9 video */}
            <div className="absolute top-24 left-12 z-20 max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="space-y-6"
              >
                <motion.div 
                  className="flex items-center space-x-4 mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <div className="w-3 h-3 bg-white rounded-full" />
                  <span className="text-sm font-medium text-white tracking-wider uppercase">ZETTAI Inc. 2024</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.7 }}
                >
                  <h1 className="text-5xl xl:text-6xl font-light text-white leading-[0.9] mb-6">
                    <span className="block font-extralight">AIで企業の</span>
                    <span className="block font-bold">未来を創る</span>
                  </h1>
                  <motion.div 
                    className="w-16 h-px bg-white mb-8"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="space-y-6"
                >
                  <p className="text-lg text-white/90 leading-relaxed max-w-xl">
                    2030年まで残り6年。日本企業のAI導入を加速し、<br />
                    持続可能な成長を実現するパートナーです。
                  </p>
                  
                  <div className="space-y-3">
                    {[
                      "AI人材・技術・戦略の3軸サポート",
                      "5年以内に売上100億円突破を目指す",
                      "実力主義・多様性・「ゼッタイやる」精神"
                    ].map((point, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
                      >
                        <div className="w-1 h-1 bg-white/70 rounded-full mt-3 flex-shrink-0" />
                        <span className="text-base text-white/80 leading-relaxed">{point}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mobile Hero Layout */}
        <div className="lg:hidden">
          <div className="relative w-full h-screen min-h-[600px]">
            {/* Mobile Background - Video optimized for portrait */}
            <div className="absolute inset-0 overflow-hidden bg-black">
              {/* First Video */}
              <video
                ref={mobileVideoRef}
                autoPlay
                muted
                playsInline
                preload="auto"
                webkit-playsinline="true"
                className="w-full h-full object-cover transition-opacity duration-1000"
                style={{
                  minWidth: '100%',
                  minHeight: '100%',
                  width: 'auto',
                  height: 'auto',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  opacity: 1
                }}
              >
                <source src="/hirosectionvideo.mp4" type="video/mp4" />
              </video>
              {/* Second Video */}
              <video
                ref={mobileVideoRef2}
                muted
                playsInline
                preload="auto"
                webkit-playsinline="true"
                className="w-full h-full object-cover transition-opacity duration-1000"
                style={{
                  minWidth: '100%',
                  minHeight: '100%',
                  width: 'auto',
                  height: 'auto',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  opacity: 0
                }}
              >
                <source src="/hirosectionvideo.mp4" type="video/mp4" />
              </video>
              {/* Dark overlay for text readability - stronger for mobile */}
              <div className="absolute inset-0 bg-black/50 z-10" />
            </div>

            {/* Mobile Content - Positioned for video background */}
            <div className="absolute inset-0 flex flex-col justify-center px-6 py-20 z-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="space-y-6"
              >
                {/* Mobile Header */}
                <motion.div 
                  className="flex items-center space-x-3 mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span className="text-xs font-medium text-white tracking-wider uppercase">ZETTAI Inc. 2024</span>
                </motion.div>

                {/* Mobile Title */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.7 }}
                >
                  <h1 className="text-4xl font-light text-white leading-tight mb-4">
                    <span className="block font-extralight">AIで企業の</span>
                    <span className="block font-bold">未来を創る</span>
                  </h1>
                  <motion.div 
                    className="w-12 h-px bg-white mb-6"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                  />
                </motion.div>

                {/* Mobile Mission Statement */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="space-y-4"
                >
                  <p className="text-base text-white/90 leading-relaxed">
                    2030年まで残り6年。日本企業のAI導入を加速し、
                    持続可能な成長を実現するパートナーです。
                  </p>
                  
                  {/* Mobile Key Points - Simplified for video background */}
                  <div className="space-y-2">
                    {[
                      "AI人材・技術・戦略の3軸サポート",
                      "5年以内に売上100億円突破を目指す",
                      "実力主義・多様性・「ゼッタイやる」精神"
                    ].map((point, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-start space-x-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
                      >
                        <div className="w-1 h-1 bg-white/70 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-white/80 leading-relaxed">{point}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Mobile CTA Buttons - Side by Side */}
                <motion.div 
                  className="flex gap-3 pt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                >
                  <motion.div whileTap={{ scale: 0.98 }} className="flex-1">
                    <JoinCtaButton 
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 text-base font-semibold rounded-xl shadow-lg min-h-[56px] touch-manipulation backdrop-blur-sm"
                    >
                      無料相談を始める
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </JoinCtaButton>
                  </motion.div>
                  
                  <motion.div whileTap={{ scale: 0.98 }} className="flex-1">
                    <Button 
                      variant="outline"
                      onClick={() => document.getElementById('why-ai')?.scrollIntoView({ behavior: 'smooth' })}
                      className="w-full border-2 border-white/80 bg-white/10 text-white hover:bg-white hover:text-gray-900 py-4 text-base font-medium rounded-xl min-h-[56px] touch-manipulation backdrop-blur-sm transition-colors"
                    >
                      詳しく見る
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Mobile Team CTA - Simplified for video background */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.8 }}
                  className="text-center pt-4"
                >
                  <a href="/careers" className="inline-flex items-center text-white/80 hover:text-white text-sm font-medium">
                    <span>採用情報を見る</span>
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why AI Now Section - Redesigned */}
      <section id="why-ai" className="py-8 lg:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={prefersReducedMotion ? { initial: {}, animate: {} } : fadeInUp}
            className="max-w-6xl mx-auto"
          >
            {/* Header with improved visual hierarchy */}
            <div className="text-center mb-8 lg:mb-16">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-block mb-4"
              >
                <span className="px-4 py-2 bg-gradient-to-r from-emerald-100 to-emerald-200 text-emerald-700 text-sm font-semibold rounded-full">
                  2030年まで残り6年
                </span>
              </motion.div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 lg:mb-6">
                なぜ今、AIなのか？
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
                日本が直面する構造的課題に対する、唯一の現実的解決策です。
              </p>
            </div>

            {/* Desktop Timeline Layout */}
            <div className="hidden lg:block mb-16">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-200 via-blue-200 to-green-200 transform -translate-x-1/2" />
                
                {/* Timeline Items */}
                <div className="space-y-16">
                  {[
                    {
                      icon: TrendingUp,
                      color: "red",
                      title: "労働力不足の危機",
                      stat: "644万人",
                      statLabel: "不足予測",
                      description: "2030年までに644万人の働き手が不足。もはやAI導入は選択肢ではなく、企業存続のための必須条件です。",
                      points: ["生産年齢人口の急激な減少", "業務効率化が急務", "AI活用で人材不足を補完"]
                    },
                    {
                      icon: Building,
                      color: "blue",
                      title: "競争力格差の拡大",
                      stat: "2.5倍",
                      statLabel: "生産性格差",
                      description: "AI導入企業と未導入企業の生産性格差は年々拡大。早期導入が競争優位性を決定づけます。",
                      points: ["業務自動化による効率化", "データ活用による意思決定", "新規ビジネスの創出"]
                    },
                    {
                      icon: Brain,
                      color: "green",
                      title: "技術革新の転換点",
                      stat: "今",
                      statLabel: "導入最適期",
                      description: "ChatGPT登場により実用的AIが現実に。技術が成熟し、導入コストも現実的な水準に到達しました。",
                      points: ["AI技術の急速な進化", "導入障壁の低下", "実用的なユースケース"]
                    }
                  ].map((item, index) => {
                    const IconComponent = item.icon
                    const isEven = index % 2 === 0
                    
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className={`relative flex items-center ${isEven ? 'justify-start' : 'justify-end'}`}
                      >
                        {/* Timeline Node */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                          <motion.div
                            whileHover={{ scale: 1.2 }}
                            className={`w-12 h-12 bg-${item.color}-100 rounded-full flex items-center justify-center border-4 border-white shadow-lg`}
                          >
                            <IconComponent className={`w-6 h-6 text-${item.color}-600`} />
                          </motion.div>
                        </div>
                        
                        {/* Content Card */}
                        <div className={`w-5/12 ${isEven ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                          <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                          >
                            <div className={`flex items-center gap-4 mb-4 ${isEven ? 'justify-end' : 'justify-start'}`}>
                              <div>
                                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                                <div className={`flex items-baseline gap-2 mt-1 ${isEven ? 'justify-end' : 'justify-start'}`}>
                                  <span className={`text-3xl font-bold text-${item.color}-600`}>{item.stat}</span>
                                  <span className="text-sm text-gray-500">{item.statLabel}</span>
                                </div>
                              </div>
                            </div>
                            <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                            <div className="space-y-2">
                              {item.points.map((point, idx) => (
                                <div key={idx} className={`flex items-center gap-2 text-sm text-gray-700 ${isEven ? 'justify-end' : 'justify-start'}`}>
                                  <CheckCircle2 className={`w-4 h-4 text-${item.color}-500 flex-shrink-0`} />
                                  <span>{point}</span>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Tablet Layout */}
            <div className="hidden md:block lg:hidden mb-12">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: TrendingUp,
                    color: "red",
                    title: "労働力不足",
                    stat: "644万人",
                    description: "2030年まで644万人の働き手が不足。AI導入は選択肢ではなく必須条件です。"
                  },
                  {
                    icon: Building,
                    color: "blue",
                    title: "競争力格差",
                    stat: "2.5倍",
                    description: "AI導入企業と未導入企業の生産性格差は年々拡大。早期導入が生存戦略です。"
                  },
                  {
                    icon: Brain,
                    color: "green",
                    title: "技術革新",
                    stat: "今",
                    description: "ChatGPT登場で実用的AIが現実に。今こそ導入のベストタイミングです。"
                  }
                ].map((item, index) => {
                  const IconComponent = item.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
                    >
                      <div className={`w-16 h-16 bg-${item.color}-100 rounded-2xl flex items-center justify-center mb-4`}>
                        <IconComponent className={`w-8 h-8 text-${item.color}-600`} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <div className={`text-3xl font-bold text-${item.color}-600 mb-3`}>{item.stat}</div>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Mobile Layout - Story Format */}
            <div className="md:hidden mb-8">
              <div className="space-y-6">
                {[
                  {
                    icon: TrendingUp,
                    color: "red",
                    title: "労働力不足",
                    stat: "644万人",
                    statLabel: "不足予測",
                    description: "2030年までの不足人数",
                    detail: "もはやAI導入は選択肢ではなく必須"
                  },
                  {
                    icon: Building,
                    color: "blue",
                    title: "競争力格差",
                    stat: "2.5倍",
                    statLabel: "生産性差",
                    description: "AI導入企業の生産性",
                    detail: "早期導入が競争優位を決定づける"
                  },
                  {
                    icon: Brain,
                    color: "green",
                    title: "技術革新",
                    stat: "今",
                    statLabel: "最適時期",
                    description: "AI導入の最適時期",
                    detail: "技術成熟とコスト低下の好機"
                  }
                ].map((item, index) => {
                  const IconComponent = item.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.15 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      {/* Connection Line */}
                      {index < 2 && (
                        <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-gray-300 to-transparent" />
                      )}
                      
                      <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-100">
                        <div className="flex items-start gap-4">
                          {/* Icon */}
                          <div className={`w-12 h-12 bg-${item.color}-100 rounded-xl flex items-center justify-center flex-shrink-0`}>
                            <IconComponent className={`w-6 h-6 text-${item.color}-600`} />
                          </div>
                          
                          {/* Content */}
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                            <div className="flex items-baseline gap-2 mb-2">
                              <span className={`text-2xl font-bold text-${item.color}-600`}>{item.stat}</span>
                              <span className="text-sm text-gray-500">{item.statLabel}</span>
                            </div>
                            <p className="text-sm text-gray-600 mb-1">{item.description}</p>
                            <p className="text-xs text-gray-700 font-medium">{item.detail}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl lg:rounded-2xl p-6 sm:p-8 lg:p-12 text-center"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-white rounded-full" />
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-white rounded-full" />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 lg:mb-4">
                  AIは未来への投資ではなく、現在の必需品
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed mb-6 lg:mb-8 max-w-2xl mx-auto">
                  私たちは、企業がAIを活用して競争力を維持・向上できるよう、<br className="hidden lg:block" />
                  包括的なソリューションを提供します。
                </p>
                <Button
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-6 py-3 lg:px-8 lg:py-4 text-sm lg:text-base"
                >
                  AIソリューションについて相談する
                  <ArrowRight className="ml-2 w-4 h-4 lg:w-5 lg:h-5" />
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* Growth Target Section */}
      <section className="relative py-8 lg:py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
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
              className="text-center mb-6 lg:mb-12"
              variants={fadeInUp}
            >
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-2 lg:mb-4">
                5年以内に売上100億円突破
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-4 lg:px-0">
                明確なビジョンと実証された戦略により、持続可能で力強い成長を実現
              </p>
            </motion.div>

            {/* Revenue Comparison - Responsive Layout */}
            <motion.div 
              className="mb-12"
              variants={fadeInUp}
            >
              {/* Desktop Layout */}
              <div className="hidden md:block bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
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

              {/* Mobile Layout - Compact Design */}
              <div className="md:hidden space-y-4">
                {/* Current to Target Revenue Flow - Compact */}
                <div className="bg-gradient-to-b from-blue-50 to-emerald-50 rounded-xl p-4">
                  {/* Current Revenue */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                  >
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-blue-200">
                      <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">現在</div>
                      <div className="text-2xl font-bold text-blue-700">
                        <AnimatedCounter target={3} suffix="億円" duration={3600} />
                      </div>
                      <div className="text-xs font-medium text-gray-600">親会社年間売上 (2025年)</div>
                    </div>
                  </motion.div>

                  {/* Arrow Down - Simplified */}
                  <div className="flex justify-center my-3">
                    <div className="w-0.5 h-12 bg-gradient-to-b from-blue-500 to-emerald-500" />
                  </div>

                  {/* Target Revenue */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center"
                  >
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-emerald-200">
                      <div className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-1">目標</div>
                      <div className="text-2xl font-bold text-emerald-700">
                        <AnimatedCounter target={100} suffix="億円" duration={5000} />
                      </div>
                      <div className="text-xs font-medium text-gray-600">目標年間売上 (2029年)</div>
                    </div>
                  </motion.div>
                </div>

                {/* Growth Metrics - Compact Grid */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="grid grid-cols-3 gap-2"
                >
                  {[
                    { value: 33.3, suffix: "倍", label: "成長倍率", color: "text-red-600", bgColor: "bg-red-50" },
                    { value: 5, suffix: "年", label: "達成期間", color: "text-blue-600", bgColor: "bg-blue-50" },
                    { value: 97, suffix: "億円", label: "成長幅", color: "text-emerald-600", bgColor: "bg-emerald-50" }
                  ].map((metric, index) => (
                    <div key={index} className={`${metric.bgColor} rounded-lg p-3 text-center`}>
                      <div className="text-xs font-medium text-gray-600 mb-1">{metric.label}</div>
                      <div className={`text-lg font-bold ${metric.color}`}>
                        <AnimatedCounter target={metric.value} suffix={metric.suffix} duration={3000 + index * 500} />
                      </div>
                    </div>
                  ))}
                </motion.div>
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

            {/* Mobile-Optimized Strategy Layout - Compact */}
            <motion.div variants={fadeInUp} className="lg:hidden">
              <div className="space-y-4">
                {/* Strategy & Market - Compact Tabs */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="grid grid-cols-2 divide-x divide-gray-200">
                    {/* Growth Strategy */}
                    <div className="p-4">
                      <div className="flex items-center mb-3">
                        <Target className="w-5 h-5 text-blue-600 mr-2" />
                        <h3 className="text-sm font-bold text-gray-900">成長戦略</h3>
                      </div>
                      <ul className="space-y-1.5 text-xs text-gray-600">
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-1">•</span>
                          <span>市場シェア拡大</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-1">•</span>
                          <span>新サービス開発</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-1">•</span>
                          <span>戦略的提携</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-1">•</span>
                          <span>人材採用強化</span>
                        </li>
                      </ul>
                    </div>

                    {/* Market Environment */}
                    <div className="p-4">
                      <div className="flex items-center mb-3">
                        <TrendingUp className="w-5 h-5 text-emerald-600 mr-2" />
                        <h3 className="text-sm font-bold text-gray-900">市場環境</h3>
                      </div>
                      <ul className="space-y-1.5 text-xs text-gray-600">
                        <li className="flex items-start">
                          <span className="text-emerald-500 mr-1">•</span>
                          <span>AI市場+30%/年</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-500 mr-1">•</span>
                          <span>DX需要急拡大</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-500 mr-1">•</span>
                          <span>自動化ニーズ</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-500 mr-1">•</span>
                          <span>政策推進</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Human-Centered Design */}
      <section className="py-12 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            {/* Desktop Layout */}
            <div className="hidden lg:block">
              <div className="text-center mb-12">
                <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
                  <span className="font-normal">まずは</span>
                  <span className="font-bold">お話</span>
                  <span className="font-normal">しませんか</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  貴社の課題をお聞かせください。<br />
                  最適なAIソリューションをご提案いたします。
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">初回相談無料</h3>
                        <p className="text-gray-600">まずは気軽にご相談ください</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">迅速な対応</h3>
                        <p className="text-gray-600">24時間以内にご返信いたします</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">専門チーム対応</h3>
                        <p className="text-gray-600">経験豊富な専門家がサポート</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault()
                        window.location.href = '/contact'
                      }}
                      className="space-y-4"
                    >
                      <Input
                        type="email"
                        placeholder="メールアドレス"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full h-14 px-6 text-lg border-gray-300 focus:border-gray-500"
                        required
                      />
                      <Button 
                        type="submit" 
                        className="w-full h-14 bg-gray-900 hover:bg-gray-800 text-white text-lg font-medium"
                      >
                        無料相談を申し込む
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                      <p className="text-sm text-gray-500 text-center">
                        お問い合わせ内容は秘密厳守いたします
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                {/* Heading */}
                <div className="text-center">
                  <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
                    <span className="font-normal">まずは</span>
                    <span className="font-bold">お話</span>
                    <span className="font-normal">しませんか</span>
                  </h2>
                  <p className="text-base text-gray-600 px-4">
                    貴社の課題をお聞かせください。<br />
                    最適なAIソリューションをご提案いたします。
                  </p>
                </div>

                {/* Benefits */}
                <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">初回相談無料</h3>
                      <p className="text-gray-600 text-xs">まずは気軽にご相談ください</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">迅速な対応</h3>
                      <p className="text-gray-600 text-xs">24時間以内にご返信</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">専門チーム対応</h3>
                      <p className="text-gray-600 text-xs">経験豊富な専門家がサポート</p>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    window.location.href = '/contact'
                  }}
                  className="space-y-4 px-4"
                >
                  <Input
                    type="email"
                    placeholder="メールアドレスを入力"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-14 px-4 text-base border-gray-300 focus:border-gray-500 rounded-xl"
                    required
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full h-14 bg-gray-900 hover:bg-gray-800 text-white text-base font-medium rounded-xl min-h-[56px] touch-manipulation"
                  >
                    無料相談を申し込む
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    お問い合わせ内容は秘密厳守いたします
                  </p>
                </form>

                {/* Contact Options */}
                <div className="border-t pt-6">
                  <p className="text-xs text-gray-500 text-center mb-4">その他のお問い合わせ方法</p>
                  <div className="grid grid-cols-2 gap-3 px-4">
                    <Button variant="outline" size="sm" className="h-10" asChild>
                      <Link href="/contact">
                        <Mail className="w-4 h-4 mr-2" />
                        メールで相談
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" className="h-10" asChild>
                      <Link href="/contact">
                        <Phone className="w-4 h-4 mr-2" />
                        電話で相談
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}