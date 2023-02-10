import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import env from './config/env'
import path from 'path'
import eslintPlugin from 'vite-plugin-eslint'
import { createHtmlPlugin } from 'vite-plugin-html'

// https://vitejs.dev/config/
export default defineConfig({
  base: env.CONTEXT_PATH,
  plugins: [
    vue({
      reactivityTransform: true
    }),
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue']
    }),
    createHtmlPlugin({
      entry: '/src/index.ts',
      template: 'index.html',
      // Data that needs to be injected into the index.html ejs template
      inject: {
        data: {
          htmlWebpackPlugin: {
            options: {
              title: env.title
            }
          }
        }
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  define: {
    env: Object.entries(env).reduce((acc, [key, value]) => ({
      ...acc,
      [key]: value
    }), {})
  },
  server: {}
})
