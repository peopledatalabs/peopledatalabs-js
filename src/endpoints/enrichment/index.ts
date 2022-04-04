import axios from 'axios';
import { check, errorHandler } from '../../errors';
import { EnrichmentType } from '../../types/enrichment-types';
import { BaseResponse } from '../../types/api-types';

export default <T, K extends BaseResponse>(
  basePath: string,
  apiKey: string,
  params: T,
  type: EnrichmentType,
) => new Promise<K>((resolve, reject) => {
  check(params, basePath, apiKey, null, 'enrichment').then(() => {
    const headers = {
      'Accept-Encoding': 'gzip',
    };

    axios.get<K>(`${basePath}/${type}/enrich`, {
      params: {
        api_key: apiKey,
        ...params,
      },
      headers,
    })
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
