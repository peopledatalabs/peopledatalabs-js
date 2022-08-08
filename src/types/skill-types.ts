import { BaseResponse } from './api-types';

export interface SkillParams {
  skill: string;
  pretty?: boolean;
}

export interface SkillResponse extends BaseResponse {
  data?: {
    cleaned_skill: string,
    similar_skills: Array<string>,
    relevant_job_titles: Array<string>,
  }
}
