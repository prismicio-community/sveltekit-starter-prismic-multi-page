import { createClient } from '$lib/prismicio';

export const prerender = true;

export async function load({ fetch }) {
	const client = createClient({ fetch });

	const page = await client.getByUID('page', 'home');

	return {
		page
	};
}
