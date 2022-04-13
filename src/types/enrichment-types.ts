import { RequireAtLeastOne } from './utility-types';
import { BaseResponse } from './api-types';
import { CompanyResponse, PersonResponse } from './common-types';

export type EnrichmentType = 'company' | 'person';

interface EnrichmentAdditionalParams {
  titlecase?: boolean;
  include_if_matched?: boolean;
  min_likelihood?: number;
  required?: string;
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
}>;

export interface PersonEnrichmentResponse extends BaseResponse {
  likelihood: number,
  data: PersonResponse
}

/* ---------------------------------------------------------- */
/* ------------------------- Company ------------------------ */
/* ---------------------------------------------------------- */

interface CompanyEnrichmentRequiredParams {
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
