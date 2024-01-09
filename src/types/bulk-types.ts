import { RateLimit } from './api-types.js';
import { CompanyEnrichmentParams, CompanyEnrichmentResponse, PersonEnrichmentParams, PersonEnrichmentResponse } from './enrichment-types.js';

export interface BulkPersonEnrichmentRequest {
  params: PersonEnrichmentParams,
  metadata?: unknown // The user can define their own custom metadata
}

export interface BulkPersonEnrichmentParams {
  requests: Array<BulkPersonEnrichmentRequest> & {
    titlecase?: boolean;
    include_if_matched?: boolean;
    pretty?: boolean;
  }
}

export interface BulkPersonEnrichmentResponseItem extends PersonEnrichmentResponse {
  metadata?: unknown
}

export type BulkPersonEnrichmentResponse = {
  items: Array<BulkPersonEnrichmentResponseItem>,
  rateLimit: RateLimit
};

export interface BulkCompanyEnrichmentRequest {
  params: CompanyEnrichmentParams,
  metadata?: unknown // The user can define their own custom metadata
}

export interface BulkCompanyEnrichmentParams {
  requests: Array<BulkCompanyEnrichmentRequest> & {
    titlecase?: boolean;
    include_if_matched?: boolean;
    pretty?: boolean;
  }
}

export interface BulkCompanyEnrichmentResponseItem extends CompanyEnrichmentResponse {
  metadata?: unknown
}

export type BulkCompanyEnrichmentResponse = {
  items: Array<BulkCompanyEnrichmentResponseItem>,
  rateLimit: RateLimit
};
