// Not using a shadow endpoint on index as this problem exists: https://github.com/sveltejs/kit/issues/3718
import type { RequestHandler } from '@sveltejs/kit';
import type { HomepageBody } from '../types/endpoints/homepage';

import { runQuery } from '$lib/contentful';

const query = `
	{
		homepageCollection {
			items {
				intro
			}
		}
	}
`;

type ResponseBody = {
  homepageCollection: {
    items: Array<{
      intro: string;
    }>;
  };
};

export const get: RequestHandler = async () => {
  const response = await runQuery<ResponseBody>(query);

  if ('errors' in response) {
    return {
      status: 400,
      body: {}
    };
  }

  const {
    data: {
      homepageCollection: { items }
    }
  } = response;

  const [latestUpdate] = items;

  const body: HomepageBody = {
    intro: latestUpdate.intro
  };

  return {
    status: 200,
    body
  };
};