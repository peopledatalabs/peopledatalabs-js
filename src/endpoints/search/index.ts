import axios from 'axios';
import { check, errorHandler } from '../../errors';
import { BaseSearchParams, SearchType } from '../../types/search-types';
import { BaseResponse } from '../../types/api-types';

export default <T extends BaseSearchParams, K extends BaseResponse>(
  basePath: string,
  apiKey: string,
  searchType: SearchType,
  params: T,
  type: string,
) => new Promise<K>((resolve, reject) => {
  check(params, basePath, apiKey, null, 'search').then(() => {
    const {
      // eslint-disable-next-line @typescript-eslint/naming-convention
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

    axios.post<K>(`${basePath}/${type}/search`, searchParams, { headers })
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
