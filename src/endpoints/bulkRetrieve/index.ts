import axios from 'axios';
import { BulkPersonRetrieveResponse, BulkPersonRetrieveParams } from '../../types/bulk-retrieve-types';
import { check, errorHandler } from '../../errors';
import { parseRateLimitingResponse } from '../../utils/api-utils';

export default (basePath: string, apiKey: string, records: BulkPersonRetrieveParams) => {
  const headers = {
    'Content-Type': 'application/json',
    'Accept-Encoding': 'gzip',
    'X-Api-Key': apiKey,
    'User-Agent': 'PDL-JS-SDK',
  };

  return new Promise<BulkPersonRetrieveResponse>((resolve, reject) => {
    check(records, basePath, apiKey, 'Records', 'bulk').then(() => {
      axios.post<BulkPersonRetrieveResponse>(`${basePath}/person/retrieve/bulk`, records, { headers })
        .then((response) => {
          resolve(parseRateLimitingResponse(response));
        })
        .catch((error) => {
          reject(errorHandler(error));
        });
    }).catch((error) => {
      reject(error);
    });
  });
};
