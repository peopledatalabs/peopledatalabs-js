import { AutoCompleteParams, AutoCompleteResponse } from './types/autocomplete-types';
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
import { BulkPersonEnrichmentParams, BulkPersonEnrichmentResponse } from './types/bulk-types';
import {
  autocomplete, bulk, cleaner, enrichment, identify, retrieve, search,
} from './endpoints';
import {
  CompanySearchParams,
  CompanySearchResponse,
  PersonSearchParams,
  PersonSearchResponse,
} from './types/search-types';
import { IdentifyParams, IdentifyResponse } from './types/identify-types';
import { APISettings } from './types/api-types';
import { RetrieveResponse } from './types/retrieve-types';

class PDLJS {
  private readonly apiKey: string;

  private readonly basePath: string;

  public person: {
    enrichment: (params: PersonEnrichmentParams) => Promise<PersonEnrichmentResponse>;
    search: { elastic: (params: PersonSearchParams) => Promise<PersonSearchResponse>;
      sql: (params: PersonSearchParams) => Promise<PersonSearchResponse> };
    identify: (params: IdentifyParams) => Promise<IdentifyResponse>;
    retrieve: (id: string, pretty: boolean) => Promise<RetrieveResponse>;
    bulk: (records: BulkPersonEnrichmentParams) => Promise<BulkPersonEnrichmentResponse>
  };

  public company: {
    enrichment: (params: CompanyEnrichmentParams) => Promise<CompanyEnrichmentResponse>;
    search: { elastic: (params: CompanySearchParams) => Promise<CompanySearchResponse>;
      sql: (params: CompanySearchParams) => Promise<CompanySearchResponse> };
    cleaner: (params: CompanyCleanerParams) => Promise<CompanyCleanerResponse>
  };

  public school: { cleaner: (params: SchoolCleanerParams) => Promise<SchoolCleanerResponse> };

  public location: { cleaner: (params: LocationCleanerParams) => Promise<LocationCleanerResponse> };

  public autocomplete: (params: AutoCompleteParams) => Promise<AutoCompleteResponse>;

  constructor({
    apiKey,
    basePath,
    version,
  }: APISettings) {
    this.apiKey = apiKey;
    this.basePath = basePath || `https://api.peopledatalabs.com/${version || 'v5'}`;

    this.person = {
      enrichment: (params) => enrichment<PersonEnrichmentParams, PersonEnrichmentResponse>(this.basePath, this.apiKey, params, 'person'),
      search: {
        elastic: (params) => search<PersonSearchParams, PersonSearchResponse>(this.basePath, this.apiKey, 'elastic', params, 'person'),
        sql: (params) => search<PersonSearchParams, PersonSearchResponse>(this.basePath, this.apiKey, 'sql', params, 'person'),
      },
      bulk: (records) => bulk(this.basePath, this.apiKey, records),
      identify: (params) => identify(this.basePath, this.apiKey, params),
      retrieve: (id, pretty) => retrieve(this.basePath, this.apiKey, id, pretty),
    };

    this.company = {
      enrichment: (params) => enrichment<CompanyEnrichmentParams, CompanyEnrichmentResponse>(this.basePath, this.apiKey, params, 'company'),
      search: {
        elastic: (params) => search<CompanySearchParams, CompanySearchResponse>(this.basePath, this.apiKey, 'elastic', params, 'company'),
        sql: (params) => search<CompanySearchParams, CompanySearchResponse>(this.basePath, this.apiKey, 'sql', params, 'company'),
      },
      cleaner: (params) => cleaner<CompanyCleanerParams, CompanyCleanerResponse>(this.basePath, this.apiKey, params, 'company'),
    };

    this.school = {
      cleaner: (params) => cleaner<SchoolCleanerParams, SchoolCleanerResponse>(this.basePath, this.apiKey, params, 'school'),
    };

    this.location = {
      cleaner: (params) => cleaner<LocationCleanerParams, LocationCleanerResponse>(this.basePath, this.apiKey, params, 'location'),
    };

    this.autocomplete = (
      params: AutoCompleteParams,
    ) => autocomplete(this.basePath, this.apiKey, params);
  }
}

export default PDLJS;
