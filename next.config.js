const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true
    },
    assetPrefix: isProd ? '/resume-next-v1' : undefined,
    basePath: isProd ? '/resume-next-v1' : undefined,
}

module.exports = nextConfig
