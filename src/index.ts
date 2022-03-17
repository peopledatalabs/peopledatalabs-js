import {
  autocomplete, bulk, cleaner, enrichment, identify, retrieve, search,
} from './endpoints';

interface APISettings {
  apiKey: string;
  basePath?: string;
  version?: string;
}

interface Search {
  elastic:Function;
  sql:Function;
}

interface Person {
  enrichment: Function;
  search: Search;
  bulk: Function;
  identify: Function;
  retrieve: Function;
}

interface Company {
  enrichment: Function;
  search: Search;
  cleaner: Function;
}

interface School {
  cleaner: Function;
}

interface Location {
  cleaner: Function;
}

interface SearchParams {
  searchQuery: string;
  dataset?: string;
  size?: number;
  scroll_token?: string;
  pretty?: boolean;
  titlecase?: boolean;
}

interface AutoCompleteParams {
  field: string;
  text?: string;
  size?: number;
  pretty?: boolean;
}

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
