import { BaseResponse } from './api-types.js';

export interface IPParams {
  ip: string;
  pretty?: boolean;
  return_if_unmatched?: boolean;
  return_ip_location?: boolean;
  return_ip_metadata?: boolean;
  return_person?: boolean;
  titlecase?: boolean;
}

export interface IPResponse extends BaseResponse {
  data?: {
    company?: {
      confidence?: 'very high' | 'high' | 'moderate' | 'low' | 'very low',
      display_name?: string,
      employee_count?: number,
      id?: string,
      industry?: string,
      inferred_revenue?: string,
      location?: {
        address_line_2?: string,
        continent?: string,
        country?: string,
        geo?: string,
        locality?: string,
        metro?: string,
        name?: string,
        postal_code?: string,
        region?: string,
        street_address?: string
      },
      name?: string,
      size?: string,
      tags?: Array<string>,
      website?: string
    },
    dataset_version?: string,
    ip?: {
      address?: string,
      location?: {
        continent?: string,
        country?: string,
        geo?: string,
        locality?: string,
        metro?: string,
        name?: string,
        postal_code?: string,
        region?: string,
        timezone?: string,
      },
      metadata?: {
        asn_domain?: string,
        hosting?: boolean,
        mobile?: boolean,
        proxy?: boolean,
        relay?: boolean,
        service?: string,
        tor?: boolean,
        version?: 4 | 6,
        vpn?: boolean
      }
    },
    person?: {
      confidence?: 'very high' | 'high' | 'moderate' | 'low' | 'very low',
      job_title_levels?: Array<string>,
      job_title_role?: string,
      job_title_sub_role?: string
    }
  }
}
