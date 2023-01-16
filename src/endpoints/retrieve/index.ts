import axios from 'axios';

import { check, errorHandler } from '../../errors';
import { RetrieveParams, RetrieveResponse } from '../../types/retrieve-types';
import { parseRateLimitingResponse } from '../../utils/api-utils';

export default (
  basePath: string,
  apiKey: string,
  params: RetrieveParams,
) => new Promise<RetrieveResponse>((resolve, reject) => {
  check(params, basePath, apiKey, 'ID', 'retrieve').then(() => {
    const headers = {
      'Accept-Encoding': 'gzip',
      'User-Agent': 'PDL-JS-SDK',
    };

    axios.get<RetrieveResponse>(`${basePath}/person/retrieve/${params.id}`, {
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
