
const nextConfig = {
  reactStrictMode: true, // Enables React strict mode for better error handling
  swcMinify: true,       // Enables SWC-based minification for faster builds
  
  // Adding environment variables
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    SECRET_API_KEY: process.env.SECRET_API_KEY, // Only accessible on server-side
  },

  // Internationalization (i18n) settings
  i18n: {
    locales: ['en', 'fr', 'es'], // Define supported locales
    defaultLocale: 'en',         // Set the default locale
  },
};

export default nextConfig;
