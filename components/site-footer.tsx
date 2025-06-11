'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Rocket, Mail, MapPin, Phone, Github, Twitter, Linkedin, ArrowUpRight, Brain, Users, Building, Sparkles } from 'lucide-react'

const footerLinks = {
  company: {
    title: '会社情報',
    links: [
      { href: '/ir', label: 'IR情報' },
      { href: '/legal', label: '利用規約' },
      { href: '/contact', label: 'お問い合わせ' },
    ]
  },
  services: {
    title: 'サービス',
    links: [
      { href: '/portfolio', label: 'ポートフォリオ' },
      { href: '/bootcamp', label: 'ブートキャンプ' },
      { href: '/bootcamp/live', label: 'ライブコーディング' },
    ]
  },
  resources: {
    title: 'リソース',
    links: [
      { href: '/faq', label: 'よくある質問' },
      { href: '/blog', label: 'ブログ', external: true },
      { href: '/careers', label: 'キャリア', external: true },
    ]
  }
}

const socialLinks = [
  { href: 'https://twitter.com/zettai_inc', icon: Twitter, label: 'Twitter' },
  { href: 'https://github.com/zettai-inc', icon: Github, label: 'GitHub' },
  { href: 'https://linkedin.com/company/zettai', icon: Linkedin, label: 'LinkedIn' },
]

export function SiteFooter() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-black text-gray-300 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 0.8, 1],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* CTA Section */}
        <div className="py-8 lg:py-16 border-b border-gray-800">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              AIで、明日を変える。今日から始めよう。
            </h2>
            <p className="text-gray-400 mb-8 text-sm sm:text-base lg:text-lg">
              日本企業のAI導入を加速し、持続可能な成長を実現します
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  無料相談を始める
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                <Link href="/careers" className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  採用情報を見る
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Main Footer Content */}
        <div className="py-8 lg:py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Brand Section - Enhanced Design */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 sm:gap-3 mb-6 group">
              {/* Enhanced Logo */}
              <motion.div 
                className="relative w-10 h-10 sm:w-12 sm:h-12"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg opacity-20" />
                
                {/* Logo Design */}
                <div 
                  className="w-full h-full border-2 border-solid border-white rounded-lg"
                />
                
                {/* Inner Z Shape with Animation */}
                <motion.div 
                  className="absolute inset-2 flex flex-col justify-between"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="h-0.5 w-full bg-white" />
                  <div className="h-0.5 w-4 ml-auto bg-white" />
                  <div className="h-0.5 w-full bg-white" />
                </motion.div>
              </motion.div>
              <span className="font-bold text-xl sm:text-2xl text-white tracking-tight">ZETTAI</span>
            </Link>
            
            <div className="space-y-4">
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                学歴も経験も関係ない。<br />
                這い上がる意志だけが、未来を動かす。
              </p>
              
              {/* Mission Icons */}
              <div className="flex gap-3">
                <motion.div
                  whileHover={{ y: -2 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center"
                >
                  <Brain className="w-5 h-5 text-red-500" />
                </motion.div>
                <motion.div
                  whileHover={{ y: -2 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center"
                >
                  <Users className="w-5 h-5 text-blue-500" />
                </motion.div>
                <motion.div
                  whileHover={{ y: -2 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center"
                >
                  <Building className="w-5 h-5 text-green-500" />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Links Sections - Enhanced */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:col-span-1 md:col-span-1 lg:col-span-3 lg:grid-cols-3">
            {Object.entries(footerLinks).map(([key, section], index) => (
              <motion.div 
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="font-semibold text-white text-sm sm:text-base mb-3 sm:mb-4 flex items-center gap-2">
                  <div className="w-1 h-4 bg-gradient-to-b from-red-500 to-orange-500 rounded-full" />
                  {section.title}
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li 
                      key={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: linkIndex * 0.05 }}
                    >
                      <Link 
                        href={link.href}
                        className="text-sm sm:text-base text-gray-400 hover:text-white transition-all inline-flex items-center gap-1 group relative"
                      >
                        <span className="relative">
                          {link.label}
                          <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-red-500 to-orange-500 group-hover:w-full transition-all duration-300" />
                        </span>
                        {link.external && (
                          <ArrowUpRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        )}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Info - Enhanced Design */}
        <div className="py-6 sm:py-8 border-t border-gray-800">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: Mail,
                label: "メール",
                value: "contact@zettai.com",
                href: "mailto:contact@zettai.com",
                color: "text-red-500",
                bgColor: "bg-red-500/10"
              },
              {
                icon: Phone,
                label: "電話",
                value: "03-0000-0000",
                href: "tel:0300000000",
                color: "text-blue-500",
                bgColor: "bg-blue-500/10"
              },
              {
                icon: MapPin,
                label: "所在地",
                value: "東京都渋谷区",
                href: null,
                color: "text-green-500",
                bgColor: "bg-green-500/10"
              },
              {
                icon: Rocket,
                label: "営業時間",
                value: "平日 9:00-18:00",
                href: null,
                color: "text-purple-500",
                bgColor: "bg-purple-500/10"
              }
            ].map((contact, index) => {
              const IconComponent = contact.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`w-10 h-10 sm:w-12 sm:h-12 ${contact.bgColor} rounded-lg flex items-center justify-center flex-shrink-0 transition-all group-hover:shadow-lg`}
                    >
                      <IconComponent className={`w-5 h-5 sm:w-6 sm:h-6 ${contact.color}`} />
                    </motion.div>
                    <div className="min-w-0">
                      <p className="text-gray-500 text-xs sm:text-sm">{contact.label}</p>
                      {contact.href ? (
                        <a 
                          href={contact.href} 
                          className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-red-400 hover:to-orange-400 transition-all text-sm sm:text-base font-medium truncate block"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-white text-sm sm:text-base font-medium">{contact.value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom Bar - Enhanced Design */}
        <div className="py-6 sm:py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright & Legal */}
            <div className="text-center md:text-left">
              <p className="text-sm sm:text-base text-gray-400 mb-2">
                © 2024 ZETTAI Inc. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs sm:text-sm">
                <Link href="/legal" className="text-gray-500 hover:text-white transition-colors">
                  利用規約
                </Link>
                <Link href="/privacy" className="text-gray-500 hover:text-white transition-colors">
                  プライバシーポリシー
                </Link>
                <Link href="/cookies" className="text-gray-500 hover:text-white transition-colors">
                  Cookie設定
                </Link>
              </div>
            </div>
            
            {/* Social Links - Enhanced */}
            <div className="flex items-center gap-4">
              <p className="text-sm text-gray-500 hidden sm:block">Follow us:</p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-red-600 hover:to-orange-600 rounded-lg flex items-center justify-center transition-all group shadow-lg hover:shadow-xl"
                    >
                      <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}