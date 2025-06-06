# 🚀 ZettAI Corporate Website

<div align="center">

![ZettAI Logo](public/placeholder-logo.svg)

**AIで、未来を拓く人材と企業を。**

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-pink?style=flat-square&logo=framer)](https://www.framer.com/motion/)

[🌐 Live Demo](https://zettai-hp.vercel.app) • [📚 Documentation](#documentation) • [🎯 Features](#features)

</div>

---

## ✨ About ZettAI

ZettAIは、AI技術・人材・営業力の3軸で日本企業の成長と進化を支援するスタートアップです。次世代を担う若い才能とともに、**5年以内に100億円企業**を目指します。

### 🎯 Our Mission
> **「ゼッタイやる」精神で、AIの可能性を最大化し、企業と人材の成長を支援する**

---

## 🌟 Features

<table>
<tr>
<td width="50%">

### 🎨 **Modern Design**
- ミニマリストUIデザイン
- 企業資料に適した洗練されたレイアウト
- レスポンシブデザイン完全対応

### 📱 **Mobile First**
- タッチフレンドリーな48px最小タッチターゲット
- モバイル最適化されたナビゲーション
- アクセシビリティ完全対応

</td>
<td width="50%">

### ⚡ **Performance**
- Next.js 14 App Router
- 画像遅延読み込み
- モーション削減設定対応

### 🚀 **Interactive**
- Framer Motion アニメーション
- リアルタイム企業評価額カウンター
- インタラクティブなポートフォリオ

</td>
</tr>
</table>

---

## 🛠️ Tech Stack

<div align="center">

| Frontend | Styling | Animation | Development |
|:--------:|:-------:|:---------:|:-----------:|
| ![Next.js](https://img.shields.io/badge/-Next.js-000000?style=for-the-badge&logo=next.js) | ![Tailwind](https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css) | ![Framer](https://img.shields.io/badge/-Framer_Motion-0055FF?style=for-the-badge&logo=framer) | ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript) |
| React 18 | Responsive Design | Micro-interactions | Type Safety |
| App Router | Component Library | Accessibility | ESLint + Prettier |

</div>

---

## 📁 Project Structure

```
zettai-homepage/
├── 📁 app/                  # Next.js App Router
│   ├── 📄 page.tsx         # ホームページ
│   ├── 📁 bootcamp/        # ブートキャンプページ
│   ├── 📁 business/        # 事業紹介
│   ├── 📁 careers/         # 採用情報
│   ├── 📁 contact/         # お問い合わせ
│   ├── 📁 faq/            # よくある質問
│   ├── 📁 ir/             # IR情報
│   ├── 📁 legal/          # 利用規約・プライバシー
│   ├── 📁 officers/       # 役員紹介
│   └── 📁 portfolio/      # 作品ポートフォリオ
├── 📁 components/          # 再利用可能コンポーネント
│   ├── 📁 ui/             # Shadcn/ui コンポーネント
│   ├── 📄 site-header.tsx # ヘッダーコンポーネント
│   ├── 📄 site-footer.tsx # フッターコンポーネント
│   └── 📄 join-cta-button.tsx # CTAボタン
├── 📁 lib/                # ユーティリティ関数
├── 📁 public/             # 静的ファイル
└── 📁 styles/             # グローバルスタイル
```

---

## 🚀 Getting Started

### Prerequisites
```bash
Node.js 18.0+ 
npm, yarn, pnpm, or bun
```

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kazujp225/Zettai-HP.git
   cd Zettai-HP
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

---

## 📱 Page Overview

<div align="center">

| 📄 Page | 🎯 Purpose | 🔗 Route |
|---------|------------|----------|
| **ホーム** | 企業紹介・ミッション | `/` |
| **事業紹介** | 3つのコア事業 | `/business` |
| **役員紹介** | 経営陣・アドバイザー | `/officers` |
| **採用情報** | 募集職種・企業文化 | `/careers` |
| **ブートキャンプ** | 人材育成プログラム | `/bootcamp` |
| **ポートフォリオ** | 参加者作品集 | `/portfolio` |
| **IR情報** | 投資家向け情報 | `/ir` |
| **FAQ** | よくある質問 | `/faq` |
| **お問い合わせ** | 各種相談窓口 | `/contact` |
| **利用規約** | 法的情報 | `/legal` |

</div>

---

## 🎨 Design System

### Color Palette
```css
/* Primary Colors */
--red-500: #ef4444      /* ZettAI Red */
--emerald-400: #34d399  /* Success Green */
--blue-600: #2563eb     /* Corporate Blue */

/* Neutral Colors */
--gray-900: #111827     /* Dark Background */
--gray-50: #f9fafb      /* Light Background */
--white: #ffffff        /* Pure White */
```

### Typography
- **Headings**: Inter (Bold 600-900)
- **Body**: Inter (Regular 400-500)
- **Code**: JetBrains Mono

---

## 📊 Performance Metrics

<div align="center">

| Metric | Score | Status |
|--------|-------|--------|
| **Performance** | 95+ | 🟢 Excellent |
| **Accessibility** | 100 | 🟢 Perfect |
| **Best Practices** | 95+ | 🟢 Excellent |
| **SEO** | 100 | 🟢 Perfect |

*Lighthouse scores for desktop*

</div>

---

## 🔧 Development Commands

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run type-check   # TypeScript type checking

# Utilities
npm run clean        # Clean build artifacts
```

---

## 🌐 Deployment

### Vercel (Recommended)
```bash
# Deploy to Vercel
vercel --prod
```

### Other Platforms
- **Netlify**: Connect Git repository
- **AWS Amplify**: Use build settings
- **Docker**: Use included Dockerfile

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Workflow
1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact & Support

<div align="center">

### 🏢 ZettAI Inc.
**Email**: [contact@zettai.ai](mailto:contact@zettai.ai)  
**Website**: [zettai.ai](https://zettai.ai)  
**Location**: 東京都渋谷区道玄坂1-2-3

### 💬 Get in Touch
[![Email](https://img.shields.io/badge/Email-contact@zettai.ai-red?style=flat-square&logo=gmail)](mailto:contact@zettai.ai)
[![GitHub](https://img.shields.io/badge/GitHub-kazujp225-black?style=flat-square&logo=github)](https://github.com/kazujp225)

</div>

---

<div align="center">

**Made with ❤️ by ZettAI Team**

*Building the future, one AI solution at a time.*

[![ZettAI](https://img.shields.io/badge/ZettAI-2024-red?style=flat-square)](https://zettai.ai)

</div>