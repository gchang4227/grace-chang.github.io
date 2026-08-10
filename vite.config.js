import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/grace-chang.github.io/',
  build: {
    outDir: 'dist',
    copyPublicDir: true
  }
})