import { AutoCompleteParams } from './types/autocomplete-types';
import {
  CompanyCleanerParams,
  CompanyCleanerResponse,
  LocationCleanerParams,
  LocationCleanerResponse,
  SchoolCleanerParams,
  SchoolCleanerResponse,
} from './types/cleaner-types';
import {
  CompanyEnrichmentParams,
  CompanyEnrichmentResponse,
  PersonEnrichmentParams,
  PersonEnrichmentResponse,
} from './types/enrichment-types';
import { BulkPersonEnrichmentParams } from './types/bulk-types';
import {
  autocomplete, bulk, cleaner, enrichment, identify, retrieve, search,
} from './endpoints';
import {
  CompanySearchParams,
  CompanySearchResponse,
  PersonSearchParams,
  PersonSearchResponse,
} from './types/search-types';
import { IdentifyParams } from './types/identify-types';
import { APISettings } from './types/api-types';

class PDLJS {
  private readonly apiKey: string;

  private readonly basePath: string;

  private person: object;

  private company: object;

  private school: object;

  private location: object;

  private autocomplete: object;

  constructor({
    apiKey,
    basePath,
    version,
  }: APISettings) {
    this.apiKey = apiKey;
    this.basePath = basePath || `https://api.peopledatalabs.com/${version || 'v5'}`;

    this.person = {
      enrichment: (params: PersonEnrichmentParams) => enrichment<PersonEnrichmentParams, PersonEnrichmentResponse>(this.basePath, this.apiKey, params, 'person'),
      search: {
        elastic: (params: PersonSearchParams) => search<PersonSearchParams, PersonSearchResponse>(this.basePath, this.apiKey, 'elastic', params, 'person'),
        sql: (params: PersonSearchParams) => search<PersonSearchParams, PersonSearchResponse>(this.basePath, this.apiKey, 'sql', params, 'person'),
      },
      bulk: (records: BulkPersonEnrichmentParams) => bulk(this.basePath, this.apiKey, records),
      identify: (params: IdentifyParams) => identify(this.basePath, this.apiKey, params),
      retrieve: (id: string) => retrieve(this.basePath, this.apiKey, id),
    };

    this.company = {
      enrichment: (params: CompanyEnrichmentParams) => enrichment<CompanyEnrichmentParams, CompanyEnrichmentResponse>(this.basePath, this.apiKey, params, 'company'),
      search: {
        elastic: (params: CompanySearchParams) => search<CompanySearchParams, CompanySearchResponse>(this.basePath, this.apiKey, 'elastic', params, 'company'),
        sql: (params: CompanySearchParams) => search<CompanySearchParams, CompanySearchResponse>(this.basePath, this.apiKey, 'sql', params, 'company'),
      },
      cleaner: (params: CompanyCleanerParams) => cleaner<CompanyCleanerParams, CompanyCleanerResponse>(this.basePath, this.apiKey, params, 'company'),
    };

    this.school = {
      cleaner: (params: SchoolCleanerParams) => cleaner<SchoolCleanerParams, SchoolCleanerResponse>(this.basePath, this.apiKey, params, 'school'),
    };

    this.location = {
      cleaner: (params: LocationCleanerParams) => cleaner<LocationCleanerParams, LocationCleanerResponse>(this.basePath, this.apiKey, params, 'location'),
    };

    this.autocomplete = (
      params: AutoCompleteParams,
    ) => autocomplete(this.basePath, this.apiKey, params);
  }
}

export default PDLJS;
