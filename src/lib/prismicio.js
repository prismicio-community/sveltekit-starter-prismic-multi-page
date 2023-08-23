import * as prismic from '@prismicio/client';
import config from '../../slicemachine.config.json';

/**
 * The project's Prismic repository name.
 */
export const repositoryName = config.repositoryName;

/**
 * A list of Route Resolver objects that define how a document's \`url\` field is resolved.
 *
 * {@link https://prismic.io/docs/route-resolver#route-resolver}
 *
 * @type {prismic.ClientConfig["routes"]}
 */
const routes = [
	{
		type: 'page',
		path: '/:uid'
	},
	{
		type: 'page',
		uid: 'home',
		path: '/'
	},
	{
		type: 'settings',
		path: '/'
	},
	{
		type: 'navigation',
		path: '/'
	}
];

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param {prismic.ClientConfig} config - Configuration for the Prismic client.
 */
export const createClient = (config = {}) => {
	const client = prismic.createClient(repositoryName, {
		routes,
		...config
	});

	return client;
};
