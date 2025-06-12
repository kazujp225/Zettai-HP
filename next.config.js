/** @type {import('next').NextConfig} */
const nextConfig = {
  // 動画URLの設定
  async rewrites() {
    return [
      {
        source: '/hirosectionvideo2.mp4',
        destination: 'https://github.com/kazujp225/Zettai-HP/releases/download/v1.0.0/hirosectionvideo2.mp4',
      },
    ]
  },
}

module.exports = nextConfig