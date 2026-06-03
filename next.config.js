/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: process.env.NEXT_PUBLIC_SITE_URL === 'https://chinggiskhaanexpeditions.com' 
              ? 'index, follow' 
              : 'noindex, nofollow',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
