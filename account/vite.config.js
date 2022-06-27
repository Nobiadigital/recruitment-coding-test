import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		rollupOptions: {
			output: {
				entryFileNames: '[name].bundle.js',
				assetFileNames: '[name].[ext]',
				chunkFileNames: '[name].js'
			}
		}
	},
  plugins: [react()]
})
