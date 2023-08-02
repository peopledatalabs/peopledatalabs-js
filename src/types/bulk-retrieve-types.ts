import { BaseResponse, RateLimit } from './api-types';
import { PersonResponse } from './common-types';
import { ApiRetrieveMetaParams, RetrieveMetaParams } from './retrieve-types';

export type BulkPersonRetrieveRequest = {
  id: string;
  metadata?: unknown;
};

export interface BulkPersonRetrieveParams extends RetrieveMetaParams {
  requests: Array<BulkPersonRetrieveRequest>;
}

export interface ApiBulkPersonRetrieveParams extends ApiRetrieveMetaParams {
  requests: Array<BulkPersonRetrieveRequest>;
}

export interface BulkPersonRetrieveResponseItem extends BaseResponse {
  data: PersonResponse;
  metadata?: unknown;
  billed: boolean;
}

// This response does not extend from the BaseResponse since each item in the array has its own status
// See https://docs.peopledatalabs.com/docs/bulk-requests
export type BulkPersonRetrieveResponse = {
  items: Array<BulkPersonRetrieveResponseItem>,
  rateLimit: RateLimit
};
