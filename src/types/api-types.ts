export interface APISettings {
  apiKey: string;
  basePath?: string;
  sandboxBasePath?: string;
  version?: string;
}

export interface RateLimit {
  callCreditsSpent?: number;
  callCreditsType?: string;
  lifetimeUsed?: number;
  rateLimitLimit?: RateLimitLimit;
  rateLimitRemaining?: RateLimitRemaining;
  rateLimitReset?: string;
  totalLimitOveragesRemaining?: number;
  totalLimitPurchasedRemaining?: number;
  totalLimitRemaining?: number;
}

export interface BaseResponse {
  rateLimit: RateLimit;
  status: number;
}

export interface RateLimitRemaining {
  day?: number;
  minute?: number;
  month?: number;
}

export interface RateLimitLimit {
  day?: number;
  minute?: number;
  month?: number;
}
