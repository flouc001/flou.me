export type ApolloError = {
	errors: Array<{
		message: string;
		locations: Array<{
			line: number;
			column: number;
		}>;
	}>;
};

export type ApolloSuccess<T> = { data: T };

export type ApolloResponse<T> = ApolloSuccess<T> | ApolloError;
