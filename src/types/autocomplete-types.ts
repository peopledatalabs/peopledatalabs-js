import { BaseResponse } from './api-types.js';

export type AutoCompleteField =
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
  'title' |
  'website';

export interface AutoCompleteParams {
  field: AutoCompleteField;
  pretty?: boolean;
  size?: number;
  text?: string;
  titlecase?: boolean;
}

export interface AutoCompleteResponse extends BaseResponse {
  data?: Array<{
    count: number;
    meta?: {
      alternative_names?: Array<string>;
      country?: string;
      display_name?: string;
      display_name_history?: Array<string>;
      id?: string;
      industry?: string;
      locality?: string;
      location_name?: string;
      region?: string;
      role?: string;
      website?: string;
    },
    name: string;
  }>,
  fields?: Array<string>;
}
