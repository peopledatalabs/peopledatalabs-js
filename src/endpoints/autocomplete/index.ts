import axios from 'axios';

import { check, errorHandler } from '../../errors.js';
import { RequestOptions } from '../../types/api-types.js';
import type { AutoCompleteParams, AutoCompleteResponse } from '../../types/autocomplete-types.js';
import { parseRateLimitingResponse } from '../../utils/api-utils.js';
import SDK_VERSION from '../../utils/sdk-version.js';

export default (
  basePath: string,
  apiKey: string,
  params: AutoCompleteParams,
  options: RequestOptions = {},
) => new Promise<AutoCompleteResponse>((resolve, reject) => {
  check(params, basePath, apiKey, null, 'autocomplete').then(() => {
    const { field, pretty, size, text, titlecase } = params;

    const autocompleteParams = {
      field,
      text: text || '',
      size: size || 10,
      pretty: pretty || false,
      titlecase: titlecase || false,
    };

    const headers = {
      'Accept-Encoding': 'gzip',
      'User-Agent': 'PDL-JS-SDK',
      'SDK-Version': SDK_VERSION,
    };

    axios.get<AutoCompleteResponse>(`${basePath}/autocomplete`, {
      params: {
        api_key: apiKey,
        ...autocompleteParams,
      },
      headers,
      ...options,
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
