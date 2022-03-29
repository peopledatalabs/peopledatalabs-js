import { BaseResponse } from './api-types';
import { PersonResponse } from './common-types';
import { RequireAtLeastOne } from './utility-types';

type IdentifyRequiredParams = RequireAtLeastOne<{
  name: string,
  first_name: string,
  last_name: string,
  location: string,
  street_address: string,
  locality: string,
  region: string,
  postal_code: string,
  company: string,
  school: string,
  phone: string,
  email: string,
  email_hash: string,
  profile: string,
  lid: number,
}>;

export type IdentityParams = IdentifyRequiredParams & {
  middle_name: string
  country: string,
  birth_date: string,
  required: string,
  titlecase: boolean
  data_include: string,
  include_if_matched: boolean,
  pretty: boolean,
};

export interface IdentifyResponse extends BaseResponse {
  matches: Array<{
    data: PersonResponse
    match_score: number,
    matched_on: Array<string>
  }>
}
