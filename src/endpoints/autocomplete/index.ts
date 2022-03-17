import { check, errorHandler } from '../../errors';

import axios from 'axios';

export interface AutoCompleteParams {
  field: string;
  text?: string;
  size?: number;
  pretty?: boolean;
}

export interface AutoCompleteResponse {
  data?: {
    status: number;
    fields?: Array<string>;
    data?: Array<{
      name: string;
      count: number;
      meta?: {
        website?: string;
        location_name?: string;
        industry?: string;
        id?: string;
        country?: string;
        locality?: string;
        region?: string;
        role?: string;
      }
    }>
  };
}

export default (basePath: string, apiKey: string, params: AutoCompleteParams) => new Promise((resolve, reject) => {
  check(params, basePath, apiKey, null, 'autocomplete').then(() => {
    const {
      field, text, size, pretty,
    } = params;

    const autocompleteParams = {
      field,
      text: text || '',
      size: size || 10,
      pretty: pretty || false,
    };

    const headers = {
      'Accept-Encoding': 'gzip',
    };

    axios.get(`${basePath}/autocomplete`, {
      params: {
        api_key: apiKey,
        ...autocompleteParams,
      },
      headers,
    })
      .then((data: AutoCompleteResponse) => {
        if (data?.data?.status === 200) {
          resolve(data.data);
        }
      })
      .catch((error) => {
        reject(errorHandler(error));
      });
  }).catch((error) => {
    reject(error.message);
  });
});
