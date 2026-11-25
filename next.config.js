/** @type {import('next').NextConfig} */
const nextConfig = {
  // STATIC EXPORT (2026-11-23): the site has no database-backed content —
  // every page/blog post is seed data built at build time — so all pages are
  // pre-rendered HTML. Zero ISR reads/writes, zero server functions.
  // Redirects moved to vercel.json (next.config redirects do not apply in
  // static export). API routes (/api/seo, /api/upload) removed — they are
  // admin-only and did not work on Vercel anyway.

  output: 'export',

  // Trailing slash keeps URLs matching canonical tags
  trailingSlash: true,

  // Security & Best Practices
  poweredByHeader: false,
  reactStrictMode: true,

  // Image Optimization - Static export requires unoptimized: true
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
        pathname: '/**',
      },
    ],
    deviceSizes: [390, 640, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 64, 96, 128, 256],
  },

  // Performance optimizations
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      'date-fns',
      '@radix-ui/react-accordion',
      '@radix-ui/react-alert-dialog',
      '@radix-ui/react-aspect-ratio',
      '@radix-ui/react-avatar',
      '@radix-ui/react-checkbox',
      '@radix-ui/react-collapsible',
      '@radix-ui/react-context-menu',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-hover-card',
      '@radix-ui/react-label',
      '@radix-ui/react-menubar',
      '@radix-ui/react-navigation-menu',
      '@radix-ui/react-popover',
      '@radix-ui/react-progress',
      '@radix-ui/react-radio-group',
      '@radix-ui/react-scroll-area',
      '@radix-ui/react-select',
      '@radix-ui/react-separator',
      '@radix-ui/react-slider',
      '@radix-ui/react-slot',
      '@radix-ui/react-switch',
      '@radix-ui/react-tabs',
      '@radix-ui/react-toast',
      '@radix-ui/react-toggle',
      '@radix-ui/react-toggle-group',
      '@radix-ui/react-tooltip',
    ],
  },

  // Production optimizations
  productionBrowserSourceMaps: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
  },

  // Page extensions
  pageExtensions: ['ts', 'tsx'],

  // TypeScript
  typescript: {
    ignoreBuildErrors: true,
    tsconfigPath: './tsconfig.json',
  },

  // Turbopack is Next.js 16's default bundler. An (empty) turbopack key is
  // REQUIRED — without it, Next errors because a `webpack` key is present.
  // NOTE: the '@/*' alias is defined in tsconfig.json (maps to project root).
  // Do NOT add a Turbopack resolveAlias here — there is no ./src directory.
  turbopack: {},

  // Webpack optimizations - deactivated to let Next.js native chunking engine optimize page loads
  webpack(config) {
    return config;
  },
};

let config = nextConfig;

if (process.env.ANALYZE === 'true') {
  try {
    const withBundleAnalyzer = require('@next/bundle-analyzer')({
      enabled: true,
    });
    config = withBundleAnalyzer(config);
  } catch (err) {
    console.warn('\n[Warning] Please install @next/bundle-analyzer to run bundle analysis:\nnpm install -D @next/bundle-analyzer\n');
  }
}

module.exports = config;
