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

interface PersonEmailResponse { address: string, type: string }

interface PersonExperienceResponse {
  company: {
    name: string,
    size: string,
    id: string,
    founded: string,
    industry: string,
    location: LocationResponse,
    linkedin_url: string,
    linkedin_id: string,
    facebook_url: string,
    twitter_url: string,
    website: string,
    ticker: null,
    type: string,
    raw: Array<string>,
    fuzzy_match: boolean
  },
  location_names: Array<string>,
  end_date: string,
  start_date: string,
  title: {
    name: string,
    role: string,
    sub_role: string,
    levels: Array<string>
  },
  is_primary: string,
  summary: string,
}

interface PersonEducationResponse {
  school: {
    name: string,
    type: string,
    id: string,
    location: LocationResponse,
    linkedin_url: string,
    facebook_url: string,
    twitter_url: string,
    linkedin_id: string,
    website: string,
    domain: string,
    raw: Array<string>
  },
  end_date: string,
  start_date: string,
  gpa: string,
  degrees: Array<string>,
  majors: Array<string>,
  minors: Array<string>,
  raw: Array<string>
  summary: string
}

interface PersonProfileResponse {
  network: string,
  id: string,
  url: string,
  username: string
}

export interface PersonResponse {
  id: string,
  full_name: string,
  first_name: string,
  middle_initial: string,
  middle_name: string,
  last_name: string,
  gender: string,
  birth_year: string,
  birth_date: string,
  linkedin_url: string,
  linkedin_username: string,
  linkedin_id: string,
  facebook_url: string,
  facebook_username: string,
  facebook_id: string,
  twitter_url: string,
  twitter_username: string,
  github_url: string,
  github_username: string,
  work_email: string,
  personal_emails: Array<string>,
  mobile_phone: string,
  industry: string,
  job_title: string,
  job_title_role: string,
  job_title_sub_role: string,
  job_title_levels: Array<string>,
  job_company_id: string,
  job_company_name: string,
  job_company_website: string,
  job_company_size: string,
  job_company_founded: string,
  job_company_industry: string,
  job_company_linkedin_url: string,
  job_company_linkedin_id: string,
  job_company_facebook_url: string,
  job_company_twitter_url: string,
  job_company_location_name: string,
  job_company_location_locality: string,
  job_company_location_metro: string,
  job_company_location_region: string,
  job_company_location_geo: string,
  job_company_location_street_address: string,
  job_company_location_address_line_2: string,
  job_company_location_postal_code: string,
  job_company_location_country: string,
  job_company_location_continent: string,
  job_last_updated: string,
  job_start_date: string,
  location_name: string,
  location_locality: string,
  location_metro: string,
  location_region: string,
  location_country: string,
  location_continent: string,
  location_street_address: string,
  location_address_line_2: string,
  location_postal_code: string,
  location_geo: string,
  location_last_updated: string,
  linkedin_connections: number,
  inferred_salary: string,
  inferred_years_experience: number,
  summary: string,
  phone_numbers: Array<string>,
  emails: Array<PersonEmailResponse>,
  interests: Array<string>,
  skills: Array<string>,
  location_names: Array<string>,
  regions: Array<string>,
  countries: Array<string>,
  street_addresses: Array<string>,
  experience: Array<PersonExperienceResponse>,
  education: Array<PersonEducationResponse>,
  profiles: Array<PersonProfileResponse>,
}