import type { CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>['data'] & { id: string };

export interface ProjectScreenshot {
	src: ImageMetadata;
	alt: string;
}

export interface ContactDetails {
	github: string;
	discord: string;
	email: string;
}
