"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Clock, Code, Download, Github, MessageSquare, Rocket, Send, Twitter } from "lucide-react"
import { JoinCtaButton } from "@/components/join-cta-button"

export default function BootcampPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    social: "",
    comment: "",
  })

  // カウントダウンタイマーの設定
  useEffect(() => {
    // 次回開始日時を設定（例：2024年7月1日）
    const nextBootcamp = new Date("2024-07-01T09:00:00").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = nextBootcamp - now

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      })

      if (distance < 0) {
        clearInterval(timer)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // ここでDiscordへの招待処理を実装
    alert("フォームが送信されました！Discordへの招待が送られます。")
    console.log(formData)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="text-emerald-400">48時間</span>後、
            <br />
            あなたのサイトが<span className="text-red-500">世界に公開</span>されている。
          </h1>

          <div className="max-w-3xl mx-auto mb-12">
            <div className="bg-gray-900 rounded-lg p-6 shadow-lg">
              <p className="text-xl mb-4">次回ブートキャンプ開始まで</p>
              <div className="grid grid-cols-4 gap-4">
                <div className="bg-black p-4 rounded-lg">
                  <div className="text-4xl font-bold text-red-500">{timeLeft.days}</div>
                  <div className="text-gray-400">日</div>
                </div>
                <div className="bg-black p-4 rounded-lg">
                  <div className="text-4xl font-bold text-red-500">{timeLeft.hours}</div>
                  <div className="text-gray-400">時間</div>
                </div>
                <div className="bg-black p-4 rounded-lg">
                  <div className="text-4xl font-bold text-red-500">{timeLeft.minutes}</div>
                  <div className="text-gray-400">分</div>
                </div>
                <div className="bg-black p-4 rounded-lg">
                  <div className="text-4xl font-bold text-red-500">{timeLeft.seconds}</div>
                  <div className="text-gray-400">秒</div>
                </div>
              </div>
            </div>
          </div>

          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-xl">
            今すぐ参加する
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* ステップ図解 */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-emerald-400">たった4ステップ</span>で<br />
            あなたのサイトが完成する
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <Card className="bg-gray-900 border-gray-700 overflow-hidden">
              <div className="h-48 bg-gray-800 flex items-center justify-center">
                <Download className="h-16 w-16 text-emerald-400" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xl font-bold text-white">Step 1</div>
                  <div className="text-emerald-400 flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    0-3時間
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Figmaテンプレ活用</h3>
                <p className="text-gray-400">
                  提供されるFigmaテンプレートをダウンロードし、ロゴや色を自分好みに差し替えるだけ。
                </p>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="bg-gray-900 border-gray-700 overflow-hidden">
              <div className="h-48 bg-gray-800 flex items-center justify-center">
                <MessageSquare className="h-16 w-16 text-red-500" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xl font-bold text-white">Step 2</div>
                  <div className="text-red-500 flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    3-6時間
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">AI文章生成</h3>
                <p className="text-gray-400">
                  専用GPTプロンプトを使って、魅力的なコピーを自動生成。コピペするだけでOK。
                </p>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="bg-gray-900 border-gray-700 overflow-hidden">
              <div className="h-48 bg-gray-800 flex items-center justify-center">
                <Code className="h-16 w-16 text-emerald-400" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xl font-bold text-white">Step 3</div>
                  <div className="text-emerald-400 flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    6-18時間
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">コーディング＆デプロイ</h3>
                <p className="text-gray-400">
                  テンプレートコードを編集し、自動デプロイ。専門知識がなくても完成できる。
                </p>
              </CardContent>
            </Card>

            {/* Step 4 */}
            <Card className="bg-gray-900 border-gray-700 overflow-hidden">
              <div className="h-48 bg-gray-800 flex items-center justify-center">
                <Rocket className="h-16 w-16 text-red-500" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xl font-bold text-white">Step 4</div>
                  <div className="text-red-500 flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    18-48時間
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">公開＆SNS発信</h3>
                <p className="text-gray-400">
                  完成したサイトを世界に公開し、SNSで拡散。あなたの作品が世界中で見られる。
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 p-6 bg-gray-900 rounded-lg border border-gray-700">
            <h3 className="text-xl font-bold mb-4">GPTプロンプト例</h3>
            <div className="bg-black p-4 rounded-lg text-gray-300 font-mono text-sm overflow-x-auto">
              <pre>{`あなたはプロのコピーライターです。以下の情報をもとに、魅力的なWebサイトのコピーを作成してください：
- サービス名：[あなたのサービス名]
- ターゲット：[ターゲット層]
- 提供価値：[主な価値提案]
- トーン：情熱的で力強い
- 文字数：見出し20字以内、本文100字程度`}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* Bootcamp Benefits */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            参加者<span className="text-red-500">特典</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-black border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-emerald-400">ストックオプション候補</h3>
                <p className="text-gray-300 mb-4">
                  優秀な参加者には、ZettAIのストックオプションを付与。次期プロジェクトの優先アサインも。
                </p>
                <div className="bg-gray-900 p-4 rounded-lg">
                  <div className="text-sm text-gray-400">選考基準</div>
                  <ul className="list-disc list-inside text-gray-300 mt-2">
                    <li>48時間以内の完成度</li>
                    <li>オリジナリティ</li>
                    <li>技術的チャレンジ</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-red-500">コミュニティ招待</h3>
                <p className="text-gray-300 mb-4">
                  参加者限定のSlack/Discordコミュニティに招待。現役エンジニアや起業家との交流が可能に。
                </p>
                <div className="bg-gray-900 p-4 rounded-lg">
                  <div className="text-sm text-gray-400">コミュニティ特典</div>
                  <ul className="list-disc list-inside text-gray-300 mt-2">
                    <li>週1回のオンライン勉強会</li>
                    <li>プロジェクト相談</li>
                    <li>採用情報の優先案内</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 社会証明 */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            参加者の<span className="text-emerald-400">声</span>
          </h2>

          <div className="mb-12">
            <Tabs defaultValue="testimonials" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="testimonials" className="text-lg">
                  参加者の声
                </TabsTrigger>
                <TabsTrigger value="results" className="text-lg">
                  実績
                </TabsTrigger>
              </TabsList>
              <TabsContent value="testimonials">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Testimonial 1 */}
                  <Card className="bg-gray-900 border-gray-700">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-gray-700 mr-4"></div>
                        <div>
                          <div className="font-bold">田中さん</div>
                          <div className="text-gray-400 text-sm flex items-center">
                            <Twitter className="h-4 w-4 mr-1" />
                            @tanaka_web
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-300">
                        「プログラミング未経験でしたが、48時間で自分のポートフォリオサイトが完成！就活でも評価されました。」
                      </p>
                      <div className="mt-4 bg-black p-2 rounded-lg">
                        <img
                          src="/placeholder.svg?key=lci33"
                          alt="田中さんのポートフォリオ"
                          className="w-full h-auto rounded"
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Testimonial 2 */}
                  <Card className="bg-gray-900 border-gray-700">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-gray-700 mr-4"></div>
                        <div>
                          <div className="font-bold">佐藤さん</div>
                          <div className="text-gray-400 text-sm flex items-center">
                            <Twitter className="h-4 w-4 mr-1" />
                            @sato_design
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-300">
                        「デザインはできてもコーディングが苦手でした。このブートキャンプのおかげで自分のサービスを形にできました！」
                      </p>
                      <div className="mt-4 bg-black p-2 rounded-lg">
                        <img
                          src="/placeholder.svg?key=51839"
                          alt="佐藤さんのサービスサイト"
                          className="w-full h-auto rounded"
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Testimonial 3 */}
                  <Card className="bg-gray-900 border-gray-700">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-gray-700 mr-4"></div>
                        <div>
                          <div className="font-bold">鈴木さん</div>
                          <div className="text-gray-400 text-sm flex items-center">
                            <Github className="h-4 w-4 mr-1" />
                            suzuki_dev
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-300">
                        「エンジニア転職を目指していましたが、ポートフォリオがなくて悩んでいました。このブートキャンプで一気に解決！」
                      </p>
                      <div className="mt-4 bg-black p-2 rounded-lg">
                        <img
                          src="/placeholder.svg?key=mqgwt"
                          alt="鈴木さんのポートフォリオ"
                          className="w-full h-auto rounded"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="results">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <Card className="bg-gray-900 border-gray-700">
                    <CardContent className="p-6">
                      <div className="text-4xl font-bold text-red-500 mb-2">347</div>
                      <div className="text-gray-300">累計サイト公開数</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-gray-900 border-gray-700">
                    <CardContent className="p-6">
                      <div className="text-4xl font-bold text-emerald-400 mb-2">36時間</div>
                      <div className="text-gray-300">平均制作時間</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-gray-900 border-gray-700">
                    <CardContent className="p-6">
                      <div className="text-4xl font-bold text-red-500 mb-2">92%</div>
                      <div className="text-gray-300">完成率</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-gray-900 border-gray-700">
                    <CardContent className="p-6">
                      <div className="text-4xl font-bold text-emerald-400 mb-2">23名</div>
                      <div className="text-gray-300">採用実績</div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* 参加フォーム */}
      <section className="py-20 bg-gradient-to-br from-red-900 via-black to-emerald-900">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              <span className="text-emerald-400">今すぐ</span>参加する
            </h2>
            <p className="text-xl text-center mb-8 text-gray-300">
              フォームに記入するだけで、すぐにDiscordコミュニティに招待されます。
              <br />
              <span className="text-red-500 font-bold">参加費は0円</span>です。
            </p>

            <Card className="bg-black border-gray-700">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      お名前
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-900 border-gray-700 text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      メールアドレス
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-900 border-gray-700 text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="social" className="block text-sm font-medium text-gray-300 mb-1">
                      GitHub または SNS アカウント
                    </label>
                    <Input
                      id="social"
                      name="social"
                      value={formData.social}
                      onChange={handleInputChange}
                      className="bg-gray-900 border-gray-700 text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="comment" className="block text-sm font-medium text-gray-300 mb-1">
                      コメント（任意）
                    </label>
                    <Textarea
                      id="comment"
                      name="comment"
                      value={formData.comment}
                      onChange={handleInputChange}
                      className="bg-gray-900 border-gray-700 text-white"
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-6 text-lg">
                    Discord コミュニティに参加する
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
            <div className="mt-8 text-center">
              <p className="text-xl text-gray-300 mb-4">ブートキャンプ参加後、チームへの参加も可能です</p>
              <JoinCtaButton size="lg">まず話してみたい人はこちら</JoinCtaButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
