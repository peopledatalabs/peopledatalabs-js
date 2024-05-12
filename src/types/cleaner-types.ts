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
  facebook_url: string,
  founded?: number,
  fuzzy_match: boolean,
  id?: string,
  industry?: string,
  linkedin_id: string,
  linkedin_url: string,
  location?: Omit<LocationResponse, 'metro'>,
  name?: string,
  size?: string,
  ticker?: string,
  twitter_url: string,
  type?: string,
  website: string
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
  domain?: string,
  facebook_url?: null,
  id?: string,
  linkedin_id?: string,
  linkedin_url?: string,
  location: {
    continent?: string,
    country?: string,
    locality?: string,
    name?: string,
    region?: string
  },
  name?: string,
  twitter_url?: null,
  type?: string,
  website?: string
}

/* ---------------------------------------------------------- */
/* ------------------------ Location ------------------------ */
/* ---------------------------------------------------------- */

export interface LocationCleanerParams {
  location: string;
  pretty?: boolean;
}

export interface LocationCleanerResponse extends BaseResponse {
  continent?: string,
  country?: string,
  geo?: string,
  locality?: string,
  name?: string,
  region?: string,
  subregion?: string,
  type?: string
}
