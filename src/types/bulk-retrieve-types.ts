import { BaseResponse, RateLimit } from './api-types';
import { PersonResponse } from './common-types';

export type BulkPersonRetrieveRequest = {
  id: string;
  metadata?: unknown;
};

export interface BulkPersonRetrieveParams {
  requests: Array<BulkPersonRetrieveRequest> & {
    pretty?: boolean;
    titlecase?: boolean;
    filter_updated?: 'job_change' | any;
  }
}

export interface BulkPersonRetrieveResponseItem extends BaseResponse {
  data: PersonResponse;
  metadata?: unknown;
  billed: boolean;
}

// This response does extend from the BaseResponse since each item in the array has its own status
// See https://docs.peopledatalabs.com/docs/bulk-requests
export type BulkPersonRetrieveResponse = {
  items: Array<BulkPersonRetrieveResponseItem>,
  rateLimit: RateLimit
};
