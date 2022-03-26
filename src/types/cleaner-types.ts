export type CleanerType = 'company' | 'school' | 'location';

export interface CompanyCleanerParams {
  name?: string;
  website?: string;
  profile?: string;
}

export interface SchoolCleanerParams {
  location: string;
}

export interface CompanyCleanerResponse {
  name?: string,
  size?: string,
  id?: string,
  founded?: string,
  industry?: string,
  type?: string,
  ticker?: string,
  location?: {
    name?: string,
    locality?: string,
    region?: string,
    country?: string,
    continent?: string,
    street_address?: string,
    address_line_2?: string,
    postal_code?: string,
    geo?: string
  },
  linkedin_url: string,
  linkedin_id: string,
  facebook_url: string,
  twitter_url: string,
  website: string,
  fuzzy_match: boolean
}

export interface SchoolCleanerResponse {
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

export interface LocationCleanerResponse {
  name?: string,
  locality?: string,
  region?: string,
  subregion?: string,
  country?: string,
  continent?: string,
  type?: string,
  geo?: string,
}
