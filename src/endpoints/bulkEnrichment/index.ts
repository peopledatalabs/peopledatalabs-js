import axios from 'axios';

import packageJSON from '../../../package.json';
import { check, errorHandler } from '../../errors.js';
import { BulkPersonEnrichmentParams, BulkPersonEnrichmentResponse } from '../../types/bulk-types.js';
import { parseRateLimitingResponse } from '../../utils/api-utils.js';

export default (basePath: string, apiKey: string, records: BulkPersonEnrichmentParams) => {
  const headers = {
    'Content-Type': 'application/json',
    'Accept-Encoding': 'gzip',
    'User-Agent': 'PDL-JS-SDK',
    'SDK-Version': packageJSON.version,
    'X-Api-Key': apiKey,
  };

  return new Promise<BulkPersonEnrichmentResponse>((resolve, reject) => {
    check(records, basePath, apiKey, 'Records', 'bulk').then(() => {
      axios.post<BulkPersonEnrichmentResponse>(`${basePath}/person/bulk`, records, {
        headers,
      }).then((response) => {
        resolve(parseRateLimitingResponse(response));
      }).catch((error) => {
        reject(errorHandler(error));
      });
    }).catch((error) => {
      reject(error);
    });
  });
};
