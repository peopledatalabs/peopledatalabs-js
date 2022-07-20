export interface APISettings {
  apiKey: string;
  basePath?: string;
  version?: string;
}

export interface RateLimit {
  rateLimitRemaining?: RateLimitRemaining;
  rateLimitReset?: string;
  rateLimitLimit?: RateLimitLimit;
  totalLimitOveragesRemaining?: number;
  totalLimitPurchasedRemaining?: number;
  totalLimitRemaining?: number;
  callCreditsType?: string;
  callCreditsSpent?: number;
  lifetimeUsed?: number;
}

export interface BaseResponse {
  status: number;
  rateLimit: RateLimit;
}

export interface RateLimitRemaining {
  minute?: number;
  day?: number;
  month?: number;
}

export interface RateLimitLimit {
  minute?: number;
  day?: number;
  month?: number;
}
