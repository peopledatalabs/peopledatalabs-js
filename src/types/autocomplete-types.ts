import { BaseResponse } from './api-types.js';

export type AutoCompleteField = 'class' | 'company' | 'country' | 'industry' | 'location' | 'major' | 'region' | 'role' | 'school' | 'sub_role' | 'skill' | 'title' | 'website';

export interface AutoCompleteParams {
  field: AutoCompleteField;
  pretty?: boolean;
  size?: number;
  text?: string;
  titlecase?: boolean;
}

export interface AutoCompleteResponse extends BaseResponse {
  data?: Array<{
    count: number | null;
    meta?: {
      alternative_names?: Array<string> | null;
      country?: string | null;
      display_name?: string | null;
      display_name_history?: Array<string> | null;
      id?: string | null;
      industry?: string | null;
      locality?: string | null;
      location_name?: string | null;
      region?: string | null;
      role?: string | null;
      website?: string | null;
    } | null;
    name?: string | null;
  }>;
  fields?: Array<string> | null;
}
