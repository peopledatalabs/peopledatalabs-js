import axios from 'axios';
import _ from 'lodash';
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

    const newParams = _.cloneDeep(params);
    const p = new URLSearchParams();
    delete newParams.sandbox;

    Object.entries(newParams).forEach(([key, value]) => {
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

    axios.get<K>(url, {
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
