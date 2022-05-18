import axios from 'axios';
import { check, errorHandler } from '../../errors';
import { EnrichmentType } from '../../types/enrichment-types';
import { BaseResponse } from '../../types/api-types';
import { parseRateLimitingResponse } from '../../utils/api-utils';

export default <T, K extends BaseResponse>(
  basePath: string,
  apiKey: string,
  params: T,
  type: EnrichmentType,
) => new Promise<K>((resolve, reject) => {
  check(params, basePath, apiKey, null, 'enrichment').then(() => {
    const headers = {
      'Accept-Encoding': 'gzip',
      'User-Agent': 'PDL-JS-SDK',
    };

    axios.get<K>(`${basePath}/${type}/enrich`, {
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
