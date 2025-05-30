import { redirectToPreviewURL } from '@prismicio/svelte/kit';
import { createClient } from '$lib/prismicio.js';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ fetch, request, cookies }) => {
	const client = createClient({ fetch });
	return await redirectToPreviewURL({ client, request, cookies });
};
