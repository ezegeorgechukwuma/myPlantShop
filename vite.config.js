import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  base: '/myPlantShop/',
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'index.html',
          dest: '', // root of dist
          rename: '404.html' // copy index.html as 404.html
        }
      ]
    })
  ]
})