import axios from 'axios';
import { check, errorHandler } from '../../errors';
import { RetrieveResponse } from '../../types/retrieve-types';
import { parseRateLimitingResponse } from '../../utils/api-utils';

export default (
  basePath: string,
  apiKey: string,
  id: string,
  pretty?: boolean,
) => new Promise<RetrieveResponse>((resolve, reject) => {
  check(id, basePath, apiKey, 'ID', 'retrieve').then(() => {
    const headers = {
      'Accept-Encoding': 'gzip',
    };

    axios.get<RetrieveResponse>(`${basePath}/person/retrieve/${id}`, {
      params: {
        api_key: apiKey,
        pretty: pretty || false,
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
    reject(error.message);
  });
});
