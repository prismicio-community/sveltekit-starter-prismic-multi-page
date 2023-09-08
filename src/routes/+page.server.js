import { createClient } from '$lib/prismicio';

export const prerender = true;

export async function load() {
	const client = createClient();

	const page = await client.getByUID('page', 'home');

	return {
		page
	};
}
