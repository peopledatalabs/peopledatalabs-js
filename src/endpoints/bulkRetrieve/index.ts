import axios from 'axios';

import { check, errorHandler } from '../../errors.js';
import { ApiBulkPersonRetrieveParams, BulkPersonRetrieveParams, BulkPersonRetrieveResponse } from '../../types/bulk-retrieve-types.js';
import { parseRateLimitingResponse } from '../../utils/api-utils.js';
import SDK_VERSION from '../../utils/sdk-version.js';

const transformBulkRetrieveParams = (params: BulkPersonRetrieveParams): ApiBulkPersonRetrieveParams => {
  const filter = params.filter_updated;
  if (filter == null) {
    return {
      ...params,
      filter_updated: undefined,
    };
  }
  const filtersArray = Array.isArray(filter) ? filter : [filter];
  const filterUpdated = filtersArray.join(',');
  return {
    ...params,
    filter_updated: filterUpdated,
  };
};

export default (basePath: string, apiKey: string, records: BulkPersonRetrieveParams) => {
  const headers = {
    'Content-Type': 'application/json',
    'Accept-Encoding': 'gzip',
    'User-Agent': 'PDL-JS-SDK',
    'SDK-Version': SDK_VERSION,
    'X-Api-Key': apiKey,
  };

  return new Promise<BulkPersonRetrieveResponse>((resolve, reject) => {
    check(records, basePath, apiKey, 'Records', 'bulk').then(() => {
      const apiParams = transformBulkRetrieveParams(records);
      axios.post<BulkPersonRetrieveResponse>(`${basePath}/person/retrieve/bulk`, apiParams, {
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
