import { BaseResponse } from './api-types.js';

export interface SkillParams {
  pretty?: boolean;
  skill: string;
  titlecase?: boolean;
}

export interface SkillResponse extends BaseResponse {
  data?: {
    cleaned_skill: string,
    relevant_job_titles: Array<string>,
    similar_skills: Array<string>
  }
}
