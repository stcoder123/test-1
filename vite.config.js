const { posthtmlPlugin } = require('vite-plugin-posthtml')
import inject from '@rollup/plugin-inject'
import { resolve } from 'path'
import inlineSVG from 'posthtml-inline-svg'
import { defineConfig } from 'vite'
import glob from 'glob'
const purgecss = require('@fullhuman/postcss-purgecss')
const pictureSrcset = require('./kk-post-html/lib/pictureSrcset')
const stylelint = require('stylelint')
const prefixer = require('autoprefixer')
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
	root: './src',
	base: '/',
	css: {
		devSourcemap: true,
		postcss: {
			plugins: [
				stylelint(),
				prefixer,
				{
					...purgecss({
						content: ['./src/**/*.html'],
					}),
					apply: 'build',
				},
			],
		},
	},
	build: {
		outDir: '../dist/',
		emptyOutDir: true, // because outDir is outside our project root, force deletion
		assetsDir: './assets',
		sourcemap: true,
		rollupOptions: {
			input: glob.sync(resolve(__dirname, 'src', '**/*.html')),
			output: {
				entryFileNames: 'assets/[name]-[hash].js',
				chunkFileNames: 'assets/[name]-[hash].js',
				assetFileNames: 'assets/[name].[ext]',
			},
		},
	},
	plugins: [
		inject({
			$: 'jquery',
			jQuery: 'jquery',
		}),
		{
			...posthtmlPlugin({
				plugins: [
					pictureSrcset({
						cwd: resolve('src/assets/images'),
						imgDir: resolve('src/assets/images'),
						imageOptions: {
							generate: false,
							dir: 'src/assets/images',
						},
					}),
					inlineSVG({
						cwd: resolve('src/assets/images'),
						tag: 'icon',
						attr: 'src',
					}),
				],
			}),
			apply: 'serve',
			enforce: 'post',
		},
		{
			...posthtmlPlugin({
				plugins: [
					pictureSrcset({
						cwd: resolve('src/assets/images'),
						imgDir: resolve('src/assets/images'),
						imageOptions: {
							generate: true,
							dir: ['src/assets/images'],
							size:[640, 1300, 1800],
							hook: 'renderStart',
							quality: 80,
							inputFormat: ['jpg', 'jpeg', 'png'],
							outputFormat: ['webp'],
							maxParallel: 25,
							forceUpscale: false,
							skipExisting: false,
						},
					}),
					inlineSVG({
						cwd: resolve('src/assets/images'),
						tag: 'icon',
						attr: 'src',
					})

				],
			}),
			apply: 'build',
			enforce: 'post',
		},
		{
			...viteCompression({
				filter: (filePath) =>
					filePath.endsWith('.html') ||
					filePath.endsWith('.js') ||
					filePath.endsWith('.css'),
				algorithm: 'brotliCompress',
				verbose: true,
			}),
			apply: 'build',
			enforce: 'post',
		},
	],
})
