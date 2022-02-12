// Not using a shadow endpoint on index as this problem exists: https://github.com/sveltejs/kit/issues/3718
import type { RequestHandler } from '@sveltejs/kit';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

import { runQuery } from '$lib/contentful';
import { getAboutQueryDocument } from '$graphql/getAbout';
import type { GetAboutQuery } from '$types/graphql';

export const get: RequestHandler = async () => {
  const response = await runQuery<GetAboutQuery>(getAboutQueryDocument);

  if ('errors' in response) {
    return {
      status: 400,
      body: {}
    };
  }

  const {
    data: {
      aboutCollection: { items }
    }
  } = response;

  const [latestUpdate] = items;

  const renderedContent = documentToHtmlString(latestUpdate.main.json);

  const body = {
    main: renderedContent
  };

  return {
    status: 200,
    body
  };
};
