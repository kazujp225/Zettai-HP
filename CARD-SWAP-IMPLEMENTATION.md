# Card Swap Animation 実装ガイド

## 概要
Card Swapアニメーションは、複数のカードを自動的に切り替えて表示する動的なUIコンポーネントです。採用情報ページのファーストビューに実装し、既存のテキストを左側に配置します。

## 実装方針

### 1. 技術選定
ZettAIホームページは既にFramer Motionを使用しているため、Card Swapもframer-motionで実装します。

**メリット:**
- 既存の依存関係を活用
- AnimatePresenceで滑らかな切り替え
- カスタマイズ性が高い
- パフォーマンスが良い

### 2. レイアウト構造

```
[デスクトップ]
┌─────────────────────────────────────────┐
│  左側: テキストコンテンツ  │  右側: Card Swap  │
│  (既存のヒーロー文言)     │  (アニメーション)  │
└─────────────────────────────────────────┘

[モバイル]
┌─────────────────────┐
│  テキストコンテンツ  │
├─────────────────────┤
│   Card Swap        │
│  アニメーション     │
└─────────────────────┘
```

## 実装詳細

### 1. Card Swapコンポーネント

```tsx
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface CardData {
  id: number
  title: string
  subtitle: string
  description: string
  color: string
  icon: React.ReactNode
}

const CardSwap = ({ cards }: { cards: CardData[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length)
    }, 3000) // 3秒ごとに切り替え

    return () => clearInterval(interval)
  }, [cards.length])

  return (
    <div className="relative w-full h-[400px] lg:h-[500px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={cards[currentIndex].id}
          initial={{ opacity: 0, y: 50, rotateY: -15 }}
          animate={{ opacity: 1, y: 0, rotateY: 0 }}
          exit={{ opacity: 0, y: -50, rotateY: 15 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 300,
            damping: 30
          }}
          className="absolute inset-0"
        >
          <div className={`h-full rounded-2xl p-8 shadow-2xl ${cards[currentIndex].color}`}>
            {/* カード内容 */}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
```

### 2. 採用情報ページのカードデータ

```tsx
const recruitmentCards = [
  {
    id: 1,
    title: "AIエンジニア",
    subtitle: "最先端技術で未来を創る",
    description: "GPT-4、Claude、最新のAI技術を駆使して、企業の課題を解決するソリューションを開発",
    color: "bg-gradient-to-br from-blue-500 to-purple-600",
    icon: <Brain className="w-12 h-12 text-white" />
  },
  {
    id: 2,
    title: "フルスタックエンジニア",
    subtitle: "End-to-Endで価値を届ける",
    description: "React/Next.js、Node.js、クラウドインフラまで、幅広い技術スタックで開発",
    color: "bg-gradient-to-br from-emerald-500 to-teal-600",
    icon: <Code className="w-12 h-12 text-white" />
  },
  {
    id: 3,
    title: "ビジネスデベロッパー",
    subtitle: "技術と事業の架け橋",
    description: "AI技術の可能性を理解し、クライアントの成功を最大化する提案と実行",
    color: "bg-gradient-to-br from-orange-500 to-red-600",
    icon: <Rocket className="w-12 h-12 text-white" />
  },
  {
    id: 4,
    title: "データサイエンティスト",
    subtitle: "データから価値を生み出す",
    description: "機械学習、統計解析、ビッグデータ処理で、意思決定を支援",
    color: "bg-gradient-to-br from-pink-500 to-rose-600",
    icon: <ChartBar className="w-12 h-12 text-white" />
  }
]
```

### 3. ヒーローセクションの実装

```tsx
<section className="relative min-h-screen bg-white">
  <div className="container mx-auto px-4">
    <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-24">
      
      {/* 左側: 既存のテキストコンテンツ */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-8"
      >
        <div>
          <span className="text-red-600 font-semibold">JOIN ZETTAI</span>
          <h1 className="text-5xl lg:text-6xl font-bold mt-4">
            一緒に<span className="text-red-600">未来</span>を
            <br />
            創りませんか？
          </h1>
        </div>
        
        <p className="text-xl text-gray-700 leading-relaxed">
          ZettAIは、AI技術で日本の未来を変える仲間を探しています。
          実力主義、多様性、そして「ゼッタイやる」精神を持つあなたを待っています。
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-red-600 hover:bg-red-700">
            採用情報を見る
            <ArrowRight className="ml-2" />
          </Button>
          <Button variant="outline">
            カジュアル面談
          </Button>
        </div>
      </motion.div>
      
      {/* 右側: Card Swap アニメーション */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <CardSwap cards={recruitmentCards} />
      </motion.div>
      
    </div>
  </div>
</section>
```

### 4. モバイル対応

```tsx
{/* モバイルレイアウト */}
<div className="lg:hidden">
  <div className="min-h-screen flex flex-col justify-center py-24">
    {/* テキストを上に */}
    <div className="mb-12 text-center px-4">
      {/* テキストコンテンツ */}
    </div>
    
    {/* Card Swapを下に */}
    <div className="px-4">
      <CardSwap cards={recruitmentCards} />
    </div>
  </div>
</div>
```

### 5. 追加のアニメーション効果

```tsx
// カード切り替え時の3D効果
const cardVariants = {
  enter: {
    opacity: 0,
    scale: 0.8,
    rotateY: -90,
    z: -100,
  },
  center: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    z: 0,
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    rotateY: 90,
    z: -100,
  },
}

// インジケーター
<div className="flex justify-center mt-6 space-x-2">
  {cards.map((_, index) => (
    <button
      key={index}
      onClick={() => setCurrentIndex(index)}
      className={`w-2 h-2 rounded-full transition-all ${
        index === currentIndex
          ? 'bg-gray-800 w-8'
          : 'bg-gray-300'
      }`}
    />
  ))}
</div>
```

### 6. パフォーマンス最適化

- **遅延読み込み**: Card Swapコンポーネントを動的インポート
- **GPU最適化**: transform3dを使用してGPUアクセラレーション
- **メモ化**: React.memoでカードコンポーネントを最適化
- **reduced motion対応**: アクセシビリティ考慮

```tsx
const CardSwap = dynamic(() => import('./CardSwap'), {
  loading: () => <div className="animate-pulse bg-gray-200 rounded-2xl h-[400px]" />,
  ssr: false
})
```

## 実装チェックリスト

- [ ] Framer Motionの依存関係確認
- [ ] CardSwapコンポーネントの作成
- [ ] 採用情報カードデータの定義
- [ ] ヒーローセクションのレイアウト変更
- [ ] モバイルレスポンシブ対応
- [ ] アニメーションの調整
- [ ] パフォーマンステスト
- [ ] アクセシビリティチェック

## 注意事項

1. **自動再生**: 3秒ごとの自動切り替えだが、ユーザーがホバーした時は一時停止
2. **タッチ対応**: モバイルでスワイプ操作も可能に
3. **SEO**: 全てのカード内容をHTMLに含める（非表示でも）
4. **アクセシビリティ**: キーボード操作、スクリーンリーダー対応

これらの実装により、採用情報ページに魅力的なCard Swapアニメーションを追加できます。