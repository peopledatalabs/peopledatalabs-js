import { BaseResponse } from './api-types.js';

export interface SkillParams {
  pretty?: boolean;
  skill: string;
  titlecase?: boolean;
}

export interface SkillResponse extends BaseResponse {
  data?: {
    cleaned_skill?: string | null,
    relevant_job_titles?: Array<string> | null,
    similar_skills?: Array<string> | null
  }
}
