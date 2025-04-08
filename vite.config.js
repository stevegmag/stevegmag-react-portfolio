import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/stevegmag-react-portfolio/',
  build: {
    assetsInclude: ['**/*.pdf'],
  },
  publicDir: 'public',
})
