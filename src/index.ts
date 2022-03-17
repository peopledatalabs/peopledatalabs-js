import {
  autocomplete, bulk, cleaner, enrichment, identify, retrieve, search,
} from './endpoints';

import {
  APISettings, Person, Company, School, Location, SearchParams, AutoCompleteParams,
} from './types';

class PDLJS {
  apiKey: string;

  basePath: string;

  person: Person;

  company: Company;

  school: School;

  location: Location;

  autocomplete: Function;

  constructor({ apiKey, basePath, version }: APISettings) {
    this.apiKey = apiKey;
    this.basePath = basePath || `https://api.peopledatalabs.com/${version || 'v5'}`;

    this.person = {
      enrichment: (params: object) => enrichment(this.basePath, this.apiKey, { ...params }, 'person'),
      search: {
        elastic: (params: SearchParams) => search(this.basePath, this.apiKey, 'elastic', { ...params }, 'person'),
        sql: (params: SearchParams) => search(this.basePath, this.apiKey, 'sql', { ...params }, 'person'),
      },
      bulk: (records: Array<object>) => bulk(this.basePath, this.apiKey, records),
      identify: (params: object) => identify(this.basePath, this.apiKey, { ...params }),
      retrieve: (id: string) => retrieve(this.basePath, this.apiKey, id),
    };

    this.company = {
      enrichment: (params: object) => enrichment(this.basePath, this.apiKey, { ...params }, 'company'),
      search: {
        elastic: (params: SearchParams) => search(this.basePath, this.apiKey, 'elastic', { ...params }, 'company'),
        sql: (params: SearchParams) => search(this.basePath, this.apiKey, 'sql', { ...params }, 'company'),
      },
      cleaner: (params: object) => cleaner(this.basePath, this.apiKey, { ...params }, 'company'),
    };

    this.school = {
      cleaner: (params: object) => cleaner(this.basePath, this.apiKey, { ...params }, 'school'),
    };

    this.location = {
      cleaner: (params: object) => cleaner(this.basePath, this.apiKey, { ...params }, 'location'),
    };

    this.autocomplete = (params: AutoCompleteParams) => autocomplete(this.basePath, this.apiKey, { ...params });
  }
}

export default PDLJS;
