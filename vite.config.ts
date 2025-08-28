import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
 base: "https://malahatm.github.io/my-portfolio/",
  plugins: [react()],
})
