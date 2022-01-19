import {
  bulk, cleaner, enrichment, identify, retrieve, search,
} from './endpoints';

class PDLJS {
  constructor({ apiKey, basePath, version }) {
    this.apiKey = apiKey;
    this.basePath = basePath || `https://api.peopledatalabs.com/${version || 'v5'}/`;

    this.person = {
      enrichment: (params) => enrichment(this.basePath, this.apiKey, ...params, 'person'),
      search: (params) => search(this.basePath, this.apiKey, ...params, 'person'),
      bulk: (records) => bulk(this.basePath, this.apiKey, records),
      identify: (params) => identify(this.basePath, this.apiKey, ...params),
      retrieve: (id) => retrieve(this.basePath, this.apiKey, id),
    };

    this.company = {
      enrichment: (params) => enrichment(this.basePath, this.apiKey, ...params, 'company'),
      search: (params) => search(this.basePath, this.apiKey, ...params, 'company'),
      cleaner: (params) => cleaner(this.basePath, this.apiKey, ...params, 'company'),
    };

    this.school = {
      cleaner: (params) => cleaner(this.basePath, this.apiKey, ...params, 'school'),
    };

    this.location = {
      cleaner: (params) => cleaner(this.basePath, this.apiKey, ...params, 'location'),
    };
  }
}

export default PDLJS;
