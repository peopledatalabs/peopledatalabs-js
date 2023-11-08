import { BaseResponse } from './api-types';
import { LocationResponse } from './common-types';
import { RequireAtLeastOne } from './utility-types';

export type CleanerType = 'company' | 'school' | 'location';

/* ---------------------------------------------------------- */
/* ------------------------- Company ------------------------ */
/* ---------------------------------------------------------- */

export type CompanyCleanerParams = RequireAtLeastOne<{
  name: string;
  website: string;
  profile: string;
}> & {
  pretty?: boolean;
};

export interface CompanyCleanerResponse extends BaseResponse {
  name?: string,
  size?: string,
  id?: string,
  founded?: number,
  industry?: string,
  type?: string,
  ticker?: string,
  location?: Omit<LocationResponse, 'metro'>,
  linkedin_url: string,
  linkedin_id: string,
  facebook_url: string,
  twitter_url: string,
  website: string,
  fuzzy_match: boolean
}

/* ---------------------------------------------------------- */
/* ------------------------- School ------------------------- */
/* ---------------------------------------------------------- */

export type SchoolCleanerParams = RequireAtLeastOne<{
  name: string;
  website: string;
  profile: string;
}> & {
  pretty?: boolean;
};

export interface SchoolCleanerResponse extends BaseResponse {
  name?: string,
  type?: string,
  id?: string,
  location: {
    name?: string,
    locality?: string,
    region?: string,
    country?: string,
    continent?: string
  },
  linkedin_url?: string,
  facebook_url?: null,
  twitter_url?: null,
  linkedin_id?: string,
  website?: string,
  domain?: string
}

/* ---------------------------------------------------------- */
/* ------------------------ Location ------------------------ */
/* ---------------------------------------------------------- */

export interface LocationCleanerParams {
  location: string;
  pretty?: boolean;
}

export interface LocationCleanerResponse extends BaseResponse {
  name?: string,
  locality?: string,
  region?: string,
  subregion?: string,
  country?: string,
  continent?: string,
  type?: string,
  geo?: string,
}
