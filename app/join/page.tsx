"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowLeft, ArrowRight, CheckCircle2, Rocket, Send, Sparkles } from "lucide-react"

// フォームの型定義
type FormData = {
  // Step 1
  name: string
  email: string
  age: string
  socialLink: string

  // Step 2
  status: string
  currentWork: string
  whyInterested: string
  challenge: string

  // Step 3
  participationStyle: string[]
  contactPreference: string
  additionalComments: string
}

export default function JoinForm() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // フォームデータの初期値
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    age: "",
    socialLink: "",
    status: "",
    currentWork: "",
    whyInterested: "",
    challenge: "",
    participationStyle: [],
    contactPreference: "",
    additionalComments: "",
  })

  // 入力値の更新
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // セレクトの更新
  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // チェックボックスの更新
  const handleCheckboxChange = (value: string) => {
    setFormData((prev) => {
      const currentStyles = prev.participationStyle || []

      if (currentStyles.includes(value)) {
        return {
          ...prev,
          participationStyle: currentStyles.filter((style) => style !== value),
        }
      } else {
        return {
          ...prev,
          participationStyle: [...currentStyles, value],
        }
      }
    })
  }

  // 次のステップへ
  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1)
      window.scrollTo(0, 0)
    }
  }

  // 前のステップへ
  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1)
      window.scrollTo(0, 0)
    }
  }

  // フォーム送信
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // ここで実際のAPIエンドポイントにデータを送信
      // 例: await fetch('/api/join', { method: 'POST', body: JSON.stringify(formData) })

      // 送信成功を模擬（実際の実装では、APIレスポンスを待つ）
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setIsSubmitted(true)
      // 成功後の処理
    } catch (error) {
      console.error("送信エラー:", error)
      // エラー処理
    } finally {
      setIsSubmitting(false)
    }
  }

  // 参加スタイルのオプション
  const participationOptions = [
    { id: "intern", label: "インターンで学びたい" },
    { id: "member", label: "事業メンバーとして参画したい" },
    { id: "engineer", label: "AIエンジニアとして開発したい" },
    { id: "sales", label: "営業を学びたい" },
    { id: "interested", label: "よくわからないけど惹かれた" },
  ]

  // 送信完了画面
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white text-black pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center">
                <CheckCircle2 className="h-10 w-10 text-emerald-600" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              応募<span className="text-emerald-400">完了</span>！
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              {formData.name}さん、ZettAIへのご応募ありがとうございます！
              <br />
              メールアドレス（{formData.email}）に確認メールをお送りしました。
            </p>

            <Card className="bg-white border-gray-200 shadow-lg mb-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4 flex items-center text-black">
                  <Sparkles className="mr-2 h-5 w-5 text-red-500" />
                  次のステップ
                </h2>

                <ul className="space-y-4 text-left">
                  <li className="flex items-start">
                    <div className="bg-emerald-100 text-emerald-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                      1
                    </div>
                    <div>
                      <p className="font-medium text-black">メールを確認してください</p>
                      <p className="text-gray-600 text-sm">面談予約リンクが記載されています</p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="bg-emerald-100 text-emerald-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                      2
                    </div>
                    <div>
                      <p className="font-medium text-black">Discordコミュニティに参加</p>
                      <p className="text-gray-600 text-sm">メールに記載のリンクから参加できます</p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="bg-emerald-100 text-emerald-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                      3
                    </div>
                    <div>
                      <p className="font-medium text-black">オンライン面談</p>
                      <p className="text-gray-600 text-sm">あなたの熱意をぜひ聞かせてください！</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => router.push("/")}
                variant="outline"
                className="border-gray-300 text-gray-600 hover:bg-gray-50"
              >
                トップページに戻る
              </Button>

              <Button onClick={() => router.push("/bootcamp")} className="bg-red-600 hover:bg-red-700">
                <Rocket className="mr-2 h-4 w-4" />
                ブートキャンプに参加する
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white text-black pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              ZettAIに<span className="text-red-500">JOIN</span>する
            </h1>
            <p className="text-xl text-gray-600">熱意ある仲間と一緒に、未来を創りませんか？</p>
          </div>

          {/* ステッププログレス */}
          <div className="mb-8">
            <div className="flex justify-between items-center">
              <div className={`flex flex-col items-center ${step >= 1 ? "text-emerald-600" : "text-gray-400"}`}>
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                    step >= 1 ? "bg-emerald-100 text-emerald-600" : "bg-gray-100 text-gray-400"
                  }`}
                >
                  1
                </div>
                <span className="text-sm">基本情報</span>
              </div>

              <div className={`flex-1 h-1 mx-2 ${step >= 2 ? "bg-emerald-200" : "bg-gray-200"}`}></div>

              <div className={`flex flex-col items-center ${step >= 2 ? "text-emerald-600" : "text-gray-400"}`}>
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                    step >= 2 ? "bg-emerald-100 text-emerald-600" : "bg-gray-100 text-gray-400"
                  }`}
                >
                  2
                </div>
                <span className="text-sm">あなたについて</span>
              </div>

              <div className={`flex-1 h-1 mx-2 ${step >= 3 ? "bg-emerald-200" : "bg-gray-200"}`}></div>

              <div className={`flex flex-col items-center ${step >= 3 ? "text-emerald-600" : "text-gray-400"}`}>
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                    step >= 3 ? "bg-emerald-100 text-emerald-600" : "bg-gray-100 text-gray-400"
                  }`}
                >
                  3
                </div>
                <span className="text-sm">参加スタイル</span>
              </div>
            </div>
          </div>

          <Card className="bg-white border-gray-200 shadow-lg">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit}>
                {/* Step 1: 基本情報 */}
                {step === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-6 flex items-center text-black">
                      <span className="bg-emerald-100 text-emerald-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                        1
                      </span>
                      基本情報
                    </h2>

                    <div>
                      <Label htmlFor="name" className="text-black mb-2 block">
                        お名前 <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="ニックネーム可"
                        required
                        className="bg-white border-gray-300 text-black"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-black mb-2 block">
                        メールアドレス <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="連絡先として使用します"
                        required
                        className="bg-white border-gray-300 text-black"
                      />
                    </div>

                    <div>
                      <Label htmlFor="age" className="text-black mb-2 block">
                        年齢（任意）
                      </Label>
                      <Select value={formData.age} onValueChange={(value) => handleSelectChange("age", value)}>
                        <SelectTrigger className="bg-white border-gray-300 text-black">
                          <SelectValue placeholder="選択してください" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under18">18歳未満</SelectItem>
                          <SelectItem value="18-22">18〜22歳</SelectItem>
                          <SelectItem value="23-29">23〜29歳</SelectItem>
                          <SelectItem value="30-39">30〜39歳</SelectItem>
                          <SelectItem value="40+">40歳以上</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="socialLink" className="text-black mb-2 block">
                        SNS または GitHub（任意）
                      </Label>
                      <Input
                        id="socialLink"
                        name="socialLink"
                        value={formData.socialLink}
                        onChange={handleChange}
                        placeholder="URL（Twitter、LinkedIn、GitHub など）"
                        className="bg-white border-gray-300 text-black"
                      />
                      <p className="text-gray-500 text-sm mt-1">あなたの作品や発信が見られるリンクがあれば</p>
                    </div>

                    <div className="pt-4 flex justify-end">
                      <Button type="button" onClick={nextStep} className="bg-emerald-600 hover:bg-emerald-700">
                        次へ
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 2: あなたについて */}
                {step === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-6 flex items-center text-black">
                      <span className="bg-emerald-100 text-emerald-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                        2
                      </span>
                      あなたについて
                    </h2>

                    <div>
                      <Label htmlFor="status" className="text-black mb-2 block">
                        あなたの現状（任意）
                      </Label>
                      <Select value={formData.status} onValueChange={(value) => handleSelectChange("status", value)}>
                        <SelectTrigger className="bg-white border-gray-300 text-black">
                          <SelectValue placeholder="選択してください" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="university">大学生</SelectItem>
                          <SelectItem value="highschool">高校生</SelectItem>
                          <SelectItem value="graduate">既卒</SelectItem>
                          <SelectItem value="freeter">フリーター</SelectItem>
                          <SelectItem value="employed">社会人</SelectItem>
                          <SelectItem value="none">無所属</SelectItem>
                          <SelectItem value="other">その他</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="currentWork" className="text-black mb-2 block">
                        今取り組んでることは？ <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="currentWork"
                        name="currentWork"
                        value={formData.currentWork}
                        onChange={handleChange}
                        placeholder="現在の活動や興味を持っていることを教えてください"
                        required
                        className="bg-white border-gray-300 text-black min-h-[100px]"
                      />
                    </div>

                    <div>
                      <Label htmlFor="whyInterested" className="text-black mb-2 block">
                        なぜZettAIに興味を持った？ <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="whyInterested"
                        name="whyInterested"
                        value={formData.whyInterested}
                        onChange={handleChange}
                        placeholder="ZettAIのどんな点に共感・興味を持ちましたか？"
                        required
                        className="bg-white border-gray-300 text-black min-h-[100px]"
                      />
                    </div>

                    <div>
                      <Label htmlFor="challenge" className="text-black mb-2 block">
                        どんな挑戦をしたい？ <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="challenge"
                        name="challenge"
                        value={formData.challenge}
                        onChange={handleChange}
                        placeholder="ZettAIでどんなことに挑戦したいですか？"
                        required
                        className="bg-white border-gray-300 text-black min-h-[100px]"
                      />
                    </div>

                    <div className="pt-4 flex justify-between">
                      <Button
                        type="button"
                        onClick={prevStep}
                        variant="outline"
                        className="border-gray-300 text-gray-600 hover:bg-gray-50"
                      >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        戻る
                      </Button>

                      <Button type="button" onClick={nextStep} className="bg-emerald-600 hover:bg-emerald-700">
                        次へ
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3: 参加スタイルと連絡 */}
                {step === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-6 flex items-center text-black">
                      <span className="bg-emerald-100 text-emerald-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                        3
                      </span>
                      参加スタイルと連絡
                    </h2>

                    <div>
                      <Label className="text-black mb-3 block">
                        どんな形で参加したい？ <span className="text-red-500">*</span>
                      </Label>
                      <div className="space-y-3">
                        {participationOptions.map((option) => (
                          <div key={option.id} className="flex items-center space-x-2">
                            <Checkbox
                              id={option.id}
                              checked={formData.participationStyle.includes(option.id)}
                              onCheckedChange={() => handleCheckboxChange(option.id)}
                              className="border-gray-400 data-[state=checked]:bg-red-500 data-[state=checked]:border-red-500"
                            />
                            <Label htmlFor={option.id} className="text-gray-700 cursor-pointer">
                              {option.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label className="text-black mb-3 block">
                        面談希望方法 <span className="text-red-500">*</span>
                      </Label>
                      <RadioGroup
                        value={formData.contactPreference}
                        onValueChange={(value) => handleSelectChange("contactPreference", value)}
                        className="space-y-3"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="zoom" id="zoom" className="border-gray-400 text-red-500" />
                          <Label htmlFor="zoom" className="text-gray-700 cursor-pointer">
                            Zoom / オンライン通話希望
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="chat" id="chat" className="border-gray-400 text-red-500" />
                          <Label htmlFor="chat" className="text-gray-700 cursor-pointer">
                            Slack or Discordでチャット相談
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="undecided" id="undecided" className="border-gray-400 text-red-500" />
                          <Label htmlFor="undecided" className="text-gray-700 cursor-pointer">
                            まだ少し迷っている
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label htmlFor="additionalComments" className="text-black mb-2 block">
                        その他・一言あれば（任意）
                      </Label>
                      <Textarea
                        id="additionalComments"
                        name="additionalComments"
                        value={formData.additionalComments}
                        onChange={handleChange}
                        placeholder="質問や伝えたいことがあればどうぞ"
                        className="bg-white border-gray-300 text-black"
                      />
                    </div>

                    <div className="pt-4 flex justify-between">
                      <Button
                        type="button"
                        onClick={prevStep}
                        variant="outline"
                        className="border-gray-300 text-gray-600 hover:bg-gray-50"
                      >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        戻る
                      </Button>

                      <Button type="submit" className="bg-red-600 hover:bg-red-700" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>送信中...</>
                        ) : (
                          <>
                            応募する
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>

          {/* 補足情報 */}
          <div className="mt-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold mb-4 flex items-center text-black">
              <Sparkles className="mr-2 h-5 w-5 text-emerald-400" />
              応募後の流れ
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <div className="bg-red-100 text-red-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                  1
                </div>
                <div>応募完了後、自動返信メールが届きます</div>
              </li>
              <li className="flex items-start">
                <div className="bg-red-100 text-red-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                  2
                </div>
                <div>メール内のリンクから面談の日程を選択できます</div>
              </li>
              <li className="flex items-start">
                <div className="bg-red-100 text-red-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                  3
                </div>
                <div>Discordコミュニティにも招待されます（任意参加）</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
