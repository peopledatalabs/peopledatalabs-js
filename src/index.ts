import { autocomplete, bulkEnrichment, bulkRetrieve, cleaner, enrichment, identify, jobTitle, retrieve, search, skill } from './endpoints';
import ip from './endpoints/ip';
import { APISettings } from './types/api-types';
import { AutoCompleteParams, AutoCompleteResponse } from './types/autocomplete-types';
import { BulkPersonRetrieveParams, BulkPersonRetrieveResponse } from './types/bulk-retrieve-types';
import { BulkPersonEnrichmentParams, BulkPersonEnrichmentResponse } from './types/bulk-types';
import { CompanyCleanerParams, CompanyCleanerResponse, LocationCleanerParams, LocationCleanerResponse, SchoolCleanerParams, SchoolCleanerResponse } from './types/cleaner-types';
import { CompanyResponse, PersonResponse } from './types/common-types';
import { CompanyEnrichmentParams, CompanyEnrichmentResponse, PersonEnrichmentParams, PersonEnrichmentResponse } from './types/enrichment-types';
import { IdentifyParams, IdentifyResponse } from './types/identify-types';
import { IPParams, IPResponse } from './types/ip-types';
import { JobTitleParams, JobTitleResponse } from './types/jobTitle-types';
import { RetrieveParams, RetrieveResponse } from './types/retrieve-types';
import { CompanySearchParams, CompanySearchResponse, PersonSearchParams, PersonSearchResponse } from './types/search-types';
import { SkillParams, SkillResponse } from './types/skill-types';

class PDLJS {
  private readonly apiKey: string;

  private readonly basePath: string;

  private readonly sandboxBasePath: string;

  public person: {
    enrichment: (params: PersonEnrichmentParams) => Promise<PersonEnrichmentResponse>;
    search: {
      elastic: (params: PersonSearchParams) => Promise<PersonSearchResponse>;
      sql: (params: PersonSearchParams) => Promise<PersonSearchResponse>;
    };
    identify: (params: IdentifyParams) => Promise<IdentifyResponse>;
    retrieve: (params: RetrieveParams) => Promise<RetrieveResponse>;
    bulk: {
      enrichment: (records: BulkPersonEnrichmentParams) => Promise<BulkPersonEnrichmentResponse>;
      retrieve: (records: BulkPersonRetrieveParams) => Promise<BulkPersonRetrieveResponse>;
    }
  };

  public company: {
    enrichment: (params: CompanyEnrichmentParams) => Promise<CompanyEnrichmentResponse>;
    search: {
      elastic: (params: CompanySearchParams) => Promise<CompanySearchResponse>;
      sql: (params: CompanySearchParams) => Promise<CompanySearchResponse>;
    };
    cleaner: (params: CompanyCleanerParams) => Promise<CompanyCleanerResponse>;
  };

  public school: { cleaner: (params: SchoolCleanerParams) => Promise<SchoolCleanerResponse> };

  public location: { cleaner: (params: LocationCleanerParams) => Promise<LocationCleanerResponse> };

  public autocomplete: (params: AutoCompleteParams) => Promise<AutoCompleteResponse>;

  public skill: (params: SkillParams) => Promise<SkillResponse>;

  public jobTitle: (params: JobTitleParams) => Promise<JobTitleResponse>;

  public ip: (params: IPParams) => Promise<IPResponse>;

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
      enrichment: (params) => enrichment<PersonEnrichmentParams, PersonEnrichmentResponse>(this.basePath, this.sandboxBasePath, this.apiKey, params, 'person'),
      search: {
        elastic: (params) => search<PersonSearchParams, PersonSearchResponse>(this.basePath, this.sandboxBasePath, this.apiKey, 'elastic', params, 'person'),
        sql: (params) => search<PersonSearchParams, PersonSearchResponse>(this.basePath, this.sandboxBasePath, this.apiKey, 'sql', params, 'person'),
      },
      bulk: {
        enrichment: (records) => bulkEnrichment(this.basePath, this.apiKey, records),
        retrieve: (records) => bulkRetrieve(this.basePath, this.apiKey, records),
      },
      identify: (params) => identify(this.basePath, this.sandboxBasePath, this.apiKey, params),
      retrieve: (params) => retrieve(this.basePath, this.apiKey, params),
    };

    this.company = {
      enrichment: (params) => enrichment<CompanyEnrichmentParams, CompanyEnrichmentResponse>(this.basePath, this.sandboxBasePath, this.apiKey, params, 'company'),
      search: {
        elastic: (params) => search<CompanySearchParams, CompanySearchResponse>(this.basePath, this.sandboxBasePath, this.apiKey, 'elastic', params, 'company'),
        sql: (params) => search<CompanySearchParams, CompanySearchResponse>(this.basePath, this.sandboxBasePath, this.apiKey, 'sql', params, 'company'),
      },
      cleaner: (params) => cleaner<CompanyCleanerParams, CompanyCleanerResponse>(this.basePath, this.apiKey, params, 'company'),
    };

    this.school = {
      cleaner: (params) => cleaner<SchoolCleanerParams, SchoolCleanerResponse>(this.basePath, this.apiKey, params, 'school'),
    };

    this.location = {
      cleaner: (params) => cleaner<LocationCleanerParams, LocationCleanerResponse>(this.basePath, this.apiKey, params, 'location'),
    };

    this.autocomplete = (params: AutoCompleteParams) => autocomplete(this.basePath, this.apiKey, params);

    this.jobTitle = (params: JobTitleParams) => jobTitle(this.basePath, this.apiKey, params);

    this.skill = (params: SkillParams) => skill(this.basePath, this.apiKey, params);

    this.ip = (params: IPParams) => ip(this.basePath, this.apiKey, params);
  }
}

export default PDLJS;

export type {
  APISettings,
  AutoCompleteParams,
  AutoCompleteResponse,
  BulkPersonEnrichmentParams,
  BulkPersonEnrichmentResponse,
  BulkPersonRetrieveParams,
  BulkPersonRetrieveResponse,
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
  PersonEnrichmentResponse,
  PersonResponse,
  PersonSearchParams,
  PersonSearchResponse,
  RetrieveParams,
  RetrieveResponse,
  SchoolCleanerParams,
  SchoolCleanerResponse,
  SkillParams,
  SkillResponse,
};
