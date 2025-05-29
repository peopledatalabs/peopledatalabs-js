import { BaseResponse } from './api-types.js';
import { IndustryType, JobTitleRole } from './canonical-types.js';

export type AutoCompleteField = 'all_location' | 'class' | 'company' | 'country' | 'industry' | 'location' | 'location_name' | 'major' | 'region' | 'role' | 'school' | 'sub_role' | 'skill' | 'title' | 'website';

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
      fields?: Array<string> | null;
      id?: string | null;
      industry?: IndustryType | null;
      locality?: string | null;
      location_name?: string | null;
      region?: string | null;
      role?: JobTitleRole | null;
      website?: string | null;
    } | null;
    name?: string | null;
  }>;
  fields?: Array<string> | null;
}
