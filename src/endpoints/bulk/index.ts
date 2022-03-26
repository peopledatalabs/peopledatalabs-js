import axios from 'axios';
import { check, errorHandler } from '../../errors';

export default (basePath: string, apiKey: string, records) => {
  const headers = {
    'Content-Type': 'application/json',
    'Accept-Encoding': 'gzip',
    'X-Api-Key': apiKey,
  };

  return new Promise((resolve, reject) => {
    check(records, basePath, apiKey, 'Records', 'bulk').then(() => {
      axios.post(`${basePath}/person/bulk`, records, { headers })
        .then((data) => {
          if (data?.status === 200) {
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
};
