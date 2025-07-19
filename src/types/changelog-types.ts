import { BaseResponse } from './api-types.js';

export interface ChangelogParams {
  currentVersion: string;
  fieldsUpdated?: Array<string>;
  ids?: Array<string>;
  originVersion: string;
  scroll_token?: string | null;
  type?: string;
}

export interface ChangelogResponse extends BaseResponse {
  data?: {
    added?: Array<{ id: string }>;
    current_version: string;
    deleted?: Array<{ id: string }>;
    merged?: Array<{
      additional_metadata?: {
        to?: Array<string>;
      };
      id: string;
    }>;
    opted_out?: Array<{ id: string }>;
    origin_version: string;
    scroll_token?: string | null;
    type: 'added' | 'deleted' | 'updated' | 'merged' | 'opted_out';
    updated?: Array<{
      additional_metadata?: {
        contains?: Array<string>;
        fields_updated?: Array<string>;
      };
      id: string;
    }>;
  };
  error?: {
    message?: string;
    type?: string;
    valid_fields_updated?: Array<string>;
    valid_types?: Array<string>;
    valid_versions?: Array<string>;
  };
  status: number;
}
