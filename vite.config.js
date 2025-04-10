import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/' : '/', // Changed from '/stevegmag-react-portfolio/'
  build: {
    assetsInclude: ['**/*.pdf'],
  },
  publicDir: 'public',
}))
