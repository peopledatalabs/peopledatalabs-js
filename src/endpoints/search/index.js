import { check, errorHandler } from '../../errors';

const axios = require('axios');

export default (basePath, apiKey, searchType, params, type) => new Promise((resolve, reject) => {
  check(params, basePath, apiKey, null, 'search').then(() => {
    const {
      dataset, searchQuery, size, scroll_token, titlecase, pretty,
    } = params;

    const searchParams = {
      titlecase: titlecase || false,
      dataset: dataset || 'all',
      scroll_token: scroll_token || null,
      size: size || 10,
      [`${searchType === 'sql' ? 'sql' : 'query'}`]: searchQuery,
      pretty: pretty || false,
    };

    const headers = {
      'Content-Type': 'application/json',
      'Accept-Encoding': 'gzip',
    };

    axios.post(`${basePath}/${type}/search`, {
      api_key: apiKey,
      ...searchParams,
    }, { headers })
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
