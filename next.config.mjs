/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'image.tmdb.org',
                port: '',
            },
        ]
    },
    env: {
        MOVIE_API_KEY: process.env.MOVIE_API_KEY,
    },
};

export default nextConfig;