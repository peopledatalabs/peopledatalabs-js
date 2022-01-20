import { check, errorHandler } from '../../errors';

const axios = require('axios');

export default (basePath, apiKey, id) => new Promise((resolve, reject) => {
  check(id, basePath, apiKey, 'ID').then(() => {
    axios.get(`${basePath}/person/retrieve/${id}`, {
      params: {
        api_key: apiKey,
      },
    })
      .then((data) => {
        if (data?.data?.status === 200) {
          resolve(data.data);
        }
      })
      .catch((error) => {
        reject(errorHandler(error?.response?.status));
      });
  }).catch((error) => {
    reject(error.message);
  });
});
