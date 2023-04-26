import axios from 'axios';

import { check, errorHandler } from '../../errors';
import { BulkPersonEnrichmentParams, BulkPersonEnrichmentResponse } from '../../types/bulk-types';
import { EnrichmentAdditionalParams } from '../../types/enrichment-types';
import { parseRateLimitingResponse } from '../../utils/api-utils';

export default (basePath: string, apiKey: string, records: BulkPersonEnrichmentParams, params?: EnrichmentAdditionalParams) => {
  const headers = {
    'Content-Type': 'application/json',
    'Accept-Encoding': 'gzip',
    'X-Api-Key': apiKey,
    'User-Agent': 'PDL-JS-SDK',
  };

  return new Promise<BulkPersonEnrichmentResponse>((resolve, reject) => {
    check(records, basePath, apiKey, 'Records', 'bulk').then(() => {
      axios.post<BulkPersonEnrichmentResponse>(`${basePath}/person/bulk`, records, { headers, params })
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
