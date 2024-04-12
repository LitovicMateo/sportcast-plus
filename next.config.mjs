/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        title: "SportCast+"
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.hostingersite.com',
                port: ''
            }
        ]
    }
        
};

export default nextConfig;
