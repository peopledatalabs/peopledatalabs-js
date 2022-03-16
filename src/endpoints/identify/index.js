import { check, errorHandler } from '../../errors';

const axios = require('axios');

export default (basePath, apiKey, params) => new Promise((resolve, reject) => {
  check(params, basePath, apiKey, null, 'identify').then(() => {
    const headers = {
      'Accept-Encoding': 'gzip',
    };

    axios.get(`${basePath}/person/identify`, {
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
