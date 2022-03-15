import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import env from './config/env.mjs'

// https://vitejs.dev/config/
export default defineConfig({
  base: env.CONTEXT_PATH,
  plugins: [vue()],
  server: {
    port: 80
  }
})
