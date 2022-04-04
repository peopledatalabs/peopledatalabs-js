import { PersonEnrichmentParams, PersonEnrichmentResponse } from './enrichment-types';

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

export type BulkPersonEnrichmentResponse = Array<BulkPersonEnrichmentResponseItem>;
