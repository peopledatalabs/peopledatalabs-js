import { autocomplete, bulkCompanyEnrichment, bulkEnrichment, bulkRetrieve, changelog, cleaner, enrichment, enrichmentPreview, identify, jobTitle, retrieve, search } from './endpoints/index.js';
import ip from './endpoints/ip/index.js';
import { APISettings, RequestOptions } from './types/api-types.js';
import { AutoCompleteParams, AutoCompleteResponse } from './types/autocomplete-types.js';
import { BulkPersonRetrieveParams, BulkPersonRetrieveResponse } from './types/bulk-retrieve-types.js';
import { BulkCompanyEnrichmentParams, BulkCompanyEnrichmentResponse, BulkPersonEnrichmentParams, BulkPersonEnrichmentResponse } from './types/bulk-types.js';
import { ChangelogParams, ChangelogResponse } from './types/changelog-types.js';
import { CompanyCleanerParams, CompanyCleanerResponse, LocationCleanerParams, LocationCleanerResponse, SchoolCleanerParams, SchoolCleanerResponse } from './types/cleaner-types.js';
import { CompanyResponse, PersonResponse } from './types/common-types.js';
import { CompanyEnrichmentParams, CompanyEnrichmentResponse, PersonEnrichmentParams, PersonEnrichmentPreviewParams, PersonEnrichmentPreviewResponse, PersonEnrichmentResponse, PersonPreviewResponse } from './types/enrichment-types.js';
import { IdentifyParams, IdentifyResponse } from './types/identify-types.js';
import { IPParams, IPResponse } from './types/ip-types.js';
import { JobTitleParams, JobTitleResponse } from './types/jobTitle-types.js';
import { RetrieveParams, RetrieveResponse } from './types/retrieve-types.js';
import { CompanySearchParams, CompanySearchResponse, PersonSearchParams, PersonSearchResponse } from './types/search-types.js';

class PDLJS {
  private readonly apiKey: string;

  private readonly basePath: string;

  private readonly sandboxBasePath: string;

  public person: {
    bulk: {
      enrichment: (records: BulkPersonEnrichmentParams, options?: RequestOptions) => Promise<BulkPersonEnrichmentResponse>;
      retrieve: (records: BulkPersonRetrieveParams, options?: RequestOptions) => Promise<BulkPersonRetrieveResponse>;
    };
    changelog: (params: ChangelogParams, options?: RequestOptions) => Promise<ChangelogResponse>;
    enrichment: (params: PersonEnrichmentParams, options?: RequestOptions) => Promise<PersonEnrichmentResponse>;
    enrichmentPreview: (params: PersonEnrichmentPreviewParams, options?: RequestOptions) => Promise<PersonEnrichmentPreviewResponse>;
    identify: (params: IdentifyParams, options?: RequestOptions) => Promise<IdentifyResponse>;
    retrieve: (params: RetrieveParams, options?: RequestOptions) => Promise<RetrieveResponse>;
    search: {
      elastic: (params: PersonSearchParams, options?: RequestOptions) => Promise<PersonSearchResponse>;
      sql: (params: PersonSearchParams, options?: RequestOptions) => Promise<PersonSearchResponse>;
    };
  };

  public company: {
    bulk: {
      enrichment: (records: BulkCompanyEnrichmentParams, options?: RequestOptions) => Promise<BulkCompanyEnrichmentResponse>;
    };
    cleaner: (params: CompanyCleanerParams, options?: RequestOptions) => Promise<CompanyCleanerResponse>;
    enrichment: (params: CompanyEnrichmentParams, options?: RequestOptions) => Promise<CompanyEnrichmentResponse>;
    search: {
      elastic: (params: CompanySearchParams, options?: RequestOptions) => Promise<CompanySearchResponse>;
      sql: (params: CompanySearchParams, options?: RequestOptions) => Promise<CompanySearchResponse>;
    };
  };

  public school: { cleaner: (params: SchoolCleanerParams, options?: RequestOptions) => Promise<SchoolCleanerResponse> };

  public location: { cleaner: (params: LocationCleanerParams, options?: RequestOptions) => Promise<LocationCleanerResponse> };

  public autocomplete: (params: AutoCompleteParams, options?: RequestOptions) => Promise<AutoCompleteResponse>;

  public jobTitle: (params: JobTitleParams, options?: RequestOptions) => Promise<JobTitleResponse>;

  public ip: (params: IPParams, options?: RequestOptions) => Promise<IPResponse>;

