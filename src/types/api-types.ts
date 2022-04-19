export interface APISettings {
  apiKey: string;
  basePath?: string;
  version?: string;
}

export interface RateLimit {
  retryAfter: number;
  rateLimit: number;
  rateLimitReset: number;
  totalLimit?: number;
  totalLimitRemaining?: number;
  searchLimitRemaining?: number;
  enrichCompanyLimitRemaining?: number;
}

export interface BaseResponse {
  status: number;
  rateLimit: RateLimit;
}
