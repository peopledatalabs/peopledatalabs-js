import { check, errorHandler } from '../../errors';

import axios from 'axios';

export default (basePath: string, apiKey: string, params: object, type: string) => new Promise((resolve, reject) => {
  check(params, basePath, apiKey, null, 'cleaner').then(() => {
    const headers = {
      'Accept-Encoding': 'gzip',
    };

    axios.get(`${basePath}/${type}/clean`, {
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
