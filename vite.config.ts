import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  base: './', 
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        tour: resolve(__dirname, 'tour.html'),
        storia: resolve(__dirname, 'storia.html'),
        musei: resolve(__dirname, 'musei.html'),
        chisiamo: resolve(__dirname, 'chisiamo.html'),
        chisiamo2: resolve(__dirname, 'chisiamo2.html'),
        corsi: resolve(__dirname, 'corsi.html'),
      },
    },
  },
})
