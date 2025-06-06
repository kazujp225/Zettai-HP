"use client"

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Button } from './ui/button'
import { Menu, X, Rocket, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/business', label: '事業内容' },
  { href: '/officers', label: '役員' },
  { href: '/careers', label: '採用情報' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'お問い合わせ' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          {/* Minimalist Logo Icon */}
          <motion.div 
            className="relative w-8 h-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.1 }}
          >
            {/* Simple Square Design */}
            <motion.div 
              className={cn(
                "w-8 h-8 border-2 border-solid",
                isScrolled ? "border-gray-800" : "border-white"
              )}
              style={{ borderRadius: '2px' }}
              whileHover={{ 
                borderRadius: '8px',
                transition: { duration: 0.3 }
              }}
            />
            
            {/* Inner Z Shape */}
            <div className="absolute inset-1 flex flex-col justify-between">
              <motion.div 
                className={cn(
                  "h-0.5 w-full",
                  isScrolled ? "bg-gray-800" : "bg-white"
                )}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              />
              <motion.div 
                className={cn(
                  "h-0.5 w-3 ml-auto",
                  isScrolled ? "bg-gray-800" : "bg-white"
                )}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              />
              <motion.div 
                className={cn(
                  "h-0.5 w-full",
                  isScrolled ? "bg-gray-800" : "bg-white"
                )}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              />
            </div>
          </motion.div>

          {/* Clean Text Logo */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.span 
              className={cn(
                "font-bold text-xl tracking-tight transition-colors duration-300",
                isScrolled ? "text-gray-900" : "text-white"
              )}
              whileHover={{ 
                letterSpacing: '0.05em',
                transition: { duration: 0.3 }
              }}
            >
              ZETTAI
            </motion.span>
            
            {/* Subtle Underline on Hover */}
            <motion.div 
              className={cn(
                "absolute -bottom-1 left-0 h-px w-full origin-left",
                isScrolled ? "bg-gray-800" : "bg-white"
              )}
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative font-medium transition-colors group",
                pathname === item.href
                  ? isScrolled ? "text-red-600" : "text-red-400"
                  : isScrolled ? "text-gray-700 hover:text-red-600" : "text-gray-300 hover:text-white"
              )}
            >
              {item.label}
              <span className={cn(
                "absolute -bottom-1 left-0 w-full h-0.5 bg-red-600 transform scale-x-0 transition-transform group-hover:scale-x-100",
                pathname === item.href && "scale-x-100"
              )} />
            </Link>
          ))}
          <Button 
            asChild 
            className="ml-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all"
          >
            <Link href="/join" className="flex items-center gap-2">
              JOIN
              <Rocket className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={cn(
            "md:hidden p-2 rounded-lg transition-colors",
            isScrolled ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"
          )}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block px-4 py-3 rounded-lg font-medium transition-colors",
                    pathname === item.href
                      ? "bg-red-50 text-red-600"
                      : "text-gray-700 hover:bg-gray-50 hover:text-red-600"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Button 
                asChild 
                className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Link href="/join" className="flex items-center justify-center gap-2">
                  JOIN
                  <Rocket className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}