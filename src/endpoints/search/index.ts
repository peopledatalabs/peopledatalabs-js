import { check, errorHandler } from '../../errors';

import axios from 'axios';

export interface SearchParams {
  searchQuery: string;
  dataset?: string;
  size?: number;
  scroll_token?: string;
  pretty?: boolean;
  titlecase?: boolean;
}

export default (basePath: string, apiKey: string, searchType: string, params: SearchParams, type: string) => new Promise((resolve, reject) => {
  check(params, basePath, apiKey, null, 'search').then(() => {
    const {
      dataset, searchQuery, size, scroll_token, titlecase, pretty,
    } = params;

    const searchParams = {
      titlecase: titlecase || false,
      dataset: dataset || 'all',
      scroll_token: scroll_token || null,
      size: size || 10,
      [`${searchType === 'sql' ? 'sql' : 'query'}`]: searchQuery,
      pretty: pretty || false,
    };

    const headers = {
      'Content-Type': 'application/json',
      'Accept-Encoding': 'gzip',
      'X-Api-Key': apiKey,
    };

    axios.post(`${basePath}/${type}/search`, searchParams, { headers })
      .then((data) => {
        if (data?.data?.status === 200) {
          resolve(data.data);
        }
      })
      .catch((error) => {
        reject(errorHandler(error));
      });
  }).catch((error) => {
    reject(error.message);
  });
});
