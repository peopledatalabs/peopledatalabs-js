import { PersonEnrichmentParams, PersonEnrichmentResponse } from './enrichment-types';
import { RateLimit } from './api-types';

interface BulkPersonEnrichmentRequest {
  params: PersonEnrichmentParams,
  metadata?: unknown // The user can define their own custom metadata
}

export interface BulkPersonEnrichmentParams {
  requests: Array<BulkPersonEnrichmentRequest>
}

interface BulkPersonEnrichmentResponseItem extends PersonEnrichmentResponse {
  metadata?: unknown
}

// This response does extend from the BaseResponse since each item in the array has its own status
// See https://docs.peopledatalabs.com/docs/bulk-requests
export type BulkPersonEnrichmentResponse = {
  items: Array<BulkPersonEnrichmentResponseItem>,
  rateLimit: RateLimit
};
