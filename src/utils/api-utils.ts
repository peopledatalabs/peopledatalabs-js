import { AxiosResponse } from 'axios';
import { RateLimit } from '../types/api-types';

// eslint-disable-next-line import/prefer-default-export
export const parseRateLimitingResponse = (response: AxiosResponse) => {
  const rateLimit = {
    retryAfter: Number(response.headers['retry-after']) || undefined,
    rateLimit: Number(response.headers['x-ratelimit-limit']) || undefined,
    rateLimitReset: Number(response.headers['x-ratelimit-reset']) || undefined,
    totalLimit: Number(response.headers['x-totallimit-limit']) || undefined,
    totalLimitRemaining: Number(response.headers['x-totallimit-remaining']) || undefined,
    searchLimitRemaining: Number(response.headers['x-searchlimit-remaining']) || undefined,
    enrichCompanyLimitRemaining: Number(response.headers['x-enrichcompanylimit-remaining']) || undefined,
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
