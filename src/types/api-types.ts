import { AxiosRequestConfig } from 'axios';

export interface APISettings {
  apiKey: string;
  basePath?: string;
  sandboxBasePath?: string;
  version?: string;
}

export type RequestOptions = Pick<AxiosRequestConfig, 'timeout' | 'signal'>;

export interface RateLimit {
  callCreditsSpent?: number | null;
  callCreditsType?: string | null;
  lifetimeUsed?: number | null;
  rateLimitLimit?: RateLimitLimit | null;
  rateLimitRemaining?: RateLimitRemaining | null;
  rateLimitReset?: string | null;
  totalLimitOveragesRemaining?: number | null;
  totalLimitPurchasedRemaining?: number | null;
  totalLimitRemaining?: number | null;
}

export interface BaseResponse {
  rateLimit: RateLimit;
  status: number;
}

export interface RateLimitRemaining {
  day?: number | null;
  minute?: number | null;
  month?: number | null;
}

export interface RateLimitLimit {
  day?: number | null;
  minute?: number | null;
  month?: number | null;
}
