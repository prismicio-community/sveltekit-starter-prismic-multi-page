import { createClient } from '$lib/prismicio';

/** @type {import('./$types').LayoutLoad} */
export async function load() {
	const client = createClient();

	const settings = await client.getSingle('settings');
	const navigation = await client.getSingle('navigation');

	return {
		settings,
		navigation
	};
}
