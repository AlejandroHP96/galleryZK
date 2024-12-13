import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  base: '/galleryZK/',
  build: {
    outDir: 'docs',
  },
  plugins: [react()],
})
