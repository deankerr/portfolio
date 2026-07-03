// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	// Self-hosted Inter via the native Fonts API — Astro downloads, subsets, and
	// generates metric-matched fallbacks. One variable file covers 400–700.
	fonts: [
		{
			provider: fontProviders.fontsource(),
			name: 'Inter',
			cssVariable: '--font-inter',
			weights: ['400 700'],
			styles: ['normal'],
			subsets: ['latin'],
		},
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
