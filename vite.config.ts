import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    minify: 'terser',
    chunkSizeWarningLimit: 1000, // Increase warning limit to 1MB
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React
          vendor: ['react', 'react-dom'],
          
          // UI Library (Radix components)
          ui: [
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
            '@radix-ui/react-toggle',
            '@radix-ui/react-toggle-group',
            '@radix-ui/react-tooltip'
          ],
          
          // Animation and visual effects
          animations: [
            'framer-motion',
            'canvas-confetti',
            'react-confetti'
          ],
          
          // Data visualization and utilities
          charts: ['recharts'],
          
          // Form handling and validation
          forms: [
            'react-hook-form',
            '@hookform/resolvers',
            'zod'
          ],
          
          // Routing and state management
          routing: [
            'react-router-dom',
            '@tanstack/react-query'
          ],
          

          
          // Utilities and misc
          utils: [
            'date-fns',
            'clsx',
            'class-variance-authority',
            'tailwind-merge',
            'cmdk',
            'embla-carousel-react',
            'input-otp',
            'lucide-react',
            'next-themes',
            'posthog-js',
            'react-day-picker',
            'react-intersection-observer',
            'react-resizable-panels',
            'sonner',
            'tailwindcss-animate',
            'vaul'
          ]
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      }
    },
    cssCodeSplit: true,
    sourcemap: false,
    assetsInlineLimit: 4096
  },
  optimizeDeps: {
    include: ['react', 'react-dom']
  }
});
