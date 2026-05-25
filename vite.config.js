import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        eventProgram: resolve(__dirname, 'eventProgram.html'),
        eventUpcoming: resolve(__dirname, 'eventUpcoming.html'),
        filmAchievement: resolve(__dirname, 'filmAchievement.html'),
        filmAll: resolve(__dirname, 'filmAll.html'),
        filmBts: resolve(__dirname, 'filmBts.html'),
      },
    },
  },
})
