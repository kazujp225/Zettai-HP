"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Rocket, Send } from "lucide-react"

export default function BootcampLivePage() {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([
    { user: "system", text: "ライブ配信が始まりました。チャットでコメントしましょう！" },
    { user: "田中", text: "こんにちは！今日も頑張りましょう！" },
    { user: "佐藤", text: "Figmaのテンプレートはどこからダウンロードできますか？" },
    { user: "鈴木", text: "右上のリンクからダウンロードできますよ！" },
  ])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      setMessages([...messages, { user: "あなた", text: message }])
      setMessage("")
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pt-32 pb-12 container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {/* ライブ配信エリア */}
          <div className="md:col-span-2">
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="aspect-video bg-black flex items-center justify-center">
                <div className="text-center">
                  <div className="animate-pulse mb-4">
                    <div className="h-4 w-16 bg-red-500 rounded mx-auto"></div>
                  </div>
                  <h2 className="text-2xl font-bold mb-2">ライブ配信中</h2>
                  <p className="text-gray-400">2-Day サイト制作ブートキャンプ</p>
                </div>
              </div>
              <div className="p-4">
                <h1 className="text-2xl font-bold mb-2">Day 1: Figma & AIコピー生成マスター</h1>
                <p className="text-gray-300">
                  今日はFigmaを使ったデザイン作成と、AIを活用したコピーライティングを学びます。
                  48時間後にはあなたのサイトが世界に公開されています！
                </p>
                <div className="mt-4 flex space-x-4">
                  <Button className="bg-red-600 hover:bg-red-700">Figmaテンプレートをダウンロード</Button>
                  <Button
                    variant="outline"
                    className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black"
                  >
                    GPTプロンプト集を見る
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-gray-900 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">タイムライン</h2>
              <div className="space-y-4">
                <div className="flex">
                  <div className="w-24 flex-shrink-0 text-red-500">09:00</div>
                  <div>
                    <div className="font-medium">オープニング</div>
                    <div className="text-gray-400 text-sm">ブートキャンプの概要説明</div>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-24 flex-shrink-0 text-red-500">09:30</div>
                  <div>
                    <div className="font-medium">Figma基礎</div>
                    <div className="text-gray-400 text-sm">テンプレートのカスタマイズ方法</div>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-24 flex-shrink-0 text-red-500">11:00</div>
                  <div>
                    <div className="font-medium">AIコピーライティング</div>
                    <div className="text-gray-400 text-sm">GPTを使った効果的な文章生成</div>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-24 flex-shrink-0 text-emerald-400">13:00</div>
                  <div>
                    <div className="font-medium">休憩</div>
                    <div className="text-gray-400 text-sm">1時間</div>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-24 flex-shrink-0 text-red-500">14:00</div>
                  <div>
                    <div className="font-medium">実践ワークショップ</div>
                    <div className="text-gray-400 text-sm">自分のサイトデザイン作成</div>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-24 flex-shrink-0 text-red-500">16:00</div>
                  <div>
                    <div className="font-medium">Day 1まとめ</div>
                    <div className="text-gray-400 text-sm">明日の準備と質疑応答</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* チャットエリア */}
          <div className="bg-gray-900 rounded-lg overflow-hidden flex flex-col h-[calc(100vh-150px)]">
            <div className="p-4 border-b border-gray-800 flex justify-between items-center">
              <h2 className="font-bold">ライブチャット</h2>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse mr-2"></div>
                <span className="text-sm text-gray-400">347人が参加中</span>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.user === "あなた" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      msg.user === "あなた"
                        ? "bg-emerald-900 text-white"
                        : msg.user === "system"
                          ? "bg-gray-800 text-gray-300 italic"
                          : "bg-gray-800 text-white"
                    }`}
                  >
                    {msg.user !== "あなた" && msg.user !== "system" && (
                      <div className="font-bold text-xs text-emerald-400 mb-1">{msg.user}</div>
                    )}
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-gray-800">
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="メッセージを入力..."
                  className="bg-gray-800 border-gray-700 text-white"
                />
                <Button type="submit" className="bg-red-600 hover:bg-red-700">
                  <Send className="h-4 w-4" />
                </Button>
              </form>
              <div className="mt-4">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 flex items-center justify-center gap-2">
                  <Rocket className="h-5 w-5" />
                  ブートキャンプに参加する
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
