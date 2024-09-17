import { BaseResponse, RateLimit } from './api-types.js';
import { PersonResponse } from './common-types.js';
import { ApiRetrieveMetaParams, RetrieveMetaParams } from './retrieve-types.js';

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
  billed: boolean;
  data: PersonResponse;
  metadata?: unknown;
}

// This response does not extend from the BaseResponse since each item in the array has its own status
// See https://docs.peopledatalabs.com/docs/bulk-requests
export type BulkPersonRetrieveResponse = {
  items: Array<BulkPersonRetrieveResponseItem>;
  rateLimit: RateLimit;
};
