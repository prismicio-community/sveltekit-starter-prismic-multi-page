import * as prismic from '@prismicio/client';
import { type CreateClientConfig, enableAutoPreviews } from '@prismicio/svelte/kit';
import sm from '../../slicemachine.config.json';

/**
 * The project's Prismic repository name.
 */
export const repositoryName = import.meta.env.VITE_PRISMIC_ENVIRONMENT || sm.repositoryName;

/**
 * A list of Route Resolver objects that define how a document's `url` field is resolved.
 *
 * {@link https://prismic.io/docs/route-resolver#route-resolver}
 */
const routes: prismic.ClientConfig['routes'] = [
	{ type: 'page', path: '/:uid' },
	{ type: 'page', uid: 'home', path: '/' },
	{ type: 'settings', path: '/' },
	{ type: 'navigation', path: '/' }
];

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config - Configuration for the Prismic client.
 */
export const createClient = ({ cookies, ...config }: CreateClientConfig = {}) => {
	const client = prismic.createClient(repositoryName, {
		routes,
		...config
	});

	enableAutoPreviews({ client, cookies });

	return client;
};
