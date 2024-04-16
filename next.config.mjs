/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        title: "SportCast+",
        NEXT_PUBLIC_WORDPRESS_API_ENDPOINT: "https://lime-panther-317414.hostingersite.com/graphql",
        NEXT_PUBLIC_LOCAL_API_ENDPOINT: "http://localhost:3000",
        NEXT_PUBLIC_HOST_API_ENDPOINT: "https://sportcast-plus.vercel.app"
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
