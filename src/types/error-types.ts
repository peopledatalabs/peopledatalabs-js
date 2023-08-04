import { RateLimit } from './api-types';

export type ErrorEndpoint = 'enrichment' | 'autocomplete' | 'search' | 'identify' | 'bulk' | 'cleaner' | 'retrieve' | 'jobTitle' | 'skill' | 'ip';

export type PdlError = {
  message: string;
  status: number;
  rateLimit?: RateLimit;
};
