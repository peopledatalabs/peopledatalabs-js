import axios from 'axios';

import { check, errorHandler } from '../../errors.js';
import { BaseResponse } from '../../types/api-types.js';
import { CleanerType } from '../../types/cleaner-types.js';
import { parseRateLimitingResponse } from '../../utils/api-utils.js';
import SDK_VERSION from '../../utils/sdk-version.js';

export default <T, K extends BaseResponse> (
  basePath: string,
  apiKey: string,
  params: T,
  type: CleanerType,
) => new Promise<K>((resolve, reject) => {
  check(params, basePath, apiKey, null, 'cleaner').then(() => {
    const headers = {
      'Accept-Encoding': 'gzip',
      'User-Agent': 'PDL-JS-SDK',
      'SDK-Version': SDK_VERSION,
    };

    axios.get<K>(`${basePath}/${type}/clean`, {
      params: {
        api_key: apiKey,
        ...params,
      },
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
