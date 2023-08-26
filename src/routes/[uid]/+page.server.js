import { createClient } from '$lib/prismicio';

export const prerender = true;

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const client = createClient();

	const page = await client.getByUID('page', params.uid);

	return {
		page
	};
}

/** @type {import('./$types').EntryGenerator} */
export async function entries() {
	const client = createClient();

	const pages = await client.getAllByType('page');

	return pages.map((page) => {
		return { uid: page.uid };
	});
}
