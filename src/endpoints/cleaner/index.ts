import axios from 'axios';
import { check, errorHandler } from '../../errors';
import { BaseResponse } from '../../types/api-types';
import { CleanerType } from '../../types/cleaner-types';

export default <T, K extends BaseResponse> (
  basePath: string,
  apiKey: string,
  params: T,
  type: CleanerType,
) => new Promise<K>((resolve, reject) => {
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
