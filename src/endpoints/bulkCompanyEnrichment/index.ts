import axios from 'axios';

import { check, errorHandler } from '../../errors.js';
import { RequestOptions } from '../../types/api-types.js';
import { BulkCompanyEnrichmentParams, BulkCompanyEnrichmentResponse } from '../../types/bulk-types.js';
import { parseRateLimitingResponse } from '../../utils/api-utils.js';
import SDK_VERSION from '../../utils/sdk-version.js';

export default (basePath: string, apiKey: string, records: BulkCompanyEnrichmentParams, options: RequestOptions = {}) => {
  const headers = {
    'Content-Type': 'application/json',
    'Accept-Encoding': 'gzip',
    'User-Agent': 'PDL-JS-SDK',
    'SDK-Version': SDK_VERSION,
    'X-Api-Key': apiKey,
  };

  return new Promise<BulkCompanyEnrichmentResponse>((resolve, reject) => {
    check(records, basePath, apiKey, 'Records', 'bulk').then(() => {
      axios.post<BulkCompanyEnrichmentResponse>(`${basePath}/company/enrich/bulk`, records, {
        headers,
        ...options,
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
