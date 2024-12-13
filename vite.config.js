import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/galleryZK/', // Ruta base para GitHub Pages
  build: {
    outDir: 'docs', // Cambia 'dist' por el nombre que desees, en este caso 'public'
  },
  plugins: [react()],
})
