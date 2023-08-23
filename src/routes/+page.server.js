import { createClient } from '$lib/prismicio';

export const prerender = true;

/** @type {import('./$types').PageLoad} */
export async function load() {
	const client = createClient();

	const page = await client.getByUID('page', 'home');

	return {
		page
	};
}
