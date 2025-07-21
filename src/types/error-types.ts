import { RateLimit } from './api-types.js';

export type ErrorEndpoint = 'enrichment' | 'autocomplete' | 'changelog' | 'search' | 'identify' | 'bulk' | 'cleaner' | 'retrieve' | 'jobTitle' | 'ip';

export type PdlError = {
  message: string;
  rateLimit?: RateLimit;
  status: number;
};
