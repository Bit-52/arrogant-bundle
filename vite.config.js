import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: "./src/react",
  build: {
    outDir: "../../public/dist"
  },
  server: {
    proxy: {
      '/api': 'http://localhost:80'
    }
  }
})
