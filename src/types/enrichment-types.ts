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

export interface PersonEnrichmentParams extends EnrichmentAdditionalParams {
  name?: Array<string>,
  first_name?: Array<string>,
  last_name?: Array<string>,
  middle_name?: Array<string>,
  location?: Array<string>,
  street_address: string,
  locality: string,
  region: string,
  country: string,
  postal_code: string,
  company: Array<string>,
  school: Array<string>,
  phone: Array<string>,
  email: Array<string>,
  email_hash: Array<string>,
  profile: Array<string>,
  lid: number,
  birth_date: Array<string>;
  data_include?: string;
}

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
