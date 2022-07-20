import { AxiosResponse } from 'axios';
import { RateLimit } from '../types/api-types';

// eslint-disable-next-line import/prefer-default-export
export const parseRateLimitingResponse = (response: AxiosResponse) => {
  const rateLimit = {
    rateLimitRemaining: response.headers['x-ratelimit-remaining'] || undefined,
    rateLimitReset: response.headers['x-ratelimit-reset'] || undefined,
    rateLimit: response.headers['x-ratelimit-limit'] || undefined,
    totalLimitOveragesRemaining: response.headers['x-totallimit-overages-remaining'] || undefined,
    totalLimitPurchasedRemaining: response.headers['x-totallimit-purchased-remaining'] || undefined,
    totalLimitRemaining: response.headers['x-totallimit-remaining'] || undefined,
    callCreditsType: response.headers['x-call-credits-type'] || undefined,
    callCreditsSpent: response.headers['x-call-credits-spent'] || undefined,
    lifetimeUsed: response.headers['x-lifetime-used'] || undefined,
  } as RateLimit;

  if (Array.isArray(response.data)) {
    return {
      items: response.data,
      rateLimit,
    };
  }

  return {
    ...response.data,
    rateLimit,
  };
};
