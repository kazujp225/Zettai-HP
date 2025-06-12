# 🚀 ZETTAI Inc. Corporate Website

<div align="center">
  
  <br />
  
  <img src="https://img.shields.io/badge/Next.js-15.2.4-black?style=for-the-badge&logo=next.js" alt="Next.js">
  <img src="https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Framer_Motion-11.0-FF0080?style=for-the-badge&logo=framer" alt="Framer Motion">
  
  <br />
  <br />
  
  <h2>✨ AIで企業の未来を創る ✨</h2>
  <p>ZETTAI Inc.の公式コーポレートサイト - Next.js 15とモダンなアニメーションライブラリで構築</p>
  
  <br />
  
  [🌐 Live Demo](https://zettai-hp.vercel.app) • [📚 Documentation](#-documentation) • [🎯 Features](#-features) • [🚀 Getting Started](#-getting-started)
  
</div>

<br />

---

## 📖 Overview

ZETTAI Inc.は、AI技術・人材・営業力の3軸で日本企業の成長と進化を支援するスタートアップです。2030年までに日本が直面する労働力不足の課題に対して、AI技術を活用した本質的な解決策を提供します。

### 🎯 Mission
> **「ゼッタイやる」精神で、不可能を可能にする**

### 🏆 Vision
> **5年以内に売上100億円企業を実現し、日本のAI産業をリードする**

<br />

---

## ✨ Features

### 🎨 **Design & UI/UX**
<table>
<tr>
<td width="50%">

#### 📱 レスポンシブデザイン
- モバイルファースト設計
- 完全レスポンシブ対応
- タッチフレンドリーなUI

#### 🌈 モダンアニメーション
- Framer Motionによる滑らかな遷移
- パーティクル背景演出
- タイピングアニメーション

</td>
<td width="50%">

#### 🎯 ユーザビリティ
- 直感的なナビゲーション
- アクセシビリティ完全対応
- パフォーマンス最適化

#### 🔧 カスタマイズ
- shadcn/ui コンポーネント
- Tailwind CSS カスタムテーマ
- ダークモード対応

</td>
</tr>
</table>

### 🛠 **Technical Stack**

<div align="center">

| Category | Technology | Version | Description |
|:--------:|:----------:|:-------:|:------------|
| **Framework** | ![Next.js](https://img.shields.io/badge/Next.js-000?style=flat-square&logo=next.js) | 15.2.4 | React フレームワーク |
| **Language** | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript) | 5.0 | 型安全な開発 |
| **Styling** | ![Tailwind](https://img.shields.io/badge/Tailwind-38B2AC?style=flat-square&logo=tailwind-css) | 3.4 | ユーティリティファーストCSS |
| **Animation** | ![Framer](https://img.shields.io/badge/Framer-0055FF?style=flat-square&logo=framer) | 11.0 | モーションライブラリ |
| **Particles** | ![tsParticles](https://img.shields.io/badge/tsParticles-FFD700?style=flat-square) | Latest | パーティクル効果 |
| **Components** | ![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000?style=flat-square) | Latest | UIコンポーネント |

</div>

<br />

---

## 📱 Pages & Features

### 🏠 **ホームページ**
- ヒーロービデオ背景
- リアルタイムカウンターアニメーション
- 5年間の成長ビジョン表示

### 💼 **事業内容**
1. **AI×現場改善型 業務効率化支援**
2. **デベロッパーマッチングプラットフォーム**
3. **データドリブン型 M&Aプラットフォーム**

### 👥 **役員紹介**
- ミニマルなグリッドレイアウト
- プロフェッショナルな情報設計
- アドバイザー紹介セクション

### 🎯 **採用情報**
- インタラクティブなパーティクル背景
- タイピングアニメーション
- 動的な職種選択UI
- 社員の声（AnimatedTestimonials）

### 🎓 **ブートキャンプ**
- 次世代AIエンジニア育成プログラム
- カリキュラム詳細
- 参加者作品ポートフォリオ

<br />

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0以上
- npm / pnpm / yarn / bun

### Installation

```bash
# リポジトリのクローン
git clone https://github.com/kazujp225/Zettai-HP.git
cd Zettai-HP

# 依存関係のインストール
npm install
# または
pnpm install

# 開発サーバーの起動
npm run dev
# または
pnpm dev
```

開発サーバーが起動したら、[http://localhost:3000](http://localhost:3000) でサイトを確認できます。

<br />

---

## 📁 Project Structure

```
zettai-homepage/
├── 📁 app/                    # Next.js App Router
│   ├── 📄 page.tsx           # ホームページ
│   ├── 📁 api/               # APIルート
│   ├── 📁 business/          # 事業内容
│   ├── 📁 officers/          # 役員紹介
│   ├── 📁 careers/           # 採用情報
│   ├── 📁 bootcamp/          # ブートキャンプ
│   ├── 📁 portfolio/         # ポートフォリオ
│   └── 📁 contact/           # お問い合わせ
├── 📁 components/            # Reactコンポーネント
│   ├── 📁 ui/               # shadcn/ui コンポーネント
│   ├── 📄 site-header.tsx    # ヘッダー
│   ├── 📄 site-footer.tsx    # フッター
│   └── 📄 careers-hero-particles.tsx # パーティクル背景
├── 📁 hooks/                # カスタムフック
├── 📁 lib/                  # ユーティリティ
├── 📁 public/               # 静的アセット
└── 📁 styles/               # グローバルスタイル
```

<br />

---

## 🎨 Design System

### Color Palette

```scss
// Primary Colors
$red-600: #dc2626;        // ZETTAI Red
$blue-600: #2563eb;       // Corporate Blue
$emerald-600: #059669;    // Success Green

// Neutral Colors
$gray-900: #111827;       // Dark Text
$gray-50: #f9fafb;        // Light Background
$white: #ffffff;          // Pure White

// Gradients
$gradient-primary: linear-gradient(to right, $red-600, $orange-600);
$gradient-secondary: linear-gradient(to bottom right, $gray-800, $gray-900);
```

### Typography

- **見出し**: Inter (Weight: 300-900)
- **本文**: Inter (Weight: 400-500)
- **コード**: JetBrains Mono

<br />

---

## 📈 Performance Optimization

### ⚡ Core Web Vitals
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1

### 🔧 最適化技術
- Next.js Image による画像最適化
- 動的インポートによるコード分割
- React Server Components の活用
- Tailwind CSS のツリーシェイキング

<br />

---

## 🚢 Deployment

### Vercel (推奨)
```bash
# Vercel CLIでデプロイ
vercel --prod
```

### その他のプラットフォーム
```bash
# プロダクションビルド
npm run build

# プロダクションサーバー起動
npm start
```

### 環境変数
```env
# .env.local
NEXT_PUBLIC_API_URL=your_api_url
```

<br />

---

## 📊 Scripts

```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "type-check": "tsc --noEmit",
  "format": "prettier --write ."
}
```

<br />

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### コーディング規約
- TypeScript の strict mode を使用
- Tailwind CSS のユーティリティクラスを優先
- コンポーネントは関数型で作成
- アクセシビリティを考慮した実装

<br />

---

## 📝 License

This project is proprietary and confidential. All rights reserved by ZETTAI Inc.

<br />

---

## 👥 Team

<div align="center">

| Role | Name | GitHub |
|:----:|:----:|:------:|
| **Lead Developer** | Kazuki | [@kazujp225](https://github.com/kazujp225) |
| **Engineering Team** | ZETTAI Inc. | - |
| **Design Team** | ZETTAI Inc. | - |

</div>

<br />

---

## 📞 Contact

<div align="center">

### 🏢 ZETTAI Inc.

📧 **Email**: [contact@zettai.inc](mailto:contact@zettai.inc)  
🌐 **Website**: [https://zettai.inc](https://zettai.inc)  
📍 **Location**: 東京都

<br />

[![Email](https://img.shields.io/badge/Email-Contact_Us-red?style=for-the-badge&logo=gmail)](mailto:contact@zettai.inc)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-black?style=for-the-badge&logo=github)](https://github.com/kazujp225)

</div>

---

<div align="center">
  
  <br />
  
  **Built with ❤️ by ZETTAI Inc.**
  
  <p>© 2024 ZETTAI Inc. All rights reserved.</p>
  
  <br />
  
  <img src="https://img.shields.io/badge/Status-Active-success?style=flat-square" alt="Status">
  <img src="https://img.shields.io/badge/Maintained-Yes-green?style=flat-square" alt="Maintained">
  <img src="https://img.shields.io/badge/Version-1.0.0-blue?style=flat-square" alt="Version">
  
</div>