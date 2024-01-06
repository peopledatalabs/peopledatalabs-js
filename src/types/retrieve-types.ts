import { BaseResponse } from './api-types.js';
import { PersonResponse } from './common-types.js';

export type RetrieveFilter = 'job_change' | 'education' | 'location' | 'personal_emails' | 'phone_number' | 'social_profile' | 'work_email';

export type RetrieveMetaParams = {
  pretty?: boolean;
  titlecase?: boolean;
  filter_updated?: RetrieveFilter | RetrieveFilter[];
};

export type ApiRetrieveMetaParams = {
  pretty?: boolean;
  titlecase?: boolean;
  filter_updated?: string;
};

export type RetrieveParams = {
  id: string;
} & RetrieveMetaParams;

export type ApiRetrieveParams = {
  id: string;
} & ApiRetrieveMetaParams;

export interface RetrieveResponse extends BaseResponse {
  data: PersonResponse
  billed: boolean;
}
