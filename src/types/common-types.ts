export interface LocationResponse {
  address_line_2?: string | null;
  continent?: string | null;
  country?: string | null;
  geo?: string | null;
  locality?: string | null;
  metro?: string | null;
  name?: string | null;
  postal_code?: string | null;
  region?: string | null;
  street_address?: string | null;
}

export interface PersonEmailResponse {
  address?: string | null;
  first_seen?: string | null;
  last_seen?: string | null;
  num_sources?: number | null;
  type?: string | null;
}

export interface PersonExperienceResponse {
  company?: {
    facebook_url?: string | null;
    founded?: number | null;
    fuzzy_match?: boolean | null;
    id?: string | null;
    industry?: string | null;
    linkedin_id?: string | null;
    linkedin_url?: string | null;
    location?: LocationResponse | null;
    name?: string | null;
    raw?: Array<string> | null;
    size?: string | null;
    ticker?: string | null;
    twitter_url?: string | null;
    type?: string | null;
    website?: string | null;
  } | null;
  end_date?: string | null;
  first_seen?: string | null;
  is_primary?: boolean | null;
  last_seen?: string | null;
  location_names?: Array<string> | null;
  num_sources?: number | null;
  start_date?: string | null;
  summary?: string | null;
  title?: {
    class?: string | null;
    levels?: Array<string> | null;
    name?: string | null;
    raw?: Array<string> | null;
    role?: string | null;
    sub_role?: string | null;
  } | null;
}

export interface PersonEducationResponse {
  degrees?: Array<string> | null;
  end_date?: string | null;
  gpa?: number | null;
  majors?: Array<string> | null;
  minors?: Array<string> | null;
  raw?: Array<string> | null;
  school?: {
    domain?: string | null;
    facebook_url?: string | null;
    id?: string | null;
    linkedin_id?: string | null;
    linkedin_url?: string | null;
    location?: LocationResponse | null;
    name?: string | null;
    raw?: Array<string> | null;
    twitter_url?: string | null;
    type?: string | null;
    website?: string | null;
  } | null;
  start_date?: string | null;
  summary?: string | null;
}

export interface PersonProfileResponse {
  first_seen?: string | null;
  id?: string | null;
  last_seen?: string | null;
  network?: string | null;
  num_sources?: number | null;
  url?: string | null;
  username?: string | null;
}

export interface PersonPhoneResponse {
  first_seen?: string | null;
  last_seen?: string | null;
  num_sources?: number | null;
  number?: string | null;
}

export interface PersonStreetAddressResponse {
  address_line_2?: string | null;
  continent?: string | null;
  country?: string | null;
  first_seen?: string | null;
  full_address?: string | null;
  geo?: string | null;
  last_seen?: string | null;
  locality?: string | null;
  metro?: string | null;
  name?: string | null;
  num_sources?: number | null;
  postal_code?: string | null;
  region?: string | null;
  street_address?: string | null;
}

export interface PersonCertificateResponse {
  end_date?: string | null;
  name?: string | null;
  organization?: string | null;
  start_date?: string | null;
}

export interface PersonBirthdateResponse {
  day?: string | null;
  month?: string | null;
  year?: string | null;
}

export interface PersonLanguageResponse {
  name?: string | null;
  proficiency?: number | null;
}

export interface PersonJobHistoryResponse {
  company_id?: string | null;
  company_name?: string | null;
  first_seen?: string | null;
  last_seen?: string | null;
  num_sources?: number | null;
  title?: string | null;
}

export interface VersionStatus {
  contains?: Array<string> | null;
  current_version?: string | null;
  previous_version?: string | null;
  status?: string | null;
}

