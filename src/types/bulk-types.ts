import { RateLimit } from './api-types';
import { EnrichmentAdditionalParams, PersonEnrichmentParams, PersonEnrichmentResponse } from './enrichment-types';

export interface BulkPersonEnrichmentRequest {
  params: PersonEnrichmentParams,
  metadata?: unknown // The user can define their own custom metadata
}

export interface BulkPersonEnrichmentParams {
  requests: Array<BulkPersonEnrichmentRequest> & EnrichmentAdditionalParams
}

export interface BulkPersonEnrichmentResponseItem extends PersonEnrichmentResponse {
  metadata?: unknown
}

// This response does extend from the BaseResponse since each item in the array has its own status
// See https://docs.peopledatalabs.com/docs/bulk-requests
export type BulkPersonEnrichmentResponse = {
  items: Array<BulkPersonEnrichmentResponseItem>,
  rateLimit: RateLimit
};
