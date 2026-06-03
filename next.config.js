/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    const isProduction = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' || process.env.VERCEL_ENV === 'production';
    
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: isProduction ? 'index, follow' : 'noindex, nofollow',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
