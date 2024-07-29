import { BaseResponse } from './api-types.js';
import { LocationResponse } from './common-types.js';
import { RequireAtLeastOne } from './utility-types.js';

export type CleanerType = 'company' | 'school' | 'location';

/* ---------------------------------------------------------- */
/* ------------------------- Company ------------------------ */
/* ---------------------------------------------------------- */

export type CompanyCleanerParams = RequireAtLeastOne<{
  name: string;
  profile: string;
  website: string;
}> & {
  pretty?: boolean;
};

export interface CompanyCleanerResponse extends BaseResponse {
  facebook_url: string | null,
  founded?: number | null,
  fuzzy_match: boolean | null,
  id?: string | null,
  industry?: string | null,
  linkedin_id: string | null,
  linkedin_url: string | null,
  location?: Omit<LocationResponse, 'metro'> | null,
  name?: string | null,
  size?: string | null,
  ticker?: string | null,
  twitter_url: string | null,
  type?: string | null,
  website: string | null
}

/* ---------------------------------------------------------- */
/* ------------------------- School ------------------------- */
/* ---------------------------------------------------------- */

export type SchoolCleanerParams = RequireAtLeastOne<{
  name: string;
  profile: string;
  website: string;
}> & {
  pretty?: boolean;
};

export interface SchoolCleanerResponse extends BaseResponse {
  domain?: string | null,
  facebook_url?: string | null,
  id?: string | null,
  linkedin_id?: string | null,
  linkedin_url?: string | null,
  location: {
    continent?: string | null,
    country?: string | null,
    locality?: string | null,
    name?: string | null,
    region?: string | null
  } | null,
  name?: string | null,
  twitter_url?: string | null,
  type?: string | null,
  website?: string | null
}

/* ---------------------------------------------------------- */
/* ------------------------ Location ------------------------ */
/* ---------------------------------------------------------- */

export interface LocationCleanerParams {
  location: string;
  pretty?: boolean;
}

export interface LocationCleanerResponse extends BaseResponse {
  continent?: string | null,
  country?: string | null,
  geo?: string | null,
  locality?: string | null,
  name?: string | null,
  region?: string | null,
  subregion?: string | null,
  type?: string | null
}
