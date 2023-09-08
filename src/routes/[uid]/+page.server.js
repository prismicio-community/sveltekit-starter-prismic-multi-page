import { createClient } from '$lib/prismicio';

export const prerender = true;

export async function load({ params }) {
	const client = createClient();

	const page = await client.getByUID('page', params.uid);

	return {
		page
	};
}

export async function entries() {
	const client = createClient();

	const pages = await client.getAllByType('page');

	return pages.map((page) => {
		return { uid: page.uid };
	});
}
