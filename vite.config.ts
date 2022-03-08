import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  server: {
    port: 3000,
    cors: true,
    // proxy: {
    //   '/api': {
    //     target: 'http://127.0.0.1:4523/mock/693851',
    //     changeOrigin: true,
    //     rewrite: path => path.replace('/api/', '/')
    //   }
    // }
  }
})
