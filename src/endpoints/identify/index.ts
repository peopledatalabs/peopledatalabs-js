import axios from 'axios';
import { check, errorHandler } from '../../errors';
import { IdentifyResponse, IdentityParams } from '../../types/identify-types';

export default (basePath: string, apiKey: string, params: IdentityParams) => new Promise((resolve, reject) => {
  check(params, basePath, apiKey, null, 'identify').then(() => {
    const headers = {
      'Accept-Encoding': 'gzip',
    };

    axios.get<IdentifyResponse>(`${basePath}/person/identify`, {
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
    reject(error);
  });
});
