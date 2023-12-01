import { BaseResponse } from './api-types';

export interface IPParams {
  ip: string;
  return_ip_location?: boolean;
  return_ip_metadata?: boolean;
  return_person?: boolean;
  return_if_unmatched?: boolean;
  pretty?: boolean;
  titlecase?: boolean;
}

export interface IPResponse extends BaseResponse {
  data?: {
    ip?: {
      address?: string,
      metadata?: {
        version?: 4 | 6,
        mobile?: boolean,
        hosting?: boolean,
        proxy?: boolean,
        tor?: boolean,
        vpn?: boolean,
        relay?: boolean,
        service?: string,
        asn_domain?: string,
      },
      location?: {
        name?: string,
        locality?: string,
        region?: string,
        metro?: string,
        country?: string,
        continent?: string,
        postal_code?: string,
        geo?: string,
        timezone?: string,
      },
    },
    company?: {
      confidence?: 'very high' | 'high' | 'moderate' | 'low' | 'very low',
      id?: string,
      website?: string,
      name?: string,
      display_name?: string,
      location?: {
        name?: string,
        locality?: string,
        region?: string,
        metro?: string,
        country?: string,
        continent?: string,
        street_address?: string,
        address_line_2?: string,
        postal_code?: string,
        geo?: string,
      },
      size?: string,
      industry?: string,
      inferred_revenue?: string,
      employee_count?: number,
      tags?: Array<string>,
    },
    person?: {
      confidence?: 'very high' | 'high' | 'moderate' | 'low' | 'very low',
      job_title_role?: string,
      job_title_sub_role?: string,
      job_title_levels?: Array<string>,
    },
  }
}
