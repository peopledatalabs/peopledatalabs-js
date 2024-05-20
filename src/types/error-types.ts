import { RateLimit } from './api-types.js';

export type ErrorEndpoint = 'enrichment' | 'autocomplete' | 'search' | 'identify' | 'bulk' | 'cleaner' | 'retrieve' | 'jobTitle' | 'skill' | 'ip';

export type PdlError = {
  message: string;
  rateLimit?: RateLimit;
  status: number;
};
