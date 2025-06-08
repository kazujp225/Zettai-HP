import Link from 'next/link'
import { Button } from './ui/button'
import { Rocket, Mail, MapPin, Phone, Github, Twitter, Linkedin, ArrowUpRight } from 'lucide-react'

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
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-8 lg:py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Brand Section - Mobile Optimized */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 group">
              {/* Minimalist Logo Icon */}
              <div className="relative w-6 h-6 sm:w-8 sm:h-8">
                {/* Simple Square Design */}
                <div 
                  className="w-full h-full border-2 border-solid border-white"
                  style={{ borderRadius: '2px' }}
                />
                
                {/* Inner Z Shape */}
                <div className="absolute inset-1 flex flex-col justify-between">
                  <div className="h-0.5 w-full bg-white" />
                  <div className="h-0.5 w-3 ml-auto bg-white" />
                  <div className="h-0.5 w-full bg-white" />
                </div>
              </div>
              <span className="font-bold text-lg sm:text-xl text-white tracking-tight">ZETTAI</span>
            </Link>
            <p className="mb-3 sm:mb-4 text-sm sm:text-base text-gray-400 leading-relaxed">
              学歴も経験も関係ない。<br />
              這い上がる意志だけが、未来を動かす。
            </p>
            <Button 
              asChild 
              size="default"
              className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all group text-sm sm:text-base"
            >
              <Link href="/join" className="flex items-center gap-2">
                今すぐ挑戦する
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Links Sections - Mobile Optimized */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:col-span-1 md:col-span-1 lg:col-span-3 lg:grid-cols-3">
            {Object.entries(footerLinks).map(([key, section]) => (
              <div key={key}>
                <h3 className="font-semibold text-white text-sm sm:text-base mb-3 sm:mb-4">{section.title}</h3>
                <ul className="space-y-2 sm:space-y-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link 
                        href={link.href}
                        className="text-sm sm:text-base hover:text-white transition-colors inline-flex items-center gap-1 group"
                      >
                        {link.label}
                        {link.external && (
                          <ArrowUpRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info - Mobile Optimized */}
        <div className="py-4 sm:py-6 border-t border-gray-800">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 text-sm">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-800 rounded-md flex items-center justify-center flex-shrink-0">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400" />
              </div>
              <div className="min-w-0">
                <p className="text-gray-500 text-xs">メール</p>
                <a href="mailto:contact@zettai.com" className="text-white hover:text-red-400 transition-colors text-xs sm:text-sm truncate block">
                  contact@zettai.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-800 rounded-md flex items-center justify-center flex-shrink-0">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400" />
              </div>
              <div className="min-w-0">
                <p className="text-gray-500 text-xs">電話</p>
                <a href="tel:0300000000" className="text-white hover:text-red-400 transition-colors text-xs sm:text-sm">
                  03-0000-0000
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 sm:col-span-2 md:col-span-1">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-800 rounded-md flex items-center justify-center flex-shrink-0">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400" />
              </div>
              <div className="min-w-0">
                <p className="text-gray-500 text-xs">所在地</p>
                <p className="text-white text-xs sm:text-sm">東京都渋谷区</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Mobile Optimized */}
        <div className="py-3 sm:py-4 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-3">
            <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
              © 2024 ZETTAI Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-2 sm:gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-800 hover:bg-gray-700 rounded-md flex items-center justify-center transition-colors group"
                  >
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}