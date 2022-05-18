import axios from 'axios';
import { check, errorHandler } from '../../errors';
import { IdentifyResponse, IdentifyParams } from '../../types/identify-types';
import { parseRateLimitingResponse } from '../../utils/api-utils';

export default (
  basePath: string,
  apiKey: string,
  params: IdentifyParams,
) => new Promise<IdentifyResponse>((resolve, reject) => {
  check(params, basePath, apiKey, null, 'identify').then(() => {
    const headers = {
      'Accept-Encoding': 'gzip',
      'User-Agent': 'PDL-JS-SDK',
    };

    axios.get<IdentifyResponse>(`${basePath}/person/identify`, {
      params: {
        api_key: apiKey,
        ...params,
      },
      headers,
    })
      .then((response) => {
        if (response?.data?.status === 200) {
          resolve(parseRateLimitingResponse(response));
        }
      })
      .catch((error) => {
        reject(errorHandler(error));
      });
  }).catch((error) => {
    reject(error);
  });
});
