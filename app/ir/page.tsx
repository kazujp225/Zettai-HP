"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUp, Download, TrendingUp, Users, Zap, Target } from "lucide-react"

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

export default function IRPage() {
  const prefersReducedMotion = useReducedMotion()
  const [currentValuation, setCurrentValuation] = useState(0)
  const targetValuation = 3500000000 // 35億円

  // カウンターアニメーション
  useEffect(() => {
    const duration = 2000 // 2秒
    const steps = 60
    const increment = targetValuation / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= targetValuation) {
        current = targetValuation
        clearInterval(timer)
      }
      setCurrentValuation(Math.floor(current))
    }, duration / steps)

    return () => clearInterval(timer)
  }, [])

  const formatCurrency = (value: number) => {
    if (value >= 100000000) {
      return `${(value / 100000000).toFixed(1)}億円`
    }
    return `${(value / 10000).toFixed(0)}万円`
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section - Mobile Optimized */}
      <div className="pt-24 lg:pt-32 pb-12 lg:pb-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8 }}
            className="text-center mb-8 lg:mb-12"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold mb-4 lg:mb-6 leading-tight">
              <span className="text-red-500">大逆転</span>のシナリオは、<br />
              すでに<span className="text-emerald-400">始まっている</span>
            </h1>
            <p className="text-base lg:text-xl text-gray-300 max-w-3xl mx-auto px-4 leading-relaxed">
              ZettAIの成長指標とIR情報をリアルタイムで公開。<br className="hidden lg:block" /> 透明性の高い経営で、投資家の皆様と共に未来を創造します。
            </p>
          </motion.div>

          {/* 企業評価額カウンター */}
          <div className="mb-16">
            <Card className="bg-gradient-to-br from-red-900 via-black to-emerald-900 border-gray-700">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4 text-gray-300">現在の企業評価額</h2>
                <div className="text-6xl md:text-8xl font-bold mb-4 text-emerald-400">
                  {formatCurrency(currentValuation)}
                </div>
                <div className="flex items-center justify-center text-gray-300 mb-4">
                  <ArrowUp className="h-6 w-6 text-emerald-400 mr-2" />
                  <span className="text-xl">目標: 100億円（5年以内）</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-4">
                  <div
                    className="bg-gradient-to-r from-red-500 to-emerald-400 h-4 rounded-full transition-all duration-2000"
                    style={{ width: `${(currentValuation / 10000000000) * 100}%` }}
                  ></div>
                </div>
              </CardContent>
            </Card>
          </div>

          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.3 }}
          >
            <Tabs defaultValue="kpi" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-6 lg:mb-8 h-auto p-1 bg-gray-800 border border-gray-700">
                <TabsTrigger value="kpi" className="text-xs lg:text-sm py-2 px-2 lg:px-4 data-[state=active]:bg-red-600 data-[state=active]:text-white min-h-[40px] touch-manipulation">月次KPI</TabsTrigger>
                <TabsTrigger value="growth" className="text-xs lg:text-sm py-2 px-2 lg:px-4 data-[state=active]:bg-red-600 data-[state=active]:text-white min-h-[40px] touch-manipulation">成長戦略</TabsTrigger>
                <TabsTrigger value="capital" className="text-xs lg:text-sm py-2 px-2 lg:px-4 data-[state=active]:bg-red-600 data-[state=active]:text-white min-h-[40px] touch-manipulation">資本政策</TabsTrigger>
                <TabsTrigger value="documents" className="text-xs lg:text-sm py-2 px-2 lg:px-4 data-[state=active]:bg-red-600 data-[state=active]:text-white min-h-[40px] touch-manipulation">IR資料</TabsTrigger>
              </TabsList>

            <TabsContent value="kpi">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card className="bg-gray-900 border-gray-700">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <TrendingUp className="h-5 w-5 text-red-500 mr-2" />
                      月間売上
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-red-500 mb-2">2,400万円</div>
                    <div className="text-sm text-emerald-400 flex items-center">
                      <ArrowUp className="h-4 w-4 mr-1" />
                      前月比 +47%
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-700">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <Users className="h-5 w-5 text-emerald-400 mr-2" />
                      顧客数
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-emerald-400 mb-2">127社</div>
                    <div className="text-sm text-emerald-400 flex items-center">
                      <ArrowUp className="h-4 w-4 mr-1" />
                      前月比 +23社
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-700">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <Zap className="h-5 w-5 text-red-500 mr-2" />
                      AI導入件数
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-red-500 mb-2">89件</div>
                    <div className="text-sm text-emerald-400 flex items-center">
                      <ArrowUp className="h-4 w-4 mr-1" />
                      前月比 +34件
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-700">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <Target className="h-5 w-5 text-emerald-400 mr-2" />
                      従業員数
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-emerald-400 mb-2">47名</div>
                    <div className="text-sm text-emerald-400 flex items-center">
                      <ArrowUp className="h-4 w-4 mr-1" />
                      前月比 +8名
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-gray-900 border-gray-700">
                  <CardHeader>
                    <CardTitle>売上推移（過去12ヶ月）</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 bg-black rounded-lg flex items-end justify-between p-4">
                      {[8, 12, 15, 18, 22, 28, 35, 42, 38, 45, 52, 47].map((height, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <div
                            className="bg-gradient-to-t from-red-500 to-emerald-400 w-6 rounded-t"
                            style={{ height: `${height * 4}px` }}
                          ></div>
                          <div className="text-xs text-gray-400 mt-2">{index + 1}月</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-700">
                  <CardHeader>
                    <CardTitle>事業別売上構成</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span>AI人材採用</span>
                          <span className="text-red-500">40%</span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-2">
                          <div className="bg-red-500 h-2 rounded-full" style={{ width: "40%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span>伴走支援</span>
                          <span className="text-emerald-400">30%</span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-2">
                          <div className="bg-emerald-400 h-2 rounded-full" style={{ width: "30%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span>自動化AI導入</span>
                          <span className="text-red-500">20%</span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-2">
                          <div className="bg-red-500 h-2 rounded-full" style={{ width: "20%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span>AI総合商社</span>
                          <span className="text-emerald-400">10%</span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-2">
                          <div className="bg-emerald-400 h-2 rounded-full" style={{ width: "10%" }}></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="growth">
              <div className="space-y-8">
                <Card className="bg-gray-900 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-2xl">成長戦略ロードマップ</CardTitle>
                    <CardDescription>5年間で企業評価額100億円を目指す具体的な戦略</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="border-l-4 border-red-500 pl-6">
                        <h3 className="text-xl font-bold text-red-500 mb-2">Phase 1: 基盤構築（現在〜1年目）</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                          <li>AI人材採用事業の拡大（月間50名体制）</li>
                          <li>ブートキャンプの定期開催（月2回）</li>
                          <li>コミュニティ規模1,000名達成</li>
                          <li>年間売上3億円達成</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-emerald-400 pl-6">
                        <h3 className="text-xl font-bold text-emerald-400 mb-2">Phase 2: 事業拡大（2年目〜3年目）</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                          <li>AI総合商社事業の本格展開</li>
                          <li>海外展開（東南アジア市場参入）</li>
                          <li>自社AIプロダクトの開発・リリース</li>
                          <li>年間売上20億円達成</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-red-500 pl-6">
                        <h3 className="text-xl font-bold text-red-500 mb-2">Phase 3: 市場リーダー（4年目〜5年目）</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                          <li>IPO準備・実行</li>
                          <li>M&A戦略の実行</li>
                          <li>グローバル展開の加速</li>
                          <li>年間売上50億円達成</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="bg-gray-900 border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-lg">年間成長率目標</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-4xl font-bold text-emerald-400 mb-2">97%</div>
                      <div className="text-gray-300">業界平均の3倍以上</div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-900 border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-lg">Exit戦略</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-lg font-bold text-red-500 mb-2">IPO / M&A</div>
                      <div className="text-gray-300">両方を視野に入れた戦略</div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-900 border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-lg">市場規模</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-4xl font-bold text-emerald-400 mb-2">12兆円</div>
                      <div className="text-gray-300">国内AI市場（2030年予測）</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="capital">
              <div className="space-y-8">
                <Card className="bg-gray-900 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-2xl">資本政策</CardTitle>
                    <CardDescription>透明性の高い資本構成と今後の調達計画</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-bold mb-4">現在の資本構成</h3>
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between mb-2">
                              <span>創業者・経営陣</span>
                              <span className="text-red-500">60%</span>
                            </div>
                            <div className="w-full bg-gray-800 rounded-full h-3">
                              <div className="bg-red-500 h-3 rounded-full" style={{ width: "60%" }}></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between mb-2">
                              <span>エンジェル投資家</span>
                              <span className="text-emerald-400">25%</span>
                            </div>
                            <div className="w-full bg-gray-800 rounded-full h-3">
                              <div className="bg-emerald-400 h-3 rounded-full" style={{ width: "25%" }}></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between mb-2">
                              <span>従業員ストックオプション</span>
                              <span className="text-red-500">10%</span>
                            </div>
                            <div className="w-full bg-gray-800 rounded-full h-3">
                              <div className="bg-red-500 h-3 rounded-full" style={{ width: "10%" }}></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between mb-2">
                              <span>将来の調達用</span>
                              <span className="text-emerald-400">5%</span>
                            </div>
                            <div className="w-full bg-gray-800 rounded-full h-3">
                              <div className="bg-emerald-400 h-3 rounded-full" style={{ width: "5%" }}></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold mb-4">調達履歴</h3>
                        <div className="space-y-4">
                          <div className="bg-black p-4 rounded-lg">
                            <div className="font-bold text-emerald-400">シード調達</div>
                            <div className="text-gray-300">2023年3月 - 5,000万円</div>
                            <div className="text-sm text-gray-400">エンジェル投資家3名</div>
                          </div>
                          <div className="bg-black p-4 rounded-lg">
                            <div className="font-bold text-red-500">シリーズA（予定）</div>
                            <div className="text-gray-300">2024年Q3 - 3億円</div>
                            <div className="text-sm text-gray-400">VC・事業会社</div>
                          </div>
                          <div className="bg-black p-4 rounded-lg border border-gray-600">
                            <div className="font-bold text-emerald-400">シリーズB（計画）</div>
                            <div className="text-gray-300">2025年Q4 - 10億円</div>
                            <div className="text-sm text-gray-400">IPO準備資金</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="documents">
              <div className="space-y-6">
                <Card className="bg-gray-900 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-2xl">IR資料ダウンロード</CardTitle>
                    <CardDescription>投資家向けの詳細資料をダウンロードできます</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="bg-black p-4 rounded-lg border border-gray-700 hover:border-red-500 transition-colors">
                          <div className="flex justify-between items-center">
                            <div>
                              <h3 className="font-bold text-white">会社概要資料</h3>
                              <p className="text-sm text-gray-400">事業内容・ビジョン・チーム紹介</p>
                              <p className="text-xs text-gray-500">更新日: 2024年6月1日</p>
                            </div>
                            <Button size="sm" className="bg-red-600 hover:bg-red-700">
                              <Download className="h-4 w-4 mr-2" />
                              PDF
                            </Button>
                          </div>
                        </div>

                        <div className="bg-black p-4 rounded-lg border border-gray-700 hover:border-emerald-500 transition-colors">
                          <div className="flex justify-between items-center">
                            <div>
                              <h3 className="font-bold text-white">財務資料</h3>
                              <p className="text-sm text-gray-400">売上・利益・キャッシュフロー</p>
                              <p className="text-xs text-gray-500">更新日: 2024年5月31日</p>
                            </div>
                            <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                              <Download className="h-4 w-4 mr-2" />
                              PDF
                            </Button>
                          </div>
                        </div>

                        <div className="bg-black p-4 rounded-lg border border-gray-700 hover:border-red-500 transition-colors">
                          <div className="flex justify-between items-center">
                            <div>
                              <h3 className="font-bold text-white">市場分析資料</h3>
                              <p className="text-sm text-gray-400">AI市場動向・競合分析</p>
                              <p className="text-xs text-gray-500">更新日: 2024年5月15日</p>
                            </div>
                            <Button size="sm" className="bg-red-600 hover:bg-red-700">
                              <Download className="h-4 w-4 mr-2" />
                              PDF
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="bg-black p-4 rounded-lg border border-gray-700 hover:border-emerald-500 transition-colors">
                          <div className="flex justify-between items-center">
                            <div>
                              <h3 className="font-bold text-white">成長戦略資料</h3>
                              <p className="text-sm text-gray-400">5年計画・ロードマップ</p>
                              <p className="text-xs text-gray-500">更新日: 2024年6月1日</p>
                            </div>
                            <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                              <Download className="h-4 w-4 mr-2" />
                              PDF
                            </Button>
                          </div>
                        </div>

                        <div className="bg-black p-4 rounded-lg border border-gray-700 hover:border-red-500 transition-colors">
                          <div className="flex justify-between items-center">
                            <div>
                              <h3 className="font-bold text-white">技術資料</h3>
                              <p className="text-sm text-gray-400">AI技術・プロダクト詳細</p>
                              <p className="text-xs text-gray-500">更新日: 2024年5月20日</p>
                            </div>
                            <Button size="sm" className="bg-red-600 hover:bg-red-700">
                              <Download className="h-4 w-4 mr-2" />
                              PDF
                            </Button>
                          </div>
                        </div>

                        <div className="bg-black p-4 rounded-lg border border-gray-700 hover:border-emerald-500 transition-colors">
                          <div className="flex justify-between items-center">
                            <div>
                              <h3 className="font-bold text-white">ESG報告書</h3>
                              <p className="text-sm text-gray-400">持続可能性・社会貢献</p>
                              <p className="text-xs text-gray-500">更新日: 2024年4月30日</p>
                            </div>
                            <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                              <Download className="h-4 w-4 mr-2" />
                              PDF
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-6">投資・パートナーシップのご相談</h2>
                  <div className="space-x-4">
                    <Button size="lg" className="bg-red-600 hover:bg-red-700" asChild>
                      <Link href="/contact">投資について相談する</Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black"
                      asChild
                    >
                      <Link href="/contact">事業パートナーになる</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