export interface PersonResponse {
  birth_date?: string | null;
  birth_year?: number | null;
  certifications?: Array<PersonCertificateResponse> | null;
  countries?: Array<string> | null;
  dataset_version?: string | null;
  education?: Array<PersonEducationResponse> | null;
  emails?: Array<PersonEmailResponse> | null;
  experience?: Array<PersonExperienceResponse> | null;
  facebook_friends?: number | null;
  facebook_id?: string | null;
  facebook_url?: string | null;
  facebook_username?: string | null;
  first_name?: string | null;
  first_seen?: string | null;
  full_name?: string | null;
  github_url?: string | null;
  github_username?: string | null;
  headline?: string | null;
  id?: string | null;
  industry?: string | null;
  inferred_salary?: string | null;
  inferred_years_experience?: number | null;
  interests?: Array<string> | null;
  job_company_12mo_employee_growth_rate?: number | null;
  job_company_employee_count?: number | null;
  job_company_facebook_url?: string | null;
  job_company_founded?: number | null;
  job_company_id?: string | null;
  job_company_industry?: string | null;
  job_company_inferred_revenue?: string | null;
  job_company_linkedin_id?: string | null;
  job_company_linkedin_url?: string | null;
  job_company_location_address_line_2?: string | null;
  job_company_location_continent?: string | null;
  job_company_location_country?: string | null;
  job_company_location_geo?: string | null;
  job_company_location_locality?: string | null;
  job_company_location_metro?: string | null;
  job_company_location_name?: string | null;
  job_company_location_postal_code?: string | null;
  job_company_location_region?: string | null;
  job_company_location_street_address?: string | null;
  job_company_name?: string | null;
  job_company_size?: string | null;
  job_company_ticker?: string | null;
  job_company_total_funding_raised?: number | null;
  job_company_twitter_url?: string | null;
  job_company_type?: string | null;
  job_company_website?: string | null;
  job_history?: Array<PersonJobHistoryResponse> | null;
  job_last_changed?: string | null;
  job_last_verified?: string | null;
  job_onet_broad_occupation?: string | null;
  job_onet_code?: string | null;
  job_onet_major_group?: string | null;
  job_onet_minor_group?: string | null;
  job_onet_specific_occupation?: string | null;
  job_onet_specific_occupation_detail?: string | null;
  job_start_date?: string | null;
  job_summary?: string | null;
  job_title?: string | null;
  job_title_class?: string | null;
  job_title_levels?: Array<string> | null;
  job_title_role?: string | null;
  job_title_sub_role?: string | null;
  languages?: Array<PersonLanguageResponse> | null;
  last_initial?: string | null;
  last_name?: string | null;
  linkedin_connections?: number | null;
  linkedin_id?: string | null;
  linkedin_url?: string | null;
  linkedin_username?: string | null;
  location_address_line_2?: string | null;
  location_continent?: string | null;
  location_country?: string | null;
  location_geo?: string | null;
  location_last_updated?: string | null;
  location_locality?: string | null;
  location_metro?: string | null;
  location_name?: string | null;
  location_names?: Array<string> | null;
  location_postal_code?: string | null;
  location_region?: string | null;
  location_street_address?: string | null;
  middle_initial?: string | null;
  middle_name?: string | null;
  mobile_phone?: string | null;
  name_aliases?: Array<string> | null;
  num_records?: number | null;
  num_sources?: number | null;
  personal_emails?: Array<string> | null;
  phone_numbers?: Array<string> | null;
  phones?: Array<PersonPhoneResponse> | null;
  possible_birth_dates?: Array<string> | null;
  possible_emails?: Array<PersonEmailResponse> | null;
  possible_location_names?: Array<string> | null;
  possible_phones?: Array<PersonPhoneResponse> | null;
  possible_profiles?: Array<PersonProfileResponse> | null;
  possible_street_addresses?: Array<PersonStreetAddressResponse> | null;
  profiles?: Array<PersonProfileResponse> | null;
  recommended_personal_email?: string | null;
  regions?: Array<string> | null;
  sex?: string | null;
  skills?: Array<string> | null;
  street_addresses?: Array<PersonStreetAddressResponse> | null;
  summary?: string | null;
  twitter_url?: string | null;
  twitter_username?: string | null;
  version_status?: VersionStatus | null;
  work_email?: string | null;
}

interface NaicsResponse {
  industry_group?: string | null;
  naics_code?: string | null;
  naics_industry?: string | null;
  national_industry?: string | null;
  sector?: string | null;
  sub_sector?: string | null;
}

export interface SicResponse {
  industry_group?: string | null;
  industry_sector?: string | null;
  major_group?: string | null;
  sic_code?: string | null;
}

