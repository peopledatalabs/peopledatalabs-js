import axios from 'axios';
import { check, errorHandler } from '../../errors';
import { RetrieveResponse } from '../../types/retrieve-types';

export default (
  basePath: string,
  apiKey: string,
  id: string,
) => new Promise<RetrieveResponse>((resolve, reject) => {
  check(id, basePath, apiKey, 'ID', 'retrieve').then(() => {
    const headers = {
      'Accept-Encoding': 'gzip',
    };

    axios.get<RetrieveResponse>(`${basePath}/person/retrieve/${id}`, {
      params: {
        api_key: apiKey,
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
