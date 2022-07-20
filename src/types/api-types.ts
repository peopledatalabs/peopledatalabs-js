export interface APISettings {
  apiKey: string;
  basePath?: string;
  version?: string;
}

export interface RateLimit {
  rateLimitRemaining?: string;
  rateLimitReset?: string;
  rateLimit?: string;
  totalLimitOveragesRemaining?: string;
  totalLimitPurchasedRemaining?: string;
  totalLimitRemaining?: string;
  callCreditsType?: string;
  callCreditsSpent?: string;
  lifetimeUsed?: string;
}

export interface BaseResponse {
  status: number;
  rateLimit: RateLimit;
}
