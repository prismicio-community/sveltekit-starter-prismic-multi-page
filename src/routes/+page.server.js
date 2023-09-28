import { asText } from '@prismicio/client';

import { createClient } from '$lib/prismicio';

export const prerender = true;

export async function load({ fetch }) {
	const client = createClient({ fetch });

	const page = await client.getByUID('page', 'home');

	return {
		page,
		title: asText(page.data.title),
		meta_description: page.data.meta_description,
		meta_title: page.data.meta_title,
		meta_image: page.data.meta_image.url
	};
}
