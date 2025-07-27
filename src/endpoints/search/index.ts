import axios from 'axios';

import { check, errorHandler } from '../../errors.js';
import { BaseResponse } from '../../types/api-types.js';
import { BaseSearchParams, SearchType } from '../../types/search-types.js';
import { parseRateLimitingResponse } from '../../utils/api-utils.js';
import SDK_VERSION from '../../utils/sdk-version.js';

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
      data_include, dataset, pretty, sandbox, scroll_token, searchQuery, size, titlecase,
    } = params;

    const searchParams = {
      titlecase: titlecase || false,
      dataset: dataset || 'all',
      scroll_token: scroll_token || null,
      size: size || 10,
      [`${searchType === 'sql' ? 'sql' : 'query'}`]: searchQuery,
      pretty: pretty || false,
      data_include: data_include || null,
    };

    const headers = {
      'Content-Type': 'application/json',
      'Accept-Encoding': 'gzip',
      'User-Agent': 'PDL-JS-SDK',
      'SDK-Version': SDK_VERSION,
      'X-Api-Key': apiKey,
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
