import { BaseResponse } from './api-types.js';

export type RemoteWorkPolicy = 'remote' | 'onsite';
export type SalaryPeriod = 'year' | 'month' | 'week' | 'day' | 'hour';

interface JobPostingSearchCommon {
  pretty?: boolean;
  scroll_token?: string;
  size?: number;
}

export interface JobPostingQuerySearchParams extends JobPostingSearchCommon {
  query: object;
}

export interface JobPostingParamSearchParams extends JobPostingSearchCommon {
  id?: string;
  first_seen_min?: string;
  first_seen_max?: string;
  deactivated_date_min?: string;
  deactivated_date_max?: string;
  title?: string;
  title_class?: string;
  title_role?: string;
  title_sub_role?: string;
  title_levels?: string;
  company_id?: string;
  company_name?: string;
  company_industry?: string;
  company_industry_v2?: string;
  company_website?: string;
  company_profile?: string;
  location?: string;
  description?: string;
  salary_range_min?: number;
  salary_range_max?: number;
  salary_currency?: string;
  salary_period?: SalaryPeriod;
  remote_work_policy?: RemoteWorkPolicy;
  inferred_skills?: string;
  last_verified_min?: string;
  last_verified_max?: string;
  is_active?: boolean;
}

export type JobPostingSearchParams = JobPostingQuerySearchParams | JobPostingParamSearchParams;

export interface JobPostingResponse {
  id?: string | null;
  [key: string]: unknown;
}

export interface JobPostingSearchResponse extends BaseResponse {
  data: Array<JobPostingResponse>;
  scroll_token?: string;
  total: number;
}
