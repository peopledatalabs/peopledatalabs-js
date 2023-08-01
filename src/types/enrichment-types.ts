import { BaseResponse } from './api-types';
import { CompanyResponse, PersonResponse } from './common-types';
import { RequireAtLeastOne } from './utility-types';

export type EnrichmentType = 'company' | 'person';

export interface EnrichmentAdditionalParams {
  titlecase?: boolean;
  include_if_matched?: boolean;
  min_likelihood?: number;
  required?: string;
  pretty?: boolean;
  sandbox?: boolean;
}

/* ---------------------------------------------------------- */
/* ------------------------- Person ------------------------- */
/* ---------------------------------------------------------- */

export type PersonEnrichmentParams = EnrichmentAdditionalParams & Partial<{
  name: Array<string> | string,
  first_name: Array<string> | string,
  last_name: Array<string> | string,
  middle_name: Array<string> | string,
  location: Array<string> | string,
  street_address: string,
  locality: string,
  region: string,
  country: string,
  postal_code: string,
  company: Array<string> | string,
  school: Array<string> | string,
  phone: Array<string> | string,
  email: Array<string> | string,
  email_hash: Array<string> | string,
  profile: Array<string> | string,
  lid: number,
  birth_date: Array<string> | string;
  data_include: string;
  pdl_id: string;
}>;

export interface PersonEnrichmentResponse extends BaseResponse {
  likelihood: number,
  data: PersonResponse
}

export type PersonEnrichmentPreviewParams = PersonEnrichmentParams;

type PersonPreviewResponseVisibleKeys = 'id' | 'full_name' | 'gender' | 'linkedin_url' | 'industry' | 'job_title' | 'job_title_role' | 'job_title_sub_role' | 'job_title_levels' | 'job_company_name' | 'job_company_website' | 'location_name';

type PersonPreviewResponseType = {
  [K in keyof PersonResponse]: K extends PersonPreviewResponseVisibleKeys ? PersonResponse[K] : boolean;
};

export interface PersonPreviewResponse extends PersonPreviewResponseType {}

export interface PersonEnrichmentPreviewResponse extends BaseResponse {
  likelihood: number,
  data: PersonPreviewResponse
}

/* ---------------------------------------------------------- */
/* ------------------------- Company ------------------------ */
/* ---------------------------------------------------------- */

export interface CompanyEnrichmentRequiredParams {
  name: string,
  profile: string,
  ticker: string,
  website: string,
}

// eslint-disable-next-line max-len
export type CompanyEnrichmentParams = RequireAtLeastOne<CompanyEnrichmentRequiredParams> & EnrichmentAdditionalParams & {
  location?: string,
  locality?: string,
  region?: string,
  country?: string,
  street_address?: string,
  postal_code?: string
};

export interface CompanyEnrichmentResponse extends BaseResponse, CompanyResponse {}
