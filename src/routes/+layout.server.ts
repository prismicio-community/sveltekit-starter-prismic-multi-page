import { createClient } from '$lib/prismicio';
import type { LayoutServerLoad } from './$types';

export const prerender = 'auto';

export const load: LayoutServerLoad = async ({ fetch, cookies }) => {
	const client = createClient({ fetch, cookies });

	const settings = await client.getSingle('settings');
	const navigation = await client.getSingle('navigation');

	return {
		settings,
		navigation
	};
};
