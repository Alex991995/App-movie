import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server:{
    // proxy: {
    //   '/api': 'https://app-movie-backend.vercel.app'
    // }
    proxy: {
      '/api': {
        // target: 'https://app-movie-backend.vercel.app',
        target: "http://localhost:3334/api/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  },
  plugins: [react()],
})
