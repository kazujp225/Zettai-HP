# 動画セットアップガイド

## hirosectionvideo2.mp4 のアップロード方法

### 方法1: Cloudinary (推奨)
1. [Cloudinary](https://cloudinary.com/) で無料アカウントを作成
2. ダッシュボードから「Media Library」へ
3. hirosectionvideo2.mp4をアップロード
4. アップロード後のURLをコピー
5. app/page.tsx の以下の部分を更新:
   ```
   YOUR_CLOUD_NAME → あなたのCloudinary名
   v1234567890 → 実際のバージョン番号
   ```

### 方法2: GitHub Releases
1. https://github.com/kazujp225/Zettai-HP/releases で新しいリリースを作成
2. hirosectionvideo2.mp4をアセットとして添付
3. 公開後、動画ファイルのURLをコピー
4. app/page.tsx のURLを更新

### 方法3: 動画圧縮
ファイルサイズを削減する場合:
```bash
# macOSの場合 (Homebrew必要)
brew install ffmpeg

# 圧縮コマンド (約60-70%サイズ削減)
ffmpeg -i hirosectionvideo2.mp4 -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k hirosectionvideo2_compressed.mp4
```

## 現在の設定
- hirosectionvideo.mp4: ローカルファイル (56MB)
- hirosectionvideo2.mp4: 外部CDNでホスト予定 (50MB)