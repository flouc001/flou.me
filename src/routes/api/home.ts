// Not using a shadow endpoint on index as this problem exists: https://github.com/sveltejs/kit/issues/3718
import type { RequestHandler } from '@sveltejs/kit';
import type { HomepageBody } from '$types/endpoints/homepage';
import type { GetHomepageQuery } from '$types/graphql';

import { runQuery } from '$lib/contentful';
import { getHomepageQueryDocument } from '$graphql/getHomepage';

export const get: RequestHandler = async () => {
  const response = await runQuery<GetHomepageQuery>(getHomepageQueryDocument);

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
