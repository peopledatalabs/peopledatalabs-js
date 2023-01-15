import { BaseResponse } from './api-types';
import { PersonResponse } from './common-types';

export type RetrieveParams = {
  id: string;
} & {
  pretty?: boolean;
  filter_updated?: 'job_change' | any;
};

export interface RetrieveResponse extends BaseResponse {
  data: PersonResponse
  billed: boolean;
}
