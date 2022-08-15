import { cloneDeep } from 'lodash';
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

    const newParams = cloneDeep(params);
    const p = new URLSearchParams();
    delete newParams.sandbox;

    Object.entries(newParams).forEach(([key, value]: [string, any]) => {
      if (typeof value === 'object') {
        if (Array.isArray(value)) {
          value.forEach((member) => {
            p.append(key, (member));
          });
        } else {
          p.append(key, JSON.stringify(value));
        }
      } else {
        p.append(key, (value));
      }
    });

    p.append('api_key', apiKey);

    axios.get<IdentifyResponse>(url, {
      params: p,
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
