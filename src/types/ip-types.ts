import { BaseResponse } from './api-types.js';

export interface IPParams {
  ip: string;
  min_confidence?: 'very high' | 'high' | 'moderate' | 'low' | 'very low';
  pretty?: boolean;
  return_if_unmatched?: boolean;
  return_ip_location?: boolean;
  return_ip_metadata?: boolean;
  return_person?: boolean;
  titlecase?: boolean;
  updated_title_roles?: boolean;
}

export interface IPResponse extends BaseResponse {
  data?: {
    company?: {
      confidence?: 'very high' | 'high' | 'moderate' | 'low' | 'very low',
      display_name?: string | null,
      employee_count?: number | null,
      id?: string | null,
      industry?: string | null,
      inferred_revenue?: string | null,
      location?: {
        address_line_2?: string | null,
        continent?: string | null,
        country?: string | null,
        geo?: string | null,
        locality?: string | null,
        metro?: string | null,
        name?: string | null,
        postal_code?: string | null,
        region?: string | null,
        street_address?: string
      } | null,
      name?: string | null,
      size?: string | null,
      tags?: Array<string> | null,
      website?: string | null
    } | null,
    dataset_version?: string | null,
    ip?: {
      address?: string | null,
      location?: {
        continent?: string | null,
        country?: string | null,
        geo?: string | null,
        locality?: string | null,
        metro?: string | null,
        name?: string | null,
        postal_code?: string | null,
        region?: string | null,
        timezone?: string | null,
      } | null,
      metadata?: {
        asn_domain?: string | null,
        hosting?: boolean | null,
        mobile?: boolean | null,
        proxy?: boolean | null,
        relay?: boolean | null,
        service?: string | null,
        tor?: boolean | null,
        version?: 4 | 6 | null,
        vpn?: boolean | null
      }
    } | null,
    person?: {
      confidence?: 'very high' | 'high' | 'moderate' | 'low' | 'very low',
      job_title_class?: string | null,
      job_title_levels?: Array<string> | null,
      job_title_role?: string | null,
      job_title_sub_role?: string | null
    } | null
  } | null
}
