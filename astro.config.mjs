// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	// Temporary Vercel URL until the real domain is decided. Absolute URLs for
	// og:image/canonical derive from this.
	site: 'https://portfolio-six-xi-62.vercel.app',
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
