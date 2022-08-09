import axios from 'axios';
import { check, errorHandler } from '../../errors';
import { IdentifyResponse, IdentifyParams } from '../../types/identify-types';
import { parseRateLimitingResponse } from '../../utils/api-utils';

export default (
  basePath: string,
  sandboxBasePath: string,
  apiKey: string,
  params: IdentifyParams,
) => new Promise<IdentifyResponse>((resolve, reject) => {
  check(params, basePath, apiKey, null, 'identify').then(() => {
    const headers = {
      'Accept-Encoding': 'gzip',
      'User-Agent': 'PDL-JS-SDK',
    };

    const url = params.sandbox ? `${sandboxBasePath}/person/identify` : `${basePath}/person/identify`;

    const p = params;
    delete p.sandbox;

    axios.get<IdentifyResponse>(url, {
      params: {
        api_key: apiKey,
        ...p,
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
