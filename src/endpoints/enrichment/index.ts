import axios from 'axios';
import {
  PersonEnrichmentParams, CompanyEnrichmentParams, EnrichmentType, PersonEnrichmentResponse, CompanyEnrichmentResponse,
} from '../../types/enrichment-types';
import { check, errorHandler } from '../../errors';
import { parseRateLimitingResponse } from '../../utils/api-utils';

export default <T extends PersonEnrichmentParams | CompanyEnrichmentParams, K extends PersonEnrichmentResponse | CompanyEnrichmentResponse>(
  basePath: string,
  sandboxBasePath: string,
  apiKey: string,
  params: T,
  type: EnrichmentType,
) => new Promise<K>((resolve, reject) => {
  check(params, basePath, apiKey, null, 'enrichment').then(() => {
    const headers = {
      'Accept-Encoding': 'gzip',
      'User-Agent': 'PDL-JS-SDK',
    };

    const url = params.sandbox && type === 'person' ? `${sandboxBasePath}/${type}/enrich` : `${basePath}/${type}/enrich`;

    const p = params;
    delete p.sandbox;

    Object.entries(p).forEach(([key, value]) => {
      if (typeof value === 'object') {
        // @ts-ignore
        p[key] = JSON.stringify(value);
      }
    });

    axios.get<K>(url, {
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
