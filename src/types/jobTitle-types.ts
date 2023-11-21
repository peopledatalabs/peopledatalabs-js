import { BaseResponse } from './api-types';

export interface JobTitleParams {
  jobTitle: string;
  pretty?: boolean;
  titlecase?: boolean;
}

export interface JobTitleResponse extends BaseResponse {
  data?: {
    cleaned_job_title: string,
    similar_job_titles: Array<string>,
    relevant_skills: Array<string>,
  }
}
