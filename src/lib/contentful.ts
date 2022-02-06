import type { ApolloResponse } from '../types/apollo';
import { getConfig } from './env';

const spaceId = getConfig('CONTENTFUL_SPACE_ID');
const accessToken = getConfig('CONTENTFUL_ACCESS_TOKEN');

const graphqlEndpoint = `https://graphql.contentful.com/content/v1/spaces/${spaceId}`;

const graphqlOptions: RequestInit = {
	method: 'POST',
	headers: {
		Authorization: `Bearer ${accessToken}`,
		'Content-Type': 'application/json'
	}
};

export async function runQuery<T>(query: string) {
	const requestBody = JSON.stringify({ query });
	const fetchOptions = {
		...graphqlOptions,
		body: requestBody
	};

	try {
		const response = await fetch(graphqlEndpoint, fetchOptions);
		const responseBody: ApolloResponse<T> = await response.json();
		// TODO: handle common error scenarios?
		return responseBody;
	} catch (err: unknown) {
		// Something has gone really wrong :/
		throw new Error('Internal server error');
	}
}
