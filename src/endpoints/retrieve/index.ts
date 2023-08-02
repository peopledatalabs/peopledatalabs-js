import axios from 'axios';

import { check, errorHandler } from '../../errors';
import {
  ApiRetrieveParams,
  RetrieveParams,
  RetrieveResponse,
} from '../../types/retrieve-types';
import { parseRateLimitingResponse } from '../../utils/api-utils';

const transformRetrieveParams = (params: RetrieveParams): ApiRetrieveParams => {
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

export default (
  basePath: string,
  apiKey: string,
  params: RetrieveParams,
) => new Promise<RetrieveResponse>((resolve, reject) => {
  check(params, basePath, apiKey, 'ID', 'retrieve').then(() => {
    const headers = {
      'Accept-Encoding': 'gzip',
      'User-Agent': 'PDL-JS-SDK',
    };
    const apiParams = transformRetrieveParams(params);

    axios.get<RetrieveResponse>(`${basePath}/person/retrieve/${params.id}`, {
      params: {
        api_key: apiKey,
        ...apiParams,
      },
      headers,
    })
      .then((response) => {
        if (response?.data?.status === 200) {
          resolve(parseRateLimitingResponse(response));
        }
      })
      .catch((error) => {
        reject(errorHandler(error));
      });
  }).catch((error) => {
    reject(error);
  });
});
