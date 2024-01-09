import axios from 'axios';

import { check, errorHandler } from '../../errors.js';
import { BulkCompanyEnrichmentParams, BulkCompanyEnrichmentResponse } from '../../types/bulk-types.js';
import { parseRateLimitingResponse } from '../../utils/api-utils.js';

export default (basePath: string, apiKey: string, records: BulkCompanyEnrichmentParams) => {
  const headers = {
    'Content-Type': 'application/json',
    'Accept-Encoding': 'gzip',
    'X-Api-Key': apiKey,
    'User-Agent': 'PDL-JS-SDK',
  };

  return new Promise<BulkCompanyEnrichmentResponse>((resolve, reject) => {
    check(records, basePath, apiKey, 'Records', 'bulk').then(() => {
      axios.post<BulkCompanyEnrichmentResponse>(`${basePath}/company/enrich/bulk`, records, { headers })
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