  constructor({
    apiKey,
    basePath,
    sandboxBasePath,
    version,
  }: APISettings) {
    this.apiKey = apiKey;
    this.basePath = basePath || `https://api.peopledatalabs.com/${version || 'v5'}`;
    this.sandboxBasePath = sandboxBasePath || `https://sandbox.api.peopledatalabs.com/${version || 'v5'}`;

    this.person = {
      enrichment: (params, options) => enrichment<PersonEnrichmentParams, PersonEnrichmentResponse>(this.basePath, this.sandboxBasePath, this.apiKey, params, 'person', options),
      enrichmentPreview: (params, options) => enrichmentPreview(this.basePath, this.sandboxBasePath, this.apiKey, params, options),
      search: {
        elastic: (params, options) => search<PersonSearchParams, PersonSearchResponse>(this.basePath, this.sandboxBasePath, this.apiKey, 'elastic', params, 'person', options),
        sql: (params, options) => search<PersonSearchParams, PersonSearchResponse>(this.basePath, this.sandboxBasePath, this.apiKey, 'sql', params, 'person', options),
      },
      bulk: {
        enrichment: (records, options) => bulkEnrichment(this.basePath, this.apiKey, records, options),
        retrieve: (records, options) => bulkRetrieve(this.basePath, this.apiKey, records, options),
      },
      identify: (params, options) => identify(this.basePath, this.sandboxBasePath, this.apiKey, params, options),
      retrieve: (params, options) => retrieve(this.basePath, this.apiKey, params, options),
      changelog: (params, options) => changelog(this.basePath, this.apiKey, params, options),
    };

    this.company = {
      enrichment: (params, options) => enrichment<CompanyEnrichmentParams, CompanyEnrichmentResponse>(this.basePath, this.sandboxBasePath, this.apiKey, params, 'company', options),
      search: {
        elastic: (params, options) => search<CompanySearchParams, CompanySearchResponse>(this.basePath, this.sandboxBasePath, this.apiKey, 'elastic', params, 'company', options),
        sql: (params, options) => search<CompanySearchParams, CompanySearchResponse>(this.basePath, this.sandboxBasePath, this.apiKey, 'sql', params, 'company', options),
      },
      bulk: {
        enrichment: (records, options) => bulkCompanyEnrichment(this.basePath, this.apiKey, records, options),
      },
      cleaner: (params, options) => cleaner<CompanyCleanerParams, CompanyCleanerResponse>(this.basePath, this.apiKey, params, 'company', options),
    };

    this.school = {
      cleaner: (params, options) => cleaner<SchoolCleanerParams, SchoolCleanerResponse>(this.basePath, this.apiKey, params, 'school', options),
    };

    this.location = {
      cleaner: (params, options) => cleaner<LocationCleanerParams, LocationCleanerResponse>(this.basePath, this.apiKey, params, 'location', options),
    };

    this.autocomplete = (params: AutoCompleteParams, options) => autocomplete(this.basePath, this.apiKey, params, options);

    this.jobTitle = (params: JobTitleParams, options) => jobTitle(this.basePath, this.apiKey, params, options);

    this.ip = (params: IPParams, options) => ip(this.basePath, this.apiKey, params, options);
  }
}

export default PDLJS;

export type {
  APISettings,
  AutoCompleteParams,
  AutoCompleteResponse,
  BulkCompanyEnrichmentParams,
  BulkCompanyEnrichmentResponse,
  BulkPersonEnrichmentParams,
  BulkPersonEnrichmentResponse,
  BulkPersonRetrieveParams,
  BulkPersonRetrieveResponse,
  ChangelogParams,
  ChangelogResponse,
  CompanyCleanerParams,
  CompanyCleanerResponse,
  CompanyEnrichmentParams,
  CompanyEnrichmentResponse,
  CompanyResponse,
  CompanySearchParams,
  CompanySearchResponse,
  IdentifyParams,
  IdentifyResponse,
  IPParams,
  IPResponse,
  JobTitleParams,
  JobTitleResponse,
  LocationCleanerParams,
  LocationCleanerResponse,
  PersonEnrichmentParams,
  PersonEnrichmentPreviewParams,
  PersonEnrichmentPreviewResponse,
  PersonEnrichmentResponse,
  PersonPreviewResponse,
  PersonResponse,
  PersonSearchParams,
  PersonSearchResponse,
  RequestOptions,
  RetrieveParams,
  RetrieveResponse,
  SchoolCleanerParams,
  SchoolCleanerResponse,
};
