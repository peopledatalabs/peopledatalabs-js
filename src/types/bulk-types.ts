import { RateLimit } from './api-types.js';
import { CompanyEnrichmentParams, CompanyEnrichmentResponse, PersonEnrichmentParams, PersonEnrichmentResponse } from './enrichment-types.js';

export interface BulkPersonEnrichmentRequest {
  metadata?: unknown;
  params: PersonEnrichmentParams; // The user can define their own custom metadata
}

export interface BulkPersonEnrichmentParams {
  include_if_matched?: boolean;
  pretty?: boolean;
  requests: Array<BulkPersonEnrichmentRequest>;
  titlecase?: boolean;
}

export interface BulkPersonEnrichmentResponseItem extends PersonEnrichmentResponse {
  metadata?: unknown;
}

export type BulkPersonEnrichmentResponse = {
  items: Array<BulkPersonEnrichmentResponseItem>;
  rateLimit: RateLimit;
};

export interface BulkCompanyEnrichmentRequest {
  metadata?: unknown;
  params: CompanyEnrichmentParams; // The user can define their own custom metadata
}

export interface BulkCompanyEnrichmentParams {
  include_if_matched?: boolean;
  pretty?: boolean;
  requests: Array<BulkCompanyEnrichmentRequest>;
  titlecase?: boolean;
}

export interface BulkCompanyEnrichmentResponseItem extends CompanyEnrichmentResponse {
  metadata?: unknown;
}

export type BulkCompanyEnrichmentResponse = {
  items: Array<BulkCompanyEnrichmentResponseItem>;
  rateLimit: RateLimit;
};
