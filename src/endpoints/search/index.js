import { check, errorHandler } from '../../errors';

const axios = require('axios');

export default (basePath, apiKey, searchType, { searchQuery, size }, type) => new Promise((resolve, reject) => {
  check({ searchQuery, size }, basePath, apiKey, null, 'search').then(() => {
    const params = {
      size,
      [`${searchType === 'sql' ? 'sql' : 'query'}`]: searchQuery,
    };

    axios.get(`${basePath}/${type}/search`, {
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
