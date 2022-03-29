import { BaseResponse } from './api-types';
import { PersonResponse } from './common-types';

export interface RetrieveParams {
  pretty?: boolean,
}

export interface RetrieveResponse extends BaseResponse {
  data: PersonResponse
}
