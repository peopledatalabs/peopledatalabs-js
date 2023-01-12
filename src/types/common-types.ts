export interface LocationResponse {
  name?: string,
  locality?: string,
  region?: string,
  metro?: string,
  country?: string,
  continent?: string,
  street_address?: string,
  address_line_2?: string,
  postal_code?: string,
  geo?: string
}

export interface PersonEmailResponse {
  address?: string,
  type?: string,
  first_seen?: string,
  last_seen?: string,
  num_sources?: number
}

export interface PersonExperienceResponse {
  company?: {
    name?: string,
    size?: string,
    id?: string,
    founded?: number,
    industry?: string,
    location?: LocationResponse,
    linkedin_url?: string,
    linkedin_id?: string,
    facebook_url?: string,
    twitter_url?: string,
    website?: string,
    ticker?: string,
    type?: string,
    raw?: Array<string>,
    fuzzy_match?: boolean
  },
  location_names?: Array<string>,
  end_date?: string,
  start_date?: string,
  title?: {
    name?: string,
    role?: string,
    sub_role?: string,
    levels?: Array<string>,
    raw?: Array<string>,
  },
  is_primary?: boolean,
  summary?: string,
  first_seen?: string,
  last_seen?: string
}

export interface PersonEducationResponse {
  school?: {
    name?: string,
    type?: string,
    id?: string,
    location?: LocationResponse,
    linkedin_url?: string,
    facebook_url?: string,
    twitter_url?: string,
    linkedin_id?: string,
    website?: string,
    domain?: string,
    raw?: Array<string>
  },
  end_date?: string,
  start_date?: string,
  gpa?: string,
  degrees?: Array<string>,
  majors?: Array<string>,
  minors?: Array<string>,
  raw?: Array<string>
  summary?: string
}

export interface PersonProfileResponse {
  network?: string,
  id?: string,
  url?: string,
  username?: string,
  first_seen?: string,
  last_seen?: string,
  num_sources?: number
}

export interface PersonPhoneResponse {
  number?: string,
  first_seen?: string,
  last_seen?: string,
  num_sources?: number
}

export interface PersonStreetAddressResponse {
  street_address?: string,
  address_line_2?: string,
  name?: string,
  locality?: string,
  metro?: string,
  region?: string,
  postal_code?: string,
  country?: string,
  geo?: string,
  continent?: string,
  first_seen?: string,
  last_seen?: string,
  num_sources?: number
}

export interface PersonCertificateResponse {
  start_date?: string,
  end_date?: string,
  name?: string,
  organization?: string
}

export interface PersonBirthdateResponse {
  month?: string,
  day?: string,
  year?: string
}

export interface PersonLanguageResponse {
  name?: string,
  proficiency?: number
}

export interface PersonJobHistoryResponse {
  company_id?: string,
  company_name?: string,
  title?: string,
  first_seen?: string,
  last_seen?: string,
  num_sources?: number
}

export interface PersonResponse {
  id?: string,
  full_name?: string,
  first_name?: string,
  middle_initial?: string,
  middle_name?: string,
  last_initial?: string,
  last_name?: string,
  gender?: string,
  birth_year?: string,
  birth_date?: string,
  linkedin_url?: string,
  linkedin_username?: string,
  linkedin_id?: string,
  facebook_url?: string,
  facebook_username?: string,
  facebook_id?: string,
  twitter_url?: string,
  twitter_username?: string,
  github_url?: string,
  github_username?: string,
  work_email?: string,
  personal_emails?: Array<string>,
  mobile_phone?: string,
  industry?: string,
  job_title?: string,
  job_title_role?: string,
  job_title_sub_role?: string,
  job_title_levels?: Array<string>,
  job_company_id?: string,
  job_company_name?: string,
  job_company_website?: string,
  job_company_size?: string,
  job_company_founded?: number,
  job_company_industry?: string,
  job_company_linkedin_url?: string,
  job_company_linkedin_id?: string,
  job_company_facebook_url?: string,
  job_company_twitter_url?: string,
  job_company_location_name?: string,
  job_company_location_locality?: string,
  job_company_location_metro?: string,
  job_company_location_region?: string,
  job_company_location_geo?: string,
  job_company_location_street_address?: string,
  job_company_location_address_line_2?: string,
  job_company_location_postal_code?: string,
  job_company_location_country?: string,
  job_company_location_continent?: string,
  job_company_ticker?: string,
  job_company_type?: string,
  job_onet_code?: string,
  job_onet_major_group?: string,
  job_onet_minor_group?: string,
  job_onet_broad_occupation?: string,
  job_onet_specific_occupation?: string,
  job_onet_title?: string,
  job_summary?: string,
  job_last_updated?: string,
  job_start_date?: string,
  languages?: Array<PersonLanguageResponse>,
  location_name?: string,
  location_locality?: string,
  location_metro?: string,
  location_region?: string,
  location_country?: string,
  location_continent?: string,
  location_street_address?: string,
  location_address_line_2?: string,
  location_postal_code?: string,
  location_geo?: string,
  location_last_updated?: string,
  linkedin_connections?: number,
  inferred_salary?: string,
  inferred_years_experience?: number,
  summary?: string,
  phone_numbers?: Array<string>,
  emails?: Array<PersonEmailResponse>,
  interests?: Array<string>,
  skills?: Array<string>,
  location_names?: Array<string>,
  regions?: Array<string>,
  countries?: Array<string>,
  street_addresses?: Array<PersonStreetAddressResponse>,
  experience?: Array<PersonExperienceResponse>,
  education?: Array<PersonEducationResponse>,
  profiles?: Array<PersonProfileResponse>,
  phones?: Array<PersonPhoneResponse>,
  facebook_friends?: number,
  name_aliases?: Array<string>,
  possible_emails?: Array<PersonEmailResponse>,
  possible_phones?: Array<PersonPhoneResponse>,
  possible_profiles?: Array<PersonProfileResponse>,
  possible_street_addresses?: Array<PersonStreetAddressResponse>,
  possible_birth_dates?: Array<PersonBirthdateResponse>,
  possible_location_names?: Array<string>,
  job_history?: Array<PersonJobHistoryResponse>,
  num_records?: number,
  num_sources?: number,
  first_seen?: string,
  certifications?: Array<PersonCertificateResponse>
}

export interface CompanyResponse {
  name?: string,
  size?: string,
  employee_count?: number,
  id?: string,
  founded?: number,
  industry?: string,
  location?: LocationResponse,
  linkedin_id?: string,
  linkedin_url?: string,
  facebook_url?: string,
  twitter_url?: string,
  profiles?: Array<string>,
  website?: string,
  ticker?: string,
  type?: string,
  summary?: string,
  tags?: Array<string>,
  headline?: null,
  alternative_names?: Array<string>,
  alternative_domains?: Array<string>,
  affiliated_profiles?: Array<string>,
  likelihood?: number
}

export interface ErrorResponse {
  message: string,
  status?: number
}
