import { BaseResponse } from './api-types.js';

export interface JobTitleParams {
  jobTitle: string;
  pretty?: boolean;
  titlecase?: boolean;
}

export interface JobTitleResponse extends BaseResponse {
  data?: {
    cleaned_job_title: string,
    relevant_skills: Array<string>,
    similar_job_titles: Array<string>
  }
}
