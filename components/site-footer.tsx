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
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-4 group">
              {/* Minimalist Logo Icon */}
              <div className="relative w-8 h-8">
                {/* Simple Square Design */}
                <div 
                  className="w-8 h-8 border-2 border-solid border-white"
                  style={{ borderRadius: '2px' }}
                />
                
                {/* Inner Z Shape */}
                <div className="absolute inset-1 flex flex-col justify-between">
                  <div className="h-0.5 w-full bg-white" />
                  <div className="h-0.5 w-3 ml-auto bg-white" />
                  <div className="h-0.5 w-full bg-white" />
                </div>
              </div>
              <span className="font-bold text-xl text-white tracking-tight">ZETTAI</span>
            </Link>
            <p className="mb-4 text-gray-400 leading-relaxed">
              学歴も経験も関係ない。<br />
              這い上がる意志だけが、未来を動かす。
            </p>
            <Button 
              asChild 
              size="lg"
              className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all group"
            >
              <Link href="/join" className="flex items-center gap-2">
                今すぐ挑戦する
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="hover:text-white transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      {link.external && (
                        <ArrowUpRight className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="py-6 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-800 rounded-md flex items-center justify-center">
                <Mail className="w-4 h-4 text-gray-400" />
              </div>
              <div>
                <p className="text-gray-500 text-xs">メール</p>
                <a href="mailto:contact@zettai.com" className="text-white hover:text-red-400 transition-colors text-sm">
                  contact@zettai.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-800 rounded-md flex items-center justify-center">
                <Phone className="w-4 h-4 text-gray-400" />
              </div>
              <div>
                <p className="text-gray-500 text-xs">電話</p>
                <a href="tel:0300000000" className="text-white hover:text-red-400 transition-colors text-sm">
                  03-0000-0000
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-800 rounded-md flex items-center justify-center">
                <MapPin className="w-4 h-4 text-gray-400" />
              </div>
              <div>
                <p className="text-gray-500 text-xs">所在地</p>
                <p className="text-white text-sm">東京都渋谷区</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-4 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-sm text-gray-500">
              © 2024 ZETTAI Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-md flex items-center justify-center transition-colors group"
                  >
                    <Icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
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