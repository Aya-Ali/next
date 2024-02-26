/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'ecommerce.routemisr.com',
            port: '',
            pathname: '/Route-Academy-products/**',
          },
          {
            protocol: 'https',
            hostname: 'ecommerce.routemisr.com',
            port: '',
            pathname: '/Route-Academy-brands/**',
          },
        ],
      },
};

export default nextConfig;
//https://ecommerce.routemisr.com/Route-Academy-products/1680403397402-cover.jpeg
//"https://ecommerce.routemisr.com/Route-Academy-brands/1678286824747.png"