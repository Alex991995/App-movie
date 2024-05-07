import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy: {
      // with options
      '/api': {
        target: 'https://app-movie-backend.vercel.app',
        changeOrigin: true,
        secure: false
      }
    }
  },
  plugins: [react()],
})
