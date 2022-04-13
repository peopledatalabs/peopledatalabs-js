import { BaseResponse } from './api-types';
import { PersonResponse } from './common-types';

export interface RetrieveResponse extends BaseResponse {
  data: PersonResponse
}
