import { BaseResponse } from './api-types.js';
import { PersonResponse } from './common-types.js';

export type RetrieveFilter = 'job_change' | 'education' | 'location' | 'personal_emails' | 'phone_number' | 'social_profile' | 'work_email';

export type RetrieveMetaParams = {
  filter_updated?: RetrieveFilter | RetrieveFilter[];
  pretty?: boolean;
  titlecase?: boolean;
};

export type ApiRetrieveMetaParams = {
  filter_updated?: string;
  pretty?: boolean;
  titlecase?: boolean;
};

export type RetrieveParams = {
  id: string;
} & RetrieveMetaParams;

export type ApiRetrieveParams = {
  id: string;
} & ApiRetrieveMetaParams;

export interface RetrieveResponse extends BaseResponse {
  billed: boolean;
  data: PersonResponse;
}
