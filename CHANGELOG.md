# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [14.5.0] - 2026-08-14

- Added investing_companies_details to Company response funding_details (PDL API v35.1)
- Added job_posting_first_observed, job_posting_last_observed, resume_first_observed, resume_last_observed, inferred_first_used, and inferred_last_used to Company response technologies_used (PDL API v35.1)

## [14.4.0] - 2026-07-22

- Added technologies_used to Company response type (PDL API v35.0)

## [14.3.0] - 2026-06-11

- Added new job posting endpoint
- Updated v34.1 fields

## [14.2.0] - 2026-03-18

- Added employee_growth_rate_12_month_by_country to Company response type (PDL API v33.2)
- Field is a map of country code to object with current_headcount, 12_month_headcount, and 12_month_growth_rate
