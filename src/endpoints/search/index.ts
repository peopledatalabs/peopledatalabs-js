import axios from 'axios';

import { check, errorHandler } from '../../errors.js';
import { BaseResponse } from '../../types/api-types.js';
import { BaseSearchParams, SearchType } from '../../types/search-types.js';
import { parseRateLimitingResponse } from '../../utils/api-utils.js';

export default <T extends BaseSearchParams, K extends BaseResponse>(
  basePath: string,
  sandboxBasePath: string,
  apiKey: string,
  searchType: SearchType,
  params: T,
  type: string,
) => new Promise<K>((resolve, reject) => {
  check(params, basePath, apiKey, null, 'search').then(() => {
    const {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      dataset, pretty, sandbox, scroll_token, searchQuery, size, titlecase,
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
      'User-Agent': 'PDL-JS-SDK',
    };

    const url = sandbox && type === 'person' ? `${sandboxBasePath}/person/search` : `${basePath}/${type}/search`;

    axios.post<K>(url, searchParams, {
      headers,
    }).then((response) => {
      if (response?.data?.status === 200) {
        resolve(parseRateLimitingResponse(response));
      }
    }).catch((error) => {
      reject(errorHandler(error));
    });
  }).catch((error) => {
    reject(error);
  });
});
