const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true
    },
    assetPrefix: isProd ? '/resume-next-v1' : undefined,
    basePath: '/resume-next-v1',
    distDir: 'docs',
}

module.exports = nextConfig
