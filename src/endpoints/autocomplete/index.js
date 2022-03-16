import { check, errorHandler } from '../../errors';

const axios = require('axios');

export default (basePath, apiKey, params) => new Promise((resolve, reject) => {
  check(params, basePath, apiKey, null, 'autocomplete').then(() => {
    const {
      field, text, size, pretty,
    } = params;

    const autocompleteParams = {
      field,
      text: text || '',
      size: size || 10,
      pretty: pretty || false,
    };

    const headers = {
      'Accept-Encoding': 'gzip',
    };

    axios.get(`${basePath}/autocomplete`, {
      params: {
        api_key: apiKey,
        ...autocompleteParams,
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
