import axios from 'axios';

import packageJSON from '../../../package.json';
import { check, errorHandler } from '../../errors.js';
import { IPParams, IPResponse } from '../../types/ip-types.js';
import { parseRateLimitingResponse } from '../../utils/api-utils.js';

export default (
  basePath: string,
  apiKey: string,
  params: IPParams,
) => new Promise<IPResponse>((resolve, reject) => {
  check(params, basePath, apiKey, null, 'ip').then(() => {
    const headers = {
      'Accept-Encoding': 'gzip',
      'User-Agent': 'PDL-JS-SDK',
      'SDK-Version': packageJSON.version,
    };

    axios.get<IPResponse>(`${basePath}/ip/enrich`, {
      params: {
        api_key: apiKey,
        ...params,
      },
      headers,
    }).then((response) => {
      if (response?.data?.status === 200) {
        resolve(parseRateLimitingResponse(response));
      }
    }).catch((error) => {
      reject(errorHandler(error));
    });
  }).catch((error) => {
    reject(error);
  });
});
