import { BaseResponse } from './api-types';
import { PersonResponse } from './common-types';

export type RetrieveParams = {
  id: string;
} & {
  pretty?: boolean;
};

export interface RetrieveResponse extends BaseResponse {
  data: PersonResponse
}
