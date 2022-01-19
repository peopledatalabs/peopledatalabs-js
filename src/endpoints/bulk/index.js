import { check, errorHandler } from '../../errors';

const axios = require('axios');

export default (basePath, apiKey, records) => {
  const headers = {
    'Content-Type': 'application/json',
    'X-Api-Key': apiKey,
  };

  return new Promise((resolve, reject) => {
    check(records, basePath, apiKey, 'Records').then(() => {
      axios.post(`${basePath}/person/bulk`, records, { headers })
        .then((data) => {
          if (data?.status === 200) {
            resolve(data.data);
          }
        })
        .catch((error) => {
          reject(errorHandler(error.response.status));
        });
    }).catch((error) => {
      reject(error);
    });
  });
};
