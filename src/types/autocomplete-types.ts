import { BaseResponse } from './api-types';

type AutoCompleteField =
  'company' |
  'country' |
  'industry' |
  'location' |
  'major' |
  'region' |
  'role' |
  'school' |
  'sub_role' |
  'skill' |
  'title';

export interface AutoCompleteParams {
  field: AutoCompleteField;
  text?: string;
  size?: number;
  pretty?: boolean;
}

export interface AutoCompleteResponse extends BaseResponse {
  fields?: Array<string>;
  data?: Array<{
    name: string;
    count: number;
    meta?: {
      website?: string;
      location_name?: string;
      industry?: string;
      id?: string;
      country?: string;
      locality?: string;
      region?: string;
      role?: string;
    }
  }>
}
