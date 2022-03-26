import {
  autocomplete, bulk, cleaner, enrichment, identify, retrieve, search,
} from './endpoints';
import { CompanyCleanerParams, CompanyCleanerResponse } from 'src/types/cleaner-types';

class PDLJS {
  private readonly apiKey: string;

  private readonly basePath: string;

  constructor({
    apiKey,
    basePath,
    version,
  }: { apiKey: string, basePath: string, version: string }) {
    this.apiKey = apiKey;
    this.basePath = basePath || `https://api.peopledatalabs.com/${version || 'v5'}`;

    this.person = {
      enrichment: (params) => enrichment(this.basePath, this.apiKey, ...params, 'person'),
      search: {
        elastic: (params) => search(this.basePath, this.apiKey, 'elastic', ...params, 'person'),
        sql: (params) => search(this.basePath, this.apiKey, 'sql', ...params, 'person'),
      },
      bulk: (records) => bulk(this.basePath, this.apiKey, records),
      identify: (params) => identify(this.basePath, this.apiKey, ...params),
      retrieve: (id) => retrieve(this.basePath, this.apiKey, id),
    };

    this.company = {
      enrichment: (params) => enrichment(this.basePath, this.apiKey, ...params, 'company'),
      search: {
        elastic: (params) => search(this.basePath, this.apiKey, 'elastic', ...params, 'company'),
        sql: (params) => search(this.basePath, this.apiKey, 'sql', ...params, 'company'),
      },
      cleaner: (params: CompanyCleanerParams) => cleaner<CompanyCleanerParams, CompanyCleanerResponse>(this.basePath, this.apiKey, ...params, 'company'),
    };

    this.school = {
      cleaner: (params) => cleaner(this.basePath, this.apiKey, ...params, 'school'),
    };

    this.location = {
      cleaner: (params) => cleaner(this.basePath, this.apiKey, ...params, 'location'),
    };

    this.autocomplete = (params) => autocomplete(this.basePath, this.apiKey, ...params);
  }
}

export default PDLJS;
