import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Questo permette alle immagini e ai file di trovarsi anche su GitHub
  build: {
    outDir: 'dist',
  }
})
