// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	// Temporary Vercel URL until the real domain is decided. Absolute URLs for
	// og:image/canonical derive from this.
	site: 'https://portfolio-six-xi-62.vercel.app',
	// Self-hosted via the native Fonts API: Astro downloads, subsets, and
	// generates metric-matched fallbacks. Satoshi carries display + body;
	// JetBrains Mono carries labels, stacks, and the technical furniture.
	fonts: [
		{
			provider: fontProviders.fontshare(),
			name: 'Satoshi',
			cssVariable: '--font-satoshi',
			weights: ['400', '500', '700'],
			styles: ['normal', 'italic'],
			subsets: ['latin'],
		},
		{
			provider: fontProviders.fontsource(),
			name: 'JetBrains Mono',
			cssVariable: '--font-jetbrains',
			weights: ['400 700'],
			styles: ['normal'],
			subsets: ['latin'],
		},
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
