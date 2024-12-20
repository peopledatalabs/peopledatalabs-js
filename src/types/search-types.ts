import { BaseResponse } from './api-types.js';
import { CompanyResponse, PersonResponse } from './common-types.js';

export interface BaseSearchParams {
  dataset?: string;
  from?: number;
  pretty?: boolean;
  sandbox?: boolean;
  scroll_token?: string;
  searchQuery?: string | object;
  size?: number;
  titlecase?: boolean;
}

export interface BaseSearchResponse<T> extends BaseResponse {
  data: Array<T>;
  scroll_token: string;
  total: number;
}

export type SearchType = 'sql' | 'elastic';

/* ---------------------------------------------------------- */
/* ------------------------- Person ------------------------- */
/* ---------------------------------------------------------- */

export interface PersonSearchParams extends BaseSearchParams {
}

export interface PersonSearchResponse extends BaseSearchResponse<PersonResponse> {}

/* ---------------------------------------------------------- */
/* ------------------------- Company ------------------------ */
/* ---------------------------------------------------------- */

export interface CompanySearchParams extends BaseSearchParams {}

export interface CompanySearchResponse extends BaseSearchResponse<CompanyResponse> {}
