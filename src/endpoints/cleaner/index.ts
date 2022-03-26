import axios from 'axios';
import { check, errorHandler } from '../../errors';

export default <T, K> (
  basePath: string,
  apiKey: string,
  params: T,
  type: string,
) => new Promise((resolve, reject) => {
  check(params, basePath, apiKey, null, 'cleaner').then(() => {
    const headers = {
      'Accept-Encoding': 'gzip',
    };

    axios.get<K>(`${basePath}/${type}/clean`, {
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
