export type EnrichmentType = 'company' | 'school';

export interface PersonEnrichmentParams {
  name?: Array<string>,
  first_name?: Array<string>,
  last_name?: Array<string>,
  middle_name?: Array<string>,
  location?: Array<string>,
  street_address: string,
  locality: string,
  region: string,
  country: string,
  postal_code: number,
  company: Array<string>,
  school: Array<string>,
  phone: Array<string>,
  email: Array<string>,
  email_hash: Array<string>,
  profile: Array<string>,
  lid: number,
  birth_date: Array<string>;
  min_likelihood?: number;
  required?: string;
  titlecase?: boolean;
  data_include?: string;
  include_if_matched?: boolean;
}

export interface CompanyEnrichmentParams {

}
