import { AxiosResponse } from 'axios';

import { RateLimit } from '../types/api-types';

// eslint-disable-next-line import/prefer-default-export
export const parseRateLimitingResponse = (response: AxiosResponse) => {
  const rateLimit = {
    rateLimitRemaining: response.headers['x-ratelimit-remaining'] ? JSON.parse(response.headers['x-ratelimit-remaining'].replace(/'/g, '"')) : undefined,
    rateLimitReset: response.headers['x-ratelimit-reset'] || undefined,
    rateLimitLimit: response.headers['x-ratelimit-limit'] ? JSON.parse(response.headers['x-ratelimit-limit'].replace(/'/g, '"')) : undefined,
    totalLimitOveragesRemaining: response.headers['x-totallimit-overages-remaining'] ? Number(response.headers['x-totallimit-overages-remaining']) : undefined,
    totalLimitPurchasedRemaining: response.headers['x-totallimit-purchased-remaining'] ? Number(response.headers['x-totallimit-purchased-remaining']) : undefined,
    totalLimitRemaining: response.headers['x-totallimit-remaining'] ? Number(response.headers['x-totallimit-remaining']) : undefined,
    callCreditsType: response.headers['x-call-credits-type'] || undefined,
    callCreditsSpent: response.headers['x-call-credits-spent'] ? Number(response.headers['x-call-credits-spent']) : undefined,
    lifetimeUsed: response.headers['x-lifetime-used'] ? Number(response.headers['x-lifetime-used']) : undefined,
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
