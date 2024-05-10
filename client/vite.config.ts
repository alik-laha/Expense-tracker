import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from "dotenv"

dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: process.env.API_URL, // Specify the URL of the server you want to proxy to
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, '') // Remove '/api' prefix from the request path
      }
    }
  }
})