export interface CompanyResponse {
  affiliated_profiles?: Array<string> | null;
  all_subsidiaries?: Array<string> | null;
  alternative_domains?: Array<string> | null;
  alternative_names?: Array<string> | null;
  average_employee_tenure?: number | null;
  average_tenure_by_level?: {
    cxo?: number | null;
    director?: number | null;
    entry?: number | null;
    manager?: number | null;
    owner?: number | null;
    partner?: number | null;
    senior?: number | null;
    training?: number | null;
    unpaid?: number | null;
    vp?: number | null;
  } | null;
  average_tenure_by_role?: {
    customer_service?: number | null;
    design?: number | null;
    education?: number | null;
    engineering?: number | null;
    finance?: number | null;
    health?: number | null;
    human_resources?: number | null;
    legal?: number | null;
    marketing?: number | null;
    media?: number | null;
    operations?: number | null;
    public_relations?: number | null;
    real_estate?: number | null;
    sales?: number | null;
    trades?: number | null;
  } | null;
  dataset_version?: string | null;
  direct_subsidiaries?: Array<string> | null;
  display_name?: string | null;
  employee_churn_rate: {
    '3_month'?: number | null;
    '6_month'?: number | null;
    '12_month'?: number | null;
    '24_month'?: number | null;
  } | null;
  employee_count?: number | null;
  employee_count_by_country?: object | null;
  employee_count_by_month?: object | null;
  employee_count_by_month_by_level?: object | null;
  employee_count_by_month_by_role?: object | null;
  employee_count_by_role?: {
    'customer_service'?: number | null;
    'design'?: number | null;
    'education'?: number | null;
    'engineering'?: number | null;
    'finance'?: number | null;
    'health'?: number | null;
    'human_resources'?: number | null;
    'legal'?: number | null;
    'marketing'?: number | null;
    'media'?: number | null;
    'operations'?: number | null;
    'other_uncategorized'?: number | null;
    'public_relations'?: number | null;
    'real_estate'?: number | null;
    'sales'?: number | null;
    'trades'?: number | null;
  } | null;
  employee_growth_rate?: {
    '3_month'?: number | null;
    '6_month'?: number | null;
    '12_month'?: number | null;
    '24_month'?: number | null;
  } | null;
  employee_growth_rate_12_month_by_role?: {
    'customer_service'?: number | null;
    'design'?: number | null;
    'education'?: number | null;
    'engineering'?: number | null;
    'finance'?: number | null;
    'health'?: number | null;
    'human_resources'?: number | null;
    'legal'?: number | null;
    'marketing'?: number | null;
    'media'?: number | null;
    'operations'?: number | null;
    'other_uncategorized'?: number | null;
    'public_relations'?: number | null;
    'real_estate'?: number | null;
    'sales'?: number | null;
    'trades'?: number | null;
  } | null;
  facebook_url?: string | null;
  founded?: number | null;
  funding_details?: Array<{
    funding_currency?: string | null;
    funding_raised?: number | null;
    funding_round_date?: string | null;
    funding_type?: string | null;
    investing_companies?: Array<string> | null;
    investing_individuals?: Array<string> | null;
  }> | null;
  funding_stages?: Array<string> | null;
  gics_sector?: string | null;
  gross_additions_by_month?: object | null;
  gross_departures_by_month?: object | null;
  headline?: string | null;
  id?: string | null;
  immediate_parent?: string | null;
  industry?: string | null;
  inferred_revenue?: string | null;
  last_funding_date?: string | null;
  latest_funding_stage?: string | null;
  likelihood?: number | null;
  linkedin_employee_count?: number | null;
  linkedin_follower_count?: number | null;
  linkedin_id?: string | null;
  linkedin_slug?: string | null;
  linkedin_url?: string | null;
  location?: LocationResponse | null;
  matched?: Array<string> | null;
  mic_exchange?: string | null;
  naics?: Array<NaicsResponse> | null;
  name?: string | null;
  number_funding_rounds?: number | null;
  profiles?: Array<string> | null;
  recent_exec_departures?: Array<{
    departed_date?: string | null;
    job_title?: string | null;
    job_title_class?: string | null;
    job_title_levels?: Array<string> | null;
    job_title_role?: string | null;
    job_title_sub_role?: string | null;
    new_company_id?: string | null;
    new_company_job_title?: string | null;
    new_company_job_title_class?: string | null;
    new_company_job_title_levels?: Array<string> | null;
    new_company_job_title_role?: string | null;
    new_company_job_title_sub_role?: string | null;
    pdl_id?: string | null;
  }> | null;
  recent_exec_hires?: Array<{
    job_title?: string | null;
    job_title_class?: string | null;
    job_title_levels?: Array<string> | null;
    job_title_role?: string | null;
    job_title_sub_role?: string | null;
    joined_date?: string | null;
    pdl_id?: string | null;
    previous_company_id?: string | null;
    previous_company_job_title?: string | null;
    previous_company_job_title_class?: string | null;
    previous_company_job_title_levels?: Array<string> | null;
    previous_company_job_title_role?: string | null;
    previous_company_job_title_sub_role?: string | null;
  }> | null;
  sic?: Array<SicResponse> | null;
  size?: string | null;
  summary?: string | null;
  tags?: Array<string> | null;
  ticker?: string | null;
  top_next_employers_by_role?: {
    all?: object | null;
    customer_service?: object | null;
    design?: object | null;
    education?: object | null;
    engineering?: object | null;
    finance?: object | null;
    health?: object | null;
    human_resources?: object | null;
    legal?: object | null;
    marketing?: object | null;
    media?: object | null;
    operations?: object | null;
    public_relations?: object | null;
    real_estate?: object | null;
    sales?: object | null;
    trades?: object | null;
  } | null;
  top_previous_employers_by_role?: {
    all?: object | null;
    customer_service?: object | null;
    design?: object | null;
    education?: object | null;
    engineering?: object | null;
    finance?: object | null;
    health?: object | null;
    human_resources?: object | null;
    legal?: object | null;
    marketing?: object | null;
    media?: object | null;
    operations?: object | null;
    public_relations?: object | null;
    real_estate?: object | null;
    sales?: object | null;
    trades?: object | null;
  } | null;
  top_us_employee_metros: object | null;
  total_funding_raised?: number | null;
  twitter_url?: string | null;
  type?: string | null;
  ultimate_parent?: string | null;
  ultimate_parent_mic_exchange?: string | null;
  ultimate_parent_ticker?: string | null;
  website?: string | null;
}

export interface ErrorResponse {
  message: string | null;
  status?: number | null;
}
