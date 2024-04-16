/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        title: "SportCast+",
        NEXT_PUBLIC_WORDPRESS_API_ENDPOINT: "https://lime-panther-317414.hostingersite.com/graphql"
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
