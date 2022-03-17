import { check, errorHandler } from '../../errors';

import axios from 'axios';

export default (basePath:string, apiKey:string, id:string) => new Promise((resolve, reject) => {
  check(id, basePath, apiKey, 'ID', 'retrieve').then(() => {
    const headers = {
      'Accept-Encoding': 'gzip',
    };

    axios.get(`${basePath}/person/retrieve/${id}`, {
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
