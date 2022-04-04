import axios from 'axios';
import { check, errorHandler } from '../../errors';
import { BulkPersonEnrichmentParams, BulkPersonEnrichmentResponse } from '../../types/bulk-types';

export default (basePath: string, apiKey: string, records: BulkPersonEnrichmentParams) => {
  const headers = {
    'Content-Type': 'application/json',
    'Accept-Encoding': 'gzip',
    'X-Api-Key': apiKey,
  };

  return new Promise<BulkPersonEnrichmentResponse>((resolve, reject) => {
    check(records, basePath, apiKey, 'Records', 'bulk').then(() => {
      axios.post<BulkPersonEnrichmentResponse>(`${basePath}/person/bulk`, records, { headers })
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
