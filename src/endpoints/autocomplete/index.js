import { check, errorHandler } from '../../errors';

const axios = require('axios');

export default (basePath, apiKey, params) => new Promise((resolve, reject) => {
  check(params, basePath, apiKey, null, 'autocomplete').then(() => {
    axios.get(`${basePath}/autocomplete`, {
      params: {
        api_key: apiKey,
        ...params,
      },
    })
      .then((data) => {
        if (data?.data?.status === 200) {
          resolve(data.data);
        }
      })
      .catch((error) => {
        reject(errorHandler(error.response.status));
      });
  }).catch((error) => {
    reject(error.message);
  });
});
