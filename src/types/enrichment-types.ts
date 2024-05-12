import { BaseResponse } from './api-types.js';
import { CompanyResponse, PersonResponse } from './common-types.js';
import { RequireAtLeastOne } from './utility-types.js';

export type EnrichmentType = 'company' | 'person';

export interface EnrichmentAdditionalParams {
  include_if_matched?: boolean;
  min_likelihood?: number;
  pretty?: boolean;
  required?: string;
  sandbox?: boolean;
  size?: number;
  titlecase?: boolean;
}

/* ---------------------------------------------------------- */
/* ------------------------- Person ------------------------- */
/* ---------------------------------------------------------- */

export type PersonEnrichmentParams = EnrichmentAdditionalParams & Partial<{
  birth_date: Array<string> | string;
  company: Array<string> | string,
  country: string,
  data_include: string;
  email: Array<string> | string,
  email_hash: Array<string> | string,
  first_name: Array<string> | string,
  last_name: Array<string> | string,
  lid: number,
  locality: string,
  location: Array<string> | string,
  middle_name: Array<string> | string,
  name: Array<string> | string,
  pdl_id: string;
  phone: Array<string> | string,
  postal_code: string,
  profile: Array<string> | string,
  region: string,
  school: Array<string> | string,
  street_address: string
}>;

export interface PersonEnrichmentResponse extends BaseResponse {
  data: PersonResponse,
  likelihood: number,
  matched?: Array<string>
}

export type PersonEnrichmentPreviewParams = PersonEnrichmentParams;

type PersonPreviewResponseVisibleKeys = 'id' | 'full_name' | 'sex' | 'linkedin_url' | 'industry' | 'job_title' | 'job_title_role' | 'job_title_sub_role' | 'job_title_levels' | 'job_company_name' | 'job_company_website' | 'location_name';

type PersonPreviewResponseType = {
  [K in keyof PersonResponse]: K extends PersonPreviewResponseVisibleKeys ? PersonResponse[K] : boolean;
};

export interface PersonPreviewResponse extends PersonPreviewResponseType {}

export interface PersonEnrichmentPreviewResponse extends BaseResponse {
  data: PersonPreviewResponse,
  likelihood: number,
  matched?: Array<string>
}

/* ---------------------------------------------------------- */
/* ------------------------- Company ------------------------ */
/* ---------------------------------------------------------- */

export interface CompanyEnrichmentRequiredParams {
  name: string,
  pdl_id: string;
  profile: string,
  ticker: string,
  website: string,
}

// eslint-disable-next-line max-len
export type CompanyEnrichmentParams = RequireAtLeastOne<CompanyEnrichmentRequiredParams> & EnrichmentAdditionalParams & {
  country?: string,
  locality?: string,
  location?: string,
  postal_code?: string,
  region?: string,
  street_address?: string
};

export interface CompanyEnrichmentResponse extends BaseResponse, CompanyResponse {}
