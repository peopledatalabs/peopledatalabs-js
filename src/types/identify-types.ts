import { BaseResponse } from './api-types.js';
import { PersonResponse } from './common-types.js';
import { RequireAtLeastOne } from './utility-types.js';

export type IdentifyRequiredParams = RequireAtLeastOne<{
  company: string,
  email: string,
  email_hash: string,
  first_name: string,
  last_name: string,
  lid: number,
  locality: string,
  location: string,
  name: string,
  phone: string,
  postal_code: string,
  profile: string,
  region: string,
  school: string,
  street_address: string
}>;

export type IdentifyParams = IdentifyRequiredParams & Partial<{
  birth_date: string,
  country: string,
  data_include: string,
  include_if_matched: boolean,
  middle_name: string,
  pretty: boolean,
  required: string,
  sandbox: boolean,
  titlecase: boolean
  updated_title_roles?: boolean;
}>;

export interface IdentifyResponse extends BaseResponse {
  matches: Array<{
    data: PersonResponse
    match_score: number,
    matched_on: Array<string>
  }>
}
