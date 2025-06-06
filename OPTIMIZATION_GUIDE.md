# 全ページ最適化ガイド

## 完了した最適化

### 1. ホームページ (app/page.tsx)
✅ **モバイル最適化**
- レスポンシブレイアウト（モバイルファースト）
- タッチフレンドリーなボタン（48px以上）
- 適切なフォントサイズとスペーシング
- 水平スクロール防止（overflow-x-hidden）

✅ **パフォーマンス最適化**
- useReducedMotion対応
- アニメーション最適化（cancelAnimationFrame）
- viewport最適化（margin設定）
- 遅延読み込み準備（lazy loading）

### 2. FAQページ (app/faq/page.tsx)
✅ **モバイル最適化**
- レスポンシブ検索バー
- グリッドベースのカテゴリフィルター
- タッチフレンドリーなボタン

## 残りページの最適化戦略

### 全ページ共通の最適化パターン

```typescript
// 1. useReducedMotion追加
import { motion, useReducedMotion } from "framer-motion"

export default function PageComponent() {
  const prefersReducedMotion = useReducedMotion()
  
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* 水平スクロール防止 */}
      
      <motion.div
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.8 }}
      >
        {/* コンテンツ */}
      </motion.div>
    </div>
  )
}
```

### モバイル最適化のベストプラクティス

#### 1. レスポンシブクラス
```typescript
// フォントサイズ
className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl"

// スペーシング
className="py-12 lg:py-20 px-4 lg:px-8"

// グリッドレイアウト
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
```

#### 2. タッチフレンドリーUI
```typescript
// ボタン
className="min-h-[48px] px-6 lg:px-8 text-base touch-manipulation"

// 入力フィールド
className="h-12 lg:h-14 text-base touch-manipulation"
```

#### 3. モバイル専用調整
```typescript
// デスクトップのみ表示
className="hidden lg:block"

// モバイルでの改行制御
<br className="hidden sm:block" />

// モバイル優先の順序
className="order-2 lg:order-1"
```

## 各ページ別最適化ポイント

### Officers Page (app/officers/page.tsx)
- **プロフィールカード**: スタック表示（モバイル）→ 横並び（デスクトップ）
- **画像最適化**: Next.js Image component使用
- **SNSリンク**: タッチフレンドリーなアイコンサイズ

### Contact Page (app/contact/page.tsx)
- **フォーム最適化**: モバイルでのフルサイズ入力
- **バリデーション**: リアルタイムフィードバック
- **送信ボタン**: Loading状態の表示

### Business Page (app/business/page.tsx)
- **サービスカード**: レスポンシブグリッド
- **アイコン**: 適切なサイズ調整
- **CTA**: モバイルでのフルサイズボタン

### Careers Page (app/careers/page.tsx)
- **求人カード**: モバイル優先レイアウト
- **応募フォーム**: タッチ最適化
- **条件フィルター**: アコーディオン形式

## パフォーマンス最適化

### 1. 画像最適化
```typescript
import Image from 'next/image'

// 遅延読み込みと最適化
<Image
  src="/image.jpg"
  alt="説明"
  width={400}
  height={300}
  loading="lazy"
  placeholder="blur"
  className="rounded-lg"
/>
```

### 2. コンポーネント分割
```typescript
import { lazy, Suspense } from 'react'

// 重いコンポーネントの遅延読み込み
const HeavyComponent = lazy(() => import('./HeavyComponent'))

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  )
}
```

### 3. アニメーション最適化
```typescript
// GPU加速を活用
className="transform-gpu will-change-transform"

// 条件付きアニメーション
whileHover={prefersReducedMotion ? {} : { y: -2 }}
```

## 水平構造のベストプラクティス

### 1. Flexboxレイアウト
```typescript
// 中央揃え
className="flex items-center justify-center"

// レスポンシブ方向
className="flex flex-col sm:flex-row"
```

### 2. Gridレイアウト
```typescript
// 自動調整グリッド
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr"

// スパン制御
className="col-span-full lg:col-span-2"
```

### 3. コンテナ管理
```typescript
// 最大幅制御
className="max-w-6xl mx-auto"

// レスポンシブパディング
className="px-4 sm:px-6 lg:px-8"
```

## 実装優先順位

### Phase 1: 必須最適化 (即座に実装)
1. **水平スクロール防止**: `overflow-x-hidden`
2. **タッチターゲット**: 48px以上のボタン
3. **レスポンシブフォント**: 適切なサイズ調整

### Phase 2: パフォーマンス最適化 (短期)
1. **useReducedMotion**: アニメーション最適化
2. **画像最適化**: Next.js Image使用
3. **遅延読み込み**: 重要でないコンテンツ

### Phase 3: UX向上 (中期)
1. **Loading状態**: スケルトンローダー
2. **エラーハンドリング**: ユーザーフレンドリーなメッセージ
3. **アクセシビリティ**: ARIA対応

## 測定とモニタリング

### Core Web Vitals
- **LCP**: 2.5秒以下
- **FID**: 100ms以下  
- **CLS**: 0.1以下

### ツール
- Chrome DevTools
- Lighthouse
- WebPageTest
- GTmetrix

## 次のステップ

1. 残りページに最適化パターンを適用
2. 画像最適化の実装
3. パフォーマンステストの実行
4. ユーザーテストの実施